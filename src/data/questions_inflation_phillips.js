
export const inflationPhillipsQuestions = [
    // --- BASIC INFLATION CALCULATIONS (Q1-Q5) ---
    {
        id: "inflation_001",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Inflation Numerical",
        difficulty: "Easy",
        question: "CPI last year = 120, CPI this year = 132. Find inflation rate (as percentage).",
        options: [],
        correctAnswer: "10",
        explanation: {
            concept: "Inflation Rate",
            detailed: ["Inflation = (132 - 120)/120 × 100 = 12/120 × 100 = 10%"],
            takeaways: ["Percentage change in price index"],
            challenge: "What if CPI falls?"
        }
    },
    {
        id: "inflation_002",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Inflation Numerical",
        difficulty: "Easy",
        question: "Price index rises from 200 to 230. Find inflation rate (as percentage).",
        options: [],
        correctAnswer: "15",
        explanation: {
            concept: "Price Index Change",
            detailed: ["Inflation = (230 - 200)/200 × 100 = 30/200 × 100 = 15%"],
            takeaways: ["Simple percentage calculation"],
            challenge: "Compound vs simple inflation"
        }
    },
    {
        id: "inflation_003",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Inflation Numerical",
        difficulty: "Medium",
        question: "Nominal wage rises 8%, prices rise 10%. Find real wage change (as percentage, use + or -).",
        options: [],
        correctAnswer: "-2",
        explanation: {
            concept: "Real Wage",
            detailed: ["Real wage change ≈ Nominal change - Inflation", "= 8% - 10% = -2%"],
            takeaways: ["Purchasing power declines"],
            challenge: "Exact formula using (1+w)/(1+π)"
        }
    },
    {
        id: "inflation_004",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Inflation Numerical",
        difficulty: "Easy",
        question: "Real interest = nominal – inflation. If nominal 9% and inflation 6%, find real interest rate (as percentage).",
        options: [],
        correctAnswer: "3",
        explanation: {
            concept: "Fisher Equation",
            detailed: ["Real rate = 9% - 6% = 3%"],
            takeaways: ["Approximate Fisher equation"],
            challenge: "Exact Fisher formula"
        }
    },
    {
        id: "inflation_005",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Inflation Numerical",
        difficulty: "Easy",
        question: "If real interest 4% and inflation 7%, find nominal rate (as percentage).",
        options: [],
        correctAnswer: "11",
        explanation: {
            concept: "Nominal Interest Rate",
            detailed: ["Nominal = Real + Inflation = 4% + 7% = 11%"],
            takeaways: ["Rearranging Fisher equation"],
            challenge: "Why do lenders care?"
        }
    },

    // --- QUANTITY THEORY (Q6-Q8) ---
    {
        id: "inflation_006",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Inflation Numerical",
        difficulty: "Medium",
        question: "MV = PY. If M rises 10% and V constant, find inflation rate (as percentage).",
        options: [],
        correctAnswer: "10",
        explanation: {
            concept: "Quantity Theory of Money",
            detailed: ["If V and Y constant, %ΔP = %ΔM = 10%"],
            takeaways: ["Money growth = Inflation (classical view)"],
            challenge: "What if Y also changes?"
        }
    },
    {
        id: "inflation_007",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Inflation Numerical",
        difficulty: "Medium",
        question: "Money grows 8%, output 3%, velocity constant. Find inflation rate (as percentage).",
        options: [],
        correctAnswer: "5",
        explanation: {
            concept: "Quantity Theory with Growth",
            detailed: ["%ΔP = %ΔM - %ΔY = 8% - 3% = 5%"],
            takeaways: ["Excess money growth causes inflation"],
            challenge: "What if V changes?"
        }
    },
    {
        id: "inflation_008",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Inflation Numerical",
        difficulty: "Medium",
        question: "If M grows 12% and Y grows 6%, find price growth rate (as percentage).",
        options: [],
        correctAnswer: "6",
        explanation: {
            concept: "Price Level Growth",
            detailed: ["%ΔP = %ΔM - %ΔY = 12% - 6% = 6%"],
            takeaways: ["Monetary inflation"],
            challenge: "Role of expectations"
        }
    },

    // --- PHILLIPS CURVE (Q9-Q12) ---
    {
        id: "inflation_009",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Phillips Curve Numerical",
        difficulty: "Medium",
        question: "Phillips curve: π = 10 – 2u. If u = 4%, find inflation rate (as percentage).",
        options: [],
        correctAnswer: "2",
        explanation: {
            concept: "Phillips Curve",
            detailed: ["π = 10 - 2(4) = 10 - 8 = 2%"],
            takeaways: ["Inverse relationship"],
            challenge: "What is natural rate?"
        }
    },
    {
        id: "inflation_010",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Phillips Curve Numerical",
        difficulty: "Medium",
        question: "Using curve π = 10 – 2u, if inflation target 6%, find required unemployment rate (as percentage).",
        options: [],
        correctAnswer: "2",
        explanation: {
            concept: "Target Unemployment",
            detailed: ["6 = 10 - 2u", "2u = 4", "u = 2%"],
            takeaways: ["Policy trade-off"],
            challenge: "Is this sustainable?"
        }
    },
    {
        id: "inflation_011",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Phillips Curve Numerical",
        difficulty: "Medium",
        question: "π = 12 – 1.5u. If u = 6%, find π (as percentage).",
        options: [],
        correctAnswer: "3",
        explanation: {
            concept: "Phillips Calculation",
            detailed: ["π = 12 - 1.5(6) = 12 - 9 = 3%"],
            takeaways: ["Different slope coefficient"],
            challenge: "What determines slope?"
        }
    },
    {
        id: "inflation_012",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Phillips Curve Numerical",
        difficulty: "Medium",
        question: "Using π = 12 – 1.5u, if u falls from 6 to 4, find change in π (in percentage points, use + or -).",
        options: [],
        correctAnswer: "+3",
        explanation: {
            concept: "Inflation Response",
            detailed: ["Δπ = -1.5 × Δu = -1.5 × (-2) = +3 percentage points"],
            takeaways: ["Lower unemployment → Higher inflation"],
            challenge: "Short run vs long run"
        }
    },

    // --- EXPECTATIONS-AUGMENTED (Q13-Q15) ---
    {
        id: "inflation_013",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Phillips Curve Numerical",
        difficulty: "Hard",
        question: "π = πe – 2(u – 5), where πe = 4, u = 6. Find π (as percentage).",
        options: [],
        correctAnswer: "2",
        explanation: {
            concept: "Expectations-Augmented Phillips Curve",
            detailed: ["π = 4 - 2(6 - 5) = 4 - 2(1) = 4 - 2 = 2%"],
            takeaways: ["Natural rate = 5%"],
            challenge: "What if u = 5?"
        }
    },
    {
        id: "inflation_014",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Phillips Curve Numerical",
        difficulty: "Hard",
        question: "Using π = πe – 2(u – 5), if u = 4, πe = 3, find π (as percentage).",
        options: [],
        correctAnswer: "5",
        explanation: {
            concept: "Below Natural Rate",
            detailed: ["π = 3 - 2(4 - 5) = 3 - 2(-1) = 3 + 2 = 5%"],
            takeaways: ["Below natural rate → Inflation above expected"],
            challenge: "Long-run adjustment"
        }
    },
    {
        id: "inflation_015",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Phillips Curve Numerical",
        difficulty: "Medium",
        question: "Natural rate u* = 5. If u = 7, find unemployment gap (in percentage points, use + or -).",
        options: [],
        correctAnswer: "-2",
        explanation: {
            concept: "Unemployment Gap",
            detailed: ["Gap = u - u* = 7 - 5 = 2 percentage points above natural", "Or -2% below potential (negative output gap)"],
            takeaways: ["Cyclical unemployment"],
            challenge: "Okun's Law application"
        }
    },

    // --- COST-PUSH NUMERICALS (Q16-Q17) ---
    {
        id: "inflation_016",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Inflation Numerical",
        difficulty: "Medium",
        question: "Wages rise 12%, productivity 4%. Find inflation rate (as percentage).",
        options: [],
        correctAnswer: "8",
        explanation: {
            concept: "Cost-Push Inflation",
            detailed: ["Inflation ≈ Wage growth - Productivity growth", "= 12% - 4% = 8%"],
            takeaways: ["Unit labor cost increase"],
            challenge: "Markup pricing"
        }
    },
    {
        id: "inflation_017",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Inflation Numerical",
        difficulty: "Medium",
        question: "Oil price shock adds 3% to costs, initial π = 5%. Find new π (as percentage).",
        options: [],
        correctAnswer: "8",
        explanation: {
            concept: "Supply Shock",
            detailed: ["New inflation = 5% + 3% = 8%"],
            takeaways: ["Cost-push from input prices"],
            challenge: "Second-round effects"
        }
    },

    // --- SACRIFICE RATIO (Q18-Q19) ---
    {
        id: "inflation_018",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Phillips Curve Numerical",
        difficulty: "Hard",
        question: "Reducing inflation from 10% to 6% requires 4% loss of output. Find sacrifice ratio.",
        options: [],
        correctAnswer: "1",
        explanation: {
            concept: "Sacrifice Ratio",
            detailed: ["Sacrifice ratio = Output loss / Inflation reduction", "= 4% / 4% = 1"],
            takeaways: ["Cost of disinflation"],
            challenge: "Credibility effect"
        }
    },
    {
        id: "inflation_019",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Phillips Curve Numerical",
        difficulty: "Hard",
        question: "Inflation cut by 5% requires 10% unemployment-years. Find sacrifice ratio.",
        options: [],
        correctAnswer: "2",
        explanation: {
            concept: "Disinflation Cost",
            detailed: ["Sacrifice ratio = 10% / 5% = 2", "Each 1% inflation reduction costs 2% output"],
            takeaways: ["High cost of tight policy"],
            challenge: "Rational expectations critique"
        }
    },

    // --- DISINFLATION (Q20) ---
    {
        id: "inflation_020",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Inflation Numerical",
        difficulty: "Easy",
        question: "Inflation falls from 8% to 5% over 2 years. Find average annual fall (in percentage points).",
        options: [],
        correctAnswer: "1.5",
        explanation: {
            concept: "Disinflation Rate",
            detailed: ["Total fall = 8% - 5% = 3 percentage points", "Annual average = 3/2 = 1.5 percentage points per year"],
            takeaways: ["Gradual disinflation"],
            challenge: "Compound vs linear"
        }
    },

    // --- FISHER EQUATION (Q21-Q22) ---
    {
        id: "inflation_021",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Inflation Numerical",
        difficulty: "Easy",
        question: "Nominal rate 12%, expected inflation 7%. Find real rate (as percentage).",
        options: [],
        correctAnswer: "5",
        explanation: {
            concept: "Fisher Equation",
            detailed: ["Real rate = Nominal - Expected inflation = 12% - 7% = 5%"],
            takeaways: ["Ex ante real rate"],
            challenge: "Ex post vs ex ante"
        }
    },
    {
        id: "inflation_022",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Inflation Numerical",
        difficulty: "Easy",
        question: "Real rate 3%, expected inflation 6%. Find nominal rate (as percentage).",
        options: [],
        correctAnswer: "9",
        explanation: {
            concept: "Nominal Rate Determination",
            detailed: ["Nominal = Real + Expected inflation = 3% + 6% = 9%"],
            takeaways: ["Fisher effect"],
            challenge: "One-to-one relationship?"
        }
    },

    // --- INDEX NUMBERS (Q23-Q24) ---
    {
        id: "inflation_023",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Inflation Numerical",
        difficulty: "Easy",
        question: "Basket cost rises from 500 to 575. Find inflation rate (as percentage).",
        options: [],
        correctAnswer: "15",
        explanation: {
            concept: "Price Index Inflation",
            detailed: ["Inflation = (575 - 500)/500 × 100 = 75/500 × 100 = 15%"],
            takeaways: ["Consumer basket approach"],
            challenge: "Substitution bias"
        }
    },
    {
        id: "inflation_024",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Inflation Numerical",
        difficulty: "Medium",
        question: "Deflation of 4% means price index falls from 150 to what value?",
        options: [],
        correctAnswer: "144",
        explanation: {
            concept: "Deflation Calculation",
            detailed: ["New index = 150 × (1 - 0.04) = 150 × 0.96 = 144"],
            takeaways: ["Negative inflation"],
            challenge: "Deflation spiral risks"
        }
    },

    // --- OUTPUT GAP (Q25-Q26) ---
    {
        id: "inflation_025",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Inflation Numerical",
        difficulty: "Medium",
        question: "Potential GDP 1000, actual 950. Find output gap (as percentage, use + or -).",
        options: [],
        correctAnswer: "-5",
        explanation: {
            concept: "Output Gap",
            detailed: ["Gap = (Actual - Potential)/Potential × 100", "= (950 - 1000)/1000 × 100 = -5%"],
            takeaways: ["Negative gap = recession"],
            challenge: "Okun's Law"
        }
    },
    {
        id: "inflation_026",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Inflation Numerical",
        difficulty: "Hard",
        question: "Output gap of +4% leads to inflation rise of 2%. Find coefficient (slope).",
        options: [],
        correctAnswer: "0.5",
        explanation: {
            concept: "Phillips Curve Slope",
            detailed: ["Coefficient = Δπ / Gap = 2% / 4% = 0.5"],
            takeaways: ["Sensitivity of inflation to output"],
            challenge: "Derive from unemployment gap"
        }
    },

    // --- EXPECTATIONS (Q27) ---
    {
        id: "inflation_027",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Phillips Curve Numerical",
        difficulty: "Hard",
        question: "Adaptive expectations: πe = last year π = 6%. Current u = 4. Phillips curve: π = 10 – 2u. Find actual π (as percentage).",
        options: [],
        correctAnswer: "2",
        explanation: {
            concept: "Adaptive Expectations",
            detailed: ["π = 10 - 2(4) = 2%", "Note: Expected inflation doesn't enter this simple curve"],
            takeaways: ["Backward-looking expectations"],
            challenge: "Add expectations term"
        }
    },

    // --- MONEY & INFLATION (Q28-Q29) ---
    {
        id: "inflation_028",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Inflation Numerical",
        difficulty: "Medium",
        question: "Money growth 15%, output 5%, velocity stable. Find π (as percentage).",
        options: [],
        correctAnswer: "10",
        explanation: {
            concept: "Quantity Theory",
            detailed: ["π = %ΔM - %ΔY = 15% - 5% = 10%"],
            takeaways: ["Monetarist view"],
            challenge: "Long and variable lags"
        }
    },
    {
        id: "inflation_029",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Inflation Numerical",
        difficulty: "Medium",
        question: "If central bank targets 4% inflation and output grows 3%, find required money growth (as percentage).",
        options: [],
        correctAnswer: "7",
        explanation: {
            concept: "Money Growth Target",
            detailed: ["%ΔM = π + %ΔY = 4% + 3% = 7%"],
            takeaways: ["Monetary policy rule"],
            challenge: "Taylor Rule alternative"
        }
    },

    // --- PHILLIPS SHIFTS (Q30-Q31) ---
    {
        id: "inflation_030",
        type: "MCQ",
        topic: "Inflation & Unemployment",
        subtopic: "Phillips Curve Numerical",
        difficulty: "Medium",
        question: "Expected inflation rises 2%. Phillips curve shifts:",
        options: [
            { id: "A", text: "Down by 2%" },
            { id: "B", text: "Up by 2%" },
            { id: "C", text: "No shift" },
            { id: "D", text: "Left by 2%" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Expectations Shift",
            detailed: ["Higher expected inflation shifts SRPC upward", "π = πe - β(u - u*)"],
            takeaways: ["Vertical shift"],
            challenge: "Long-run Phillips curve"
        }
    },
    {
        id: "inflation_031",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Phillips Curve Numerical",
        difficulty: "Medium",
        question: "If natural rate 5% and unemployment 5%, find inflation change (in percentage points).",
        options: [],
        correctAnswer: "0",
        explanation: {
            concept: "Natural Rate Equilibrium",
            detailed: ["At u = u*, inflation = expected inflation", "No change from expected level"],
            takeaways: ["Long-run equilibrium"],
            challenge: "NAIRU concept"
        }
    },

    // --- MISC NUMERICALS (Q32-Q40) ---
    {
        id: "inflation_032",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Inflation Numerical",
        difficulty: "Easy",
        question: "CPI rises from 140 to 147. Find inflation rate (as percentage).",
        options: [],
        correctAnswer: "5",
        explanation: {
            concept: "CPI Inflation",
            detailed: ["Inflation = (147 - 140)/140 × 100 = 7/140 × 100 = 5%"],
            takeaways: ["Standard calculation"],
            challenge: "Core vs headline"
        }
    },
    {
        id: "inflation_033",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Inflation Numerical",
        difficulty: "Hard",
        question: "If prices double in 5 years, find average annual inflation rate (as percentage, round to 1 decimal).",
        options: [],
        correctAnswer: "14.9",
        explanation: {
            concept: "Compound Inflation",
            detailed: ["(1 + r)^5 = 2", "r = 2^(1/5) - 1 ≈ 1.1487 - 1 = 0.1487 ≈ 14.9%"],
            takeaways: ["Compound growth formula"],
            challenge: "Rule of 70"
        }
    },
    {
        id: "inflation_034",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Inflation Numerical",
        difficulty: "Easy",
        question: "Nominal wage 10%, inflation 6%. Find real wage growth (as percentage).",
        options: [],
        correctAnswer: "4",
        explanation: {
            concept: "Real Wage Growth",
            detailed: ["Real wage ≈ 10% - 6% = 4%"],
            takeaways: ["Purchasing power increase"],
            challenge: "Wage-price spiral"
        }
    },
    {
        id: "inflation_035",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Inflation Numerical",
        difficulty: "Easy",
        question: "If inflation = 0 and nominal rate = 5%, find real rate (as percentage).",
        options: [],
        correctAnswer: "5",
        explanation: {
            concept: "Zero Inflation",
            detailed: ["Real = Nominal - Inflation = 5% - 0% = 5%"],
            takeaways: ["Nominal = Real when no inflation"],
            challenge: "Price stability benefits"
        }
    },
    {
        id: "inflation_036",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Inflation Numerical",
        difficulty: "Medium",
        question: "Hyperinflation: prices triple in a year. Find inflation rate (as percentage).",
        options: [],
        correctAnswer: "200",
        explanation: {
            concept: "Hyperinflation",
            detailed: ["Inflation = (3P - P)/P × 100 = 2P/P × 100 = 200%"],
            takeaways: ["Extreme price increases"],
            challenge: "Historical examples"
        }
    },
    {
        id: "inflation_037",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Phillips Curve Numerical",
        difficulty: "Easy",
        question: "π = 8 – u. If u = 3%, find π (as percentage).",
        options: [],
        correctAnswer: "5",
        explanation: {
            concept: "Simple Phillips Curve",
            detailed: ["π = 8 - 3 = 5%"],
            takeaways: ["Linear relationship"],
            challenge: "What is natural rate?"
        }
    },
    {
        id: "inflation_038",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Phillips Curve Numerical",
        difficulty: "Medium",
        question: "u rises 2 points, slope = –1.5. Find change in π (in percentage points, use + or -).",
        options: [],
        correctAnswer: "-3",
        explanation: {
            concept: "Phillips Curve Slope",
            detailed: ["Δπ = slope × Δu = -1.5 × 2 = -3 percentage points"],
            takeaways: ["Higher unemployment → Lower inflation"],
            challenge: "Estimate from data"
        }
    },
    {
        id: "inflation_039",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Phillips Curve Numerical",
        difficulty: "Hard",
        question: "Expected inflation 5%, u = 6, natural rate 5, slope –2. Find π (as percentage).",
        options: [],
        correctAnswer: "3",
        explanation: {
            concept: "Full Expectations-Augmented PC",
            detailed: ["π = πe + slope × (u - u*)", "= 5 + (-2) × (6 - 5)", "= 5 - 2 = 3%"],
            takeaways: ["Above natural rate → Below expected inflation"],
            challenge: "Friedman-Phelps critique"
        }
    },
    {
        id: "inflation_040",
        type: "NAT",
        topic: "Inflation & Unemployment",
        subtopic: "Phillips Curve Numerical",
        difficulty: "Hard",
        question: "If inflation falls from 9% to 6% with output gap –3%, find slope coefficient.",
        options: [],
        correctAnswer: "1",
        explanation: {
            concept: "Slope Estimation",
            detailed: ["Δπ = -3 percentage points", "Output gap = -3%", "Slope = Δπ / gap = -3 / -3 = 1"],
            takeaways: ["Empirical Phillips curve"],
            challenge: "Statistical estimation"
        }
    }
];
