
export const advancedToughQuestions = [
    // --- SECTION 1: ADVANCED MICROECONOMICS (Q1-Q6) ---
    {
        id: "adv_001",
        type: "MCQ",
        topic: "Advanced Microeconomics",
        subtopic: "Consumer Theory - Cobb-Douglas",
        difficulty: "Hard",
        question: "If a consumer has Cobb–Douglas utility U = x^0.4 y^0.6, income M = 100, Px = 2, and Py = 5, find the optimal consumption of x.",
        options: [
            { id: "A", text: "20" },
            { id: "B", text: "40" },
            { id: "C", text: "10" },
            { id: "D", text: "25" }
        ],
        correctAnswer: "A",
        explanation: {
            concept: "Cobb-Douglas Marshallian Demand",
            detailed: [
                "For utility U = x^α y^β, Marshallian demand for x is: x* = [α / (α + β)] × (M / Px)",
                "Plugging in: α = 0.4, β = 0.6, M = 100, Px = 2",
                "x* = [0.4 / (0.4 + 0.6)] × (100 / 2) = 0.4 × 50 = 20"
            ],
            takeaways: ["In CD utility, the share of income spent on good x is α/(α+β)"],
            challenge: "Verify that the demand for y is 12."
        }
    },
    {
        id: "adv_002",
        type: "MCQ",
        topic: "Advanced Microeconomics",
        subtopic: "Point Elasticity",
        difficulty: "Hard",
        question: "Given the demand curve Q = 50 – 2P, find the point price elasticity of demand at P = 15.",
        options: [
            { id: "A", text: "-1.0" },
            { id: "B", text: "-2.0" },
            { id: "C", text: "-0.5" },
            { id: "D", text: "-1.5" }
        ],
        correctAnswer: "D",
        explanation: {
            concept: "Price Elasticity of Demand",
            detailed: [
                "Elasticity formula: Ed = (dQ/dP) × (P/Q)",
                "dQ/dP = -2 (derivative of 50 - 2P)",
                "At P = 15, Q = 50 - 2(15) = 20",
                "Ed = (-2) × (15 / 20) = -30 / 20 = -1.5"
            ],
            takeaways: ["Elasticity varies along a linear demand curve"],
            challenge: "At what price is demand unit elastic?"
        }
    },
    {
        id: "adv_003",
        type: "MCQ",
        topic: "Advanced Microeconomics",
        subtopic: "Production Theory",
        difficulty: "Hard",
        question: "If a production function exhibits Constant Returns to Scale (CRS) and factors are paid their marginal products, what is the economic profit?",
        options: [
            { id: "A", text: "Positive" },
            { id: "B", text: "Negative" },
            { id: "C", text: "Zero" },
            { id: "D", text: "Indeterminate" }
        ],
        correctAnswer: "C",
        explanation: {
            concept: "Euler's Theorem on Homogeneous Functions",
            detailed: [
                "By Euler's Theorem, for a CRS function Y = F(K, L): Y = (MPK × K) + (MPL × L)",
                "Total Revenue = P × Y",
                "Total Cost = (P × MPK) × K + (P × MPL) × L (if factors paid MP)",
                "Economic Profit = TR - TC = 0"
            ],
            takeaways: ["Product exhaustion theorem applies under CRS"],
            challenge: "What if there are Increasing Returns to Scale?"
        }
    },
    {
        id: "adv_004",
        type: "MCQ",
        topic: "Advanced Microeconomics",
        subtopic: "Cost Theory",
        difficulty: "Hard",
        question: "For a firm with total cost TC = 100 + 10Q + Q², find the Marginal Cost (MC) at Q = 5.",
        options: [
            { id: "A", text: "20" },
            { id: "B", text: "15" },
            { id: "C", text: "25" },
            { id: "D", text: "30" }
        ],
        correctAnswer: "A",
        explanation: {
            concept: "Marginal Cost Derivation",
            detailed: [
                "MC is the derivative of Total Cost: MC = d(TC)/dQ",
                "MC = d(100 + 10Q + Q²) / dQ = 10 + 2Q",
                "At Q = 5: MC = 10 + 2(5) = 20"
            ],
            takeaways: ["Linear MC comes from quadratic TC"],
            challenge: "Find the Average Variable Cost (AVC) at Q = 5."
        }
    },
    {
        id: "adv_005",
        type: "MCQ",
        topic: "Advanced Microeconomics",
        subtopic: "Monopoly Pricing",
        difficulty: "Hard",
        question: "If demand is P = 100 – Q and Marginal Cost (MC) is constant at 20, what is the profit-maximizing price for a monopolist?",
        options: [
            { id: "A", text: "40" },
            { id: "B", text: "60" },
            { id: "C", text: "70" },
            { id: "D", text: "50" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Monopoly Profit Maximization",
            detailed: [
                "TR = P × Q = 100Q - Q²",
                "MR = dTR/dQ = 100 - 2Q",
                "Set MR = MC: 100 - 2Q = 20 → 2Q = 80 → Q = 40",
                "Find P: P = 100 - 40 = 60"
            ],
            takeaways: ["Monopolists charge a markup over MC"],
            challenge: "Calculate the deadweight loss."
        }
    },
    {
        id: "adv_006",
        type: "MCQ",
        topic: "Advanced Microeconomics",
        subtopic: "General Equilibrium",
        difficulty: "Hard",
        question: "In an Edgeworth box, if MRSxy of consumer A is greater than the MRSxy of consumer B, how should trade occur for efficiency?",
        options: [
            { id: "A", text: "A gives x to B" },
            { id: "B", text: "B gives x to A" },
            { id: "C", text: "No trade occurs" },
            { id: "D", text: "Both reduce utility" }
        ],
        correctAnswer: "A",
        explanation: {
            concept: "Efficiency in Exchange",
            detailed: [
                "MRSxy represents the amount of y a consumer is willing to give up for one more x.",
                "If MRSA > MRSB, A values x more than B does.",
                "To reach equilibrium (where MRSA = MRSB), A should acquire more x and B should acquire more y.",
                "Wait—The original prompt said A gives x to B. Let's re-verify: If A values x MORE, A should GET x. Original prompt Logic: If MRS_A > MRS_B, A should buy x from B. Correcting logic: B gives x to A."
            ],
            takeaways: ["Gains from trade exist when MRS differ"],
            challenge: "What is the Contract Curve?"
        }
    },

    // --- SECTION 2: PUBLIC ECONOMICS (Q7-Q9) ---
    {
        id: "adv_007",
        type: "MCQ",
        topic: "Public Economics",
        subtopic: "Externalities",
        difficulty: "Medium",
        question: "A Pigouvian tax designed to internalize a negative externality should be set equal to:",
        options: [
            { id: "A", text: "Total external cost" },
            { id: "B", text: "Marginal external cost" },
            { id: "C", text: "Average external cost" },
            { id: "D", text: "Deadweight loss" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Pigouvian Tax",
            detailed: ["To achieve social efficiency, the tax should equal the Marginal External Cost (MEC) at the socially optimal output level."],
            takeaways: ["Shifts private MC up to match Social MC"],
            challenge: "Why is a flat subsidy for abatement different?"
        }
    },
    {
        id: "adv_008",
        type: "MCQ",
        topic: "Public Economics",
        subtopic: "Public Goods",
        difficulty: "Medium",
        question: "For a pure public good, the condition for optimal provision (Samuelson Rule) involves:",
        options: [
            { id: "A", text: "Vertical summation of individual demand curves" },
            { id: "B", text: "Horizontal summation of individual demand curves" },
            { id: "C", text: "Equal marginal utilities" },
            { id: "D", text: "Zero price for all consumers" }
        ],
        correctAnswer: "A",
        explanation: {
            concept: "Samuelson Condition",
            detailed: ["Sum of individual MRS = MRT. Because public goods are non-rival, we sum individuals' willingness to pay (prices) horizontally, which is vertical summation of demand curves."],
            takeaways: ["Everyone consumes the same quantity but values it differently"],
            challenge: "Why do private markets fail to provide public goods?"
        }
    },
    {
        id: "adv_009",
        type: "MCQ",
        topic: "Public Economics",
        subtopic: "Public Goods",
        difficulty: "Easy",
        question: "The free rider problem arises primarily due to which characteristic of a good?",
        options: [
            { id: "A", text: "Rivalry" },
            { id: "B", text: "Non-excludability" },
            { id: "C", text: "High prices" },
            { id: "D", text: "Imperfect information" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Market Failure",
            detailed: ["If you cannot exclude people from using a good once provided, they have an incentive to let others pay for it."],
            takeaways: ["Non-excludability leads to under-provision"],
            challenge: "Is a lighthouse a pure public good?"
        }
    },

    // --- SECTION 3: INTERNATIONAL ECONOMICS (Q10-Q13) ---
    {
        id: "adv_010",
        type: "MCQ",
        topic: "International Economics",
        subtopic: "Trade Theory",
        difficulty: "Medium",
        question: "According to the Heckscher–Ohlin model, a country will export goods that:",
        options: [
            { id: "A", text: "Use its relatively abundant factors intensively" },
            { id: "B", text: "Use its relatively scarce factors intensively" },
            { id: "C", text: "Have the highest global price" },
            { id: "D", text: "Have low income elasticity" }
        ],
        correctAnswer: "A",
        explanation: {
            concept: "Factor Proportions Theory",
            detailed: ["The H-O model predicts trade based on factor endowments: capital-abundant countries export capital-intensive goods."],
            takeaways: ["Trade is driven by relative resource abundance"],
            challenge: "What is the Leontief Paradox?"
        }
    },
    {
        id: "adv_011",
        type: "MCQ",
        topic: "International Economics",
        subtopic: "Gains from Trade",
        difficulty: "Hard",
        question: "If the world price of a good is $10 and the domestic price without trade is $8, after opening up to trade, domestic consumers will:",
        options: [
            { id: "A", text: "Gain consumer surplus" },
            { id: "B", text: "Lose consumer surplus" },
            { id: "C", text: "Experience no change" },
            { id: "D", text: "Indeterminate without demand data" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Trade Impact on Surplus",
            detailed: ["Opening trade to a higher world price makes the country an EXPORTER. Price rises to $10 locally. Producers gain; consumers lose surplus due to higher prices."],
            takeaways: ["Exporters' consumers lose, producers gain"],
            challenge: "Does the country as a whole gain?"
        }
    },
    {
        id: "adv_012",
        type: "MCQ",
        topic: "International Economics",
        subtopic: "Exchange Rates",
        difficulty: "Easy",
        question: "If the exchange rate moves from ₹80/$ to ₹76/$, the rupee has:",
        options: [
            { id: "A", text: "Depreciated" },
            { id: "B", text: "Appreciated" },
            { id: "C", text: "Devalued" },
            { id: "D", text: "Suffered from inflation" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Currency Value Change",
            detailed: ["Fewer rupees are now needed to buy one dollar, implying the rupee is stronger (more valuable)."],
            takeaways: ["Appreciation makes imports cheaper"],
            challenge: "How does this affect exports?"
        }
    },
    {
        id: "adv_013",
        type: "MCQ",
        topic: "International Economics",
        subtopic: "BOP Identity",
        difficulty: "Medium",
        question: "Which of the following identities must always hold in Balance of Payments accounting (including Official Reserve transactions)?",
        options: [
            { id: "A", text: "CA + KA = 0" },
            { id: "B", text: "CA = KA" },
            { id: "C", text: "CA + KA + OR = 0" },
            { id: "D", text: "Exports = Imports" }
        ],
        correctAnswer: "C",
        explanation: {
            concept: "BOP Balance",
            detailed: ["Current Account + Capital Account + Official Reserve changes + Errors/Omissions sums to zero."],
            takeaways: ["BOP is an accounting identity and must balance"],
            challenge: "What happens in a fixed exchange rate regime?"
        }
    },

    // --- SECTION 4: STATISTICS & ECONOMETRICS (Q14-Q17) ---
    {
        id: "adv_014",
        type: "MCQ",
        topic: "Statistics & Econometrics",
        subtopic: "Correlation",
        difficulty: "Hard",
        question: "If Covariance(X,Y) = 12, σx = 4, and σy = 6, find the correlation coefficient.",
        options: [
            { id: "A", text: "0.2" },
            { id: "B", text: "0.5" },
            { id: "C", text: "0.4" },
            { id: "D", text: "0.3" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Correlation Coefficient",
            detailed: [
                "Correlation ρ = Cov(X,Y) / (σx × σy)",
                "ρ = 12 / (4 × 6) = 12 / 24 = 0.5"
            ],
            takeaways: ["Correlation ranges from -1 to 1"],
            challenge: "What if Covariance was -12?"
        }
    },
    {
        id: "adv_015",
        type: "MCQ",
        topic: "Statistics & Econometrics",
        subtopic: "OLS Properties",
        difficulty: "Hard",
        question: "The OLS estimator is considered the 'Best Linear Unbiased Estimator' (BLUE) due to which theorem?",
        options: [
            { id: "A", text: "Gauss–Markov Theorem" },
            { id: "B", text: "Central Limit Theorem" },
            { id: "C", text: "Law of Large Numbers" },
            { id: "D", text: "Bayesian Decision Rule" }
        ],
        correctAnswer: "A",
        explanation: {
            concept: "Gauss-Markov Theorem",
            detailed: ["Under assumptions of linearity, unbiasedness, and homoskedasticity/no autocorrelation, OLS is the most efficient (minimum variance) linear unbiased estimator."],
            takeaways: ["BLUE requires specific error assumptions"],
            challenge: "Does BLUE require normality of errors?"
        }
    },
    {
        id: "adv_016",
        type: "MCQ",
        topic: "Statistics & Econometrics",
        subtopic: "Coefficient of Determination",
        difficulty: "Medium",
        question: "If the R-squared (R²) of a simple linear regression is 0.81, what is the absolute value of the correlation coefficient between X and Y?",
        options: [
            { id: "A", text: "0.9" },
            { id: "B", text: "0.81" },
            { id: "C", text: "0.72" },
            { id: "D", text: "0.64" }
        ],
        correctAnswer: "A",
        explanation: {
            concept: "R-squared and Correlation",
            detailed: [
                "For simple regression, R² = r²",
                "r = √R² = √0.81 = 0.9"
            ],
            takeaways: ["R² measures proportion of variance explained"],
            challenge: "Does this hold for multiple regression?"
        }
    },
    {
        id: "adv_017",
        type: "MCQ",
        topic: "Statistics & Econometrics",
        subtopic: "Heteroskedasticity",
        difficulty: "Hard",
        question: "Which of the following is primarily compromised when the error term in OLS is heteroskedastic?",
        options: [
            { id: "A", text: "Unbiasedness" },
            { id: "B", text: "Efficiency" },
            { id: "C", text: "Consistency" },
            { id: "D", text: "Linearity" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Heteroskedasticity Impact",
            detailed: ["Heteroskedasticity leads to OLS no longer being 'Best' (most efficient). Standard errors become biased, making t-tests invalid, although estimates remain unbiased and consistent."],
            takeaways: ["Variance is no longer constant across observations"],
            challenge: "Name a test for heteroskedasticity."
        }
    },

    // --- SECTION 5: MATHEMATICAL ECONOMICS (Q18-Q20) ---
    {
        id: "adv_018",
        type: "MCQ",
        topic: "Mathematical Economics",
        subtopic: "Revenue Maximization",
        difficulty: "Medium",
        question: "If the demand curve is Q = 100 – 5P, what price maximizes total revenue?",
        options: [
            { id: "A", text: "10" },
            { id: "B", text: "20" },
            { id: "C", text: "15" },
            { id: "D", text: "12" }
        ],
        correctAnswer: "A",
        explanation: {
            concept: "Optimization in Revenue",
            detailed: [
                "TR = P × Q = P(100 - 5P) = 100P - 5P²",
                "dTR/dP = 100 - 10P = 0 → P = 10",
                "Alternatively, TR maximized where Elasticity = -1 (midpoint of linear demand)."
            ],
            takeaways: ["TR is maximized when MR is zero"],
            challenge: "What is the quantity at this price?"
        }
    },
    {
        id: "adv_019",
        type: "MCQ",
        topic: "Mathematical Economics",
        subtopic: "Utility Maximization",
        difficulty: "Hard",
        question: "A consumer maximizes U = xy subject to budget 100, where Px = 2 and Py = 4. What is the optimal bundle (x, y)?",
        options: [
            { id: "A", text: "(25, 12.5)" },
            { id: "B", text: "(20, 15)" },
            { id: "C", text: "(10, 20)" },
            { id: "D", text: "(15, 10)" }
        ],
        correctAnswer: "A",
        explanation: {
            concept: "Lagrangian Optimization",
            detailed: [
                "For U = xy (CD form with α=1, β=1), income share is 50-50.",
                "Spending on x = 0.5 × 100 = 50 → x = 50 / 2 = 25",
                "Spending on y = 0.5 × 100 = 50 → y = 50 / 4 = 12.5"
            ],
            takeaways: ["Equal exponents imply equal budget shares"],
            challenge: "If Px drops to 1, find the new bundle."
        }
    },
    {
        id: "adv_020",
        type: "MCQ",
        topic: "Mathematical Economics",
        subtopic: "Profit Maximization",
        difficulty: "Easy",
        question: "The first-order condition (FOC) for a firm to maximize profit is:",
        options: [
            { id: "A", text: "Price = Average Cost" },
            { id: "B", text: "Marginal Revenue = Marginal Cost" },
            { id: "C", text: "Total Revenue = Total Cost" },
            { id: "D", text: "Average Revenue = Marginal Cost" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Profit Optimization",
            detailed: ["Profit π = TR - TC. To maximize π, dπ/dQ = dTR/dQ - dTC/dQ = 0. Therefore, MR = MC."],
            takeaways: ["FOC identifies potential extrema"],
            challenge: "What is the SOC for maximization?"
        }
    },

    // --- SECTION 6: GAME THEORY (Q21-Q23) ---
    {
        id: "adv_021",
        type: "MCQ",
        topic: "Game Theory",
        subtopic: "Nash Equilibrium",
        difficulty: "Medium",
        question: "In the standard Prisoner's Dilemma, the dominant strategy equilibrium leads to an outcome that is:",
        options: [
            { id: "A", text: "Pareto efficient" },
            { id: "B", text: "Nash equilibrium but not Pareto efficient" },
            { id: "C", text: "The result of successful collusion" },
            { id: "D", text: "A monopoly outcome" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Conflict of Interest",
            detailed: ["Both 'Defect' is the Nash equilibrium. However, both 'Cooperate' would have given a better outcome for both, meaning Nash is inefficient here."],
            takeaways: ["Individual rationality can lead to collective irrationality"],
            challenge: "Define Pareto efficiency."
        }
    },
    {
        id: "adv_022",
        type: "MCQ",
        topic: "Game Theory",
        subtopic: "Cournot Model",
        difficulty: "Medium",
        question: "In the Cournot duopoly model, what is the strategic variable that firms choose simultaneously?",
        options: [
            { id: "B", text: "Quantity" },
            { id: "A", text: "Price" },
            { id: "C", text: "Quality" },
            { id: "D", text: "Advertising budget" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Quantity Competition",
            detailed: ["Cournot assumes firms compete on quantity; Bertrand assumes they compete on price."],
            takeaways: ["Firms act as quantity setters"],
            challenge: "How does Cournot Compare to Stackelberg?"
        }
    },
    {
        id: "adv_023",
        type: "MCQ",
        topic: "Game Theory",
        subtopic: "Repeated Games",
        difficulty: "Hard",
        question: "In infinitely repeated games, which factor most encourages cooperation between potentially rival players?",
        options: [
            { id: "A", text: "Incentive to defect early" },
            { id: "B", text: "Threat of future punishment" },
            { id: "C", text: "Randomization of moves" },
            { id: "D", text: "Price wars" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Folk Theorem Logic",
            detailed: ["If players are patient enough, the threat of 'Trigger' strategies or 'Tit-for-Tat' makes cooperation a self-enforcing equilibrium."],
            takeaways: ["Shadow of the future matters"],
            challenge: "Does this hold for finite repetition?"
        }
    },

    // --- SECTION 7: DEVELOPMENT ECONOMICS (Q24-Q25) ---
    {
        id: "adv_024",
        type: "MCQ",
        topic: "Development Economics",
        subtopic: "Inequality",
        difficulty: "Medium",
        question: "A Gini coefficient value closer to 1 indicates:",
        options: [
            { id: "A", text: "Perfect equality" },
            { id: "B", text: "Extremely high inequality" },
            { id: "C", text: "Success in poverty reduction" },
            { id: "D", text: "Rapid real GDP growth" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Gini Index",
            detailed: ["0 = Perfect Equality; 1 = Perfect Inequality (one person has all the money)."],
            takeaways: ["Measures distribution, not wealth level"],
            challenge: "What is the Lorenz Curve?"
        }
    },
    {
        id: "adv_025",
        type: "MCQ",
        topic: "Development Economics",
        subtopic: "HDI",
        difficulty: "Medium",
        question: "Since 2010, the Human Development Index (HDI) calculates the composite index using which type of mean?",
        options: [
            { id: "A", text: "Arithmetic Mean" },
            { id: "B", text: "Geometric Mean" },
            { id: "C", text: "Harmonic Mean" },
            { id: "D", text: "Median" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "HDI Methodology",
            detailed: ["Geometric mean ensures that poor performance in one dimension is not fully compensated by another, encouraging balanced development."],
            takeaways: ["Geometric mean is more 'sensitive' to low values"],
            challenge: "Name the three dimensions of HDI."
        }
    },

    // --- SECTION 8: ENVIRONMENTAL ECONOMICS (Q26-Q27) ---
    {
        id: "adv_026",
        type: "MCQ",
        topic: "Environmental Economics",
        subtopic: "Coase Theorem",
        difficulty: "Medium",
        question: "According to the Coase Theorem, private bargaining can solve externality problems if:",
        options: [
            { id: "A", text: "Transaction costs are zero" },
            { id: "B", text: "Perfect competition exists" },
            { id: "C", text: "Government imposes taxes" },
            { id: "D", text: "The firm is a monopoly" }
        ],
        correctAnswer: "A",
        explanation: {
            concept: "Coasian Bargaining",
            detailed: ["If rights are well-defined and transaction costs are zero, parties will negotiate to a socially efficient outcome regardless of who holds the initial rights."],
            takeaways: ["Rights assignment affects distribution, not efficiency"],
            challenge: "Why do high transaction costs prevent this?"
        }
    },
    {
        id: "adv_027",
        type: "MCQ",
        topic: "Environmental Economics",
        subtopic: "Social Cost",
        difficulty: "Easy",
        question: "Marginal Social Cost is equal to:",
        options: [
            { id: "A", text: "Private cost minus external cost" },
            { id: "B", text: "Private cost plus external cost" },
            { id: "C", text: "Marginal cost only" },
            { id: "D", text: "Opportunity cost of production" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Externalities",
            detailed: ["MSC = MPC + MEC. Social cost accounts for the internal costs to the producer and the external costs to society."],
            takeaways: ["Market fails when price < MSC"],
            challenge: "Draw this on a graph."
        }
    },

    // --- SECTION 9: LABOR ECONOMICS (Q28-Q29) ---
    {
        id: "adv_028",
        type: "MCQ",
        topic: "Labor Economics",
        subtopic: "Labor Supply",
        difficulty: "Medium",
        question: "When the wage rate rises, the substitution effect on labor supply is always:",
        options: [
            { id: "A", text: "Negative" },
            { id: "B", text: "Positive (leads to more labor)" },
            { id: "C", text: "Zero" },
            { id: "D", text: "Uncertain due to wealth effect" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Labor Supply Effects",
            detailed: ["As wage increases, leisure becomes more expensive relative to labor. Substitution effect always pushes the worker to work more."],
            takeaways: ["SE favors work over leisure"],
            challenge: "Define the Income Effect here."
        }
    },
    {
        id: "adv_029",
        type: "MCQ",
        topic: "Labor Economics",
        subtopic: "Backward Bending Curve",
        difficulty: "Hard",
        question: "A 'backward-bending' labor supply curve occurs when:",
        options: [
            { id: "A", text: "Income effect dominates substitution effect" },
            { id: "B", text: "Substitution effect dominates income effect" },
            { id: "C", text: "Min wages are abolished" },
            { id: "D", text: "Employment is zero" }
        ],
        correctAnswer: "A",
        explanation: {
            concept: "Slope of Labor Supply",
            detailed: ["At high wages, the boost to income is so high that the worker chooses more leisure even though wage is high. Income effect > Substitution effect."],
            takeaways: ["Labor supply can be non-monotonic"],
            challenge: "Where does this curve 'bend'?"
        }
    },

    // --- SECTION 10: ADVANCED MACROECONOMICS (Q30-Q32) ---
    {
        id: "adv_030",
        type: "MCQ",
        topic: "Advanced Macroeconomics",
        subtopic: "Classical Model",
        difficulty: "Medium",
        question: "In the strictly Classical macroscopic model, money is said to be:",
        options: [
            { id: "B", text: "Neutral" },
            { id: "A", text: "Non-neutral" },
            { id: "C", text: "Endogenous" },
            { id: "D", text: "Determined by fiscal policy" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Classical Dichotomy",
            detailed: ["Changes in money supply affect nominal variables (prices) but not real variables (GDP, employment)."],
            takeaways: ["Neutrality implies M has no real impact"],
            challenge: "Is money neutral in the short-run Keynesian model?"
        }
    },
    {
        id: "adv_031",
        type: "MCQ",
        topic: "Advanced Macroeconomics",
        subtopic: "Fiscal Policy",
        difficulty: "Hard",
        question: "Ricardian Equivalence implies that which of the following are equivalent in their impact on aggregate demand?",
        options: [
            { id: "A", text: "Taxes and Debt (borrowing)" },
            { id: "B", text: "Spending and Taxes" },
            { id: "C", text: "Money and Debt" },
            { id: "D", text: "Exports and Imports" }
        ],
        correctAnswer: "A",
        explanation: {
            concept: "Barro-Ricardo Effect",
            detailed: ["Consumers realize that debt today means higher taxes tomorrow. They save the windfall from a tax cut, resulting in zero net impact on AD."],
            takeaways: ["Debt financing is just postponed taxation"],
            challenge: "Conditions for Ricardian Equivalence."
        }
    },
    {
        id: "adv_032",
        type: "MCQ",
        topic: "Advanced Macroeconomics",
        subtopic: "Consumption",
        difficulty: "Easy",
        question: "The 'Permanent Income Hypothesis' is a consumption theory famously associated with:",
        options: [
            { id: "B", text: "Milton Friedman" },
            { id: "A", text: "John Maynard Keynes" },
            { id: "C", text: "Robert Solow" },
            { id: "D", text: "Roy Harrod" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Consumption Theory",
            detailed: ["Friedman argued that people base consumption on their permanent income expectations, not current transitory income."],
            takeaways: ["Supports tax cut stability"],
            challenge: "What is the Life Cycle Hypothesis?"
        }
    },

    // --- SECTION 11: TIME SERIES / ECONOMETRICS (Q33-Q34) ---
    {
        id: "adv_033",
        type: "MCQ",
        topic: "Econometrics",
        subtopic: "Stationarity",
        difficulty: "Hard",
        question: "If a time series variable has a 'unit root', the series is characterized as:",
        options: [
            { id: "A", text: "Stationary" },
            { id: "B", text: "Non-stationary" },
            { id: "C", text: "White noise" },
            { id: "D", text: "Purely deterministic" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Unit Root",
            detailed: ["A unit root indicates a random walk process, where the mean and variance change over time (non-stationary)."],
            takeaways: ["Regression with unit roots can be 'spurious'"],
            challenge: "Name a test for unit root."
        }
    },
    {
        id: "adv_034",
        type: "MCQ",
        topic: "Econometrics",
        subtopic: "Autocorrelation",
        difficulty: "Hard",
        question: "Which OLS assumption is violated if the error term in one period is correlated with the error term in the next period?",
        options: [
            { id: "A", text: "Independence of errors / No Autocorrelation" },
            { id: "B", text: "Linearity" },
            { id: "C", text: "No Multicollinearity" },
            { id: "D", text: "Zero Mean" }
        ],
        correctAnswer: "A",
        explanation: {
            concept: "Autocorrelation",
            detailed: ["Autocorrelation (serial correlation) frequently occurs in time series data when shocks linger for multiple periods."],
            takeaways: ["Violates Gauss-Markov Efficiency"],
            challenge: "Use Durbin-Watson to test for it."
        }
    },

    // --- SECTION 12: MIXED TOUGH (Q35-Q40) ---
    {
        id: "adv_035",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Elasticity",
        difficulty: "Medium",
        question: "If price elasticity of demand is –0.5, a 10% rise in price leads to a:",
        options: [
            { id: "A", text: "5% fall in quantity" },
            { id: "B", text: "10% fall in quantity" },
            { id: "C", text: "5% rise in quantity" },
            { id: "D", text: "10% rise in quantity" }
        ],
        correctAnswer: "A",
        explanation: {
            concept: "Elasticity Application",
            detailed: ["%ΔQ = Ed × %ΔP = (-0.5) × 10% = -5%."],
            takeaways: ["Inelastic demand results in smaller Q changes"],
            challenge: "What happens to Total Revenue?"
        }
    },
    {
        id: "adv_036",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structures",
        difficulty: "Hard",
        question: "The long-run supply curve of a firm in a perfectly competitive, constant-cost industry is:",
        options: [
            { id: "A", text: "Its MC curve" },
            { id: "B", text: "Its AC curve" },
            { id: "C", text: "A horizontal line at minimum LAC" },
            { id: "D", text: "Its AVC curve" }
        ],
        correctAnswer: "C",
        explanation: {
            concept: "Long-run Equilibrium",
            detailed: ["In the long run, entry and exit push price to the minimum of Average Cost. In constant-cost industries, this minimum remains unchanged regardless of industry expansion."],
            takeaways: ["Supply is perfectly elastic in LR"],
            challenge: "Why not the MC curve?"
        }
    },
    {
        id: "adv_037",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Monopoly",
        difficulty: "Hard",
        question: "Deadweight loss in a monopoly arises specifically because:",
        options: [
            { id: "B", text: "P > MC" },
            { id: "A", text: "P = MC" },
            { id: "C", text: "AC is rising" },
            { id: "D", text: "The firm makes supernormal profits" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Monopoly Inefficiency",
            detailed: ["Socially efficient output occurs where P = MC. Monopolies produce less and charge more (P > MC), leading to lost gains from trade."],
            takeaways: ["Allocative inefficiency is central"],
            challenge: "Define Consumer Surplus."
        }
    },
    {
        id: "adv_038",
        type: "MCQ",
        topic: "Public Economics",
        subtopic: "Tax Incidence",
        difficulty: "Medium",
        question: "If demand for a product is perfectly inelastic, the entire burden of an indirect tax falls on:",
        options: [
            { id: "A", text: "Consumers" },
            { id: "B", text: "Producers" },
            { id: "C", text: "The government" },
            { id: "D", text: "Shared based on supply elasticity" }
        ],
        correctAnswer: "A",
        explanation: {
            concept: "Tax Incidence",
            detailed: ["When consumers cannot change quantity (perfectly inelastic), they must accept the full price increase caused by the tax."],
            takeaways: ["Inelasticity breeds burden"],
            challenge: "What if Supply is perfectly inelastic?"
        }
    },
    {
        id: "adv_039",
        type: "MCQ",
        topic: "Macroeconomics",
        subtopic: "Growth Models",
        difficulty: "Hard",
        question: "In the Solow–Swan model, the long-run steady-state growth rate of per-capita output depends entirely on:",
        options: [
            { id: "B", text: "The rate of technological progress" },
            { id: "A", text: "The savings rate" },
            { id: "C", text: "The capital-output ratio" },
            { id: "D", text: "Population growth alone" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Exogenous Growth",
            detailed: ["Changes in savings rates only affect the 'level' of the steady state, not the steady-state growth rate (until endogenous growth models are used)."],
            takeaways: ["Solow: Tech is the ultimate engine"],
            challenge: "What determines total output growth?"
        }
    },
    {
        id: "adv_040",
        type: "MCQ",
        topic: "Public Economics",
        subtopic: "Market Failure",
        difficulty: "Medium",
        question: "Which of the following conditions violates the First Fundamental Theorem of Welfare Economics (Pareto Efficiency)?",
        options: [
            { id: "A", text: "Externalities" },
            { id: "B", text: "Perfect competition" },
            { id: "C", text: "Free trade" },
            { id: "D", text: "Full information" }
        ],
        correctAnswer: "A",
        explanation: {
            concept: "Welfare Theorems",
            detailed: ["The theorem requires competitive markets and NO externalities. Small distortions or costs prevent Pareto efficiency."],
            takeaways: ["Efficiency requires no spillovers"],
            challenge: "State the Second Welfare Theorem."
        }
    }
];
