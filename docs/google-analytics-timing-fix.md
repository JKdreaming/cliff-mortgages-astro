# Google Analytics Timing Race Condition Fix

## Problem Description

**Issue**: Google Analytics script loads but `window.gtag` is undefined when event listeners attach, causing click tracking to fail while page views still record.

**Technical Name**: Google Analytics timing race condition / GA gtag initialization race condition

## Symptoms

- `googletagmanager.com/gtag/js` loads successfully (HTTP 200)
- `dataLayer` exists but `window.gtag` is `undefined`
- Page view events may fire, but click event tracking fails
- Console shows no errors, but custom events don't register

## Root Cause

The issue occurs due to a **timing race condition** between:
1. Async `gtag.js` script loading
2. Inline GA initialization script execution  
3. Event listener attachment

When event listeners try to use `window.gtag` before the inline script has executed, tracking fails.

## Investigation Steps

1. **Check Network tab**: Verify `gtag.js` loads (200 OK)
2. **Check Console**: `typeof window.gtag` returns `undefined`
3. **Check Collect requests**: May see `google-analytics.com/g/collect` for page views but not click events
4. **Check inline script**: Present but execution timing is unreliable

## Solution Implementation

### Files Modified
- `src/layouts/BaseLayout.astro`
- `src/layouts/LandingLayout.astro`

### Fix: Retry Wrapper Pattern

```astro
<script is:inline>
  const waitForGtag = (callback, maxWait = 5000) => {
    const start = Date.now();
    const check = () => {
      if (typeof window.gtag === 'function') {
        callback();
      } else if (Date.now() - start < maxWait) {
        setTimeout(check, 100);
      }
    };
    check();
  };

  const attachTrackEventListeners = () => {
    // Existing event listener code here
  };

  waitForGtag(attachTrackEventListeners);
</script>
```

### How It Works
1. `waitForGtag()` polls every 100ms for up to 5 seconds
2. Only attaches event listeners after `window.gtag` is available
3. Eliminates race condition between script loading and execution

## Verification

### Before Fix
- `window.gtag` undefined on page load
- Click events may not track
- Inconsistent behavior across browsers/network conditions

### After Fix
- Event listeners wait for `gtag` to be ready
- Consistent tracking across all conditions
- Both page views and click events record properly

### Testing
```javascript
// Console test
typeof window.gtag; // Should return "function"

// Network test
// Filter for "collect" requests should show GA hits
```

## Related Issues

This pattern applies to similar timing issues with:
- jQuery `$` undefined race conditions
- Third-party SDK initialization races
- Any async library with inline initialization

## Prevention

- Always check for library availability before attaching listeners
- Use retry patterns for critical third-party dependencies
- Test in various network conditions (slow 3G, throttled connections)

## Notes

- CSP configuration was already correct (`googletagmanager.com` and `google-analytics.com` allowed)
- Vercel configuration had no blocking headers
- Issue was purely JavaScript execution timing, not security/configuration related
