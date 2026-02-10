
export const weakAreaQuestions = [
    // --- TEST 1: CONSUMER THEORY (10 Qs) ---
    {
        id: "wa_consumer_001",
        type: "MCQ",
        topic: "Consumer Theory",
        difficulty: "medium",
        question: "At consumer optimum, which condition is satisfied?",
        options: [
            { id: "A", text: "MUx = MUy" },
            { id: "B", text: "MUx/Px = MUy/Py" },
            { id: "C", text: "Px = Py" },
            { id: "D", text: "TU maximum" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Utility Maximization", detailed: ["At equilibrium, the marginal utility per rupee spent on each good must be equal."] }
    },
    {
        id: "wa_consumer_002",
        type: "MCQ",
        topic: "Consumer Theory",
        difficulty: "medium",
        question: "If income rises and demand for a good falls, the good is:",
        options: [
            { id: "A", text: "Normal" },
            { id: "B", text: "Luxury" },
            { id: "C", text: "Inferior" },
            { id: "D", text: "Giffen" }
        ],
        correctAnswer: "C",
        explanation: { concept: "Income Elasticity", detailed: ["Inferior goods have a negative income effect."] }
    },
    {
        id: "wa_consumer_003",
        type: "MCQ",
        topic: "Consumer Theory",
        difficulty: "hard",
        question: "A Giffen good requires which of the following?",
        options: [
            { id: "A", text: "Substitution effect > income effect" },
            { id: "B", text: "Inferior good + strong income effect" },
            { id: "C", text: "Luxury good" },
            { id: "D", text: "Perfect complements" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Giffen Goods", detailed: ["A Giffen good is an inferior good where the negative income effect outweighs the substitution effect."] }
    },
    {
        id: "wa_consumer_004",
        type: "MCQ",
        topic: "Consumer Theory",
        difficulty: "medium",
        question: "Total Price Effect is the sum of:",
        options: [
            { id: "A", text: "Substitution Effect + Income Effect" },
            { id: "B", text: "Substitution Effect – Income Effect" },
            { id: "C", text: "Income Effect – Substitution Effect" },
            { id: "D", text: "MU effect" }
        ],
        correctAnswer: "A",
        explanation: { concept: "Slutsky Equation", detailed: ["Price Effect = Substitution Effect + Income Effect."] }
    },
    {
        id: "wa_consumer_005",
        type: "MCQ",
        topic: "Consumer Theory",
        difficulty: "hard",
        question: "For Cobb–Douglas utility U = x^0.4 y^0.6, the share of income spent on x is:",
        options: [
            { id: "A", text: "40%" },
            { id: "B", text: "60%" },
            { id: "C", text: "50%" },
            { id: "D", text: "100%" }
        ],
        correctAnswer: "A",
        explanation: { concept: "Cobb-Douglas", detailed: ["In U = x^α y^β, the share spent on x is α/(α+β). Here 0.4 / (0.4+0.6) = 40%."] }
    },
    {
        id: "wa_consumer_006",
        type: "MCQ",
        topic: "Consumer Theory",
        difficulty: "medium",
        question: "If Px rises, the substitution effect for a normal good leads the consumer to:",
        options: [
            { id: "A", text: "Buy more x" },
            { id: "B", text: "Buy less x" },
            { id: "C", text: "No change" },
            { id: "D", text: "Indeterminate" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Substitution Effect", detailed: ["Substitution effect always moves opposite to the price change."] }
    },
    {
        id: "wa_consumer_007",
        type: "MCQ",
        topic: "Consumer Theory",
        difficulty: "medium",
        question: "Indifference curves for perfect substitutes are:",
        options: [
            { id: "A", text: "L-shaped" },
            { id: "B", text: "Straight lines" },
            { id: "C", text: "Convex" },
            { id: "D", text: "Concave" }
        ],
        correctAnswer: "B",
        explanation: { concept: "IC Shapes", detailed: ["Perfect substitutes have a constant MRS, resulting in linear ICs."] }
    },
    {
        id: "wa_consumer_008",
        type: "MCQ",
        topic: "Consumer Theory",
        difficulty: "medium",
        question: "At the point of tangency between the IC and Budget Line, MRS equals:",
        options: [
            { id: "A", text: "Px/Py" },
            { id: "B", text: "MUx/MUy" },
            { id: "C", text: "Both A and B" },
            { id: "D", text: "None" }
        ],
        correctAnswer: "C",
        explanation: { concept: "Consumer Equilibrium", detailed: ["MRS = MUx/MUy and at equilibrium it equals the price ratio Px/Py."] }
    },
    {
        id: "wa_consumer_009",
        type: "MCQ",
        topic: "Consumer Theory",
        difficulty: "medium",
        question: "A demand curve typically slopes downward due to:",
        options: [
            { id: "A", text: "Income effect" },
            { id: "B", text: "Substitution effect" },
            { id: "C", text: "Both" },
            { id: "D", text: "None" }
        ],
        correctAnswer: "C",
        explanation: { concept: "Law of Demand", detailed: ["Both effects usually work in the same direction for normal goods."] }
    },
    {
        id: "wa_consumer_010",
        type: "NAT",
        topic: "Consumer Theory",
        difficulty: "medium",
        question: "Does the Engel curve for an inferior good slope upward or downward? (Type 'Downward' or 'Upward')",
        options: [],
        correctAnswer: "Downward",
        explanation: { concept: "Engel Curve", detailed: ["For inferior goods, as income increases, quantity demanded decreases, leading to a downward slope."] }
    },

    // --- TEST 2: PRODUCTION & COST THEORY (10 Qs) ---
    {
        id: "wa_prod_001",
        type: "NAT",
        topic: "Production & Cost",
        difficulty: "medium",
        question: "If MC < AC, what happens to Average Cost (AC)? (Type 'Falls', 'Rises', or 'Constant')",
        options: [],
        correctAnswer: "Falls",
        explanation: { concept: "Cost Relations", detailed: ["When marginal cost is below average, it pulls the average down."] }
    },
    {
        id: "wa_prod_002",
        type: "NAT",
        topic: "Production & Cost",
        difficulty: "medium",
        question: "If all inputs are doubled and output increases by more than double, returns to scale is:",
        options: [
            { id: "A", text: "Constant" },
            { id: "B", text: "Increasing" },
            { id: "C", text: "Decreasing" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Returns to Scale", detailed: ["IRS occurs when output increases more than proportionately to inputs."] }
    },
    {
        id: "wa_prod_003",
        type: "MCQ",
        topic: "Production & Cost",
        difficulty: "medium",
        question: "The shutdown point for a firm in the short run is where Price equals:",
        options: [
            { id: "A", text: "ATC" },
            { id: "B", text: "AVC" },
            { id: "C", text: "AFC" },
            { id: "D", text: "MC" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Shutdown Point", detailed: ["A firm shuts down if it cannot cover its variable costs."] }
    },
    {
        id: "wa_prod_004",
        type: "NAT",
        topic: "Production & Cost",
        difficulty: "hard",
        question: "If TC = 50 + 4Q + Q², find Marginal Cost (MC) at Q = 6.",
        options: [],
        correctAnswer: "16",
        explanation: { concept: "Cost Numerical", detailed: ["MC = d(TC)/dQ = 4 + 2Q. At Q=6, MC = 4 + 2(6) = 16."] }
    },
    {
        id: "wa_prod_005",
        type: "MCQ",
        topic: "Production & Cost",
        difficulty: "medium",
        question: "Isoquants are convex to the origin because of:",
        options: [
            { id: "A", text: "Increasing MRTS" },
            { id: "B", text: "Diminishing MRTS" },
            { id: "C", text: "Constant returns" },
            { id: "D", text: "Fixed proportions" }
        ],
        correctAnswer: "B",
        explanation: { concept: "MRTS", detailed: ["Diminishing Marginal Rate of Technical Substitution causes convexity."] }
    },
    {
        id: "wa_prod_006",
        type: "MCQ",
        topic: "Production & Cost",
        difficulty: "medium",
        question: "In the long run, the competitive price is equal to:",
        options: [
            { id: "A", text: "Maximum AC" },
            { id: "B", text: "Minimum AC" },
            { id: "C", text: "Zero MC" },
            { id: "D", text: "AFC" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Long Run Equilibrium", detailed: ["Firms produce at the minimum point of the LAC curve."] }
    },
    {
        id: "wa_prod_007",
        type: "MCQ",
        topic: "Production & Cost",
        difficulty: "medium",
        question: "Average Total Cost (ATC) is at its minimum where:",
        options: [
            { id: "A", text: "MC = ATC" },
            { id: "B", text: "MC = AVC" },
            { id: "C", text: "AR = AC" },
            { id: "D", text: "TR = TC" }
        ],
        correctAnswer: "A",
        explanation: { concept: "Cost Curves", detailed: ["MC always intersects AC and AVC at their minimum points."] }
    },
    {
        id: "wa_prod_008",
        type: "MCQ",
        topic: "Production & Cost",
        difficulty: "medium",
        question: "The Law of Variable Proportions is a:",
        options: [
            { id: "A", text: "Short run phenomenon" },
            { id: "B", text: "Long run phenomenon" },
            { id: "C", text: "Market phenomenon" },
            { id: "D", text: "Price phenomenon" }
        ],
        correctAnswer: "A",
        explanation: { concept: "Production Theory", detailed: ["It describes how output changes when one input is varied while others are fixed (Short Run)."] }
    },
    {
        id: "wa_prod_009",
        type: "NAT",
        topic: "Production & Cost",
        difficulty: "medium",
        question: "What is the level of economic profit in long-run Perfect Competition?",
        options: [],
        correctAnswer: "0",
        explanation: { concept: "Profit", detailed: ["Free entry and exit drive economic profits to zero."] }
    },
    {
        id: "wa_prod_010",
        type: "MCQ",
        topic: "Production & Cost",
        difficulty: "medium",
        question: "The expansion path of a firm shows:",
        options: [
            { id: "A", text: "Profit maximization" },
            { id: "B", text: "Cost minimization" },
            { id: "C", text: "Revenue maximization" },
            { id: "D", text: "Price leadership" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Expansion Path", detailed: ["It shows the locus of cost-minimizing input combinations for different output levels."] }
    },

    // --- TEST 4: IS-LM MODEL (5 Qs + 5 Generated) ---
    {
        id: "wa_islm_001",
        type: "MCQ",
        topic: "IS-LM Model",
        difficulty: "medium",
        question: "The IS curve shifts to the right due to:",
        options: [
            { id: "A", text: "Increase in Taxes" },
            { id: "B", text: "Increase in Government Spending" },
            { id: "C", text: "Decrease in Ms" },
            { id: "D", text: "Increase in Savings" }
        ],
        correctAnswer: "B",
        explanation: { concept: "IS Shift", detailed: ["Expansionary fiscal policy shifts the IS curve right."] }
    },
    {
        id: "wa_islm_002",
        type: "MCQ",
        topic: "IS-LM Model",
        difficulty: "medium",
        question: "The LM curve shifts to the left when:",
        options: [
            { id: "A", text: "Money supply increases" },
            { id: "B", text: "Money supply decreases" },
            { id: "C", text: "Income increases" },
            { id: "D", text: "Prices fall" }
        ],
        correctAnswer: "B",
        explanation: { concept: "LM Shift", detailed: ["Contractionary monetary policy (lower Ms) shifts LM left."] }
    },
    {
        id: "wa_islm_003",
        type: "MCQ",
        topic: "IS-LM Model",
        difficulty: "hard",
        question: "In a liquidity trap, the LM curve is:",
        options: [
            { id: "A", text: "Vertical" },
            { id: "B", text: "Horizontal" },
            { id: "C", text: "Downward sloping" },
            { id: "D", text: "Steeply upward sloping" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Liquidity Trap", detailed: ["At very low interest rates, money demand is perfectly elastic."] }
    },
    {
        id: "wa_islm_004",
        type: "MCQ",
        topic: "IS-LM Model",
        difficulty: "medium",
        question: "Crowding out is typically caused by:",
        options: [
            { id: "A", text: "Monetary expansion" },
            { id: "B", text: "Fiscal expansion" },
            { id: "C", text: "Tax cuts only" },
            { id: "D", text: "Increasing exports" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Crowding Out", detailed: ["Higher G leads to higher interest rates, reducing private investment."] }
    },
    {
        id: "wa_islm_005",
        type: "MCQ",
        topic: "IS-LM Model",
        difficulty: "hard",
        question: "If the IS curve is very flat, monetary policy is:",
        options: [
            { id: "A", text: "Very effective" },
            { id: "B", text: "Ineffective" },
            { id: "C", text: "Neutral" },
            { id: "D", text: "Destabilizing" }
        ],
        correctAnswer: "A",
        explanation: { concept: "Policy Effectiveness", detailed: ["A flat IS means investment is highly sensitive to interest rates, making monetary policy powerful."] }
    }
];
