
export const keynesianTheoryData = {
    id: "topic_keynesian_theory",
    title: "Keynesian Theory - Multiplier & Accelerator",
    sections: [
        {
            title: "The Multiplier Effect",
            content: "The multiplier shows how an initial change in autonomous spending leads to a larger change in national income through successive rounds of spending.",
            keyPoints: [
                "Investment Multiplier: k = 1/(1-MPC) = 1/MPS",
                "ΔY = k × ΔI (Change in income = multiplier × change in investment)",
                "Higher MPC → Higher multiplier → Larger income effect",
                "Example: If MPC = 0.8, then k = 5, so ΔI of 100 leads to ΔY of 500"
            ]
        },
        {
            title: "Tax Multiplier",
            content: "Tax changes have a smaller multiplier effect than government spending because only a fraction (MPC) of tax cuts is spent.",
            keyPoints: [
                "Tax Multiplier = -MPC/(1-MPC)",
                "Negative sign: Tax increase reduces income, tax cut increases income",
                "Smaller than spending multiplier by factor of MPC",
                "Example: If MPC = 0.8, tax multiplier = -4 (vs spending multiplier = 5)"
            ]
        },
        {
            title: "Balanced Budget Multiplier",
            content: "When government spending and taxes increase by the same amount, income still rises.",
            keyPoints: [
                "Balanced Budget Multiplier = 1 (always, regardless of MPC)",
                "Equal increase in G and T raises Y by same amount as ΔG",
                "Spending multiplier (positive) > Tax multiplier (negative) in absolute terms",
                "Proof: ΔY = k×ΔG - (k×MPC)×ΔT = k×ΔG(1-MPC) = ΔG when ΔG=ΔT"
            ]
        },
        {
            title: "The Accelerator Principle",
            content: "Investment depends not on the level of income, but on the rate of change of income.",
            keyPoints: [
                "Induced Investment: I = v × ΔY",
                "v = capital-output ratio (accelerator coefficient)",
                "Rising income → Positive induced investment",
                "Falling income → Disinvestment (negative investment)",
                "Amplifies business cycles"
            ]
        },
        {
            title: "Multiplier-Accelerator Interaction",
            content: "The combined effect creates powerful income fluctuations and can lead to cyclical behavior.",
            keyPoints: [
                "Initial autonomous investment → Multiplier effect → Income rises",
                "Rising income → Accelerator effect → Induced investment",
                "Induced investment → Further multiplier effect → More income rise",
                "Total ΔY = Initial ΔY + Induced Investment effect",
                "Can create explosive, damped, or cyclical patterns"
            ]
        },
        {
            title: "Stability Conditions",
            content: "The multiplier-accelerator model can be stable, explosive, or oscillatory depending on parameters.",
            keyPoints: [
                "Stability Condition: v × MPC < 1",
                "If v × MPC > 1: System is unstable (explosive oscillations)",
                "If v × MPC < 1: System converges to equilibrium",
                "High MPC and high v together create instability",
                "Explains business cycle fluctuations"
            ]
        },
        {
            title: "Government Spending Multiplier",
            content: "Government expenditure has the same multiplier effect as autonomous investment.",
            keyPoints: [
                "Government Multiplier: k = 1/(1-MPC)",
                "ΔY = k × ΔG",
                "Fiscal policy effectiveness depends on multiplier size",
                "With accelerator: Total effect = Direct + Induced investment effect"
            ]
        },
        {
            title: "Special Cases",
            content: "Understanding extreme values helps grasp the multiplier mechanism.",
            keyPoints: [
                "If MPC = 0: k = 1 (no multiplier effect, all income saved)",
                "If MPC = 1: k = ∞ (infinite multiplier, unrealistic)",
                "If v = 0: No accelerator effect (pure multiplier model)",
                "If v is very high: Large induced investment, potential instability"
            ]
        },
        {
            title: "Time Lags and Dynamic Effects",
            content: "The multiplier-accelerator process takes time to work through the economy.",
            keyPoints: [
                "Investment in period t depends on income change from t-1 to t",
                "Income in period t depends on investment in period t-1",
                "Creates lagged responses and potential oscillations",
                "Time path can show overshooting and cycles"
            ]
        },
        {
            title: "Policy Implications",
            content: "Understanding multiplier-accelerator helps design effective fiscal policy.",
            keyPoints: [
                "Fiscal stimulus has multiplied effects on income",
                "Tax policy less effective than spending policy (smaller multiplier)",
                "Need to consider induced investment effects",
                "High v can make economy volatile",
                "Automatic stabilizers help dampen fluctuations"
            ]
        }
    ]
};
