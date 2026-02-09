
export const consumerTheoryData = {
    id: "topic_consumer_theory",
    title: "Consumer Theory",
    sections: [
        {
            title: "Utility",
            content: "Utility is the satisfaction derived from consumption. We distinguish between Cardinal Utility (measurable, e.g., Utils) and Ordinal Utility (ranking based, e.g., Indifference Curves).",
            keyPoints: [
                "Total Utility (TU): Sum of utilities from all units.",
                "Marginal Utility (MU): change in TU / change in Q.",
                "Law of Diminishing MU: As consumption increases, MU falls."
            ]
        },
        {
            title: "Indifference Curves (IC)",
            content: "An IC shows combinations of two goods giving equal satisfaction. Properties: Downward sloping, Convex to origin (diminishing MRS), Non-intersecting, Higher IC = Higher Utility.",
            keyPoints: [
                "MRS (Marginal Rate of Substitution): Rate at which consumer trades Y for X.",
                "MRS = MUx / MUy (Slope of IC)."
            ]
        },
        {
            title: "Budget Constraint",
            content: "Shows affordable combinations given income M and prices Px, Py. Equation: PxX + PyY = M.",
            keyPoints: [
                "Slope = -Px/Py (Price Ratio).",
                "Shift: Change in Income.",
                "Rotation: Change in relative prices."
            ]
        },
        {
            title: "Consumer Equilibrium",
            content: "Maximum satisfaction point subject to budget constraint. Tangency point where Slope of IC = Slope of Budget Line.",
            formula: "MUx / Px = MUy / Py  OR  MRSxy = Px / Py"
        },
        {
            title: "Price Effect Decomposition",
            content: "Price Effect (PE) = Substitution Effect (SE) + Income Effect (IE).",
            keyPoints: [
                "Normal Good: SE(-), IE(-) -> PE(-). (Law of Demand holds)",
                "Inferior Good: SE(-), IE(+) -> PE(-) if SE > IE.",
                "Giffen Good: SE(-), IE(++) -> PE(+). (Demand curve slopes upward)"
            ]
        }
    ]
};
