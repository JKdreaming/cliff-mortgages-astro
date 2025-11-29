import React, { useEffect, useMemo, useState } from 'react';

type CalculatorPreset = {
  currentBalance: number;
  currentRate: number;
  remainingTermYears: number;
  remainingTermMonths: number;
  currentTaxes: number;
  currentInsurance: number;
  currentHOA: number;
  newRate: number;
  snapToEighths: boolean;
  newTermYears: '15' | '30' | 'custom';
  customTermYears: number;
  closingCosts: number | null;
  pointsPct: number;
  rollCosts: boolean;
  cashOut: number;
  cashIn: number;
  horizonYears: number;
};

const clamp = (n: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, n));

const currency = (value: number, fractionDigits = 0) => {
  if (!Number.isFinite(value)) {
    return '—';
  }

  return value.toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
};

const percent = (value: number, fractionDigits = 2) => {
  if (!Number.isFinite(value)) {
    return '—';
  }

  return `${(value * 100).toFixed(fractionDigits)}%`;
};

const sanitizeNumber = (value: string | number) => {
  const parsed = Number(String(value).replace(/[^0-9.\-]/g, ''));
  return Number.isFinite(parsed) ? parsed : 0;
};

const payment = (principal: number, ratePerMonth: number, termMonths: number) => {
  if (principal <= 0 || termMonths <= 0) {
    return 0;
  }

  if (ratePerMonth <= 0) {
    return principal / termMonths;
  }

  const accumulator = Math.pow(1 + ratePerMonth, termMonths);
  return (principal * ratePerMonth * accumulator) / (accumulator - 1);
};

const SAMPLE_DATA: CalculatorPreset = {
  currentBalance: 400_000,
  currentRate: 7,
  remainingTermYears: 26,
  remainingTermMonths: 0,
  currentTaxes: 350,
  currentInsurance: 130,
  currentHOA: 0,
  newRate: 6.167,
  snapToEighths: false,
  newTermYears: '30',
  customTermYears: 30,
  closingCosts: null,
  pointsPct: 0,
  rollCosts: true,
  cashOut: 0,
  cashIn: 0,
  horizonYears: 5,
};

const EMPTY_DATA: CalculatorPreset = {
  currentBalance: 0,
  currentRate: 0,
  remainingTermYears: 0,
  remainingTermMonths: 0,
  currentTaxes: 0,
  currentInsurance: 0,
  currentHOA: 0,
  newRate: 0,
  snapToEighths: false,
  newTermYears: '30',
  customTermYears: 0,
  closingCosts: null,
  pointsPct: 0,
  rollCosts: false,
  cashOut: 0,
  cashIn: 0,
  horizonYears: 5,
};

const SectionCard: React.FC<{ title: string; value: string; helper?: string; highlight?: boolean }> = ({
  title,
  value,
  helper,
  highlight,
}) => (
  <div className={`rounded-2xl border p-3 ${highlight ? 'bg-emerald-50/60 border-emerald-200' : 'bg-gray-50 border-gray-200'}`}>
    <p className="text-xs text-gray-500">{title}</p>
    <p className={`text-lg font-semibold ${highlight && value.startsWith('-') ? 'text-red-600' : ''}`}>{value}</p>
    {helper ? <p className="text-[11px] text-gray-500 mt-1 leading-snug">{helper}</p> : null}
  </div>
);

const SectionHeading: React.FC<{ text: string }> = ({ text }) => (
  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">{text}</h3>
);

export const RefinanceCalculator: React.FC = () => {
  const [currentBalance, setCurrentBalance] = useState(EMPTY_DATA.currentBalance);
  const [currentRate, setCurrentRate] = useState(EMPTY_DATA.currentRate);
  const [remainingTermYears, setRemainingTermYears] = useState(EMPTY_DATA.remainingTermYears);
  const [remainingTermMonths, setRemainingTermMonths] = useState(EMPTY_DATA.remainingTermMonths);
  const [currentTaxes, setCurrentTaxes] = useState(EMPTY_DATA.currentTaxes);
  const [currentInsurance, setCurrentInsurance] = useState(EMPTY_DATA.currentInsurance);
  const [currentHOA, setCurrentHOA] = useState(EMPTY_DATA.currentHOA);
  const [newRate, setNewRate] = useState(EMPTY_DATA.newRate);
  const [snapToEighths, setSnapToEighths] = useState(EMPTY_DATA.snapToEighths);
  const [newTermYears, setNewTermYears] = useState<'15' | '30' | 'custom'>(EMPTY_DATA.newTermYears);
  const [customTermYears, setCustomTermYears] = useState(EMPTY_DATA.customTermYears);
  const [closingCosts, setClosingCosts] = useState<number | null>(EMPTY_DATA.closingCosts);
  const [userSetClosingCosts, setUserSetClosingCosts] = useState(false);
  const [pointsPct, setPointsPct] = useState(EMPTY_DATA.pointsPct);
  const [rollCosts, setRollCosts] = useState(EMPTY_DATA.rollCosts);
  const [cashOut, setCashOut] = useState(EMPTY_DATA.cashOut);
  const [cashIn, setCashIn] = useState(EMPTY_DATA.cashIn);
  const [horizonYears, setHorizonYears] = useState(EMPTY_DATA.horizonYears);

  const monthsRemaining = useMemo(
    () => clamp(remainingTermYears, 0, 60) * 12 + clamp(remainingTermMonths, 0, 11),
    [remainingTermYears, remainingTermMonths],
  );

  const currentRateMonthly = useMemo(() => currentRate / 100 / 12, [currentRate]);
  const newRateMonthly = useMemo(() => newRate / 100 / 12, [newRate]);

  const oldPrincipalInterest = useMemo(
    () => payment(Math.max(0, currentBalance), currentRateMonthly, Math.max(1, monthsRemaining)),
    [currentBalance, currentRateMonthly, monthsRemaining],
  );

  const oldTotalPayment = oldPrincipalInterest + currentTaxes + currentInsurance + currentHOA;
  const oldTotalInterestRemaining = useMemo(
    () => oldPrincipalInterest * Math.max(1, monthsRemaining) - Math.max(0, currentBalance),
    [oldPrincipalInterest, monthsRemaining, currentBalance],
  );

  const baseNewLoan = Math.max(0, currentBalance + cashOut - cashIn);
  const pointsAmount = useMemo(() => baseNewLoan * pointsPct, [baseNewLoan, pointsPct]);

  useEffect(() => {
    if (!userSetClosingCosts) {
      const defaultCost = Math.round(baseNewLoan * 0.015);
      setClosingCosts(defaultCost);
    }
  }, [baseNewLoan, userSetClosingCosts]);

  const cc = closingCosts ?? 0;
  const financedCosts = rollCosts ? cc + pointsAmount : 0;
  const newLoanAmount = baseNewLoan + financedCosts;
  const effectiveTermYears = newTermYears === 'custom' ? clamp(customTermYears, 1, 40) : Number(newTermYears);

  const newPrincipalInterest = useMemo(
    () => payment(newLoanAmount, newRateMonthly, Math.max(1, effectiveTermYears * 12)),
    [newLoanAmount, newRateMonthly, effectiveTermYears],
  );

  const newTotalPayment = newPrincipalInterest + currentTaxes + currentInsurance + currentHOA;
  const newTotalInterest = useMemo(
    () => newPrincipalInterest * Math.max(1, effectiveTermYears * 12) - newLoanAmount,
    [newPrincipalInterest, effectiveTermYears, newLoanAmount],
  );

  const monthlySavings = oldTotalPayment - newTotalPayment;
  const annualSavings = monthlySavings * 12;

  const totalRefiCosts = cc + pointsAmount;
  const breakEvenMonths = monthlySavings > 0 ? Math.ceil(totalRefiCosts / monthlySavings) : Number.POSITIVE_INFINITY;

  const horizonMonths = Math.max(1, horizonYears * 12);
  const oldHorizonMonths = Math.min(horizonMonths, monthsRemaining);
  const newHorizonMonths = Math.min(horizonMonths, effectiveTermYears * 12);
  const oldTotalOverHorizon = oldTotalPayment * oldHorizonMonths;
  const newTotalOverHorizon = newTotalPayment * newHorizonMonths + (rollCosts ? 0 : totalRefiCosts);
  const horizonSavings = oldTotalOverHorizon - newTotalOverHorizon;

  const applyPreset = (preset: CalculatorPreset) => {
    setCurrentBalance(preset.currentBalance);
    setCurrentRate(preset.currentRate);
    setRemainingTermYears(preset.remainingTermYears);
    setRemainingTermMonths(preset.remainingTermMonths);
    setCurrentTaxes(preset.currentTaxes);
    setCurrentInsurance(preset.currentInsurance);
    setCurrentHOA(preset.currentHOA);
    setNewRate(preset.newRate);
    setSnapToEighths(preset.snapToEighths);
    setNewTermYears(preset.newTermYears);
    setCustomTermYears(preset.customTermYears);
    setClosingCosts(preset.closingCosts);
    setUserSetClosingCosts(false);
    setPointsPct(preset.pointsPct);
    setRollCosts(preset.rollCosts);
    setCashOut(preset.cashOut);
    setCashIn(preset.cashIn);
    setHorizonYears(preset.horizonYears);
  };

  const applySampleData = () => applyPreset(SAMPLE_DATA);
  const reset = () => applyPreset(EMPTY_DATA);

  const handleRateChange = (value: number) => {
    const processed = snapToEighths ? Math.round(value * 8) / 8 : Math.round(value * 1000) / 1000;
    setNewRate(clamp(processed, 0, 15));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-6 md:p-10">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600">
            Compare principal, interest, taxes, insurance, and HOA to estimate your full payment and savings. We also project break-even time based on closing costs and your custom horizon.
          </div>

          <div className="space-y-8">
            <section className="space-y-4">
              <SectionHeading text="Current Loan" />
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-1 text-sm">
                  <span className="block font-medium text-gray-700">Current Balance</span>
                  <input
                    type="number"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    value={currentBalance}
                    onChange={(event) => setCurrentBalance(Math.max(0, sanitizeNumber(event.target.value)))}
                  />
                </label>
                <label className="space-y-1 text-sm">
                  <span className="block font-medium text-gray-700">Current Rate (APR %)</span>
                  <input
                    type="number"
                    step="0.001"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    value={currentRate}
                    onChange={(event) => setCurrentRate(clamp(sanitizeNumber(event.target.value), 0, 40))}
                  />
                  <input
                    type="range"
                    min={0}
                    max={15}
                    step={0.125}
                    value={currentRate}
                    className="mt-2 w-full"
                    onChange={(event) => setCurrentRate(clamp(sanitizeNumber(event.target.value), 0, 40))}
                  />
                </label>
                <label className="space-y-1 text-sm">
                  <span className="block font-medium text-gray-700">Remaining Term – Years</span>
                  <input
                    type="number"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    value={remainingTermYears}
                    onChange={(event) => setRemainingTermYears(clamp(Math.floor(sanitizeNumber(event.target.value)), 0, 60))}
                  />
                </label>
                <label className="space-y-1 text-sm">
                  <span className="block font-medium text-gray-700">Remaining Term – Months</span>
                  <input
                    type="number"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    value={remainingTermMonths}
                    onChange={(event) => setRemainingTermMonths(clamp(Math.floor(sanitizeNumber(event.target.value)), 0, 11))}
                  />
                </label>
                <label className="space-y-1 text-sm">
                  <span className="block font-medium text-gray-700">Monthly Taxes</span>
                  <input
                    type="number"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    value={currentTaxes}
                    onChange={(event) => setCurrentTaxes(Math.max(0, sanitizeNumber(event.target.value)))}
                  />
                </label>
                <label className="space-y-1 text-sm">
                  <span className="block font-medium text-gray-700">Monthly Insurance</span>
                  <input
                    type="number"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    value={currentInsurance}
                    onChange={(event) => setCurrentInsurance(Math.max(0, sanitizeNumber(event.target.value)))}
                  />
                </label>
                <label className="space-y-1 text-sm">
                  <span className="block font-medium text-gray-700">Monthly HOA</span>
                  <input
                    type="number"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    value={currentHOA}
                    onChange={(event) => setCurrentHOA(Math.max(0, sanitizeNumber(event.target.value)))}
                  />
                </label>
              </div>
            </section>

            <section className="space-y-4">
              <SectionHeading text="Proposed Refinance" />
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-1 text-sm">
                  <span className="block font-medium text-gray-700">New Rate (APR %)</span>
                  <input
                    type="number"
                    step={snapToEighths ? 0.125 : 0.001}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    value={newRate}
                    onChange={(event) => handleRateChange(sanitizeNumber(event.target.value))}
                  />
                  <input
                    type="range"
                    min={0}
                    max={15}
                    step={snapToEighths ? 0.125 : 0.001}
                    value={newRate}
                    className="mt-2 w-full"
                    onChange={(event) => handleRateChange(sanitizeNumber(event.target.value))}
                  />
                  <label className="mt-2 flex items-center gap-2 text-xs">
                    <input
                      type="checkbox"
                      checked={snapToEighths}
                      onChange={(event) => setSnapToEighths(event.target.checked)}
                    />
                    Snap to 0.125% increments (e.g., 6.125%).
                  </label>
                </label>
                <label className="space-y-1 text-sm">
                  <span className="block font-medium text-gray-700">New Term</span>
                  <select
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    value={newTermYears}
                    onChange={(event) => setNewTermYears(event.target.value as typeof newTermYears)}
                  >
                    <option value="30">30 Years</option>
                    <option value="15">15 Years</option>
                    <option value="custom">Custom</option>
                  </select>
                  {newTermYears === 'custom' && (
                    <div className="mt-2 space-y-1">
                      <span className="block text-xs font-medium text-gray-600">Custom Term (1–40 Years)</span>
                      <input
                        type="number"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2"
                        value={customTermYears}
                        onChange={(event) => setCustomTermYears(clamp(Math.floor(sanitizeNumber(event.target.value)), 1, 40))}
                      />
                    </div>
                  )}
                </label>
                <label className="space-y-1 text-sm">
                  <span className="block font-medium text-gray-700">Closing Costs ($)</span>
                  <input
                    type="number"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    value={closingCosts ?? 0}
                    onChange={(event) => {
                      setUserSetClosingCosts(true);
                      setClosingCosts(Math.max(0, sanitizeNumber(event.target.value)));
                    }}
                  />
                  <p className="text-xs text-gray-500">Defaults to ~1.5% of the new base loan amount.</p>
                </label>
                <label className="space-y-1 text-sm">
                  <span className="block font-medium text-gray-700">Discount Points (%)</span>
                  <input
                    type="number"
                    step="0.001"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    value={(pointsPct * 100).toFixed(3)}
                    onChange={(event) => setPointsPct(Math.max(0, sanitizeNumber(event.target.value) / 100))}
                  />
                  <p className="text-xs text-gray-500">Each point costs 1% of the new base loan amount.</p>
                </label>
                <label className="space-y-1 text-sm">
                  <span className="block font-medium text-gray-700">Cash-Out ($)</span>
                  <input
                    type="number"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    value={cashOut}
                    onChange={(event) => setCashOut(Math.max(0, sanitizeNumber(event.target.value)))}
                  />
                </label>
                <label className="space-y-1 text-sm">
                  <span className="block font-medium text-gray-700">Cash-In ($)</span>
                  <input
                    type="number"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    value={cashIn}
                    onChange={(event) => setCashIn(Math.max(0, sanitizeNumber(event.target.value)))}
                  />
                </label>
                <label className="space-y-1 text-sm">
                  <span className="block font-medium text-gray-700">Horizon (Years)</span>
                  <input
                    type="number"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2"
                    value={horizonYears}
                    onChange={(event) => setHorizonYears(clamp(Math.floor(sanitizeNumber(event.target.value)), 1, 40))}
                  />
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={rollCosts}
                    onChange={(event) => setRollCosts(event.target.checked)}
                  />
                  Roll closing costs & points into new loan amount
                </label>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
                  onClick={applySampleData}
                >
                  Load Sample Data
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
                  onClick={reset}
                >
                  Reset
                </button>
              </div>
            </section>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
            <SectionCard
              title="Monthly Savings"
              value={currency(monthlySavings, 0)}
              helper="Difference in PITI + HOA"
              highlight
            />
            <SectionCard
              title="Annual Savings"
              value={currency(annualSavings, 0)}
              helper="Monthly Savings × 12"
              highlight
            />
            <SectionCard
              title="Break-Even"
              value={Number.isFinite(breakEvenMonths) ? `${breakEvenMonths} months` : 'No savings'}
              helper="Time to recover closing costs"
            />
            <SectionCard
              title="Total Refi Costs"
              value={currency(totalRefiCosts)}
              helper={`Includes closing costs + ${percent(pointsPct)} discount points`}
            />
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 space-y-3 text-sm text-gray-600">
            <div className="grid gap-3">
              <SectionCard
                title="Old Monthly Payment"
                value={currency(oldTotalPayment, 0)}
                helper={`Principal & Interest: ${currency(oldPrincipalInterest)} | Taxes/Ins/HOA: ${currency(currentTaxes + currentInsurance + currentHOA)}`}
              />
              <SectionCard
                title="New Monthly Payment"
                value={currency(newTotalPayment, 0)}
                helper={`Principal & Interest: ${currency(newPrincipalInterest)} | Taxes/Ins/HOA: ${currency(currentTaxes + currentInsurance + currentHOA)}`}
              />
            </div>

            <div className="rounded-xl bg-white p-4 text-xs text-gray-500 leading-relaxed">
              <p>
                <strong>Projection Horizon:</strong> Evaluates the first {horizonYears} years. Old and new costs are adjusted to the shorter of the horizon or remaining term/loan.
              </p>
              <p className="mt-2">
                <strong>Interest Totals:</strong> Old loan interest remaining: {currency(oldTotalInterestRemaining)}. New loan projected interest: {currency(newTotalInterest)}.
              </p>
              <p className="mt-2">
                <strong>Cash-Out/In:</strong> {cashOut > 0 ? `Taking out ${currency(cashOut)}.` : 'No cash-out requested.'}{' '}
                {cashIn > 0 ? `Bringing ${currency(cashIn)} to closing.` : ''}
              </p>
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <SectionCard
          title="Old Loan Balance"
          value={currency(currentBalance)}
          helper={`Rate: ${percent(currentRate / 100)} | Term left: ${Math.floor(monthsRemaining / 12)}y ${monthsRemaining % 12}m`}
        />
        <SectionCard
          title="New Loan Amount"
          value={currency(newLoanAmount)}
          helper={`Includes ${rollCosts ? 'financed' : 'cash-paid'} costs and points`}
        />
        <SectionCard
          title="Horizon Savings"
          value={currency(horizonSavings)}
          helper={`Over ${horizonYears} years${rollCosts ? ', financing costs' : ''}`}
          highlight
        />
        <SectionCard
          title="New Total Interest"
          value={currency(newTotalInterest)}
          helper={`Compared to ${currency(oldTotalInterestRemaining)} remaining on current loan`}
        />
      </div>

      <div className="mt-6 rounded-xl bg-gray-50 border border-gray-200 p-4 text-xs text-gray-500">
        <p>
          Estimates only. Taxes, insurance, HOA, and lender fees vary. Assumes 30-day months and level amortization. Does not account for mortgage insurance, escrow shortages, prepaid interest, or investment opportunity cost. Consult a licensed loan officer for a personalized quote.
        </p>
      </div>
    </div>
  );
};

export default RefinanceCalculator;
