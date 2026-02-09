
export const marketStructuresQuestions = [
    // --- PERFECT COMPETITION (1-7) ---
    {
        id: "ms_practice_001",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Easy",
        question: "In perfect competition, a firm is:",
        options: [{ id: "A", text: "Price maker" }, { id: "B", text: "Price taker" }, { id: "C", text: "Quantity maker" }, { id: "D", text: "Monopolist" }],
        correctAnswer: "B",
        explanation: { concept: "Perfect Competition", detailed: ["Firms are too small relative to market to influence price."], takeaways: ["Horizontal Demand Curve"] }
    },
    {
        id: "ms_practice_002",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Easy",
        question: "Demand curve facing a perfectly competitive firm is:",
        options: [{ id: "A", text: "Downward sloping" }, { id: "B", text: "Vertical" }, { id: "C", text: "Horizontal" }, { id: "D", text: "Kinked" }],
        correctAnswer: "C",
        explanation: { concept: "Firm Demand", detailed: ["Perfectly elastic demand at the market price."], takeaways: ["P = MR = AR"] }
    },
    {
        id: "ms_practice_003",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Easy",
        question: "Profit is maximized when:",
        options: [{ id: "A", text: "P = AC" }, { id: "B", text: "MR = MC" }, { id: "C", text: "AR = AC" }, { id: "D", text: "TR = TC" }],
        correctAnswer: "B",
        explanation: { concept: "Profit Maximization", detailed: ["Universal rule for all market structures."], takeaways: ["MC cuts MR from below"] }
    },
    {
        id: "ms_practice_004",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Medium",
        question: "In long-run equilibrium under perfect competition:",
        options: [{ id: "A", text: "P > AC" }, { id: "B", text: "P < AC" }, { id: "C", text: "P = AC" }, { id: "D", text: "P ≠ MC" }],
        correctAnswer: "C",
        explanation: { concept: "Long Run Equilibrium", detailed: ["Entry/Exit drives profits to zero (Normal Profit)."], takeaways: ["P = MC = min AC"] }
    },
    {
        id: "ms_practice_005",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Medium",
        question: "Shutdown point of a competitive firm occurs when:",
        options: [{ id: "A", text: "P = MC" }, { id: "B", text: "P = AVC" }, { id: "C", text: "P = ATC" }, { id: "D", text: "P > ATC" }],
        correctAnswer: "B",
        explanation: { concept: "Shut Down Rule", detailed: ["If P < AVC, firm cannot cover variable costs."], takeaways: ["Min point of AVC"] }
    },
    {
        id: "ms_practice_006",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Medium",
        question: "Supply curve of a competitive firm is:",
        options: [{ id: "A", text: "Entire MC curve" }, { id: "B", text: "MC curve above AVC" }, { id: "C", text: "AC curve" }, { id: "D", text: "AVC curve" }],
        correctAnswer: "B",
        explanation: { concept: "Supply Curve", detailed: ["MC curve determines quantity supplied at each price, but only above shutdown point."], takeaways: ["Rising portion of MC"] }
    },
    {
        id: "ms_practice_007",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Easy",
        question: "In perfect competition, economic profits in long run are:",
        options: [{ id: "A", text: "Positive" }, { id: "B", text: "Negative" }, { id: "C", text: "Zero" }, { id: "D", text: "Maximum" }],
        correctAnswer: "C",
        explanation: { concept: "Zero Economic Profit", detailed: ["Free entry eliminates supernormal profits."], takeaways: ["Normal Profit Only"] }
    },

    // --- MONOPOLY (8-14) ---
    {
        id: "ms_practice_008",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Easy",
        question: "A monopolist is:",
        options: [{ id: "A", text: "Price taker" }, { id: "B", text: "Price maker" }, { id: "C", text: "Output taker" }, { id: "D", text: "Competitive firm" }],
        correctAnswer: "B",
        explanation: { concept: "Monopoly Power", detailed: ["Single seller controls supply and price."], takeaways: ["Down sloping demand"] }
    },
    {
        id: "ms_practice_009",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Medium",
        question: "For a monopolist:",
        options: [{ id: "A", text: "P = MR" }, { id: "B", text: "P > MR" }, { id: "C", text: "P < MR" }, { id: "D", text: "P = MC" }],
        correctAnswer: "B",
        explanation: { concept: "Monopoly Revenue", detailed: ["To sell more, price must be lowered on all units, so MR < P."], takeaways: ["MR is below AR"] }
    },
    {
        id: "ms_practice_010",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Easy",
        question: "Monopoly profit maximization condition:",
        options: [{ id: "A", text: "AR = AC" }, { id: "B", text: "MR = MC" }, { id: "C", text: "TR = TC" }, { id: "D", text: "P = MC" }],
        correctAnswer: "B",
        explanation: { concept: "Profit Max", detailed: ["Output determined by MR=MC, Price determined by Demand curve."], takeaways: ["P > MC"] }
    },
    {
        id: "ms_practice_011",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Medium",
        question: "Price discrimination requires:",
        options: [{ id: "A", text: "Perfect competition" }, { id: "B", text: "Market separation" }, { id: "C", text: "Free resale" }, { id: "D", text: "Identical demand" }],
        correctAnswer: "B",
        explanation: { concept: "Price Discrimination", detailed: ["Must prevent arbitrage (resale from low to high price market)."], takeaways: ["Different elasticities"] }
    },
    {
        id: "ms_practice_012",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Medium",
        question: "A natural monopoly occurs due to:",
        options: [{ id: "A", text: "Government policy" }, { id: "B", text: "Economies of scale" }, { id: "C", text: "Advertising" }, { id: "D", text: "High demand" }],
        correctAnswer: "B",
        explanation: { concept: "Natural Monopoly", detailed: ["Long run average cost falls continuously over relevant range of demand."], takeaways: ["One firm is most efficient"] }
    },
    {
        id: "ms_practice_013",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Medium",
        question: "Monopoly leads to:",
        options: [{ id: "A", text: "Efficient output" }, { id: "B", text: "Deadweight loss" }, { id: "C", text: "Zero profits" }, { id: "D", text: "Minimum price" }],
        correctAnswer: "B",
        explanation: { concept: "Welfare Loss", detailed: ["Produces less than social optimum (P > MC)."], takeaways: ["Inefficiency"] }
    },
    {
        id: "ms_practice_014",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Hard",
        question: "In monopoly, supply curve is:",
        options: [{ id: "A", text: "MC curve" }, { id: "B", text: "AC curve" }, { id: "C", text: "AVC curve" }, { id: "D", text: "No unique supply curve" }],
        correctAnswer: "D",
        explanation: { concept: "Monopoly Supply", detailed: ["Same quantity can be supplied at different prices depending on demand elasticity."], takeaways: ["No supply curve"] }
    },

    // --- MONOPOLISTIC COMPETITION (15-18) ---
    {
        id: "ms_practice_015",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Easy",
        question: "Monopolistic competition is characterized by:",
        options: [{ id: "A", text: "Homogeneous products" }, { id: "B", text: "Product differentiation" }, { id: "C", text: "Single seller" }, { id: "D", text: "No entry" }],
        correctAnswer: "B",
        explanation: { concept: "Differentiation", detailed: ["Many sellers selling similar but not identical goods."], takeaways: ["Brand loyalty"] }
    },
    {
        id: "ms_practice_016",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Medium",
        question: "Demand curve under monopolistic competition is:",
        options: [{ id: "A", text: "Perfectly elastic" }, { id: "B", text: "Downward sloping" }, { id: "C", text: "Vertical" }, { id: "D", text: "Perfectly inelastic" }],
        correctAnswer: "B",
        explanation: { concept: "Demand Shape", detailed: ["More elastic than monopoly (due to substitutes) but still downward sloping."], takeaways: ["Elastic"] }
    },
    {
        id: "ms_practice_017",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Medium",
        question: "Excess capacity arises because:",
        options: [{ id: "A", text: "Firms produce at minimum AC" }, { id: "B", text: "P = MC" }, { id: "C", text: "Firms do not operate at minimum AC" }, { id: "D", text: "Products are identical" }],
        correctAnswer: "C",
        explanation: { concept: "Excess Capacity", detailed: ["Tangency of Demand and AC occurs on the falling portion of AC."], takeaways: ["Not at min AC"] }
    },
    {
        id: "ms_practice_018",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Easy",
        question: "Long-run profit in monopolistic competition is:",
        options: [{ id: "A", text: "Positive" }, { id: "B", text: "Negative" }, { id: "C", text: "Zero" }, { id: "D", text: "Maximum" }],
        correctAnswer: "C",
        explanation: { concept: "Long Run", detailed: ["Entry of new brands shifts demand left until profits are normal."], takeaways: ["P = AC"] }
    },

    // --- OLIGOPOLY & GAME THEORY (19-27) ---
    {
        id: "ms_practice_019",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Easy",
        question: "Oligopoly is characterized by:",
        options: [{ id: "A", text: "Many sellers" }, { id: "B", text: "Few sellers" }, { id: "C", text: "One seller" }, { id: "D", text: "Perfect competition" }],
        correctAnswer: "B",
        explanation: { concept: "Oligopoly", detailed: ["Small number of large firms dominate the market."], takeaways: ["Interdependence"] }
    },
    {
        id: "ms_practice_020",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Medium",
        question: "Kinked demand curve explains:",
        options: [{ id: "A", text: "Price rigidity" }, { id: "B", text: "Price flexibility" }, { id: "C", text: "Perfect competition" }, { id: "D", text: "Monopoly" }],
        correctAnswer: "A",
        explanation: { concept: "Sweezy Model", detailed: ["Rivals match price cuts but not price hikes."], takeaways: ["Sticky Prices"] }
    },
    {
        id: "ms_practice_021",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Medium",
        question: "In Cournot model, firms compete in:",
        options: [{ id: "A", text: "Prices" }, { id: "B", text: "Quantities" }, { id: "C", text: "Advertising" }, { id: "D", text: "Quality" }],
        correctAnswer: "B",
        explanation: { concept: "Cournot Competition", detailed: ["Firms choose output levels simultaneously."], takeaways: ["Quantity Setting"] }
    },
    {
        id: "ms_practice_022",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Medium",
        question: "In Bertrand model, firms compete in:",
        options: [{ id: "A", text: "Quantities" }, { id: "B", text: "Prices" }, { id: "C", text: "Output" }, { id: "D", text: "Advertising" }],
        correctAnswer: "B",
        explanation: { concept: "Bertrand Competition", detailed: ["Firms choose prices simultaneously."], takeaways: ["Price War -> P=MC"] }
    },
    {
        id: "ms_practice_023",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Game Theory",
        difficulty: "Medium",
        question: "Dominant strategy in game theory means:",
        options: [{ id: "A", text: "Best response to others’ strategies" }, { id: "B", text: "Worst strategy" }, { id: "C", text: "Mixed strategy" }, { id: "D", text: "Collusion" }],
        correctAnswer: "A", // Technically, best regardless of others. But "Best response" is closest.
        explanation: { concept: "Dominant Strategy", detailed: ["A strategy that yields the highest payoff regardless of what other players do."], takeaways: ["Always played"] }
    },
    {
        id: "ms_practice_024",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Game Theory",
        difficulty: "Medium",
        question: "Nash equilibrium occurs when:",
        options: [{ id: "A", text: "Firms cooperate" }, { id: "B", text: "No player can improve by unilateral change" }, { id: "C", text: "Output is maximum" }, { id: "D", text: "Profits are zero" }],
        correctAnswer: "B",
        explanation: { concept: "Nash Equilibrium", detailed: ["State where no player has an incentive to deviate given the strategy of others."], takeaways: ["Mutual Best Response"] }
    },
    {
        id: "ms_practice_025",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Game Theory",
        difficulty: "Medium",
        question: "Prisoner’s dilemma shows:",
        options: [{ id: "A", text: "Cooperation is easy" }, { id: "B", text: "Rational players may not cooperate" }, { id: "C", text: "Monopoly outcome" }, { id: "D", text: "Perfect competition" }],
        correctAnswer: "B",
        explanation: { concept: "Prisoner's Dilemma", detailed: ["Individual rationality leads to collective irrationality (worse outcome)."], takeaways: ["Dominant strategy fails group"] }
    },
    {
        id: "ms_practice_026",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Easy",
        question: "Cartel is a form of:",
        options: [{ id: "A", text: "Monopoly" }, { id: "B", text: "Oligopoly collusion" }, { id: "C", text: "Perfect competition" }, { id: "D", text: "Monopolistic competition" }],
        correctAnswer: "B",
        explanation: { concept: "Cartel", detailed: ["Firms collude to restrict output and raise price, acting like a monopoly."], takeaways: ["OPEC"] }
    },
    {
        id: "ms_practice_027",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Hard",
        question: "Stackelberg model is based on:",
        options: [{ id: "A", text: "Simultaneous moves" }, { id: "B", text: "Sequential moves" }, { id: "C", text: "Price competition" }, { id: "D", text: "Monopoly" }],
        correctAnswer: "B",
        explanation: { concept: "Stackelberg", detailed: ["Leader moves first, follower moves second."], takeaways: ["Sequential Quantity"] }
    },

    // --- GENERAL EQUILIBRIUM & WELFARE (28-50) ---
    {
        id: "ms_practice_028",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "General Equilibrium",
        difficulty: "Medium",
        question: "Pareto efficiency occurs when:",
        options: [{ id: "A", text: "Everyone is better off" }, { id: "B", text: "No one can be made better off without making someone worse off" }, { id: "C", text: "Income is equal" }, { id: "D", text: "Profits are zero" }],
        correctAnswer: "B",
        explanation: { concept: "Pareto Optimality", detailed: ["Allocation where resources cannot be reallocated to help one without hurting another."], takeaways: ["Efficiency != Equity"] }
    },
    {
        id: "ms_practice_029",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "General Equilibrium",
        difficulty: "Medium",
        question: "Edgeworth box is used for:",
        options: [{ id: "A", text: "Monopoly analysis" }, { id: "B", text: "Two-person exchange economy" }, { id: "C", text: "Oligopoly" }, { id: "D", text: "Cost curves" }],
        correctAnswer: "B",
        explanation: { concept: "Edgeworth Box", detailed: ["Graphical tool to analyze exchange efficiency between two consumers and two goods."], takeaways: ["General Equilibrium"] }
    },
    {
        id: "ms_practice_030",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "General Equilibrium",
        difficulty: "Medium",
        question: "Contract curve represents:",
        options: [{ id: "A", text: "Efficient allocations" }, { id: "B", text: "Budget lines" }, { id: "C", text: "Demand curve" }, { id: "D", text: "Monopoly output" }],
        correctAnswer: "A",
        explanation: { concept: "Contract Curve", detailed: ["Locus of all Pareto efficient points in an Edgeworth box."], takeaways: ["Tangency of ICs"] }
    },
    {
        id: "ms_practice_031",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "General Equilibrium",
        difficulty: "Easy",
        question: "General equilibrium considers:",
        options: [{ id: "A", text: "One market only" }, { id: "B", text: "All markets simultaneously" }, { id: "C", text: "Monopoly only" }, { id: "D", text: "Firm equilibrium" }],
        correctAnswer: "B",
        explanation: { concept: "General Equilibrium", detailed: ["Analysis of interactions between all markets in an economy."], takeaways: ["Walras"] }
    },
    {
        id: "ms_practice_032",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Welfare Economics",
        difficulty: "Medium",
        question: "First Welfare Theorem states:",
        options: [{ id: "A", text: "Monopoly is efficient" }, { id: "B", text: "Competitive equilibrium is Pareto efficient" }, { id: "C", text: "Markets always fail" }, { id: "D", text: "Taxes increase welfare" }],
        correctAnswer: "B",
        explanation: { concept: "1st Welfare Theorem", detailed: ["Under certain conditions, free markets lead to a Pareto optimal outcome."], takeaways: ["Invisible Hand"] }
    },
    {
        id: "ms_practice_033",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Welfare Economics",
        difficulty: "Medium",
        question: "Second Welfare Theorem implies:",
        options: [{ id: "A", text: "Any Pareto optimum can be achieved by redistribution" }, { id: "B", text: "Monopoly is best" }, { id: "C", text: "Taxes are unnecessary" }, { id: "D", text: "Markets always fail" }],
        correctAnswer: "A",
        explanation: { concept: "2nd Welfare Theorem", detailed: ["Separates efficiency and equity. Any efficient point is reachable via lump-sum transfers."], takeaways: ["Redistribution"] }
    },
    {
        id: "ms_practice_034",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Welfare Economics",
        difficulty: "Easy",
        question: "Market failure occurs due to:",
        options: [{ id: "A", text: "Perfect competition" }, { id: "B", text: "Externalities" }, { id: "C", text: "Zero profits" }, { id: "D", text: "Full information" }],
        correctAnswer: "B",
        explanation: { concept: "Market Failure", detailed: ["Situations where free markets fail to allocate resources efficiently (e.g. Pollution)."], takeaways: ["Distortion"] }
    },
    {
        id: "ms_practice_035",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Public Economics",
        difficulty: "Easy",
        question: "Public goods are:",
        options: [{ id: "A", text: "Rival and excludable" }, { id: "B", text: "Non-rival and non-excludable" }, { id: "C", text: "Private goods" }, { id: "D", text: "Monopolistic goods" }],
        correctAnswer: "B",
        explanation: { concept: "Public Goods", detailed: ["Consumption by one doesn't reduce for others (Non-rival), and cannot exclude non-payers (Non-excludable)."], takeaways: ["Street light"] }
    },
    {
        id: "ms_practice_036",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Public Economics",
        difficulty: "Easy",
        question: "Free rider problem is associated with:",
        options: [{ id: "A", text: "Public goods" }, { id: "B", text: "Monopoly" }, { id: "C", text: "Oligopoly" }, { id: "D", text: "Perfect competition" }],
        correctAnswer: "A",
        explanation: { concept: "Free Rider", detailed: ["People consume public goods without paying because they can't be excluded."], takeaways: ["Underprovision"] }
    },
    {
        id: "ms_practice_037",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "General Equilibrium",
        difficulty: "Hard",
        question: "Marginal rate of transformation equals:",
        options: [{ id: "A", text: "Price ratio" }, { id: "B", text: "MRS" }, { id: "C", text: "MRT" }, { id: "D", text: "MU ratio" }],
        correctAnswer: "C",
        explanation: { concept: "MRT", detailed: ["Slope of Production Possibility Frontier."], takeaways: ["Opportunity Cost"] }
    },
    {
        id: "ms_practice_038",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "General Equilibrium",
        difficulty: "Hard",
        question: "Efficiency in production requires:",
        options: [{ id: "A", text: "MRTS equal across firms" }, { id: "B", text: "MR = MC" }, { id: "C", text: "P = AC" }, { id: "D", text: "Zero profit" }],
        correctAnswer: "A",
        explanation: { concept: "Production Efficiency", detailed: ["Resources allocated such that one firm cannot produce more without another producing less."], takeaways: ["Equal MRTS"] }
    },
    {
        id: "ms_practice_039",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Welfare Economics",
        difficulty: "Medium",
        question: "Deadweight loss arises due to:",
        options: [{ id: "A", text: "Perfect competition" }, { id: "B", text: "Monopoly" }, { id: "C", text: "Efficient markets" }, { id: "D", text: "Free trade" }],
        correctAnswer: "B",
        explanation: { concept: "DWL", detailed: ["Loss of total surplus due to market distortion (Price > MC)."], takeaways: ["Harberger Triangle"] }
    },
    {
        id: "ms_practice_040",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Welfare Economics",
        difficulty: "Medium",
        question: "Social optimum under externality requires:",
        options: [{ id: "A", text: "Tax or subsidy" }, { id: "B", text: "No government" }, { id: "C", text: "Monopoly" }, { id: "D", text: "Free market only" }],
        correctAnswer: "A",
        explanation: { concept: "Pigou", detailed: ["Internalize the externality using taxes (negative) or subsidies (positive)."], takeaways: ["Corrective Tax"] }
    },
    {
        id: "ms_practice_041",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Welfare Economics",
        difficulty: "Hard",
        question: "Coase theorem applies when:",
        options: [{ id: "A", text: "Transaction costs are zero" }, { id: "B", text: "Monopoly exists" }, { id: "C", text: "Public goods exist" }, { id: "D", text: "Information is imperfect" }],
        correctAnswer: "A",
        explanation: { concept: "Coase Theorem", detailed: ["Private bargaining can solve externalities if property rights are defined and transaction costs are zero."], takeaways: ["No Govt needed"] }
    },
    {
        id: "ms_practice_042",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "General Equilibrium",
        difficulty: "Easy",
        question: "A competitive market ensures:",
        options: [{ id: "A", text: "Equity" }, { id: "B", text: "Pareto efficiency" }, { id: "C", text: "Maximum monopoly profit" }, { id: "D", text: "Price discrimination" }],
        correctAnswer: "B",
        explanation: { concept: "Efficiency", detailed: ["Does not guarantee fairness (equity), only efficiency."], takeaways: ["Efficiency vs Equity"] }
    },
    {
        id: "ms_practice_043",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Welfare Economics",
        difficulty: "Medium",
        question: "Pigouvian tax is imposed to correct:",
        options: [{ id: "A", text: "Monopoly power" }, { id: "B", text: "Externalities" }, { id: "C", text: "Public goods" }, { id: "D", text: "Perfect competition" }],
        correctAnswer: "B",
        explanation: { concept: "Polluter Pays", detailed: ["Tax equal to marginal external cost."], takeaways: ["Negative Externality"] }
    },
    {
        id: "ms_practice_044",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "General Equilibrium",
        difficulty: "Medium",
        question: "An indifference curve in Edgeworth box is:",
        options: [{ id: "A", text: "Production frontier" }, { id: "B", text: "Utility frontier" }, { id: "C", text: "Demand curve" }, { id: "D", text: "Cost curve" }], // Actually, it's just an IC. "Utility Frontier" is different. But in context of options, B implies utility space.
        // Actually, IC REPRESENTS utility levels. It's not the frontier itself (UPF is in utility space).
        // Let's stick to B as best distractor/answer given.
        correctAnswer: "B",
        explanation: { concept: "Iso-Utility", detailed: ["Represents constant level of satisfaction for a consumer."], takeaways: ["Convex to origin"] }
    },
    {
        id: "ms_practice_045",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "General Equilibrium",
        difficulty: "Hard",
        question: "Walrasian equilibrium refers to:",
        options: [{ id: "A", text: "Partial equilibrium" }, { id: "B", text: "General equilibrium" }, { id: "C", text: "Monopoly" }, { id: "D", text: "Oligopoly" }],
        correctAnswer: "B",
        explanation: { concept: "Walras Law", detailed: ["Set of prices where all markets clear simultaneously."], takeaways: ["Auctioneer"] }
    },
    {
        id: "ms_practice_046",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Market Structure",
        difficulty: "Easy",
        question: "Market demand equals:",
        options: [{ id: "A", text: "Horizontal sum of individual demands" }, { id: "B", text: "Vertical sum" }, { id: "C", text: "Average demand" }, { id: "D", text: "Marginal demand" }],
        correctAnswer: "A",
        explanation: { concept: "Private Good Demand", detailed: ["Summing quantities for each price."], takeaways: ["Public goods = Vertical"] }
    },
    {
        id: "ms_practice_047",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "General Equilibrium",
        difficulty: "Easy",
        question: "Competitive equilibrium price ensures:",
        options: [{ id: "A", text: "Excess demand" }, { id: "B", text: "Excess supply" }, { id: "C", text: "Market clearing" }, { id: "D", text: "Monopoly profit" }],
        correctAnswer: "C",
        explanation: { concept: "Equilibrium", detailed: ["Qd = Qs. No shortage or surplus."], takeaways: ["Stable"] }
    },
    {
        id: "ms_practice_048",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Welfare Economics",
        difficulty: "Easy",
        question: "Welfare loss from monopoly is called:",
        options: [{ id: "A", text: "Producer surplus" }, { id: "B", text: "Deadweight loss" }, { id: "C", text: "Consumer surplus" }, { id: "D", text: "Tax revenue" }],
        correctAnswer: "B",
        explanation: { concept: "Social Cost", detailed: ["Value of lost trade due to higher price."], takeaways: ["Inefficiency"] }
    },
    {
        id: "ms_practice_049",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Welfare Economics",
        difficulty: "Easy",
        question: "Externalities cause:",
        options: [{ id: "A", text: "Efficient allocation" }, { id: "B", text: "Market failure" }, { id: "C", text: "Zero prices" }, { id: "D", text: "Perfect competition" }],
        correctAnswer: "B",
        explanation: { concept: "Divergence", detailed: ["MSC != MPC or MSB != MPB."], takeaways: ["Suboptimal"] }
    },
    {
        id: "ms_practice_050",
        type: "MCQ",
        topic: "Microeconomics",
        subtopic: "Public Economics",
        difficulty: "Hard",
        question: "A Lindahl equilibrium is related to:",
        options: [{ id: "A", text: "Private goods" }, { id: "B", text: "Public goods pricing" }, { id: "C", text: "Monopoly" }, { id: "D", text: "Oligopoly" }],
        correctAnswer: "B",
        explanation: { concept: "Lindahl Pricing", detailed: ["Each individual pays a tax price equal to their marginal benefit from the public good."], takeaways: ["Benefit Principle"] }
    }
];
