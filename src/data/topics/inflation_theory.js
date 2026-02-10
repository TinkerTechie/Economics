
export const inflationTheoryData = {
    id: "topic_inflation_theory",
    title: "Inflation & Phillips Curve",
    sections: [
        {
            title: "Measuring Inflation",
            content: "Inflation is the sustained increase in the general price level over time.",
            keyPoints: [
                "Inflation Rate = [(CPI_t - CPI_{t-1}) / CPI_{t-1}] × 100",
                "CPI (Consumer Price Index): Basket of consumer goods",
                "WPI (Wholesale Price Index): Wholesale/producer prices",
                "GDP Deflator = (Nominal GDP / Real GDP) × 100",
                "Core inflation excludes food and energy (volatile components)"
            ]
        },
        {
            title: "Quantity Theory of Money",
            content: "Classical theory linking money supply to price level.",
            keyPoints: [
                "MV = PY (Fisher's Equation of Exchange)",
                "M = Money supply, V = Velocity, P = Price level, Y = Real output",
                "If V constant: %ΔM = %ΔP + %ΔY",
                "Inflation = Money growth - Output growth",
                "Long-run: Inflation is always a monetary phenomenon"
            ]
        },
        {
            title: "The Phillips Curve",
            content: "Original Phillips curve showed inverse relationship between wage inflation and unemployment.",
            keyPoints: [
                "Original: Wage inflation = f(Unemployment), negative relationship",
                "Modified: Price inflation π = a - bu",
                "a = autonomous inflation, b = slope coefficient",
                "Lower unemployment → Higher inflation (demand-pull)",
                "Trade-off: Can reduce unemployment by accepting higher inflation"
            ]
        },
        {
            title: "Expectations-Augmented Phillips Curve",
            content: "Friedman-Phelps critique: Long-run Phillips curve is vertical at natural rate.",
            keyPoints: [
                "Short-run: π = πᵉ - β(u - u*)",
                "πᵉ = expected inflation, u* = natural rate of unemployment",
                "Long-run: π = πᵉ (no trade-off, vertical at u*)",
                "Only unexpected inflation reduces unemployment",
                "Adaptive expectations: πᵉ = past inflation"
            ]
        },
        {
            title: "Natural Rate of Unemployment",
            content: "The unemployment rate consistent with stable inflation.",
            keyPoints: [
                "NAIRU: Non-Accelerating Inflation Rate of Unemployment",
                "At u = u*: Inflation is stable (π = πᵉ)",
                "If u < u*: Inflation accelerates",
                "If u > u*: Inflation decelerates",
                "Determined by structural factors, not monetary policy"
            ]
        },
        {
            title: "Cost-Push Inflation",
            content: "Inflation caused by supply-side factors rather than demand.",
            keyPoints: [
                "Causes: Wage increases, oil shocks, supply disruptions",
                "Shifts Phillips curve upward (stagflation)",
                "Wage-price spiral: Wages ↑ → Costs ↑ → Prices ↑ → Wages ↑",
                "Unit labor cost inflation = Wage growth - Productivity growth",
                "Harder to control with demand management"
            ]
        },
        {
            title: "Sacrifice Ratio",
            content: "The cost of reducing inflation measured in lost output or increased unemployment.",
            keyPoints: [
                "Sacrifice Ratio = Cumulative output loss / Reduction in inflation",
                "Or: Percentage point years of unemployment / Percentage point reduction in π",
                "Higher ratio → More costly disinflation",
                "Depends on credibility of central bank",
                "Rational expectations → Lower sacrifice ratio"
            ]
        },
        {
            title: "Disinflation",
            content: "Reducing the rate of inflation (not the same as deflation).",
            keyPoints: [
                "Gradual approach: Slow reduction, lower output loss",
                "Cold turkey: Rapid reduction, higher short-run cost but faster credibility",
                "Credibility crucial: If believed, expectations adjust quickly",
                "Output cost = Sacrifice ratio × Inflation reduction",
                "Examples: Volcker disinflation (1980s US)"
            ]
        },
        {
            title: "Fisher Equation",
            content: "Relationship between nominal interest rate, real interest rate, and inflation.",
            keyPoints: [
                "Nominal rate (i) = Real rate (r) + Expected inflation (πᵉ)",
                "Real interest rate: i - π (ex-post) or i - πᵉ (ex-ante)",
                "Fisher effect: Higher expected inflation → Higher nominal rates",
                "Real rate determined by productivity and time preference",
                "Important for bond markets and monetary policy"
            ]
        },
        {
            title: "Demand-Pull vs Cost-Push",
            content: "Two main sources of inflationary pressure.",
            keyPoints: [
                "Demand-pull: AD > AS, excess demand drives prices up",
                "Cost-push: AS shifts left, costs drive prices up",
                "Demand-pull: Move along Phillips curve (lower u, higher π)",
                "Cost-push: Phillips curve shifts up (higher π at same u)",
                "Policy response differs: Demand-pull → Tighten; Cost-push → Dilemma"
            ]
        },
        {
            title: "Inflation and Unemployment Trade-off",
            content: "The policy dilemma and its resolution.",
            keyPoints: [
                "Short-run: Trade-off exists (downward-sloping Phillips curve)",
                "Long-run: No trade-off (vertical Phillips curve at u*)",
                "Cannot permanently reduce unemployment below u* via inflation",
                "Stagflation (1970s): High inflation + High unemployment",
                "Modern consensus: Target low, stable inflation; use supply-side policies for unemployment"
            ]
        },
        {
            title: "Hyperinflation",
            content: "Extremely high and accelerating inflation.",
            keyPoints: [
                "Definition: Inflation > 50% per month",
                "Causes: Excessive money printing, loss of confidence",
                "Effects: Money loses value rapidly, economic chaos",
                "Examples: Germany 1920s, Zimbabwe 2000s, Venezuela 2010s",
                "Solution: Monetary reform, fiscal discipline, credible institutions"
            ]
        }
    ]
};
