
export const growthModelsQuestions = [
    // --- HARROD-DOMAR MODEL (Q1-Q10) ---
    {
        id: "growth_001",
        type: "NAT",
        topic: "Growth Theory",
        subtopic: "Harrod-Domar Numerical",
        difficulty: "Easy",
        question: "Savings rate (s) = 0.25, Capital-output ratio (v) = 4. Find warranted growth rate.",
        options: [],
        correctAnswer: "6.25",
        explanation: {
            concept: "Harrod-Domar Growth Rate",
            detailed: ["g = s / v = 0.25 / 4 = 0.0625 = 6.25%"],
            takeaways: ["Growth rate directly proportional to savings", "Inversely proportional to capital-output ratio"],
            challenge: "What if v doubles?"
        }
    },
    {
        id: "growth_002",
        type: "NAT",
        topic: "Growth Theory",
        subtopic: "Harrod-Domar Numerical",
        difficulty: "Easy",
        question: "s = 0.20, v = 5. Find growth rate g.",
        options: [],
        correctAnswer: "4",
        explanation: {
            concept: "Basic Harrod-Domar",
            detailed: ["g = s/v = 0.20/5 = 0.04 = 4%"],
            takeaways: ["Simple division formula"],
            challenge: "Effect of increasing s to 0.25"
        }
    },
    {
        id: "growth_003",
        type: "NAT",
        topic: "Growth Theory",
        subtopic: "Harrod-Domar Numerical",
        difficulty: "Medium",
        question: "If desired growth rate is 8% and v = 4, find required saving rate.",
        options: [],
        correctAnswer: "32",
        explanation: {
            concept: "Required Savings",
            detailed: ["s = g × v = 0.08 × 4 = 0.32 = 32%"],
            takeaways: ["Rearranging Harrod-Domar formula"],
            challenge: "Is 32% savings realistic?"
        }
    },
    {
        id: "growth_004",
        type: "NAT",
        topic: "Growth Theory",
        subtopic: "Harrod-Domar Numerical",
        difficulty: "Easy",
        question: "s = 0.3, v = 6. Find growth rate.",
        options: [],
        correctAnswer: "5",
        explanation: {
            concept: "Harrod-Domar Calculation",
            detailed: ["g = 0.3/6 = 0.05 = 5%"],
            takeaways: ["Higher capital intensity reduces growth"],
            challenge: "Compare with v = 3"
        }
    },
    {
        id: "growth_005",
        type: "NAT",
        topic: "Growth Theory",
        subtopic: "Harrod-Domar Numerical",
        difficulty: "Medium",
        question: "Given s = 0.24 and target growth 6%, find required v.",
        options: [],
        correctAnswer: "4",
        explanation: {
            concept: "Capital-Output Ratio",
            detailed: ["v = s/g = 0.24/0.06 = 4"],
            takeaways: ["Solving for capital efficiency"],
            challenge: "What does v = 4 mean economically?"
        }
    },
    {
        id: "growth_006",
        type: "NAT",
        topic: "Growth Theory",
        subtopic: "Harrod-Domar Numerical",
        difficulty: "Easy",
        question: "If s = 0.15 and v = 3, find g.",
        options: [],
        correctAnswer: "5",
        explanation: {
            concept: "Growth Rate",
            detailed: ["g = 0.15/3 = 0.05 = 5%"],
            takeaways: ["Standard calculation"],
            challenge: "Double the savings rate effect"
        }
    },
    {
        id: "growth_007",
        type: "NAT",
        topic: "Growth Theory",
        subtopic: "Harrod-Domar Numerical",
        difficulty: "Medium",
        question: "s rises from 0.2 to 0.25, v = 5. Find change in growth rate (in percentage points).",
        options: [],
        correctAnswer: "1",
        explanation: {
            concept: "Growth Rate Change",
            detailed: ["Old g = 0.2/5 = 4%", "New g = 0.25/5 = 5%", "Increase = 1 percentage point"],
            takeaways: ["Savings increase boosts growth"],
            challenge: "What if v also changes?"
        }
    },
    {
        id: "growth_008",
        type: "NAT",
        topic: "Growth Theory",
        subtopic: "Harrod-Domar Numerical",
        difficulty: "Medium",
        question: "If v increases from 4 to 5 while s = 0.20, find change in g (in percentage points).",
        options: [],
        correctAnswer: "-1",
        explanation: {
            concept: "Capital Intensity Effect",
            detailed: ["Old g = 0.20/4 = 5%", "New g = 0.20/5 = 4%", "Fall by 1 percentage point"],
            takeaways: ["Higher capital intensity reduces growth"],
            challenge: "Why does v increase?"
        }
    },
    {
        id: "growth_009",
        type: "NAT",
        topic: "Growth Theory",
        subtopic: "Harrod-Domar Numerical",
        difficulty: "Medium",
        question: "Economy grows at 7% with v = 3.5. Find saving rate (as percentage).",
        options: [],
        correctAnswer: "24.5",
        explanation: {
            concept: "Implied Savings Rate",
            detailed: ["s = g × v = 0.07 × 3.5 = 0.245 = 24.5%"],
            takeaways: ["Backward calculation from growth"],
            challenge: "Is this sustainable?"
        }
    },
    {
        id: "growth_010",
        type: "NAT",
        topic: "Growth Theory",
        subtopic: "Harrod-Domar Numerical",
        difficulty: "Easy",
        question: "s = 0.28, v = 4. Find required investment ratio (as percentage).",
        options: [],
        correctAnswer: "28",
        explanation: {
            concept: "Investment Requirement",
            detailed: ["Investment ratio = savings rate = 28% of income"],
            takeaways: ["In Harrod-Domar, I = S"],
            challenge: "What is actual growth rate?"
        }
    },

    // --- INSTABILITY IN HARROD MODEL (Q11-Q12) ---
    {
        id: "growth_011",
        type: "MCQ",
        topic: "Growth Theory",
        subtopic: "Harrod-Domar Numerical",
        difficulty: "Medium",
        question: "Actual growth 6%, warranted growth 4%. What happens?",
        options: [
            { id: "A", text: "Cumulative inflationary pressure" },
            { id: "B", text: "Deflationary gap" },
            { id: "C", text: "Equilibrium" },
            { id: "D", text: "Recession" }
        ],
        correctAnswer: "A",
        explanation: {
            concept: "Harrod Instability",
            detailed: ["Actual > Warranted → Excess demand → Inflation", "Knife-edge problem: divergence amplifies"],
            takeaways: ["System is inherently unstable"],
            challenge: "What policy response?"
        }
    },
    {
        id: "growth_012",
        type: "MCQ",
        topic: "Growth Theory",
        subtopic: "Harrod-Domar Numerical",
        difficulty: "Medium",
        question: "Actual growth 3%, warranted 5%. Result?",
        options: [
            { id: "A", text: "Inflation" },
            { id: "B", text: "Deflationary gap" },
            { id: "C", text: "Boom" },
            { id: "D", text: "Hyperinflation" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Deficient Demand",
            detailed: ["Actual < Warranted → Insufficient demand → Deflation/Recession"],
            takeaways: ["Cumulative contraction"],
            challenge: "How to close the gap?"
        }
    },

    // --- SOLOW MODEL NUMERICALS (Q13-Q40) ---
    {
        id: "growth_013",
        type: "MCQ",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Medium",
        question: "Production function: Y = 10K^0.5, Savings rate s = 0.2, Depreciation δ = 0.05. Find steady state condition.",
        options: [
            { id: "A", text: "sY = δK" },
            { id: "B", text: "sK = δY" },
            { id: "C", text: "Y = K" },
            { id: "D", text: "s = δ" }
        ],
        correctAnswer: "A",
        explanation: {
            concept: "Solow Steady State",
            detailed: ["Investment = Depreciation", "sY = δK ensures constant capital per worker"],
            takeaways: ["Fundamental equilibrium condition"],
            challenge: "Solve for K*"
        }
    },
    {
        id: "growth_014",
        type: "NAT",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Medium",
        question: "s = 0.3, δ = 0.1. Find steady-state K/Y ratio.",
        options: [],
        correctAnswer: "3",
        explanation: {
            concept: "Capital-Output Ratio",
            detailed: ["At steady state: sY = δK", "K/Y = s/δ = 0.3/0.1 = 3"],
            takeaways: ["Higher savings → Higher capital intensity"],
            challenge: "Effect on consumption"
        }
    },
    {
        id: "growth_015",
        type: "NAT",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Medium",
        question: "s = 0.25, δ = 0.05. Find steady-state capital-output ratio.",
        options: [],
        correctAnswer: "5",
        explanation: {
            concept: "K/Y Ratio",
            detailed: ["K/Y = s/δ = 0.25/0.05 = 5"],
            takeaways: ["Low depreciation increases capital stock"],
            challenge: "Is this the golden rule?"
        }
    },
    {
        id: "growth_016",
        type: "NAT",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Easy",
        question: "s = 0.2, δ = 0.04. Find steady-state investment-output ratio (as percentage).",
        options: [],
        correctAnswer: "20",
        explanation: {
            concept: "Investment Ratio",
            detailed: ["At steady state: I/Y = s = 0.2 = 20%"],
            takeaways: ["Investment equals savings"],
            challenge: "What is depreciation in absolute terms?"
        }
    },
    {
        id: "growth_017",
        type: "MCQ",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Easy",
        question: "If s increases from 0.2 to 0.25, effect on steady state output?",
        options: [
            { id: "A", text: "Increases" },
            { id: "B", text: "Decreases" },
            { id: "C", text: "No change" },
            { id: "D", text: "Doubles" }
        ],
        correctAnswer: "A",
        explanation: {
            concept: "Savings Effect",
            detailed: ["Higher s → Higher K* → Higher Y*", "Level effect, not growth effect"],
            takeaways: ["Temporary growth during transition"],
            challenge: "Long-run growth rate?"
        }
    },
    {
        id: "growth_018",
        type: "NAT",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Medium",
        question: "δ rises from 5% to 8%, s = 0.24. Find new K/Y ratio.",
        options: [],
        correctAnswer: "3",
        explanation: {
            concept: "Depreciation Effect",
            detailed: ["Old K/Y = 0.24/0.05 = 4.8", "New K/Y = 0.24/0.08 = 3"],
            takeaways: ["Higher depreciation reduces capital stock"],
            challenge: "Effect on consumption"
        }
    },
    {
        id: "growth_019",
        type: "MCQ",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Medium",
        question: "In Solow model, long-run growth equals:",
        options: [
            { id: "A", text: "Savings rate" },
            { id: "B", text: "Technological progress" },
            { id: "C", text: "Depreciation rate" },
            { id: "D", text: "Investment rate" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Exogenous Growth",
            detailed: ["Long-run per capita growth = rate of technological progress (g)", "Savings affects level, not growth"],
            takeaways: ["Technology is key to sustained growth"],
            challenge: "What about population growth?"
        }
    },
    {
        id: "growth_020",
        type: "NAT",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Medium",
        question: "If technology grows at 2% and population at 1%, find long-run per capita growth rate (as percentage).",
        options: [],
        correctAnswer: "2",
        explanation: {
            concept: "Per Capita Growth",
            detailed: ["Per capita growth = technological progress rate = 2%", "Population growth doesn't affect per capita growth in long run"],
            takeaways: ["Technology drives per capita income"],
            challenge: "Total output growth rate?"
        }
    },
    {
        id: "growth_021",
        type: "MCQ",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Hard",
        question: "Golden rule requires:",
        options: [
            { id: "A", text: "MPK = δ" },
            { id: "B", text: "MPK = s" },
            { id: "C", text: "s = δ" },
            { id: "D", text: "K = Y" }
        ],
        correctAnswer: "A",
        explanation: {
            concept: "Golden Rule",
            detailed: ["Consumption maximized when MPK = δ (+ n if population grows)", "Marginal product equals depreciation"],
            takeaways: ["Optimal capital accumulation"],
            challenge: "What if MPK > δ?"
        }
    },
    {
        id: "growth_022",
        type: "MCQ",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Medium",
        question: "If MPK > δ, economy should:",
        options: [
            { id: "A", text: "Increase saving" },
            { id: "B", text: "Decrease saving" },
            { id: "C", text: "Keep saving constant" },
            { id: "D", text: "Increase depreciation" }
        ],
        correctAnswer: "A",
        explanation: {
            concept: "Dynamic Efficiency",
            detailed: ["MPK > δ means capital is productive", "More saving increases consumption in long run"],
            takeaways: ["Below golden rule level"],
            challenge: "Prove mathematically"
        }
    },
    {
        id: "growth_023",
        type: "MCQ",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Medium",
        question: "If MPK < δ, saving is:",
        options: [
            { id: "A", text: "Too low" },
            { id: "B", text: "Too high" },
            { id: "C", text: "Optimal" },
            { id: "D", text: "Zero" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Over-accumulation",
            detailed: ["MPK < δ means capital is not productive enough", "Reducing saving increases consumption"],
            takeaways: ["Above golden rule"],
            challenge: "Dynamic inefficiency"
        }
    },
    {
        id: "growth_024",
        type: "NAT",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Hard",
        question: "Capital doubles and α = 0.5 (Cobb-Douglas). Output rises by what factor? (Round to 2 decimals)",
        options: [],
        correctAnswer: "1.41",
        explanation: {
            concept: "Returns to Scale",
            detailed: ["Y = AK^α", "If K → 2K, then Y → 2^0.5 × Y = √2 × Y ≈ 1.414Y"],
            takeaways: ["Diminishing returns to capital"],
            challenge: "What if α = 1?"
        }
    },
    {
        id: "growth_025",
        type: "NAT",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Medium",
        question: "s = 0.3, δ = 0.06. Find steady state k/y ratio.",
        options: [],
        correctAnswer: "5",
        explanation: {
            concept: "Capital Intensity",
            detailed: ["k/y = s/δ = 0.3/0.06 = 5"],
            takeaways: ["Per worker terms"],
            challenge: "Effect of population growth"
        }
    },
    {
        id: "growth_026",
        type: "NAT",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Hard",
        question: "Population grows at 2%, δ = 5%, s = 0.21. Find required investment rate to keep K constant (as percentage).",
        options: [],
        correctAnswer: "7",
        explanation: {
            concept: "Break-even Investment",
            detailed: ["Required I/Y = (n + δ) × K/Y", "Effective depreciation = n + δ = 2% + 5% = 7%"],
            takeaways: ["Population growth acts like depreciation"],
            challenge: "What is K/Y?"
        }
    },
    {
        id: "growth_027",
        type: "NAT",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Hard",
        question: "If n = 3%, δ = 4%, s = 0.28. Find break-even investment ratio (as percentage).",
        options: [],
        correctAnswer: "7",
        explanation: {
            concept: "Break-even Condition",
            detailed: ["Break-even rate = n + δ = 3% + 4% = 7%", "Investment must cover both depreciation and population growth"],
            takeaways: ["Steady state requirement"],
            challenge: "Is s sufficient?"
        }
    },
    {
        id: "growth_028",
        type: "MCQ",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Medium",
        question: "In Solow model, increase in s raises:",
        options: [
            { id: "A", text: "Long-run growth rate" },
            { id: "B", text: "Level of income, not growth rate" },
            { id: "C", text: "Both level and growth rate" },
            { id: "D", text: "Neither" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Level vs Growth Effect",
            detailed: ["Higher s → Higher Y* (level)", "But long-run growth still = g (technology)"],
            takeaways: ["Temporary growth during transition"],
            challenge: "Contrast with Harrod-Domar"
        }
    },
    {
        id: "growth_029",
        type: "NAT",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Easy",
        question: "If technology grows at 3%, find long-run per capita growth rate (as percentage).",
        options: [],
        correctAnswer: "3",
        explanation: {
            concept: "Technological Progress",
            detailed: ["Long-run per capita growth = rate of tech progress = 3%"],
            takeaways: ["Solow residual"],
            challenge: "What drives technology?"
        }
    },
    {
        id: "growth_030",
        type: "NAT",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Medium",
        question: "s = 0.18, δ = 0.06. Find steady-state K/Y.",
        options: [],
        correctAnswer: "3",
        explanation: {
            concept: "Steady State Ratio",
            detailed: ["K/Y = s/δ = 0.18/0.06 = 3"],
            takeaways: ["Standard calculation"],
            challenge: "Golden rule check"
        }
    },
    {
        id: "growth_031",
        type: "MCQ",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Medium",
        question: "Doubling labor in Cobb-Douglas with α + β = 1 changes output by:",
        options: [
            { id: "A", text: "Less than double" },
            { id: "B", text: "Exactly double" },
            { id: "C", text: "More than double" },
            { id: "D", text: "No change" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Constant Returns to Scale",
            detailed: ["α + β = 1 implies CRS", "Doubling all inputs doubles output"],
            takeaways: ["Linear homogeneity"],
            challenge: "What if α + β < 1?"
        }
    },
    {
        id: "growth_032",
        type: "NAT",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Medium",
        question: "If α = 0.3 and K rises by 10%, Y rises by what percentage?",
        options: [],
        correctAnswer: "3",
        explanation: {
            concept: "Output Elasticity",
            detailed: ["ΔY/Y = α × ΔK/K = 0.3 × 10% = 3%"],
            takeaways: ["Capital elasticity of output"],
            challenge: "What is labor's share?"
        }
    },
    {
        id: "growth_033",
        type: "MCQ",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Easy",
        question: "If savings rate falls, steady-state output:",
        options: [
            { id: "A", text: "Rises" },
            { id: "B", text: "Falls" },
            { id: "C", text: "Unchanged" },
            { id: "D", text: "Doubles" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Savings Effect",
            detailed: ["Lower s → Lower K* → Lower Y*"],
            takeaways: ["Positive relationship"],
            challenge: "Transition dynamics"
        }
    },
    {
        id: "growth_034",
        type: "MCQ",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Easy",
        question: "If depreciation rises, steady-state capital:",
        options: [
            { id: "A", text: "Rises" },
            { id: "B", text: "Falls" },
            { id: "C", text: "Unchanged" },
            { id: "D", text: "Becomes zero" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Depreciation Effect",
            detailed: ["Higher δ → Lower K*", "More capital wears out"],
            takeaways: ["Negative relationship"],
            challenge: "Effect on consumption"
        }
    },
    {
        id: "growth_035",
        type: "MCQ",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Hard",
        question: "Golden rule consumption maximized when:",
        options: [
            { id: "A", text: "MPK = δ" },
            { id: "B", text: "MPK = δ + n" },
            { id: "C", text: "MPK = s" },
            { id: "D", text: "MPK = 0" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Golden Rule with Population",
            detailed: ["With population growth: MPK = δ + n", "Accounts for both depreciation and dilution"],
            takeaways: ["Modified golden rule"],
            challenge: "Derive from first principles"
        }
    },
    {
        id: "growth_036",
        type: "MCQ",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Medium",
        question: "With technological progress, steady state:",
        options: [
            { id: "A", text: "Remains constant" },
            { id: "B", text: "Shifts upward" },
            { id: "C", text: "Shifts downward" },
            { id: "D", text: "Disappears" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Technology Effect",
            detailed: ["Technology shifts production function up", "Steady state in efficiency units, but rising in absolute terms"],
            takeaways: ["Sustained growth possible"],
            challenge: "Effective capital concept"
        }
    },
    {
        id: "growth_037",
        type: "NAT",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Easy",
        question: "If s = 0.4, δ = 0.1, find K/Y.",
        options: [],
        correctAnswer: "4",
        explanation: {
            concept: "Capital-Output Ratio",
            detailed: ["K/Y = s/δ = 0.4/0.1 = 4"],
            takeaways: ["High savings → High capital intensity"],
            challenge: "Is this golden rule?"
        }
    },
    {
        id: "growth_038",
        type: "NAT",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Hard",
        question: "n = 2%, δ = 6%, s = 0.24. Find required investment rate (as percentage).",
        options: [],
        correctAnswer: "8",
        explanation: {
            concept: "Required Investment",
            detailed: ["Required I/K = n + δ = 2% + 6% = 8%", "To maintain steady state"],
            takeaways: ["Break-even investment"],
            challenge: "Is actual investment sufficient?"
        }
    },
    {
        id: "growth_039",
        type: "NAT",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Medium",
        question: "If capital-output ratio is 3 and growth 6%, find required s (as percentage).",
        options: [],
        correctAnswer: "18",
        explanation: {
            concept: "Harrod-Domar Application",
            detailed: ["s = g × v = 0.06 × 3 = 0.18 = 18%"],
            takeaways: ["Linking growth to savings"],
            challenge: "Solow vs Harrod-Domar"
        }
    },
    {
        id: "growth_040",
        type: "MCQ",
        topic: "Growth Theory",
        subtopic: "Solow Numerical",
        difficulty: "Medium",
        question: "In Harrod-Domar, increase in v makes growth:",
        options: [
            { id: "A", text: "Faster" },
            { id: "B", text: "Slower" },
            { id: "C", text: "Unchanged" },
            { id: "D", text: "Infinite" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Capital Intensity Trade-off",
            detailed: ["g = s/v, so higher v → lower g", "More capital needed per unit output"],
            takeaways: ["Inverse relationship"],
            challenge: "Why might v increase?"
        }
    }
];
