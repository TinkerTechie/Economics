
export const demandElasticityQuestions = [
    {
        id: "de_practice_001",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Easy",
        question: "Price elasticity of demand is measured as:",
        options: [
            { id: "A", text: "ΔQ / ΔP" },
            { id: "B", text: "%ΔQ / %ΔP" },
            { id: "C", text: "ΔP / ΔQ" },
            { id: "D", text: "P / Q" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Elasticity Formula", detailed: ["Elasticity is always calculated using percentage changes to be unit-free."], takeaways: ["%ΔQ / %ΔP"] }
    },
    {
        id: "de_practice_002",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Easy",
        question: "If demand is perfectly elastic, the demand curve will be:",
        options: [
            { id: "A", text: "Vertical" },
            { id: "B", text: "Horizontal" },
            { id: "C", text: "Downward sloping" },
            { id: "D", text: "Upward sloping" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Perfect Elasticity", detailed: ["Consumers will buy any amount at a fixed price, but zero if price rises slightly."], takeaways: ["Horizontal line", "Ed = ∞"] }
    },
    {
        id: "de_practice_003",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Medium",
        question: "When total revenue remains constant as price changes, demand is:",
        options: [
            { id: "A", text: "Perfectly elastic" },
            { id: "B", text: "Unit elastic" },
            { id: "C", text: "Inelastic" },
            { id: "D", text: "Perfectly inelastic" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Total Revenue Test", detailed: ["If TR is constant, %ΔQ must exactly offset %ΔP."], takeaways: ["Ed = 1 implies Max TR"] }
    },
    {
        id: "de_practice_004",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Easy",
        question: "If price elasticity of demand is –0.6, demand is:",
        options: [
            { id: "A", text: "Elastic" },
            { id: "B", text: "Inelastic" },
            { id: "C", text: "Unitary elastic" },
            { id: "D", text: "Perfectly elastic" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Inelastic Demand", detailed: ["|Ed| < 1 indicates inelastic demand."], takeaways: ["Unresponsive to price"] }
    },
    {
        id: "de_practice_005",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Easy",
        question: "Cross elasticity of demand between tea and coffee is likely to be:",
        options: [
            { id: "A", text: "Positive" },
            { id: "B", text: "Negative" },
            { id: "C", text: "Zero" },
            { id: "D", text: "Infinite" }
        ],
        correctAnswer: "A",
        explanation: { concept: "Substitutes", detailed: ["Price of coffee up -> Demand for tea up."], takeaways: ["Positive Cross Elasticity = Substitutes"] }
    },
    {
        id: "de_practice_006",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Medium",
        question: "If price rises and total expenditure on a good falls, demand is:",
        options: [
            { id: "A", text: "Elastic" },
            { id: "B", text: "Inelastic" },
            { id: "C", text: "Unitary elastic" },
            { id: "D", text: "Perfectly inelastic" }
        ],
        correctAnswer: "A",
        explanation: { concept: "Expenditure Method", detailed: ["Price and Expenditure move in opposite directions when demand is elastic."], takeaways: ["P↑ TE↓ => Elastic"] }
    },
    {
        id: "de_practice_007",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Easy",
        question: "Income elasticity of an inferior good is:",
        options: [
            { id: "A", text: "Positive" },
            { id: "B", text: "Negative" },
            { id: "C", text: "Zero" },
            { id: "D", text: "Greater than one" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Income Elasticity", detailed: ["Demand falls as income rises for inferior goods."], takeaways: ["Ey < 0"] }
    },
    {
        id: "de_practice_008",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Medium",
        question: "Demand curve of a necessity good is usually:",
        options: [
            { id: "A", text: "Highly elastic" },
            { id: "B", text: "Perfectly elastic" },
            { id: "C", text: "Relatively inelastic" },
            { id: "D", text: "Perfectly inelastic" }
        ],
        correctAnswer: "C",
        explanation: { concept: "Necessities", detailed: ["People buy necessities regardless of price changes."], takeaways: ["Steep demand curve"] }
    },
    {
        id: "de_practice_009",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Easy",
        question: "If two goods are complements, their cross elasticity will be:",
        options: [
            { id: "A", text: "Positive" },
            { id: "B", text: "Negative" },
            { id: "C", text: "Zero" },
            { id: "D", text: "Greater than one" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Complements", detailed: ["Price of car up -> Demand for petrol down."], takeaways: ["Negative Cross Elasticity"] }
    },
    {
        id: "de_practice_010",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Medium",
        question: "Arc elasticity is used when:",
        options: [
            { id: "A", text: "Change in price is very small" },
            { id: "B", text: "Change in price is large" },
            { id: "C", text: "Demand is perfectly elastic" },
            { id: "D", text: "Demand is inelastic" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Arc Method", detailed: ["Used for significant price changes over a segment of the curve."], takeaways: ["Midpoint formula"] }
    },
    {
        id: "de_practice_011",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Easy",
        question: "A vertical demand curve implies:",
        options: [
            { id: "A", text: "Perfectly elastic demand" },
            { id: "B", text: "Perfectly inelastic demand" },
            { id: "C", text: "Unitary elasticity" },
            { id: "D", text: "Elastic demand" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Perfect Inelasticity", detailed: ["Quantity demanded does not change regardless of price."], takeaways: ["Ed = 0"] }
    },
    {
        id: "de_practice_012",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Medium",
        question: "If income elasticity is greater than one, the good is:",
        options: [
            { id: "A", text: "Inferior" },
            { id: "B", text: "Necessity" },
            { id: "C", text: "Luxury" },
            { id: "D", text: "Complement" }
        ],
        correctAnswer: "C",
        explanation: { concept: "Luxury Goods", detailed: ["Demand rises more than proportionately to income."], takeaways: ["Ey > 1"] }
    },
    {
        id: "de_practice_013",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Hard",
        question: "Price elasticity along a straight-line demand curve is:",
        options: [
            { id: "A", text: "Constant" },
            { id: "B", text: "Increasing" },
            { id: "C", text: "Decreasing" },
            { id: "D", text: "Varies from point to point" }
        ],
        correctAnswer: "D",
        explanation: { concept: "Linear Demand", detailed: ["Elasticity varies from infinity (top left) to zero (bottom right)."], takeaways: ["Midpoint = 1"] }
    },
    {
        id: "de_practice_014",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Easy",
        question: "Which of the following affects price elasticity of demand?",
        options: [
            { id: "A", text: "Time period" },
            { id: "B", text: "Availability of substitutes" },
            { id: "C", text: "Nature of good" },
            { id: "D", text: "All of the above" }
        ],
        correctAnswer: "D",
        explanation: { concept: "Determinants of Elasticity", detailed: ["More time/substitutes -> More elastic."], takeaways: ["SPLT (Substitutes, Proportion of Income, Luxury vs Necessity, Time)"] }
    },
    {
        id: "de_practice_015",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Easy",
        question: "If price elasticity is infinite, demand curve is:",
        options: [
            { id: "A", text: "Vertical" },
            { id: "B", text: "Horizontal" },
            { id: "C", text: "Downward sloping" },
            { id: "D", text: "Upward sloping" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Perfect Elasticity", detailed: ["Consumers represent infinite sensitivity to price."], takeaways: ["Horizontal"] }
    },
    {
        id: "de_practice_016",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Easy",
        question: "Demand for salt is generally:",
        options: [
            { id: "A", text: "Highly elastic" },
            { id: "B", text: "Unit elastic" },
            { id: "C", text: "Inelastic" },
            { id: "D", text: "Perfectly elastic" }
        ],
        correctAnswer: "C",
        explanation: { concept: "Necessity/Inexpensive", detailed: ["Salt uses a tiny fraction of income and has few substitutes."], takeaways: ["Low elasticity"] }
    },
    {
        id: "de_practice_017",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Hard",
        question: "If demand curve is rectangular hyperbola, elasticity is:",
        options: [
            { id: "A", text: "Zero" },
            { id: "B", text: "Infinite" },
            { id: "C", text: "Unitary" },
            { id: "D", text: "Varies" }
        ],
        correctAnswer: "C",
        explanation: { concept: "Rectangular Hyperbola", detailed: ["P * Q = Constant (Total Expenditure constant)."], takeaways: ["Ed = 1 everywhere"] }
    },
    {
        id: "de_practice_018",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Medium",
        question: "Total revenue is maximized when elasticity is:",
        options: [
            { id: "A", text: "Zero" },
            { id: "B", text: "Greater than one" },
            { id: "C", text: "Less than one" },
            { id: "D", text: "Equal to one" }
        ],
        correctAnswer: "D",
        explanation: { concept: "Revenue Maximization", detailed: ["MR = 0 when Ed = 1."], takeaways: ["Midpoint of linear demand"] }
    },
    {
        id: "de_practice_019",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Medium",
        question: "If price of petrol increases and demand hardly changes, demand is:",
        options: [
            { id: "A", text: "Elastic" },
            { id: "B", text: "Inelastic" },
            { id: "C", text: "Unitary" },
            { id: "D", text: "Perfectly elastic" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Inelasticity", detailed: ["Small %ΔQ for large %ΔP."], takeaways: ["Essential goods"] }
    },
    {
        id: "de_practice_020",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Medium",
        question: "Midpoint formula is used to calculate:",
        options: [
            { id: "A", text: "Point elasticity" },
            { id: "B", text: "Arc elasticity" },
            { id: "C", text: "Income elasticity" },
            { id: "D", text: "Cross elasticity" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Midpoint Formula", detailed: ["Avoids the basis problem of percentage changes."], takeaways: ["Arc Elasticity"] }
    },
    {
        id: "de_practice_021",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Easy",
        question: "If price elasticity is 0, demand is:",
        options: [
            { id: "A", text: "Perfectly elastic" },
            { id: "B", text: "Perfectly inelastic" },
            { id: "C", text: "Unit elastic" },
            { id: "D", text: "Highly elastic" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Zero Elasticity", detailed: ["No change in quantity demanded."], takeaways: ["Vertical curve"] }
    },
    {
        id: "de_practice_022",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Medium",
        question: "The flatter the demand curve:",
        options: [
            { id: "A", text: "More inelastic" },
            { id: "B", text: "More elastic" },
            { id: "C", text: "Unit elastic" },
            { id: "D", text: "Perfectly inelastic" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Slope vs Elasticity", detailed: ["Generally, flatter curves indicate higher responsiveness (ceteris paribus)."], takeaways: ["Flat = Elastic"] }
    },
    {
        id: "de_practice_023",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Medium",
        question: "When demand is elastic, a fall in price will:",
        options: [
            { id: "A", text: "Decrease total revenue" },
            { id: "B", text: "Increase total revenue" },
            { id: "C", text: "Keep revenue constant" },
            { id: "D", text: "Have no effect" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Revenue & Elasticity", detailed: ["Quantity increases more than price falls, boosting revenue."], takeaways: ["Elastic region -> Cut Price to Gain Revenue"] }
    },
    {
        id: "de_practice_024",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Easy",
        question: "Income elasticity of a normal good is:",
        options: [
            { id: "A", text: "Positive" },
            { id: "B", text: "Negative" },
            { id: "C", text: "Zero" },
            { id: "D", text: "Infinite" }
        ],
        correctAnswer: "A",
        explanation: { concept: "Normal Goods", detailed: ["Demand moves in same direction as income."], takeaways: ["Ey > 0"] }
    },
    {
        id: "de_practice_025",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Easy",
        question: "If two goods are unrelated, cross elasticity will be:",
        options: [
            { id: "A", text: "Positive" },
            { id: "B", text: "Negative" },
            { id: "C", text: "Zero" },
            { id: "D", text: "Greater than one" }
        ],
        correctAnswer: "C",
        explanation: { concept: "Unrelated Goods", detailed: ["Price of shoes doesn't affect demand for cheese."], takeaways: ["Exy = 0"] }
    },
    {
        id: "de_practice_026",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Easy",
        question: "Elasticity of demand depends upon:",
        options: [
            { id: "A", text: "Price level" },
            { id: "B", text: "Tastes" },
            { id: "C", text: "Substitutes available" },
            { id: "D", text: "All of the above" }
        ],
        correctAnswer: "D",
        explanation: { concept: "Determinants", detailed: ["Multiple factors influence responsiveness."], takeaways: ["Comprehensive"] }
    },
    {
        id: "de_practice_027",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Medium",
        question: "Demand for addictive goods is usually:",
        options: [
            { id: "A", text: "Highly elastic" },
            { id: "B", text: "Perfectly elastic" },
            { id: "C", text: "Inelastic" },
            { id: "D", text: "Unit elastic" }
        ],
        correctAnswer: "C",
        explanation: { concept: "Addiction", detailed: ["Consumers are unresponsive to price hikes due to dependency."], takeaways: ["Steep demand"] }
    },
    {
        id: "de_practice_028",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Medium",
        question: "Point elasticity method is suitable when:",
        options: [
            { id: "A", text: "Change in price is small" },
            { id: "B", text: "Change in price is large" },
            { id: "C", text: "Demand is perfectly elastic" },
            { id: "D", text: "Goods are complements" }
        ],
        correctAnswer: "A",
        explanation: { concept: "Point Method", detailed: ["Measures elasticity at a specific point for infinitesimal changes."], takeaways: ["Derivative based"] }
    },
    {
        id: "de_practice_029",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Hard",
        question: "If demand is inelastic, a tax on the good will be borne mostly by:",
        options: [
            { id: "A", text: "Producers" },
            { id: "B", text: "Consumers" },
            { id: "C", text: "Government" },
            { id: "D", text: "Retailers" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Tax Incidence", detailed: ["The side with less elastic curve bears more burden."], takeaways: ["Inelastic demand = Consumer pays"] }
    },
    {
        id: "de_practice_030",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Medium",
        question: "An Engel curve that slopes downward represents:",
        options: [
            { id: "A", text: "Normal good" },
            { id: "B", text: "Inferior good" },
            { id: "C", text: "Luxury good" },
            { id: "D", text: "Giffen good" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Engel Curve", detailed: ["Given Income on Y-axis and Quantity on X-axis? Usually Engel plots Q (y) vs Income (x). Downward sloping means Income rises -> Q falls. Inferior."], takeaways: ["Inverse relation"] }
    }
];
