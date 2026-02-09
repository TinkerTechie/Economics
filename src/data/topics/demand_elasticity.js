
export const demandElasticityData = {
    id: "topic_demand_elasticity",
    title: "Demand and Elasticity",
    sections: [
        {
            title: "Price Elasticity of Demand (PED)",
            content: "PED measures the responsiveness of quantity demanded to a change in price. It is calculated as the percentage change in quantity divided by the percentage change in price.",
            formula: "Ed = (%ΔQ) / (%ΔP) = (ΔQ/ΔP) * (P/Q)",
            keyPoints: [
                "Ed > 1: Elastic (Luxury goods, many substitutes)",
                "Ed < 1: Inelastic (Necessities, few substitutes)",
                "Ed = 1: Unitary Elastic",
                "Ed = ∞: Perfectly Elastic (Horizontal curve)",
                "Ed = 0: Perfectly Inelastic (Vertical curve)"
            ]
        },
        {
            title: "Total Revenue and Elasticity",
            content: "The relationship between price changes and total revenue (TR = P*Q) depends on elasticity.",
            keyPoints: [
                "Elastic: Price ↓ -> TR ↑ (Quantity effect dominates)",
                "Inelastic: Price ↓ -> TR ↓ (Price effect dominates)",
                "Unit Elastic: Price change -> TR constant (Max TR)"
            ]
        },
        {
            title: "Cross Price Elasticity",
            content: "Measures responsiveness of demand for Good X to a change in price of Good Y.",
            formula: "Exy = (%ΔQx) / (%ΔPy)",
            keyPoints: [
                "Exy > 0: Substitutes (Tea & Coffee)",
                "Exy < 0: Complements (Car & Petrol)",
                "Exy = 0: Unrelated Goods"
            ]
        },
        {
            title: "Income Elasticity",
            content: "Measures responsiveness of demand to a change in income.",
            formula: "Ey = (%ΔQ) / (%ΔY)",
            keyPoints: [
                "Ey > 0: Normal Good",
                "Ey > 1: Luxury Good",
                "Ey < 0: Inferior Good"
            ]
        },
        {
            title: "Determinants of Elasticity",
            content: "Factors that affect how elastic demand is.",
            keyPoints: [
                "Substitutes: More substitutes = More elastic",
                "Nature of Good: Luxury = Elastic, Necessity = Inelastic",
                "Proportion of Income: Higher proportion = More elastic",
                "Time: Long run = More elastic"
            ]
        }
    ]
};
