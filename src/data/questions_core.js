
export const coreQuestions = [
    // --- MICROECONOMICS (1-10) ---
    {
        id: "micro_001",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Consumer Theory",
        difficulty: "Easy",
        question: "In a two-goods consumption framework, the Engel curve shows the relationship between:",
        options: [
            { id: "A", text: "income and quantity demanded of one of the goods" },
            { id: "B", text: "price of one good and quantity demanded of the other good" },
            { id: "C", text: "relative price of the goods and ratio of their quantities demanded" },
            { id: "D", text: "income and the ratio of quantities demanded of the two goods" },
        ],
        correctAnswer: "A",
        explanation: { concept: "Engel Curve", detailed: ["Engel curve plots Income (Y) vs Quantity (Q)."], takeaways: ["Slope > 0: Normal", "Slope < 0: Inferior"], challenge: "Draw Engel curve for Perfect Complements." }
    },
    {
        id: "micro_002",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Production Theory",
        difficulty: "Medium",
        question: "Given Q = 10L^0.6K^0.4, returns to scale are:",
        options: [
            { id: "A", text: "Increasing (IRS)" },
            { id: "B", text: "Decreasing (DRS)" },
            { id: "C", text: "Constant (CRS)" },
            { id: "D", text: "Indeterminate" },
        ],
        correctAnswer: "C",
        explanation: { concept: "Cobb-Douglas RTS", detailed: ["Sum of exponents α+β = 0.6+0.4 = 1 => CRS."], takeaways: ["α+β=1: CRS", "α+β>1: IRS"], challenge: "Find MPL." }
    },
    {
        id: "micro_003",
        type: "NAT",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Medium",
        question: "Demand: Q = 100 - 2P. At P = 25, find price elasticity (absolute value).",
        options: [],
        correctAnswer: "1",
        explanation: { concept: "Point Elasticity", detailed: ["Q = 50. dQ/dP = -2.", "Ed = -2 * (25/50) = -1."], takeaways: ["Unitary elastic point."], challenge: "Find Revenue Max Price." }
    },
    {
        id: "micro_004",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Hard",
        question: "In the Cournot model with 2 firms, identical costs, and linear demand, the equilibrium output of each firm is:",
        options: [
            { id: "A", text: "1/2 of perfect competition output" },
            { id: "B", text: "1/3 of perfect competition output" },
            { id: "C", text: "2/3 of perfect competition output" },
            { id: "D", text: "1/4 of perfect competition output" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Cournot Duopoly", detailed: ["Total Q in Cournot = (2/3)Q_pc.", "Each firm produces 1/3 of competitive output."], takeaways: ["Cournot output > Monopoly", "Cournot < Perfect Comp"], challenge: "What happens as N -> infinity?" }
    },
    {
        id: "micro_005",
        type: "MSQ",
        topic: "Microeconomics",
        subtopic: "General Equilibrium",
        difficulty: "Hard",
        question: "Which of the following are necessary conditions for Pareto Optimality in exchange? (Select all that apply)",
        options: [
            { id: "A", text: "MRS_xy^A = MRS_xy^B" },
            { id: "B", text: "MRTS_lk^X = MRTS_lk^Y" },
            { id: "C", text: "MRS_xy = MRT_xy" },
            { id: "D", text: "Prices must be equal" }
        ],
        correctAnswer: ["A"],
        explanation: { concept: "Pareto Efficiency", detailed: ["In exchange (consumption), efficiency requires MRS of all consumers to be equal."], takeaways: ["Exchange efficiency: MRS equal", "Production efficiency: MRTS equal"], challenge: "Define the Contract Curve." }
    },
    // --- MACROECONOMICS (11-20) ---
    {
        id: "macro_001",
        type: "MCQ",
        topic: "Macroeconomics",
        subtopic: "IS-LM Model",
        difficulty: "Medium",
        question: "If interest elasticity of investment increases, IS curve becomes:",
        options: [{ id: "A", text: "Steeper" }, { id: "B", text: "Flatter" }, { id: "C", text: "Vertical" }, { id: "D", text: "Horizontal" }],
        correctAnswer: "B",
        explanation: { concept: "IS Slope", detailed: ["Higher sensitivity to interest rate means small change in r causes big change in I and Y -> Flatter."], takeaways: ["Flatter IS: Monetary Policy effective"], challenge: "Effect of high MPC?" }
    },
    {
        id: "macro_002",
        type: "MCQ",
        topic: "Macroeconomics",
        subtopic: "Solow Model",
        difficulty: "Medium",
        question: "Steady state in Solow model (no pop growth) implies:",
        options: [{ id: "A", text: "S = C" }, { id: "B", text: "I = Depreciation" }, { id: "C", text: "Max Capital" }, { id: "D", text: "MPK = 0" }],
        correctAnswer: "B",
        explanation: { concept: "Steady State", detailed: ["Investment must cover depreciation to keep k constant."], takeaways: ["sf(k) = δk"], challenge: "Golden Rule level?" }
    },
    {
        id: "macro_nat_001",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "National Income",
        difficulty: "Easy",
        question: "MPC = 0.8, t = 0. Value of Govt Multiplier?",
        options: [],
        correctAnswer: "5",
        explanation: { concept: "Multiplier", detailed: ["1/(1-0.8) = 5"], takeaways: ["High MPC -> High Multiplier"], challenge: "Tax multiplier?" }
    },
    {
        id: "macro_004",
        type: "MCQ",
        topic: "Macroeconomics",
        subtopic: "Inflation",
        difficulty: "Medium",
        question: "According to the Phillips Curve, in the short run:",
        options: [
            { id: "A", text: "Inflation and Unemployment are positively related" },
            { id: "B", text: "Inflation and Unemployment are inversely related" },
            { id: "C", text: "Inflation is constant" },
            { id: "D", text: "Unemployment is at natural rate" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Phillips Curve", detailed: ["Short Run Phillips Curve shows trade-off between inflation and unemployment."], takeaways: ["Inverse relationship", "Policy trade-off"], challenge: "Long Run Phillips Curve?" }
    },
    {
        id: "macro_005",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "Money Supply",
        difficulty: "Hard",
        question: "If Currency-Deposit Ratio (cr) = 0.2 and Reserve-Deposit Ratio (rr) = 0.1, what is the Money Multiplier?",
        options: [],
        correctAnswer: "4",
        explanation: { concept: "Money Multiplier", detailed: ["m = (1+cr)/(cr+rr) = (1+0.2)/(0.2+0.1) = 1.2/0.3 = 4"], takeaways: ["m > 1 typically", "Depends on currency preference and reserve requirements"], challenge: "Effect of rising rr?" }
    },
    // --- STATISTICS (21-25) ---
    {
        id: "stats_001",
        type: "NAT",
        topic: "Statistics",
        subtopic: "Probability",
        difficulty: "Hard",
        question: "X ~ N(50, 100). Find Z for X=65. (Note: Variance given as 100)",
        options: [],
        correctAnswer: "1.5",
        explanation: { concept: "Z Score", detailed: ["SD = sqrt(100) = 10. Z = (65-50)/10 = 1.5"], takeaways: ["Read carefully: Variance vs SD"], challenge: "P(Z<1.5)?" }
    },
    {
        id: "stats_002",
        type: "MCQ",
        topic: "Statistics",
        subtopic: "Hypothesis",
        difficulty: "Medium",
        question: "Type I error is:",
        options: [{ id: "A", text: "Reject False H0" }, { id: "B", text: "Reject True H0" }, { id: "C", text: "Accept False H0" }, { id: "D", text: "Accept True H0" }],
        correctAnswer: "B",
        explanation: { concept: "Errors", detailed: ["Rejecting true null is Type I."], takeaways: ["Alpha = Type I prob"], challenge: "Power of test?" }
    },
    {
        id: "stats_003",
        type: "MCQ",
        topic: "Statistics",
        subtopic: "Distributions",
        difficulty: "Easy",
        question: "For a Poisson distribution with parameter λ, the Variance is equal to:",
        options: [{ id: "A", text: "λ" }, { id: "B", text: "λ²" }, { id: "C", text: "1/λ" }, { id: "D", text: "√λ" }],
        correctAnswer: "A",
        explanation: { concept: "Poisson Property", detailed: ["Mean = Variance = λ"], takeaways: ["Key feature of Poisson"], challenge: "PDF of Poisson?" }
    },
    // --- MATHS (26-28) ---
    {
        id: "math_001",
        type: "MCQ",
        topic: "Mathematics",
        subtopic: "Optimization",
        difficulty: "Medium",
        question: "f(x) = x³ - 3x + 2. Local min at:",
        options: [{ id: "A", text: "-1" }, { id: "B", text: "0" }, { id: "C", text: "1" }, { id: "D", text: "2" }],
        correctAnswer: "C",
        explanation: { concept: "Optimization", detailed: ["f'(x)=3x^2-3=0 -> x=1,-1. f''(1)=6>0 (Min)."], takeaways: ["SOC check essential"], challenge: "Global min?" }
    },
    {
        id: "math_002",
        type: "NAT",
        topic: "Mathematics",
        subtopic: "Matrices",
        difficulty: "Easy",
        question: "If A is a 2x2 matrix with Det(A) = 5, what is Det(3A)?",
        options: [],
        correctAnswer: "45",
        explanation: { concept: "Determinant Properties", detailed: ["Det(kA) = k^n * Det(A). Here n=2. Det(3A) = 3^2 * 5 = 9*5 = 45."], takeaways: ["Scalar multiplication affects det by power of dimension"], challenge: "Det(A inverse)?" }
    },
    // --- INDIAN ECONOMY (29-30) ---
    {
        id: "ie_001",
        type: "MSQ",
        topic: "Indian Economy",
        subtopic: "Monetary Policy",
        difficulty: "Hard",
        question: "Quantitative Instruments of RBI: (Select all)",
        options: [{ id: "A", text: "Repo Rate" }, { id: "B", text: "Margin Req" }, { id: "C", text: "OMO" }, { id: "D", text: "Moral Suasion" }],
        correctAnswer: ["A", "C"],
        explanation: { concept: "Policy Tools", detailed: ["Repo and OMO are quantitative."], takeaways: ["Quantitative vs Qualitative"], challenge: "Current Repo Rate?" }
    },
    {
        id: "ie_002",
        type: "MCQ",
        topic: "Indian Economy",
        subtopic: "Planning",
        difficulty: "Medium",
        question: "The Mahalanobis Model was introduced in which Five Year Plan?",
        options: [{ id: "A", text: "First" }, { id: "B", text: "Second" }, { id: "C", text: "Third" }, { id: "D", text: "Fourth" }],
        correctAnswer: "B",
        explanation: { concept: "Planning Models", detailed: ["2nd FYP (1956-61) focused on heavy industry based on Mahalanobis model."], takeaways: ["Harrod-Domar: 1st Plan"], challenge: "Focus of 1st Plan?" }
    },
    {
        id: "ie_003",
        type: "MCQ",
        topic: "Indian Economy",
        subtopic: "Poverty",
        difficulty: "Medium",
        question: "Which committee recommended the Monthly Per Capita Consumption Expenditure (MPCE) based poverty line?",
        options: [{ id: "A", text: "Tendulkar Committee" }, { id: "B", text: "Rangarajan Committee" }, { id: "C", text: "Both A and B" }, { id: "D", text: "None" }],
        correctAnswer: "C",
        explanation: { concept: "Poverty Estimation", detailed: ["Both relied on MPCE, though baskets differed."], takeaways: ["Tendulkar (2009)", "Rangarajan (2014)"], challenge: "Current poverty estimates?" }
    }
];
