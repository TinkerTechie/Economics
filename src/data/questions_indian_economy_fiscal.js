
export const indianEconomyFiscalNumericals = [
    // --- SECTION A: GDP & NATIONAL INCOME NUMERICALS (Q1-Q10) ---
    {
        id: "ind_fiscal_001",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "GDP & National Income Numerical",
        difficulty: "Medium",
        question: "Nominal GDP = ₹220 lakh crore and GDP deflator = 110. Find Real GDP (in lakh crore).",
        options: [],
        correctAnswer: "200",
        explanation: {
            concept: "Real GDP Calculation",
            detailed: ["Real GDP = Nominal GDP / GDP Deflator × 100", "= 220 / 110 × 100 = 200 lakh crore"],
            takeaways: ["Deflator removes inflation effect"],
            challenge: "Interpret deflator > 100"
        }
    },
    {
        id: "ind_fiscal_002",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "GDP & National Income Numerical",
        difficulty: "Easy",
        question: "GDP at market price = ₹150 lakh crore, Net indirect taxes = ₹10 lakh crore. Find GDP at factor cost (in lakh crore).",
        options: [],
        correctAnswer: "140",
        explanation: {
            concept: "GDP at Factor Cost",
            detailed: ["GDP at FC = GDP at MP - Net indirect taxes", "= 150 - 10 = 140 lakh crore"],
            takeaways: ["Factor cost excludes taxes, includes subsidies"],
            challenge: "Why two measures?"
        }
    },
    {
        id: "ind_fiscal_003",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "GDP & National Income Numerical",
        difficulty: "Easy",
        question: "GDP = ₹200 lakh crore, depreciation = ₹20 lakh crore. Find NDP (in lakh crore).",
        options: [],
        correctAnswer: "180",
        explanation: {
            concept: "Net Domestic Product",
            detailed: ["NDP = GDP - Depreciation", "= 200 - 20 = 180 lakh crore"],
            takeaways: ["Net measures exclude capital consumption"],
            challenge: "Depreciation estimation challenges"
        }
    },
    {
        id: "ind_fiscal_004",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "GDP & National Income Numerical",
        difficulty: "Medium",
        question: "GNP = ₹300 lakh crore, NFIA = –₹15 lakh crore. Find GDP (in lakh crore).",
        options: [],
        correctAnswer: "315",
        explanation: {
            concept: "GDP vs GNP",
            detailed: ["GDP = GNP - NFIA", "= 300 - (-15) = 315 lakh crore"],
            takeaways: ["Negative NFIA means net outflow of factor income"],
            challenge: "Why is India's NFIA negative?"
        }
    },
    {
        id: "ind_fiscal_005",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "GDP & National Income Numerical",
        difficulty: "Medium",
        question: "Real GDP last year = ₹180 lakh crore, this year = ₹198 lakh crore. Find growth rate (as percentage).",
        options: [],
        correctAnswer: "10",
        explanation: {
            concept: "GDP Growth Rate",
            detailed: ["Growth rate = (198 - 180)/180 × 100", "= 18/180 × 100 = 10%"],
            takeaways: ["Percentage change in real GDP"],
            challenge: "Compare with nominal growth"
        }
    },
    {
        id: "ind_fiscal_006",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "GDP & National Income Numerical",
        difficulty: "Hard",
        question: "Per capita income = ₹1,20,000, Population = 140 crore. Find national income (in lakh crore).",
        options: [],
        correctAnswer: "168",
        explanation: {
            concept: "National Income Calculation",
            detailed: ["National Income = Per capita × Population", "= 1,20,000 × 140 crore = 168 lakh crore"],
            takeaways: ["Aggregate from per capita measure"],
            challenge: "Distribution issues"
        }
    },
    {
        id: "ind_fiscal_007",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "GDP & National Income Numerical",
        difficulty: "Medium",
        question: "C = ₹80 lakh crore, I = ₹40, G = ₹20, X = ₹15, M = ₹10. Find GDP by expenditure method (in lakh crore).",
        options: [],
        correctAnswer: "145",
        explanation: {
            concept: "Expenditure Method",
            detailed: ["GDP = C + I + G + (X - M)", "= 80 + 40 + 20 + (15 - 10) = 145 lakh crore"],
            takeaways: ["Sum of all final expenditures"],
            challenge: "Why subtract imports?"
        }
    },
    {
        id: "ind_fiscal_008",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "GDP & National Income Numerical",
        difficulty: "Medium",
        question: "Nominal GDP growth = 12%, Inflation = 5%. Find real GDP growth (as percentage).",
        options: [],
        correctAnswer: "7",
        explanation: {
            concept: "Real vs Nominal Growth",
            detailed: ["Real growth ≈ Nominal growth - Inflation", "= 12% - 5% = 7%"],
            takeaways: ["Approximate formula for small rates"],
            challenge: "Exact formula using (1+g)/(1+π)"
        }
    },
    {
        id: "ind_fiscal_009",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "GDP & National Income Numerical",
        difficulty: "Easy",
        question: "GDP = ₹500 lakh crore, population = 50 crore. Find per capita GDP (in rupees).",
        options: [],
        correctAnswer: "100000",
        explanation: {
            concept: "Per Capita GDP",
            detailed: ["Per capita GDP = GDP / Population", "= 500 lakh crore / 50 crore = 10 lakh = ₹1,00,000"],
            takeaways: ["Average income per person"],
            challenge: "Median vs mean income"
        }
    },
    {
        id: "ind_fiscal_010",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "GDP & National Income Numerical",
        difficulty: "Hard",
        question: "GDP rises from ₹250 to ₹275 lakh crore while prices rise 10%. Find real growth rate (as percentage).",
        options: [],
        correctAnswer: "0",
        explanation: {
            concept: "Real Growth with Inflation",
            detailed: ["Nominal growth = (275-250)/250 × 100 = 10%", "Real growth = 10% - 10% = 0%"],
            takeaways: ["All growth is due to inflation"],
            challenge: "Stagflation scenario"
        }
    },

    // --- SECTION B: FISCAL DEFICIT & BUDGET NUMERICALS (Q11-Q20) ---
    {
        id: "ind_fiscal_011",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Fiscal Deficit Numerical",
        difficulty: "Medium",
        question: "Total expenditure = ₹40 lakh crore, Total revenue receipts = ₹30 lakh crore, Non-debt capital receipts = ₹2 lakh crore. Find fiscal deficit (in lakh crore).",
        options: [],
        correctAnswer: "8",
        explanation: {
            concept: "Fiscal Deficit",
            detailed: ["Fiscal Deficit = Total Exp - (Revenue Receipts + Non-debt Capital Receipts)", "= 40 - (30 + 2) = 8 lakh crore"],
            takeaways: ["Borrowing requirement of government"],
            challenge: "Components of fiscal deficit"
        }
    },
    {
        id: "ind_fiscal_012",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Fiscal Deficit Numerical",
        difficulty: "Easy",
        question: "GDP = ₹200 lakh crore, Fiscal deficit = ₹8 lakh crore. Find fiscal deficit as % of GDP.",
        options: [],
        correctAnswer: "4",
        explanation: {
            concept: "Fiscal Deficit Ratio",
            detailed: ["FD/GDP = (8/200) × 100 = 4%"],
            takeaways: ["Key indicator of fiscal health"],
            challenge: "FRBM targets"
        }
    },
    {
        id: "ind_fiscal_013",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Fiscal Deficit Numerical",
        difficulty: "Medium",
        question: "Revenue deficit = ₹3 lakh crore, Fiscal deficit = ₹8 lakh crore. Find capital expenditure financed by borrowing (in lakh crore).",
        options: [],
        correctAnswer: "5",
        explanation: {
            concept: "Capital Expenditure from Borrowing",
            detailed: ["Capital exp from borrowing = Fiscal deficit - Revenue deficit", "= 8 - 3 = 5 lakh crore"],
            takeaways: ["Productive use of borrowing"],
            challenge: "Quality of fiscal deficit"
        }
    },
    {
        id: "ind_fiscal_014",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Fiscal Deficit Numerical",
        difficulty: "Medium",
        question: "Interest payments = ₹2 lakh crore, Fiscal deficit = ₹9 lakh crore. Find primary deficit (in lakh crore).",
        options: [],
        correctAnswer: "7",
        explanation: {
            concept: "Primary Deficit",
            detailed: ["Primary Deficit = Fiscal Deficit - Interest Payments", "= 9 - 2 = 7 lakh crore"],
            takeaways: ["Deficit excluding interest burden"],
            challenge: "Why is primary deficit important?"
        }
    },
    {
        id: "ind_fiscal_015",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Fiscal Deficit Numerical",
        difficulty: "Easy",
        question: "Tax revenue = ₹25 lakh crore, non-tax revenue = ₹5 lakh crore, Revenue expenditure = ₹32 lakh crore. Find revenue deficit (in lakh crore).",
        options: [],
        correctAnswer: "2",
        explanation: {
            concept: "Revenue Deficit",
            detailed: ["Revenue Deficit = Revenue Exp - Revenue Receipts", "= 32 - (25 + 5) = 2 lakh crore"],
            takeaways: ["Dissaving of government"],
            challenge: "Implications for capital formation"
        }
    },
    {
        id: "ind_fiscal_016",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Fiscal Deficit Numerical",
        difficulty: "Medium",
        question: "GDP = ₹250 lakh crore, Target fiscal deficit = 3% of GDP. Find maximum permissible deficit (in lakh crore).",
        options: [],
        correctAnswer: "7.5",
        explanation: {
            concept: "Fiscal Target",
            detailed: ["Maximum FD = 3% of 250 = 0.03 × 250 = 7.5 lakh crore"],
            takeaways: ["FRBM Act targets"],
            challenge: "Escape clauses"
        }
    },
    {
        id: "ind_fiscal_017",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Fiscal Deficit Numerical",
        difficulty: "Easy",
        question: "Government spending rises from ₹35 to ₹40 lakh crore while revenue unchanged at ₹30 lakh crore. Find change in fiscal deficit (in lakh crore).",
        options: [],
        correctAnswer: "5",
        explanation: {
            concept: "Deficit Change",
            detailed: ["Old FD = 35 - 30 = 5", "New FD = 40 - 30 = 10", "Increase = 5 lakh crore"],
            takeaways: ["Expenditure increase widens deficit"],
            challenge: "Fiscal multiplier effect"
        }
    },
    {
        id: "ind_fiscal_018",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Fiscal Deficit Numerical",
        difficulty: "Medium",
        question: "Subsidies = ₹4 lakh crore, interest = ₹3, other revenue exp = ₹20, Capital exp = ₹10, revenue receipts = ₹30. Find fiscal deficit (in lakh crore).",
        options: [],
        correctAnswer: "7",
        explanation: {
            concept: "Comprehensive Deficit Calculation",
            detailed: ["Total Exp = (4+3+20) + 10 = 37", "Fiscal Deficit = 37 - 30 = 7 lakh crore"],
            takeaways: ["Sum all expenditures"],
            challenge: "Classify expenditures"
        }
    },
    {
        id: "ind_fiscal_019",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Fiscal Deficit Numerical",
        difficulty: "Easy",
        question: "Fiscal deficit is 6% of GDP and GDP = ₹300 lakh crore. Find deficit amount (in lakh crore).",
        options: [],
        correctAnswer: "18",
        explanation: {
            concept: "Deficit from Ratio",
            detailed: ["Fiscal Deficit = 6% of 300 = 0.06 × 300 = 18 lakh crore"],
            takeaways: ["Converting percentage to absolute value"],
            challenge: "Sustainability threshold"
        }
    },
    {
        id: "ind_fiscal_020",
        type: "MCQ",
        topic: "Indian Economy",
        subtopic: "Fiscal Deficit Numerical",
        difficulty: "Medium",
        question: "If GDP grows 10% but fiscal deficit amount unchanged, the FD/GDP ratio:",
        options: [
            { id: "A", text: "Rises" },
            { id: "B", text: "Falls" },
            { id: "C", text: "Remains constant" },
            { id: "D", text: "Doubles" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Deficit Ratio Dynamics",
            detailed: ["With constant numerator and rising denominator, ratio falls"],
            takeaways: ["Growth helps fiscal consolidation"],
            challenge: "Denominator effect"
        }
    },

    // --- SECTION C: BALANCE OF PAYMENTS (Q21-Q30) ---
    {
        id: "ind_fiscal_021",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Balance of Payments Numerical",
        difficulty: "Easy",
        question: "Exports = $400 billion, Imports = $520 billion. Find trade deficit (in $ billion).",
        options: [],
        correctAnswer: "120",
        explanation: {
            concept: "Trade Deficit",
            detailed: ["Trade Deficit = Imports - Exports = 520 - 400 = $120 billion"],
            takeaways: ["Negative trade balance"],
            challenge: "Causes of trade deficit"
        }
    },
    {
        id: "ind_fiscal_022",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Balance of Payments Numerical",
        difficulty: "Easy",
        question: "Current account receipts = $600 billion, Payments = $640 billion. Find current account balance (in $ billion, use + or -).",
        options: [],
        correctAnswer: "-40",
        explanation: {
            concept: "Current Account Balance",
            detailed: ["CA Balance = Receipts - Payments = 600 - 640 = -$40 billion"],
            takeaways: ["Deficit in current account"],
            challenge: "Financing CAD"
        }
    },
    {
        id: "ind_fiscal_023",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Balance of Payments Numerical",
        difficulty: "Medium",
        question: "Trade deficit = $100 billion, Net invisibles = +$60 billion. Find current account balance (in $ billion, use + or -).",
        options: [],
        correctAnswer: "-40",
        explanation: {
            concept: "Current Account Components",
            detailed: ["CA = Trade balance + Net invisibles", "= -100 + 60 = -$40 billion"],
            takeaways: ["Services offset merchandise deficit"],
            challenge: "India's invisible exports"
        }
    },
    {
        id: "ind_fiscal_024",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Balance of Payments Numerical",
        difficulty: "Medium",
        question: "CAD = –2% of GDP and GDP = $3 trillion. Find CAD amount (in $ billion).",
        options: [],
        correctAnswer: "60",
        explanation: {
            concept: "CAD as % of GDP",
            detailed: ["CAD = 2% of $3 trillion = 0.02 × 3000 = $60 billion"],
            takeaways: ["Sustainable CAD typically < 3% of GDP"],
            challenge: "Threshold levels"
        }
    },
    {
        id: "ind_fiscal_025",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Balance of Payments Numerical",
        difficulty: "Easy",
        question: "Capital inflow = $150 billion, Capital outflow = $90 billion. Find net capital account (in $ billion).",
        options: [],
        correctAnswer: "60",
        explanation: {
            concept: "Capital Account",
            detailed: ["Net Capital Account = Inflow - Outflow = 150 - 90 = $60 billion"],
            takeaways: ["Surplus in capital account"],
            challenge: "FDI vs portfolio flows"
        }
    },
    {
        id: "ind_fiscal_026",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Balance of Payments Numerical",
        difficulty: "Medium",
        question: "Current account = –$40 billion, Capital account = +$50 billion. Find overall BOP (in $ billion).",
        options: [],
        correctAnswer: "10",
        explanation: {
            concept: "Overall BOP",
            detailed: ["Overall BOP = CA + Capital Account = -40 + 50 = +$10 billion (surplus)"],
            takeaways: ["Capital inflows exceed current account deficit"],
            challenge: "Reserve accumulation"
        }
    },
    {
        id: "ind_fiscal_027",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Balance of Payments Numerical",
        difficulty: "Easy",
        question: "Foreign exchange reserves rise from $500 to $540 billion. Find change in reserves (in $ billion).",
        options: [],
        correctAnswer: "40",
        explanation: {
            concept: "Reserve Change",
            detailed: ["Change = 540 - 500 = $40 billion increase"],
            takeaways: ["Reflects BOP surplus"],
            challenge: "Costs of holding reserves"
        }
    },
    {
        id: "ind_fiscal_028",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Balance of Payments Numerical",
        difficulty: "Medium",
        question: "Rupee depreciates from ₹75 to ₹80 per dollar. Find percentage depreciation (round to 2 decimals).",
        options: [],
        correctAnswer: "6.67",
        explanation: {
            concept: "Currency Depreciation",
            detailed: ["% Depreciation = (80-75)/75 × 100 = 5/75 × 100 = 6.67%"],
            takeaways: ["Rupee weakened against dollar"],
            challenge: "Impact on trade"
        }
    },
    {
        id: "ind_fiscal_029",
        type: "MCQ",
        topic: "Indian Economy",
        subtopic: "Balance of Payments Numerical",
        difficulty: "Easy",
        question: "Exports grow 8%, imports 12%. Effect on trade balance?",
        options: [
            { id: "A", text: "Improves" },
            { id: "B", text: "Worsens" },
            { id: "C", text: "No change" },
            { id: "D", text: "Becomes zero" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Trade Balance Dynamics",
            detailed: ["Imports growing faster than exports worsens trade deficit"],
            takeaways: ["Relative growth rates matter"],
            challenge: "Elasticity approach"
        }
    },
    {
        id: "ind_fiscal_030",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Balance of Payments Numerical",
        difficulty: "Hard",
        question: "CAD = 3% of GDP, Exports = 20% of GDP. Find imports as % of GDP.",
        options: [],
        correctAnswer: "23",
        explanation: {
            concept: "Trade Ratios",
            detailed: ["CAD ≈ Imports - Exports (as % of GDP)", "-3% = Exports - Imports", "Imports = 20% + 3% = 23% of GDP"],
            takeaways: ["Trade deficit component of CAD"],
            challenge: "Include services"
        }
    },

    // --- SECTION D: BANKING & MONETARY RATIOS (Q31-Q40) ---
    {
        id: "ind_fiscal_031",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Banking & Monetary Numerical",
        difficulty: "Easy",
        question: "CRR = 4%. Find money multiplier.",
        options: [],
        correctAnswer: "25",
        explanation: {
            concept: "Money Multiplier",
            detailed: ["Simple multiplier = 1/CRR = 1/0.04 = 25"],
            takeaways: ["Maximum credit creation potential"],
            challenge: "Actual vs potential multiplier"
        }
    },
    {
        id: "ind_fiscal_032",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Banking & Monetary Numerical",
        difficulty: "Easy",
        question: "SLR = 18%, CRR = 4%. Find total pre-emptions (as percentage).",
        options: [],
        correctAnswer: "22",
        explanation: {
            concept: "Statutory Pre-emptions",
            detailed: ["Total = SLR + CRR = 18% + 4% = 22%"],
            takeaways: ["Portion of deposits not available for lending"],
            challenge: "Impact on credit availability"
        }
    },
    {
        id: "ind_fiscal_033",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Banking & Monetary Numerical",
        difficulty: "Easy",
        question: "Deposits = ₹1000 crore, CRR = 5%. Find required reserves (in crore).",
        options: [],
        correctAnswer: "50",
        explanation: {
            concept: "Reserve Requirement",
            detailed: ["Required Reserves = Deposits × CRR = 1000 × 0.05 = ₹50 crore"],
            takeaways: ["Must be maintained with RBI"],
            challenge: "Penalty for non-maintenance"
        }
    },
    {
        id: "ind_fiscal_034",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Banking & Monetary Numerical",
        difficulty: "Medium",
        question: "Credit-deposit ratio = 70%, Deposits = ₹2000 crore. Find loans (in crore).",
        options: [],
        correctAnswer: "1400",
        explanation: {
            concept: "Credit-Deposit Ratio",
            detailed: ["Loans = CD Ratio × Deposits = 0.70 × 2000 = ₹1400 crore"],
            takeaways: ["Measure of credit deployment"],
            challenge: "Optimal CD ratio"
        }
    },
    {
        id: "ind_fiscal_035",
        type: "MCQ",
        topic: "Indian Economy",
        subtopic: "Banking & Monetary Numerical",
        difficulty: "Easy",
        question: "Repo rate increases from 5% to 6%. Likely effect on money supply?",
        options: [
            { id: "A", text: "Increase" },
            { id: "B", text: "Decrease" },
            { id: "C", text: "No change" },
            { id: "D", text: "Double" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Monetary Policy Transmission",
            detailed: ["Higher repo rate makes borrowing costlier, reducing money supply"],
            takeaways: ["Contractionary monetary policy"],
            challenge: "Transmission mechanism"
        }
    },
    {
        id: "ind_fiscal_036",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Banking & Monetary Numerical",
        difficulty: "Medium",
        question: "Bank creates deposits of ₹500 crore with CRR 10%. Find initial cash needed (in crore).",
        options: [],
        correctAnswer: "50",
        explanation: {
            concept: "Credit Creation",
            detailed: ["Initial cash = Deposits / Multiplier = 500 / 10 = ₹50 crore", "Or: Initial cash = Deposits × CRR = 500 × 0.10 = ₹50 crore"],
            takeaways: ["Seed money for credit creation"],
            challenge: "Multi-bank vs single bank"
        }
    },
    {
        id: "ind_fiscal_037",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Banking & Monetary Numerical",
        difficulty: "Medium",
        question: "NPA ratio = 6%, Total loans = ₹10,000 crore. Find NPAs (in crore).",
        options: [],
        correctAnswer: "600",
        explanation: {
            concept: "Non-Performing Assets",
            detailed: ["NPAs = NPA Ratio × Total Loans = 0.06 × 10,000 = ₹600 crore"],
            takeaways: ["Asset quality indicator"],
            challenge: "Provisioning requirements"
        }
    },
    {
        id: "ind_fiscal_038",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Banking & Monetary Numerical",
        difficulty: "Medium",
        question: "Bank capital = ₹120 crore, Risk weighted assets = ₹1200 crore. Find capital adequacy ratio (as percentage).",
        options: [],
        correctAnswer: "10",
        explanation: {
            concept: "Capital Adequacy Ratio",
            detailed: ["CAR = (Capital / Risk Weighted Assets) × 100", "= (120/1200) × 100 = 10%"],
            takeaways: ["Minimum CAR required by Basel norms"],
            challenge: "Basel III requirements"
        }
    },
    {
        id: "ind_fiscal_039",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Banking & Monetary Numerical",
        difficulty: "Medium",
        question: "Money supply grows 10%, GDP grows 6%. Find approximate inflation (as percentage).",
        options: [],
        correctAnswer: "4",
        explanation: {
            concept: "Quantity Theory Application",
            detailed: ["Inflation ≈ Money growth - GDP growth = 10% - 6% = 4%"],
            takeaways: ["Assumes constant velocity"],
            challenge: "Velocity changes in India"
        }
    },
    {
        id: "ind_fiscal_040",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Banking & Monetary Numerical",
        difficulty: "Medium",
        question: "Reserve money = ₹500 lakh crore, Money multiplier = 5. Find broad money M3 (in lakh crore).",
        options: [],
        correctAnswer: "2500",
        explanation: {
            concept: "Money Supply Determination",
            detailed: ["M3 = Reserve Money × Money Multiplier", "= 500 × 5 = ₹2500 lakh crore"],
            takeaways: ["High-powered money creates broad money"],
            challenge: "Components of M3"
        }
    }
];
