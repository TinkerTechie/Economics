
export const growthTheoryData = {
    id: "topic_growth_theory",
    title: "Growth Theory - Harrod-Domar & Solow Models",
    sections: [
        {
            title: "Harrod-Domar Growth Model",
            content: "A simple model linking growth rate to savings rate and capital productivity.",
            keyPoints: [
                "Growth Rate: g = s/v",
                "s = savings rate (fraction of income saved)",
                "v = capital-output ratio (K/Y)",
                "Higher savings → Higher growth",
                "Higher capital intensity → Lower growth"
            ]
        },
        {
            title: "Harrod-Domar: Warranted Growth Rate",
            content: "The growth rate at which firms' expectations are fulfilled and economy is in equilibrium.",
            keyPoints: [
                "Warranted growth (gw) = s/v",
                "If actual growth > warranted: Inflationary pressure",
                "If actual growth < warranted: Deflationary gap",
                "Knife-edge problem: Small deviations lead to cumulative divergence",
                "No self-correcting mechanism"
            ]
        },
        {
            title: "Harrod-Domar: Policy Implications",
            content: "Model emphasizes role of investment and capital accumulation in development.",
            keyPoints: [
                "To achieve target growth: Adjust savings rate or capital efficiency",
                "Required savings: s = g × v",
                "Developing countries need high savings for rapid growth",
                "Foreign aid can supplement domestic savings",
                "Technological progress can reduce v"
            ]
        },
        {
            title: "Solow Growth Model - Basics",
            content: "Neoclassical model with diminishing returns to capital and exogenous technological progress.",
            keyPoints: [
                "Production Function: Y = F(K, L) with constant returns to scale",
                "Per capita form: y = f(k) where k = K/L",
                "Diminishing marginal product of capital",
                "Savings: S = sY",
                "Investment equals savings: I = sY"
            ]
        },
        {
            title: "Solow: Steady State",
            content: "Long-run equilibrium where capital per worker and output per worker are constant.",
            keyPoints: [
                "Steady state condition: sY = δK (or sf(k) = δk)",
                "Investment just covers depreciation",
                "Capital-output ratio: K/Y = s/δ",
                "Higher s → Higher steady state k and y",
                "Higher δ → Lower steady state k and y"
            ]
        },
        {
            title: "Solow: Golden Rule",
            content: "The savings rate that maximizes steady-state consumption per capita.",
            keyPoints: [
                "Golden Rule: MPK = δ (or MPK = δ + n with population growth)",
                "Maximizes consumption: c* = f(k*) - δk*",
                "If MPK > δ: Increase savings (below golden rule)",
                "If MPK < δ: Decrease savings (above golden rule, dynamic inefficiency)",
                "Trade-off: Higher k means higher y but also higher depreciation"
            ]
        },
        {
            title: "Solow: Technological Progress",
            content: "Long-run per capita growth comes only from technological progress in Solow model.",
            keyPoints: [
                "Without technology: Per capita growth = 0 in steady state",
                "With technology: Long-run growth = rate of tech progress (g)",
                "Technology shifts production function upward",
                "Steady state in efficiency units: sf(k) = (n + g + δ)k",
                "Solow residual: Growth not explained by capital/labor"
            ]
        },
        {
            title: "Solow: Population Growth",
            content: "Population growth affects capital dilution and steady state.",
            keyPoints: [
                "With population growth n: sf(k) = (n + δ)k",
                "Higher n → Lower steady state k (capital dilution)",
                "Break-even investment: (n + δ)k",
                "Per capita growth = 0 in steady state (without technology)",
                "Total output growth = n in steady state"
            ]
        },
        {
            title: "Solow: Convergence",
            content: "Poor countries should grow faster than rich countries (conditional convergence).",
            keyPoints: [
                "Countries below steady state: k grows (MPK high)",
                "Countries above steady state: k falls (MPK low)",
                "Convergence speed depends on distance from steady state",
                "Conditional on same s, δ, n, technology",
                "Explains catch-up growth of some developing countries"
            ]
        },
        {
            title: "Cobb-Douglas Production Function",
            content: "Commonly used functional form in growth models.",
            keyPoints: [
                "Y = AK^α L^(1-α) where 0 < α < 1",
                "α = capital's share of income",
                "Constant returns to scale: α + (1-α) = 1",
                "MPK = αY/K, MPL = (1-α)Y/L",
                "Output elasticity: %ΔY = α×%ΔK + (1-α)×%ΔL"
            ]
        },
        {
            title: "Harrod-Domar vs Solow",
            content: "Key differences between the two growth models.",
            keyPoints: [
                "HD: Fixed v, no diminishing returns; Solow: Variable K/Y, diminishing returns",
                "HD: Savings affects long-run growth; Solow: Savings affects level, not growth",
                "HD: Knife-edge instability; Solow: Stable convergence",
                "HD: No role for technology; Solow: Technology drives long-run growth",
                "Solow more realistic with flexible factor proportions"
            ]
        },
        {
            title: "Policy Implications",
            content: "What growth models tell us about development policy.",
            keyPoints: [
                "Savings important but not sufficient for sustained growth",
                "Technology and innovation crucial for long-run prosperity",
                "Diminishing returns limit gains from capital accumulation",
                "Institutions, education, R&D matter for technological progress",
                "Convergence possible but not automatic"
            ]
        }
    ]
};
