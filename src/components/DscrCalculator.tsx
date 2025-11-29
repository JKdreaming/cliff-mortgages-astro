import React, { useEffect, useState } from 'react';

type PaymentType = 'amort' | 'io';

type Inputs = {
  rent: number;
  tax: number;
  ins: number;
  hoa: number;
  loan: number;
  rate: number;
  payType: PaymentType;
  termMo: number;
  ioMo: number;
};

type Results = {
  dscr: number;
  pitiAmort: number;
  pitiIo: number;
  status: string;
  statusColor: string;
};

const INITIAL_INPUTS: Inputs = {
  rent: 2500,
  tax: 300,
  ins: 100,
  hoa: 0,
  loan: 300000,
  rate: 7.25,
  payType: 'io',
  termMo: 360,
  ioMo: 120,
};

const INITIAL_RESULTS: Results = {
  dscr: 0,
  pitiAmort: 0,
  pitiIo: 0,
  status: '',
  statusColor: '',
};

const clampNumber = (value: number) => (Number.isFinite(value) ? value : 0);

const parseInput = (value: string | number) => clampNumber(Number(String(value).replace(/[^0-9.\-]/g, '')));

const formatCurrency = (value: number) =>
  value.toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

const statusForDscr = (dscr: number) => {
  if (dscr >= 1.25) return { label: 'Excellent (≥ 1.25)', color: 'text-[#0a8a0a]' };
  if (dscr >= 1.1) return { label: 'Standard Approval Range (1.10–1.24)', color: 'text-[#2a7ae4]' };
  if (dscr >= 0.75) return { label: 'Eligible – DSCR Program Range (0.75–1.09)', color: 'text-[#f5a623]' };
  return { label: 'Below Minimum Program Range (< 0.75)', color: 'text-[#d93025]' };
};

const formatSelection = (payType: PaymentType) =>
  payType === 'amort' ? '30‑Year Fully Amortized' : 'Interest‑Only for 10 Years (due in 30 years)';

const inputClasses = 'mt-1 w-full p-2 border border-gray-300 rounded-lg bg-white';

const InputField: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className = '', ...props }) => (
  <input {...props} className={`${inputClasses} ${className}`.trim()} />
);

const SelectField: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = ({ className = '', ...props }) => (
  <select {...props} className={`${inputClasses} ${className}`.trim()} />
);

interface LabelProps {
  htmlFor: string;
  label: string;
  children?: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ htmlFor, label, children }) => (
  <div>
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-500">
      {label}
    </label>
    {children}
  </div>
);

interface SectionTitleProps {
  title: string;
  children?: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, children }) => (
  <div>
    <h3 className="text-lg font-bold text-[#003366] mt-6 mb-2">{title}</h3>
    {children}
  </div>
);

interface BadgeProps {
  text: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, className }) => (
  <div className={`mt-2 text-xs inline-block px-3 py-1 rounded-full ${className}`}>{text}</div>
);

interface ResultCardProps {
  title: string;
  value: string;
  helper: string;
  highlightClass?: string;
  children?: React.ReactNode;
}

const ResultCard: React.FC<ResultCardProps> = ({ title, value, helper, highlightClass, children }) => (
  <div className="border border-gray-200 rounded-lg p-4 bg-white text-center flex flex-col justify-between">
    <div>
      <div className="text-sm text-gray-500">{title}</div>
      <div className={`text-3xl font-bold mt-1 ${highlightClass ?? 'text-gray-800'}`}>{value}</div>
      <div className="text-sm font-semibold mt-1 text-gray-600">{helper}</div>
    </div>
    {children}
  </div>
);

const DscrCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<Inputs>(INITIAL_INPUTS);
  const [results, setResults] = useState<Results>(INITIAL_RESULTS);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    setInputs(prev => ({
      ...prev,
      termMo: prev.payType === 'amort' ? 360 : 360,
      ioMo: prev.payType === 'amort' ? 0 : 120,
    }));
  }, [inputs.payType]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setInputs(prev => ({ ...prev, [id]: clampNumber(parseInput(value)) }));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInputs(prev => ({ ...prev, payType: event.target.value as PaymentType }));
  };

  const handleCalculate = () => {
    const { rent, tax, ins, hoa, loan, rate, payType } = inputs;
    const monthlyRate = rate / 100 / 12;
    const term = 360;

    const amortizedPrincipalInterest =
      monthlyRate > 0
        ? loan * (monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1)
        : term > 0
        ? loan / term
        : 0;

    const pitiAmort = amortizedPrincipalInterest + tax + ins + hoa;
    const pitiIo = loan * monthlyRate + tax + ins + hoa;

    const effective = payType === 'amort' ? pitiAmort : pitiIo;
    const dscr = effective > 0 ? rent / effective : 0;
    const status = statusForDscr(dscr);

    setResults({
      dscr,
      pitiAmort,
      pitiIo,
      status: status.label,
      statusColor: status.color,
    });
    setShowResults(true);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-[#003366]">DSCR Calculator</h2>
      <p className="text-sm text-gray-500 mt-2">
        Choose <b>one</b> option below: either a standard <b>30‑Year Fully Amortized</b> payment <i>or</i> an <b>Interest‑Only payment for 10 years (due in 30 years)</b>.
        Programs available down to <b>0.75 DSCR</b>. Results are estimates.
      </p>

      <div className="mt-4 space-y-6">
        <SectionTitle title="Quick Tips (for new investors)">
          <p className="text-sm text-gray-500">
            DSCR = Monthly Rental Income ÷ Monthly Debt Payment (including Taxes/Insurance/HOA). Pick the payment type that matches the loan you want to evaluate.
          </p>
        </SectionTitle>

        <SectionTitle title="Income">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Label htmlFor="rent" label="Gross Monthly Rent ($)">
              <InputField id="rent" type="number" min="0" value={inputs.rent} onChange={handleInputChange} />
            </Label>
          </div>
        </SectionTitle>

        <SectionTitle title="Property Costs (Monthly)">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Label htmlFor="tax" label="Taxes ($/mo)">
              <InputField id="tax" type="number" min="0" value={inputs.tax} onChange={handleInputChange} />
            </Label>
            <Label htmlFor="ins" label="Insurance ($/mo)">
              <InputField id="ins" type="number" min="0" value={inputs.ins} onChange={handleInputChange} />
            </Label>
            <Label htmlFor="hoa" label="HOA / Condo Fees ($/mo)">
              <InputField id="hoa" type="number" min="0" value={inputs.hoa} onChange={handleInputChange} />
            </Label>
          </div>
        </SectionTitle>

        <SectionTitle title="Loan Inputs">
          <div className="bg-[#fff7e6] border border-[#ffe3b3] text-[#6b4f00] p-3 rounded-lg text-sm mt-2 mb-4">
            <b>Interest Rate Guidance:</b> Rates commonly range from <b>6.375%–7.875%</b> depending on credit, LTV, DSCR, and property factors. This tool is for estimates only — please consult a Loan Officer for a wholesale quote tailored to your scenario.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Label htmlFor="loan" label="Loan Amount ($)">
              <InputField id="loan" type="number" min="0" value={inputs.loan} onChange={handleInputChange} />
            </Label>
            <Label htmlFor="rate" label="Interest Rate (Annual %)">
              <InputField id="rate" type="number" min="0" step="0.01" value={inputs.rate} onChange={handleInputChange} />
            </Label>
            <Label htmlFor="payType" label="Choose Payment Type">
              <SelectField id="payType" value={inputs.payType} onChange={handleSelectChange}>
                <option value="amort">30‑Year Fully Amortized (360 payments)</option>
                <option value="io">Interest‑Only for 10 Years (due in 30 years)</option>
              </SelectField>
            </Label>
          </div>

          <button
            type="button"
            onClick={handleCalculate}
            className="mt-6 inline-block px-6 py-3 bg-[#003366] text-white font-semibold rounded-lg hover:bg-[#002244]"
          >
            Calculate
          </button>
        </SectionTitle>
      </div>

      {showResults && (
        <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ResultCard
              title="DSCR (based on your selection)"
              value={`${results.dscr.toFixed(2)}×`}
              helper={results.status}
              highlightClass="text-gray-800"
            >
              <div className={`text-sm font-semibold mt-1 ${results.statusColor}`}>{results.status}</div>
              <Badge text="Programs available down to 0.75 DSCR" className="bg-blue-100 text-blue-800" />
            </ResultCard>
            <ResultCard
              title="Amortized PITIA"
              value={formatCurrency(results.pitiAmort)}
              helper="30-Year Fixed Payment"
            >
              <Badge text="Full payment including principal & interest." className="bg-[#f9f9f9] text-gray-700" />
            </ResultCard>
            <ResultCard
              title="Interest‑Only PITIA"
              value={formatCurrency(results.pitiIo)}
              helper="First 10 Years Only"
            >
              <Badge text="Lower payment during the initial IO period." className="bg-[#f9f9f9] text-gray-700" />
            </ResultCard>
            <ResultCard
              title="Monthly Rental Income"
              value={formatCurrency(inputs.rent)}
              helper="Property's Gross Income"
            >
              <Badge text="Gross rent used for qualification." className="bg-[#f9f9f9] text-gray-700" />
            </ResultCard>
          </div>
          <div className="text-xs text-gray-500 mt-4 text-center">
            You selected: <b>{formatSelection(inputs.payType)}</b>. DSCR under <b>1.0</b> can still qualify under specialty programs (down to <b>0.75</b>), subject to pricing/eligibility.
          </div>
        </div>
      )}

      <div className="text-xs text-gray-400 mt-4">
        Guidelines vary by lender/property. Not a commitment to lend. For a tailored quote, contact Cliff Mortgages.
      </div>
    </div>
  );
};

export default DscrCalculator;
