
export const macroeconomicsQuestions = [
    // --- NATIONAL INCOME ACCOUNTING (1-5) ---
    {
        id: "macro_practice_001",
        type: "MCQ",
        topic: "National Income",
        subtopic: "Accounting",
        difficulty: "Easy",
        question: "GDP at market price equals:",
        options: [{ id: "A", text: "GNP – depreciation" }, { id: "B", text: "NNP + depreciation" }, { id: "C", text: "NNP – depreciation" }, { id: "D", text: "GNP – net factor income from abroad" }],
        correctAnswer: "D",
        explanation: { concept: "GDP vs GNP", detailed: ["GDP = GNP - Net Factor Income from Abroad (NFIA)."], takeaways: ["Domestic Concept"] }
    },
    {
        id: "macro_practice_002",
        type: "MCQ",
        topic: "National Income",
        subtopic: "Accounting",
        difficulty: "Easy",
        question: "Which is included in GDP?",
        options: [{ id: "A", text: "Sale of second-hand goods" }, { id: "B", text: "Transfer payments" }, { id: "C", text: "Intermediate goods" }, { id: "D", text: "Final goods and services" }],
        correctAnswer: "D",
        explanation: { concept: "GDP Definition", detailed: ["Value of all final goods and services produced within a country's borders."], takeaways: ["No double counting"] }
    },
    {
        id: "macro_practice_003",
        type: "MCQ",
        topic: "National Income",
        subtopic: "Accounting",
        difficulty: "Easy",
        question: "NDP equals:",
        options: [{ id: "A", text: "GDP – depreciation" }, { id: "B", text: "GDP + depreciation" }, { id: "C", text: "GNP – taxes" }, { id: "D", text: "GDP + subsidies" }],
        correctAnswer: "A",
        explanation: { concept: "Net Domestic Product", detailed: ["Gross means inclusive of depreciation. Net means exclusive."], takeaways: ["Depreciation"] }
    },
    {
        id: "macro_practice_004",
        type: "MCQ",
        topic: "National Income",
        subtopic: "Accounting",
        difficulty: "Medium",
        question: "Double counting is avoided by using:",
        options: [{ id: "A", text: "Expenditure method" }, { id: "B", text: "Value added method" }, { id: "C", text: "Income method" }, { id: "D", text: "All of the above" }],
        correctAnswer: "B",
        explanation: { concept: "Value Added", detailed: ["Summing only the value added at each stage prevents counting the same input multiple times."], takeaways: ["Final Value"] }
    },
    {
        id: "macro_practice_005",
        type: "MCQ",
        topic: "National Income",
        subtopic: "Accounting",
        difficulty: "Medium",
        question: "Nominal GDP differs from real GDP because of:",
        options: [{ id: "A", text: "Population" }, { id: "B", text: "Prices" }, { id: "C", text: "Exchange rate" }, { id: "D", text: "Employment" }],
        correctAnswer: "B",
        explanation: { concept: "Real vs Nominal", detailed: ["Nominal is at current prices; Real is adjusted for inflation (constant prices)."], takeaways: ["Deflator"] }
    },

    // --- KEYNESIAN INCOME DETERMINATION (6-10) ---
    {
        id: "macro_practice_006",
        type: "MCQ",
        topic: "Keynesian Theory",
        subtopic: "Income Determination",
        difficulty: "Easy",
        question: "In Keynesian theory, equilibrium income is determined where:",
        options: [{ id: "A", text: "S = I" }, { id: "B", text: "S > I" }, { id: "C", text: "S < I" }, { id: "D", text: "Y is maximum" }],
        correctAnswer: "A",
        explanation: { concept: "Equilibrium Condition", detailed: ["Leakages (Savings) = Injections (Investment)."], takeaways: ["Circular Flow"] }
    },
    {
        id: "macro_practice_007",
        type: "MCQ",
        topic: "Keynesian Theory",
        subtopic: "Consumption",
        difficulty: "Easy",
        question: "The consumption function shows relation between:",
        options: [{ id: "A", text: "Income and saving" }, { id: "B", text: "Income and consumption" }, { id: "C", text: "Investment and income" }, { id: "D", text: "Prices and output" }],
        correctAnswer: "B",
        explanation: { concept: "Consumption Function", detailed: ["C = a + bY. Shows how C changes with Income."], takeaways: ["MPC"] }
    },
    {
        id: "macro_practice_008",
        type: "MCQ",
        topic: "Keynesian Theory",
        subtopic: "Consumption",
        difficulty: "Easy",
        question: "Marginal propensity to consume (MPC) lies between:",
        options: [{ id: "A", text: "0 and 1" }, { id: "B", text: "1 and 2" }, { id: "C", text: "–1 and 1" }, { id: "D", text: "0 and 100" }],
        correctAnswer: "A",
        explanation: { concept: "MPC Range", detailed: ["People consume a fraction of additional income, but not more than 100% (usually)."], takeaways: ["0 < MPC < 1"] }
    },
    {
        id: "macro_practice_009",
        type: "MCQ",
        topic: "Keynesian Theory",
        subtopic: "Multiplier",
        difficulty: "Medium",
        question: "Investment multiplier equals:",
        options: [{ id: "A", text: "1 / (1 – MPC)" }, { id: "B", text: "MPC / MPS" }, { id: "C", text: "1 / MPC" }, { id: "D", text: "1 – MPC" }],
        correctAnswer: "A",
        explanation: { concept: "Multiplier", detailed: ["k = 1 / MPS = 1 / (1 - MPC)."], takeaways: ["Output Expansion"] }
    },
    {
        id: "macro_practice_010",
        type: "MCQ",
        topic: "Keynesian Theory",
        subtopic: "Multiplier",
        difficulty: "Medium",
        question: "If MPC = 0.8, multiplier is:",
        options: [{ id: "A", text: "2" }, { id: "B", text: "5" }, { id: "C", text: "4" }, { id: "D", text: "8" }],
        correctAnswer: "B",
        explanation: { concept: "Calculation", detailed: ["k = 1 / (1 - 0.8) = 1 / 0.2 = 5."], takeaways: ["Magnified Effect"] }
    },

    // --- IS-LM MODEL (11-15) - Basics ---
    {
        id: "macro_practice_011",
        type: "MCQ",
        topic: "IS-LM Model",
        subtopic: "Introduction",
        difficulty: "Medium",
        question: "IS curve represents equilibrium in:",
        options: [{ id: "A", text: "Money market" }, { id: "B", text: "Goods market" }, { id: "C", text: "Labor market" }, { id: "D", text: "Foreign exchange market" }],
        correctAnswer: "B",
        explanation: { concept: "IS Curve", detailed: ["Investment-Saving. Represents equality of aggregate demand and output."], takeaways: ["Goods Market"] }
    },
    {
        id: "macro_practice_012",
        type: "MCQ",
        topic: "IS-LM Model",
        subtopic: "Introduction",
        difficulty: "Medium",
        question: "LM curve represents equilibrium in:",
        options: [{ id: "A", text: "Goods market" }, { id: "B", text: "Money market" }, { id: "C", text: "Capital market" }, { id: "D", text: "Labor market" }],
        correctAnswer: "B",
        explanation: { concept: "LM Curve", detailed: ["Liquidity Preference - Money Supply. Represents money market equilibrium."], takeaways: ["Asset Market"] }
    },
    {
        id: "macro_practice_013",
        type: "MCQ",
        topic: "IS-LM Model",
        subtopic: "Shifts",
        difficulty: "Medium",
        question: "Increase in government spending shifts IS curve:",
        options: [{ id: "A", text: "Left" }, { id: "B", text: "Right" }, { id: "C", text: "Upward only" }, { id: "D", text: "Downward" }],
        correctAnswer: "B",
        explanation: { concept: "Fiscal Expansion", detailed: ["Higher G increases demand, shifting IS to the right."], takeaways: ["Demand Shock"] }
    },
    {
        id: "macro_practice_014",
        type: "MCQ",
        topic: "IS-LM Model",
        subtopic: "Shifts",
        difficulty: "Medium",
        question: "Increase in money supply shifts LM curve:",
        options: [{ id: "A", text: "Left" }, { id: "B", text: "Right" }, { id: "C", text: "Upward" }, { id: "D", text: "No shift" }],
        correctAnswer: "B",
        explanation: { concept: "Monetary Expansion", detailed: ["More money lowers interest rates for given income, shifting LM right (or down)."], takeaways: ["Liquidity Effect"] }
    },
    {
        id: "macro_practice_015",
        type: "MCQ",
        topic: "IS-LM Model",
        subtopic: "Shifts",
        difficulty: "Hard",
        question: "Crowding out occurs when:",
        options: [{ id: "A", text: "Fiscal policy raises interest rate" }, { id: "B", text: "Taxes increase" }, { id: "C", text: "Money supply falls" }, { id: "D", text: "Inflation falls" }],
        correctAnswer: "A",
        explanation: { concept: "Crowding Out", detailed: ["Govt borrowing raises interest rates, reducing private investment."], takeaways: ["Fiscal Side Effect"] }
    },

    // --- MONEY & BANKING (16-20) ---
    {
        id: "macro_practice_016",
        type: "MCQ",
        topic: "Money & Banking",
        subtopic: "Liquidity Preference",
        difficulty: "Medium",
        question: "Liquidity preference theory was given by:",
        options: [{ id: "A", text: "Friedman" }, { id: "B", text: "Keynes" }, { id: "C", text: "Fisher" }, { id: "D", text: "Pigou" }],
        correctAnswer: "B",
        explanation: { concept: "Liquidity Preference", detailed: ["Keynes explained money demand based on transaction, precautionary, and speculative motives."], takeaways: ["Interest Elasticity"] }
    },
    {
        id: "macro_practice_017",
        type: "MCQ",
        topic: "Money & Banking",
        subtopic: "Money Supply",
        difficulty: "Easy",
        question: "High powered money is also called:",
        options: [{ id: "A", text: "M1" }, { id: "B", text: "M2" }, { id: "C", text: "Monetary base" }, { id: "D", text: "Broad money" }],
        correctAnswer: "C",
        explanation: { concept: "Monetary Base (H)", detailed: ["Currency in circulation + Reserves."], takeaways: ["Seed Money"] }
    },
    {
        id: "macro_practice_018",
        type: "MCQ",
        topic: "Money & Banking",
        subtopic: "Multiplier",
        difficulty: "Medium",
        question: "Money multiplier equals:",
        options: [{ id: "A", text: "1 / CRR" }, { id: "B", text: "1 – CRR" }, { id: "C", text: "CRR" }, { id: "D", text: "SLR" }],
        correctAnswer: "A",
        explanation: { concept: "Money Creation", detailed: ["Simple multiplier is reciprocal of reserve ratio."], takeaways: ["Credit Expansion"] }
    },
    {
        id: "macro_practice_019",
        type: "MCQ",
        topic: "Money & Banking",
        subtopic: "Transaction Demand",
        difficulty: "Easy",
        question: "Demand for money for transactions depends on:",
        options: [{ id: "A", text: "Income" }, { id: "B", text: "Interest rate" }, { id: "C", text: "Prices only" }, { id: "D", text: "Expectations" }],
        correctAnswer: "A",
        explanation: { concept: "Transaction Demand", detailed: ["Is a function of income (Lt = f(Y))."], takeaways: ["Income Elastic"] }
    },
    {
        id: "macro_practice_020",
        type: "MCQ",
        topic: "Money & Banking",
        subtopic: "Policy",
        difficulty: "Easy",
        question: "Open market operations are conducted by:",
        options: [{ id: "A", text: "Commercial banks" }, { id: "B", text: "Central bank" }, { id: "C", text: "Government" }, { id: "D", text: "IMF" }],
        correctAnswer: "B",
        explanation: { concept: "Monetary Policy", detailed: ["Buying/Selling govt securities to control liquidity."], takeaways: ["RBI/Fed"] }
    },

    // --- INFLATION & UNEMPLOYMENT (21-25) ---
    {
        id: "macro_practice_021",
        type: "MCQ",
        topic: "Inflation & Unemployment",
        subtopic: "Types of Inflation",
        difficulty: "Medium",
        question: "Inflation caused by excess demand is called:",
        options: [{ id: "A", text: "Cost-push" }, { id: "B", text: "Demand-pull" }, { id: "C", text: "Structural" }, { id: "D", text: "Hyperinflation" }],
        correctAnswer: "B",
        explanation: { concept: "Demand Pull", detailed: ["Too much money chasing too few goods."], takeaways: ["AD > AS"] }
    },
    {
        id: "macro_practice_022",
        type: "MCQ",
        topic: "Inflation & Unemployment",
        subtopic: "Phillips Curve",
        difficulty: "Medium",
        question: "Phillips curve shows relation between:",
        options: [{ id: "A", text: "Inflation and growth" }, { id: "B", text: "Inflation and unemployment" }, { id: "C", text: "Interest and output" }, { id: "D", text: "Wages and profits" }],
        correctAnswer: "B",
        explanation: { concept: "Trade-off", detailed: ["Inverse relationship between inflation and unemployment in short run."], takeaways: ["Inverse Relation"] }
    },
    {
        id: "macro_practice_023",
        type: "MCQ",
        topic: "Inflation & Unemployment",
        subtopic: "Stagflation",
        difficulty: "Medium",
        question: "Stagflation means:",
        options: [{ id: "A", text: "High growth and low inflation" }, { id: "B", text: "High inflation and high unemployment" }, { id: "C", text: "Low inflation and low unemployment" }, { id: "D", text: "Zero inflation" }],
        correctAnswer: "B",
        explanation: { concept: "Stagflation", detailed: ["Stagnation (Low Growth/High Unemployment) + Inflation."], takeaways: ["Supply Shock"] }
    },
    {
        id: "macro_practice_024",
        type: "MCQ",
        topic: "Inflation & Unemployment",
        subtopic: "Fisher Effect",
        difficulty: "Easy",
        question: "Real interest rate equals:",
        options: [{ id: "A", text: "Nominal rate – inflation" }, { id: "B", text: "Nominal rate + inflation" }, { id: "C", text: "Nominal rate × inflation" }, { id: "D", text: "Nominal rate" }],
        correctAnswer: "A",
        explanation: { concept: "Fisher Equation", detailed: ["r = i - π."], takeaways: ["Purchasing Power"] }
    },
    {
        id: "macro_practice_025",
        type: "MCQ",
        topic: "Inflation & Unemployment",
        subtopic: "Cost-push",
        difficulty: "Medium",
        question: "Cost-push inflation arises due to:",
        options: [{ id: "A", text: "Excess demand" }, { id: "B", text: "Increase in input prices" }, { id: "C", text: "Increase in output" }, { id: "D", text: "Fiscal surplus" }],
        correctAnswer: "B",
        explanation: { concept: "Supply Shock", detailed: ["Rising wages or raw material costs shift AS left."], takeaways: ["Input Costs"] }
    },

    // --- FISCAL POLICY (26-28) ---
    {
        id: "macro_practice_026",
        type: "MCQ",
        topic: "Fiscal Policy",
        subtopic: "Budget",
        difficulty: "Easy",
        question: "A budget deficit means:",
        options: [{ id: "A", text: "Revenue > Expenditure" }, { id: "B", text: "Expenditure > Revenue" }, { id: "C", text: "Taxes > Spending" }, { id: "D", text: "Balanced budget" }],
        correctAnswer: "B",
        explanation: { concept: "Deficit", detailed: ["Government spending exceeds its revenue."], takeaways: ["Borrowing needed"] }
    },
    {
        id: "macro_practice_027",
        type: "MCQ",
        topic: "Fiscal Policy",
        subtopic: "Stabilizers",
        difficulty: "Medium",
        question: "Automatic stabilizers include:",
        options: [{ id: "A", text: "Discretionary taxes" }, { id: "B", text: "Progressive taxes" }, { id: "C", text: "Monetary policy" }, { id: "D", text: "Exchange rate" }],
        correctAnswer: "B",
        explanation: { concept: "Automatic Stabilizers", detailed: ["Progressive taxes and welfare payments dampen cycle without explicit policy action."], takeaways: ["Built-in"] }
    },
    {
        id: "macro_practice_028",
        type: "MCQ",
        topic: "Fiscal Policy",
        subtopic: "Tools",
        difficulty: "Easy",
        question: "Expansionary fiscal policy includes:",
        options: [{ id: "A", text: "Tax increase" }, { id: "B", text: "Spending cut" }, { id: "C", text: "Increase in government spending" }, { id: "D", text: "Selling bonds" }],
        correctAnswer: "C",
        explanation: { concept: "Expansionary Policy", detailed: ["Designed to boost Aggregate Demand."], takeaways: ["G up, T down"] }
    },

    // --- OPEN ECONOMY MACRO (29-32) ---
    {
        id: "macro_practice_029",
        type: "MCQ",
        topic: "Open Economy",
        subtopic: "Balance of Payments",
        difficulty: "Medium",
        question: "Balance of payments surplus means:",
        options: [{ id: "A", text: "Exports > imports" }, { id: "B", text: "Capital outflow" }, { id: "C", text: "Current account deficit" }, { id: "D", text: "Inflation" }],
        correctAnswer: "A",
        explanation: { concept: "BOP Surplus", detailed: ["Inflow of foreign exchange exceeds outflow."], takeaways: ["Reserves Rise"] }
    },
    {
        id: "macro_practice_030",
        type: "MCQ",
        topic: "Open Economy",
        subtopic: "Exchange Rate",
        difficulty: "Medium",
        question: "Devaluation of currency will:",
        options: [{ id: "A", text: "Reduce exports" }, { id: "B", text: "Increase exports" }, { id: "C", text: "Increase imports" }, { id: "D", text: "Reduce inflation" }],
        correctAnswer: "B",
        explanation: { concept: "Devaluation", detailed: ["Makes domestic goods cheaper for foreigners."], takeaways: ["Competitiveness"] }
    },
    {
        id: "macro_practice_031",
        type: "MCQ",
        topic: "Open Economy",
        subtopic: "Exchange Rate",
        difficulty: "Medium",
        question: "Flexible exchange rate is determined by:",
        options: [{ id: "A", text: "Government" }, { id: "B", text: "Market forces" }, { id: "C", text: "IMF" }, { id: "D", text: "Central bank" }],
        correctAnswer: "B",
        explanation: { concept: "Floating Rate", detailed: ["Demand and Supply of currency in forex market."], takeaways: ["No Intervention"] }
    },
    {
        id: "macro_practice_032",
        type: "MCQ",
        topic: "Open Economy",
        subtopic: "Current Account",
        difficulty: "Medium",
        question: "Current account includes:",
        options: [{ id: "A", text: "Trade in goods and services" }, { id: "B", text: "Capital flows" }, { id: "C", text: "Foreign investment" }, { id: "D", text: "Reserves" }],
        correctAnswer: "A",
        explanation: { concept: "Current Account", detailed: ["Visible trade, invisible trade, and unilateral transfers."], takeaways: ["Flow concept"] }
    },

    // --- GROWTH & DEVELOPMENT (33-36) ---
    {
        id: "macro_practice_033",
        type: "MCQ",
        topic: "Growth Theory",
        subtopic: "Harrod-Domar",
        difficulty: "Medium",
        question: "Harrod-Domar model focuses on:",
        options: [{ id: "A", text: "Population growth" }, { id: "B", text: "Capital accumulation" }, { id: "C", text: "Trade" }, { id: "D", text: "Inflation" }],
        correctAnswer: "B",
        explanation: { concept: "Harrod-Domar", detailed: ["Growth depends on savings rate and capital-output ratio."], takeaways: ["Knife Edge"] }
    },
    {
        id: "macro_practice_034",
        type: "MCQ",
        topic: "Growth Theory",
        subtopic: "Solow",
        difficulty: "Hard",
        question: "Solow growth model emphasizes:",
        options: [{ id: "A", text: "Technology" }, { id: "B", text: "Demand" }, { id: "C", text: "Money supply" }, { id: "D", text: "Fiscal deficit" }],
        correctAnswer: "A",
        explanation: { concept: "Exogenous Growth", detailed: ["Long run growth comes from technological progress (Solow Residual)."], takeaways: ["Convergence"] }
    },
    {
        id: "macro_practice_035",
        type: "MCQ",
        topic: "Growth Theory",
        subtopic: "Solow",
        difficulty: "Hard",
        question: "Golden rule level of capital maximizes:",
        options: [{ id: "A", text: "Output" }, { id: "B", text: "Consumption" }, { id: "C", text: "Savings" }, { id: "D", text: "Investment" }],
        correctAnswer: "B",
        explanation: { concept: "Golden Rule", detailed: ["Steady state level of capital that maximizes consumption per worker."], takeaways: ["MPK = n + g + d"] }
    },
    {
        id: "macro_practice_036",
        type: "MCQ",
        topic: "Growth Theory",
        subtopic: "Human Capital",
        difficulty: "Easy",
        question: "Human capital refers to:",
        options: [{ id: "A", text: "Machines" }, { id: "B", text: "Skills and education" }, { id: "C", text: "Money supply" }, { id: "D", text: "Infrastructure" }],
        correctAnswer: "B",
        explanation: { concept: "Human Capital", detailed: ["Productive skills and technical knowledge embodied in labor."], takeaways: ["Education"] }
    },

    // --- CLASSICAL VS KEYNESIAN (37-40) ---
    {
        id: "macro_practice_037",
        type: "MCQ",
        topic: "Economic Schools",
        subtopic: "Classical",
        difficulty: "Easy",
        question: "Classical economists believed in:",
        options: [{ id: "A", text: "Full employment" }, { id: "B", text: "Demand deficiency" }, { id: "C", text: "Government intervention" }, { id: "D", text: "Price rigidity" }],
        correctAnswer: "A",
        explanation: { concept: "Classical View", detailed: ["Markets clear automatically; economy tends to full employment."], takeaways: ["Laissez Faire"] }
    },
    {
        id: "macro_practice_038",
        type: "MCQ",
        topic: "Economic Schools",
        subtopic: "Keynesian",
        difficulty: "Easy",
        question: "Keynes argued that unemployment is due to:",
        options: [{ id: "A", text: "High wages" }, { id: "B", text: "Lack of demand" }, { id: "C", text: "Excess savings" }, { id: "D", text: "Inflation" }],
        correctAnswer: "B",
        explanation: { concept: "Deficient Demand", detailed: ["Involuntary unemployment caused by insufficient Aggregate Demand."], takeaways: ["Govt Intervention needed"] }
    },
    {
        id: "macro_practice_039",
        type: "MCQ",
        topic: "Economic Schools",
        subtopic: "Classical",
        difficulty: "Easy",
        question: "Say’s Law states:",
        options: [{ id: "A", text: "Demand creates supply" }, { id: "B", text: "Supply creates its own demand" }, { id: "C", text: "Prices are rigid" }, { id: "D", text: "Money is neutral" }],
        correctAnswer: "B",
        explanation: { concept: "Say's Law", detailed: ["Production generates income exactly sufficient to buy the output."], takeaways: ["No Overproduction"] }
    },
    {
        id: "macro_practice_040",
        type: "MCQ",
        topic: "Economic Schools",
        subtopic: "Keynesian",
        difficulty: "Medium",
        question: "Liquidity trap occurs when:",
        options: [{ id: "A", text: "Interest rate is very high" }, { id: "B", text: "Interest rate is very low" }, { id: "C", text: "Inflation is high" }, { id: "D", text: "Unemployment is zero" }],
        correctAnswer: "B",
        explanation: { concept: "Liquidity Trap", detailed: ["Monetary policy becomes ineffective because interest rates can't fall further."], takeaways: ["Flat LM curve"] }
    }
];
