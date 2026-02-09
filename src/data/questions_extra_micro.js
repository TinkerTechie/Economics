
export const extraMicroQuestions = [
    {
        id: "micro_practice_001",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Consumer Theory",
        difficulty: "Easy",
        question: "If a consumer’s income increases and demand for a good falls, the good is:",
        options: [
            { id: "A", text: "Normal good" },
            { id: "B", text: "Inferior good" },
            { id: "C", text: "Luxury good" },
            { id: "D", text: "Giffen good" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Inferior Goods", detailed: ["An inferior good is one whose demand decreases when consumer income rises."], takeaways: ["Inverse relationship with income"] }
    },
    {
        id: "micro_practice_002",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Easy",
        question: "Price elasticity of demand is defined as:",
        options: [
            { id: "A", text: "Change in quantity divided by change in price" },
            { id: "B", text: "Percentage change in quantity demanded divided by percentage change in price" },
            { id: "C", text: "Slope of the demand curve" },
            { id: "D", text: "Ratio of income to price" }
        ],
        correctAnswer: "B",
        explanation: { concept: "PED Definition", detailed: ["Price elasticity measures responsiveness and is always calculated in percentage terms."], takeaways: ["%ΔQ / %ΔP"] }
    },
    {
        id: "micro_practice_003",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Consumer Theory",
        difficulty: "Medium",
        question: "The slope of the budget line is given by:",
        options: [
            { id: "A", text: "Px / Py" },
            { id: "B", text: "Py / Px" },
            { id: "C", text: "–Px / Py" },
            { id: "D", text: "–Py / Px" }
        ],
        correctAnswer: "C",
        explanation: { concept: "Budget Constraint", detailed: ["The budget line equation is Px·x + Py·y = M, so slope = –Px/Py."], takeaways: ["Price Ratio represents opportunity cost"] }
    },
    {
        id: "micro_practice_004",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Consumer Theory",
        difficulty: "Medium",
        question: "At the consumer equilibrium:",
        options: [
            { id: "A", text: "MUx = MUy" },
            { id: "B", text: "MUx / MUy = Px / Py" }, // This is also true, equal to C
            { id: "C", text: "MUx / Px = MUy / Py" },
            { id: "D", text: "Px = Py" }
        ],
        correctAnswer: "C",
        explanation: { concept: "Equimarginal Principle", detailed: ["Utility is maximized when marginal utility per rupee is equal across goods."], takeaways: ["MU/P must be equal"] }
    },
    {
        id: "micro_practice_005",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Consumer Theory",
        difficulty: "Medium",
        question: "Indifference curves are convex to the origin due to:",
        options: [
            { id: "A", text: "Law of demand" },
            { id: "B", text: "Diminishing marginal utility" },
            { id: "C", text: "Increasing marginal rate of substitution" },
            { id: "D", text: "Diminishing marginal rate of substitution" }
        ],
        correctAnswer: "D",
        explanation: { concept: "Convexity of IC", detailed: ["Convexity reflects diminishing MRS between two goods."], takeaways: ["Consumers prefer averages to extremes"] }
    },
    {
        id: "micro_practice_006",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Production Theory",
        difficulty: "Medium",
        question: "If all inputs are doubled and output more than doubles, it is called:",
        options: [
            { id: "A", text: "Constant returns to scale" },
            { id: "B", text: "Increasing returns to scale" },
            { id: "C", text: "Decreasing returns to scale" },
            { id: "D", text: "Diminishing marginal returns" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Returns to Scale", detailed: ["Output increasing more than proportionately indicates IRS."], takeaways: ["Scale > 1 -> IRS"] }
    },
    {
        id: "micro_practice_007",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Hard",
        question: "The marginal cost curve intersects the average variable cost curve at:",
        options: [
            { id: "A", text: "Its maximum point" },
            { id: "B", text: "Its minimum point" },
            { id: "C", text: "Any random point" },
            { id: "D", text: "Never intersects" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Cost Curves Relation", detailed: ["MC always cuts AVC and ATC at their minimum points."], takeaways: ["When MC < AVC, AVC falls. When MC > AVC, AVC rises."] }
    },
    {
        id: "micro_practice_008",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Easy",
        question: "In perfect competition, a firm is a:",
        options: [
            { id: "A", text: "Price maker" },
            { id: "B", text: "Price taker" },
            { id: "C", text: "Monopolist" },
            { id: "D", text: "Oligopolist" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Perfect Competition", detailed: ["Individual firms cannot influence price in perfect competition."], takeaways: ["Horizontal demand curve for firm"] }
    },
    {
        id: "micro_practice_009",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Easy",
        question: "A monopolist maximizes profit where:",
        options: [
            { id: "A", text: "P = MC" },
            { id: "B", text: "MR = MC" },
            { id: "C", text: "AR = AC" },
            { id: "D", text: "TR = TC" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Profit Maximization", detailed: ["All firms maximize profit at MR = MC; for monopoly MR < P."], takeaways: ["Universal rule: MR=MC"] }
    },
    {
        id: "micro_practice_010",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Easy",
        question: "A perfectly elastic demand curve is:",
        options: [
            { id: "A", text: "Vertical" },
            { id: "B", text: "Downward sloping" },
            { id: "C", text: "Horizontal" },
            { id: "D", text: "Upward sloping" }
        ],
        correctAnswer: "C",
        explanation: { concept: "Elasticity Shapes", detailed: ["Perfect elasticity means consumers buy any amount at a fixed price."], takeaways: ["Ed = Infinity"] }
    },
    {
        id: "micro_practice_011",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Consumer Theory",
        difficulty: "Medium",
        question: "A Giffen good must necessarily be:",
        options: [
            { id: "A", text: "Luxury good" },
            { id: "B", text: "Normal good" },
            { id: "C", text: "Inferior good" },
            { id: "D", text: "Substitute good" }
        ],
        correctAnswer: "C",
        explanation: { concept: "Giffen Goods", detailed: ["All Giffen goods are inferior goods with strong income effect overcoming substitution effect."], takeaways: ["Giffen -> Inferior, but Inferior !-> Giffen"] }
    },
    {
        id: "micro_practice_012",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Production Theory",
        difficulty: "Medium",
        question: "Isoquants are typically:",
        options: [
            { id: "A", text: "Concave to origin" },
            { id: "B", text: "Convex to origin" },
            { id: "C", text: "Straight lines" },
            { id: "D", text: "Upward sloping" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Isoquant Properties", detailed: ["Convexity reflects diminishing Marginal Rate of Technical Substitution (MRTS)."], takeaways: ["Similar to Indifference Curves"] }
    },
    {
        id: "micro_practice_013",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Hard",
        question: "A firm in perfect competition will shut down in the short run if:",
        options: [
            { id: "A", text: "P < AVC" },
            { id: "B", text: "P < ATC" },
            { id: "C", text: "P = MC" },
            { id: "D", text: "P > AVC" }
        ],
        correctAnswer: "A",
        explanation: { concept: "Shut Down Rule", detailed: ["Below AVC, firm cannot covers its variable costs and loses more by producing than by shutting down."], takeaways: ["Fixed costs are sunk in SR"] }
    },
    {
        id: "micro_practice_014",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Medium",
        question: "Price discrimination is possible only when:",
        options: [
            { id: "A", text: "Resale is possible" },
            { id: "B", text: "Markets can be separated" },
            { id: "C", text: "Demand is identical" },
            { id: "D", text: "Perfect competition exists" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Price Discrimination", detailed: ["Monopolist must prevent resale (arbitrage) to charge different prices in different markets."], takeaways: ["Segmented markets required"] }
    },
    {
        id: "micro_practice_015",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Consumer Theory",
        difficulty: "Hard",
        question: "Substitution effect of a price change is always:",
        options: [
            { id: "A", text: "Positive" },
            { id: "B", text: "Negative" },
            { id: "C", text: "Zero" },
            { id: "D", text: "Indeterminate" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Slutsky Equation", detailed: ["When price rises, substitution effect always reduces quantity demanded (moves opposite to price)."], takeaways: ["Always negative (law of demand holds for SE)"] }
    },
    {
        id: "micro_practice_016",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Medium",
        question: "If cross price elasticity between X and Y is positive, the goods are:",
        options: [
            { id: "A", text: "Complements" },
            { id: "B", text: "Substitutes" },
            { id: "C", text: "Unrelated" },
            { id: "D", text: "Inferior" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Cross Elasticity", detailed: ["Positive cross elasticity indicates that an increase in price of Y increases demand for X (Substitutes)."], takeaways: ["Negative = Complements"] }
    },
    {
        id: "micro_practice_017",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Medium",
        question: "In the long run:",
        options: [
            { id: "A", text: "All costs are fixed" },
            { id: "B", text: "All costs are variable" },
            { id: "C", text: "Only labor is variable" },
            { id: "D", text: "Capital is fixed" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Long Run Pdn", detailed: ["There are no fixed factors generally in the long run; firms can adjust all inputs."], takeaways: ["Scale changes possible"] }
    },
    {
        id: "micro_practice_018",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Consumer Theory",
        difficulty: "Easy",
        question: "Engel curve shows relationship between:",
        options: [
            { id: "A", text: "Price and quantity" },
            { id: "B", text: "Income and quantity" },
            { id: "C", text: "Price and income" },
            { id: "D", text: "Income and utility" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Engel Curve", detailed: ["Engel curve relates income to quantity demanded."], takeaways: ["Derived from ICC"] }
    },
    {
        id: "micro_practice_019",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Production Theory",
        difficulty: "Medium",
        question: "Law of diminishing marginal product states that:",
        options: [
            { id: "A", text: "MP always increases" },
            { id: "B", text: "MP eventually falls as input increases" },
            { id: "C", text: "AP always rises" },
            { id: "D", text: "TP always falls" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Diminishing Returns", detailed: ["Holding other inputs fixed, additional units of variable input eventually yield lower additional output."], takeaways: ["Short run phenomenon"] }
    },
    {
        id: "micro_practice_020",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Medium",
        question: "Break-even point occurs when:",
        options: [
            { id: "A", text: "TR = TC" },
            { id: "B", text: "TR = MC" },
            { id: "C", text: "MR = MC" },
            { id: "D", text: "P = AVC" }
        ],
        correctAnswer: "A",
        explanation: { concept: "Break Even", detailed: ["At break-even, total revenue equals total cost (Zero Economic Profit)."], takeaways: ["Normal Profit"] }
    }
];
