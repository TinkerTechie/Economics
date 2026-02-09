
export const costTheoryQuestions = [
    {
        id: "cost_practice_001",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Easy",
        question: "In the short run, which of the following is always fixed?",
        options: [
            { id: "A", text: "Total cost" },
            { id: "B", text: "Variable cost" },
            { id: "C", text: "Fixed cost" },
            { id: "D", text: "Marginal cost" }
        ],
        correctAnswer: "C",
        explanation: { concept: "Fixed Cost", detailed: ["By definition, fixed cost (like rent, salary of permanent staff) does not change with output in the short run."], takeaways: ["Independent of Q"] }
    },
    {
        id: "cost_practice_002",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Easy",
        question: "Total Cost (TC) is defined as:",
        options: [
            { id: "A", text: "FC – VC" },
            { id: "B", text: "FC + VC" },
            { id: "C", text: "VC – FC" },
            { id: "D", text: "MC × Q" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Total Cost", detailed: ["Total Cost is the sum of Total Fixed Cost and Total Variable Cost."], takeaways: ["TC = TFC + TVC"] }
    },
    {
        id: "cost_practice_003",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Easy",
        question: "Marginal cost is calculated as:",
        options: [
            { id: "A", text: "TC / Q" },
            { id: "B", text: "ΔTC / ΔQ" },
            { id: "C", text: "AVC + AFC" },
            { id: "D", text: "TVC / Q" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Marginal Cost", detailed: ["Cost of producing one additional unit."], takeaways: ["Slope of TC curve"] }
    },
    {
        id: "cost_practice_004",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Medium",
        question: "Average fixed cost curve is:",
        options: [
            { id: "A", text: "U-shaped" },
            { id: "B", text: "Horizontal" },
            { id: "C", text: "Downward sloping rectangular hyperbola" },
            { id: "D", text: "Upward sloping" }
        ],
        correctAnswer: "C",
        explanation: { concept: "AFC Curve", detailed: ["As Q increases, FC is spread over more units, so AFC falls continuously. P*Q = Constant (Rectangular Hyperbola)."], takeaways: ["Asymptotic to axes"] }
    },
    {
        id: "cost_practice_005",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Easy",
        question: "Which cost does not exist in the long run?",
        options: [
            { id: "A", text: "Variable cost" },
            { id: "B", text: "Fixed cost" },
            { id: "C", text: "Marginal cost" },
            { id: "D", text: "Average cost" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Long Run", detailed: ["In the long run, all factors are variable, so there are no fixed costs."], takeaways: ["Everything is variable"] }
    },
    {
        id: "cost_practice_006",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Medium",
        question: "The marginal cost curve intersects the average cost curve at:",
        options: [
            { id: "A", text: "Its maximum point" },
            { id: "B", text: "Its minimum point" },
            { id: "C", text: "Any random point" },
            { id: "D", text: "Never intersects" }
        ],
        correctAnswer: "B",
        explanation: { concept: "MC-AC Relation", detailed: ["When MC < AC, AC falls. When MC > AC, AC rises. Thus meaningful intersection is at min AC."], takeaways: ["Efficient Scale"] }
    },
    {
        id: "cost_practice_007",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Easy",
        question: "If MC is less than AC, then:",
        options: [
            { id: "A", text: "AC is rising" },
            { id: "B", text: "AC is falling" },
            { id: "C", text: "AC is constant" },
            { id: "D", text: "TC is falling" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Average-Marginal Relation", detailed: ["If the marginal addition is less than average, the average decreases."], takeaways: ["Pulling down"] }
    },
    {
        id: "cost_practice_008",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Medium",
        question: "U-shape of AC curve in short run is due to:",
        options: [
            { id: "A", text: "Increasing returns only" },
            { id: "B", text: "Decreasing returns only" },
            { id: "C", text: "Law of variable proportions" },
            { id: "D", text: "Constant returns" }
        ],
        correctAnswer: "C",
        explanation: { concept: "Short Run AC", detailed: ["Initially increasing returns (falling AC) then diminishing returns (rising AC)."], takeaways: ["Variable Proportions"] }
    },
    {
        id: "cost_practice_009",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Easy",
        question: "In the long run:",
        options: [
            { id: "A", text: "All costs are fixed" },
            { id: "B", text: "All costs are variable" },
            { id: "C", text: "Only labor cost is variable" },
            { id: "D", text: "Capital cost is fixed" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Long Run Costs", detailed: ["Firms can adjust scale of operation."], takeaways: ["Zero Fixed Costs"] }
    },
    {
        id: "cost_practice_010",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Easy",
        question: "Average variable cost is:",
        options: [
            { id: "A", text: "TVC / Q" },
            { id: "B", text: "TC / Q" },
            { id: "C", text: "FC / Q" },
            { id: "D", text: "MC / Q" }
        ],
        correctAnswer: "A",
        explanation: { concept: "AVC Formula", detailed: ["Total Variable Cost divided by Quantity."], takeaways: ["Variable cost per unit"] }
    },
    {
        id: "cost_practice_011",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Medium",
        question: "Which curve is always below AC curve?",
        options: [
            { id: "A", text: "AFC" },
            { id: "B", text: "AVC" },
            { id: "C", text: "MC" },
            { id: "D", text: "TC" }
        ],
        correctAnswer: "B",
        explanation: { concept: "AC Components", detailed: ["AC = AVC + AFC. Since AFC > 0, AC is always > AVC."], takeaways: ["Vertical distance is AFC"] }
    },
    {
        id: "cost_practice_012",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Medium",
        question: "When marginal cost is rising:",
        options: [
            { id: "A", text: "AVC must be falling" },
            { id: "B", text: "AVC may be rising or falling" },
            { id: "C", text: "AC must be falling" },
            { id: "D", text: "TC must be falling" }
        ],
        correctAnswer: "B",
        explanation: { concept: "MC Behavior", detailed: ["MC can rise while still being below AVC (AVC falling) or above AVC (AVC rising)."], takeaways: ["Stage II"] }
    },
    {
        id: "cost_practice_013",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Easy",
        question: "Break-even point occurs when:",
        options: [
            { id: "A", text: "TR = TC" },
            { id: "B", text: "MR = MC" },
            { id: "C", text: "P = AVC" },
            { id: "D", text: "TC is minimum" }
        ],
        correctAnswer: "A",
        explanation: { concept: "Break Even", detailed: ["No profit, no loss. P = ATC."], takeaways: ["Normal Profit"] }
    },
    {
        id: "cost_practice_014",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Easy",
        question: "Opportunity cost refers to:",
        options: [
            { id: "A", text: "Accounting cost" },
            { id: "B", text: "Historical cost" },
            { id: "C", text: "Next best alternative forgone" },
            { id: "D", text: "Explicit cost only" }
        ],
        correctAnswer: "C",
        explanation: { concept: "Opportunity Cost", detailed: ["The value of the next best alternative given up to do something."], takeaways: ["Implicit Cost"] }
    },
    {
        id: "cost_practice_015",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Medium",
        question: "Economic cost includes:",
        options: [
            { id: "A", text: "Only explicit cost" },
            { id: "B", text: "Only implicit cost" },
            { id: "C", text: "Both explicit and implicit cost" },
            { id: "D", text: "Fixed cost only" }
        ],
        correctAnswer: "C",
        explanation: { concept: "Economic Cost", detailed: ["Accounting Cost (Explicit) + Opportunity Cost (Implicit)."], takeaways: ["Broader than accounting"] }
    },
    {
        id: "cost_practice_016",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Medium",
        question: "The envelope of short-run average cost curves forms:",
        options: [
            { id: "A", text: "Short run AC" },
            { id: "B", text: "Marginal cost curve" },
            { id: "C", text: "Long run average cost curve" },
            { id: "D", text: "Total cost curve" }
        ],
        correctAnswer: "C",
        explanation: { concept: "Envelope Curve", detailed: ["LRAC wraps around the minimum points (or tangency points) of all possible SRAC curves."], takeaways: ["Planning Curve"] }
    },
    {
        id: "cost_practice_017",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Medium",
        question: "If MC curve lies above AC curve, AC will:",
        options: [
            { id: "A", text: "Rise" },
            { id: "B", text: "Fall" },
            { id: "C", text: "Remain constant" },
            { id: "D", text: "Become negative" }
        ],
        correctAnswer: "A",
        explanation: { concept: "MC-AC Dynamics", detailed: ["Adding a unit that costs more than average pulls the average up."], takeaways: ["Rising AC"] }
    },
    {
        id: "cost_practice_018",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Hard",
        question: "Shut-down point of a firm is where:",
        options: [
            { id: "A", text: "P = ATC" },
            { id: "B", text: "P = AVC" },
            { id: "C", text: "P = MC" },
            { id: "D", text: "TR = TC" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Shut Down Rule", detailed: ["In short run, if P < AVC, firm loses more by operating than by shutting down (loss = FC)."], takeaways: ["Cover variable costs"] }
    },
    {
        id: "cost_practice_019",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Easy",
        question: "Long run average cost curve is also called:",
        options: [
            { id: "A", text: "Planning curve" },
            { id: "B", text: "Variable cost curve" },
            { id: "C", text: "Short run curve" },
            { id: "D", text: "Fixed cost curve" }
        ],
        correctAnswer: "A",
        explanation: { concept: "Planning Curve", detailed: ["Because it helps firms decide the optimal plant size for future output."], takeaways: ["LRAC"] }
    },
    {
        id: "cost_practice_020",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Medium",
        question: "Which cost curve never touches the horizontal axis?",
        options: [
            { id: "A", text: "AFC" },
            { id: "B", text: "AVC" },
            { id: "C", text: "AC" },
            { id: "D", text: "MC" }
        ],
        correctAnswer: "A",
        explanation: { concept: "AFC Asymptote", detailed: ["AFC = TFC/Q. As Q -> infinity, AFC -> 0 but never touches zero."], takeaways: ["Rectangular Hyperbola"] }
    },
    {
        id: "cost_practice_021",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Medium",
        question: "If output is zero, which cost is positive?",
        options: [
            { id: "A", text: "Variable cost" },
            { id: "B", text: "Marginal cost" },
            { id: "C", text: "Fixed cost" },
            { id: "D", text: "Average cost" }
        ],
        correctAnswer: "C",
        explanation: { concept: "Fixed Costs", detailed: ["Costs incurred even at zero output (Sunk costs, Rent)."], takeaways: ["Intercept of TC"] }
    },
    {
        id: "cost_practice_022",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Medium",
        question: "Economies of scale occur when:",
        options: [
            { id: "A", text: "LRAC rises" },
            { id: "B", text: "LRAC falls" },
            { id: "C", text: "MC rises" },
            { id: "D", text: "AVC rises" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Economies of Scale", detailed: ["Cost per unit falls as scale of production increases."], takeaways: ["Falling LRAC"] }
    },
    {
        id: "cost_practice_023",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Medium",
        question: "Diseconomies of scale cause LRAC to:",
        options: [
            { id: "A", text: "Fall" },
            { id: "B", text: "Rise" },
            { id: "C", text: "Remain constant" },
            { id: "D", text: "Become zero" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Diseconomies of Scale", detailed: ["Managerial inefficiencies and coordination problems increase unit cost at large scales."], takeaways: ["Rising LRAC"] }
    },
    {
        id: "cost_practice_024",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Easy",
        question: "Explicit costs are:",
        options: [
            { id: "A", text: "Opportunity costs" },
            { id: "B", text: "Accounting costs" },
            { id: "C", text: "Implicit costs" },
            { id: "D", text: "Sunk costs" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Explicit Costs", detailed: ["Actual monetary payments made by the firm."], takeaways: ["Out-of-pocket"] }
    },
    {
        id: "cost_practice_025",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Medium",
        question: "Which cost curve is derived from TC curve?",
        options: [
            { id: "A", text: "AC" },
            { id: "B", text: "MC" },
            { id: "C", text: "AFC" },
            { id: "D", text: "All of the above" }
        ],
        correctAnswer: "D",
        explanation: { concept: "Derivation", detailed: ["AC = TC/Q, MC = dTC/dQ. All are derived from Total Cost."], takeaways: ["Fundamental relation"] }
    },
    {
        id: "cost_practice_026",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Medium",
        question: "If AFC decreases, it implies:",
        options: [
            { id: "A", text: "Output is falling" },
            { id: "B", text: "Output is rising" },
            { id: "C", text: "Fixed cost is rising" },
            { id: "D", text: "Variable cost is rising" }
        ],
        correctAnswer: "B",
        explanation: { concept: "AFC Slope", detailed: ["Since FC is constant, AFC decreases hyper-bolically as Output (denominator) increases."], takeaways: ["Spreading Overhead"] }
    },
    {
        id: "cost_practice_027",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Medium",
        question: "The minimum point of AC curve is where:",
        options: [
            { id: "A", text: "AC = MC" },
            { id: "B", text: "AVC = AFC" },
            { id: "C", text: "TC is minimum" },
            { id: "D", text: "MC is zero" }
        ],
        correctAnswer: "A",
        explanation: { concept: "Minimum AC", detailed: ["MC intersects AC at its minimum."], takeaways: ["Productive Efficiency"] }
    },
    {
        id: "cost_practice_028",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Easy",
        question: "Which cost curve is not U-shaped?",
        options: [
            { id: "A", text: "MC" },
            { id: "B", text: "AVC" },
            { id: "C", text: "AC" },
            { id: "D", text: "AFC" }
        ],
        correctAnswer: "D",
        explanation: { concept: "Cost Curve Shapes", detailed: ["AFC is a rectangular hyperbola (continuously falling). Others are U-shaped."], takeaways: ["No minimum for AFC"] }
    },
    {
        id: "cost_practice_029",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Easy",
        question: "Sunk costs are:",
        options: [
            { id: "A", text: "Recoverable" },
            { id: "B", text: "Irrecoverable" },
            { id: "C", text: "Variable" },
            { id: "D", text: "Marginal" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Sunk Cost Fallacy", detailed: ["Costs that have been incurred and cannot be recovered. Should be ignored in decision making."], takeaways: ["No opportunity cost"] }
    },
    {
        id: "cost_practice_030",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Medium",
        question: "In the short run, a firm will continue production as long as:",
        options: [
            { id: "A", text: "P ≥ ATC" },
            { id: "B", text: "P ≥ AVC" },
            { id: "C", text: "P = MC" },
            { id: "D", text: "TR ≥ TC" }
        ],
        correctAnswer: "B",
        explanation: { concept: "Shut Down Condition", detailed: ["As long as price covers variable costs, the firm contributes to fixed costs."], takeaways: ["Contribution Margin"] }
    }
];
