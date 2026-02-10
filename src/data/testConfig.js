
// This file maps specific Mock Tests to their corresponding questions.
// As we add more questions from past years, we will list their IDs here.

export const testManifest = {
    "mock_001": {
        title: "IIT JAM Economics 2024 (Mock)",
        description: "Full length past year paper simulation.",
        duration: 180, // minutes
        totalMarks: 100,
        sections: [
            { name: "Section A (MCQ)", type: "MCQ", questionIds: ["micro_001", "macro_001", "math_001", "ie_002", "stats_002"] },
            { name: "Section B (MSQ)", type: "MSQ", questionIds: ["micro_005", "ie_001"] },
            { name: "Section C (NAT)", type: "NAT", questionIds: ["micro_nat_001", "macro_nat_001", "stats_001"] }
        ]
    },
    "mock_002": {
        title: "Macroeconomics Mastery",
        description: "Deep dive into IS-LM, Solow Model, and National Income.",
        duration: 90,
        totalMarks: 50,
        sections: [
            { name: "Macro MCQs", type: "MCQ", questionIds: ["macro_001", "macro_002", "macro_004"] },
            { name: "Macro Numerical", type: "NAT", questionIds: ["macro_nat_001", "macro_005"] }
        ]
    },
    "mock_003": {
        title: "Micro \u0026 Stats Booster",
        description: "Combined practice for Consumer Theory and Statistics.",
        duration: 60,
        totalMarks: 30,
        sections: [
            { name: "Micro", type: "MCQ", questionIds: ["micro_001", "micro_002", "micro_004"] },
            { name: "Stats", type: "mixed", questionIds: ["stats_001", "stats_002", "stats_003"] }
        ]
    },
    "mock_hard_full": {
        title: "IIT JAM Hard Mock (100 Qs)",
        description: "Intensive full-length mock test with high-difficulty conceptual and numerical questions.",
        duration: 180,
        totalMarks: 100,
        sections: [
            {
                name: "Microeconomics",
                type: "MCQ",
                questionIds: Array.from({ length: 35 }, (_, i) => `mock_hard_${String(i + 1).padStart(3, '0')}`)
            },
            {
                name: "Macroeconomics",
                type: "MCQ",
                questionIds: Array.from({ length: 35 }, (_, i) => `mock_hard_${String(i + 36).padStart(3, '0')}`)
            },
            {
                name: "Statistics \u0026 Math",
                type: "MCQ",
                questionIds: Array.from({ length: 15 }, (_, i) => `mock_hard_${String(i + 71).padStart(3, '0')}`)
            },
            {
                name: "Indian Economy",
                type: "MCQ",
                questionIds: Array.from({ length: 15 }, (_, i) => `mock_hard_${String(i + 86).padStart(3, '0')}`)
            }
        ]
    },
    "section_micro_001": {
        title: "Test 1: Microeconomics",
        description: "Timed section focus on Consumer Theory, Production, and Market Structures.",
        duration: 35,
        totalMarks: 20,
        sections: [
            { name: "Microeconomics", type: "MCQ", questionIds: Array.from({ length: 20 }, (_, i) => `st_micro_${String(i + 1).padStart(3, '0')}`) }
        ]
    },
    "section_macro_001": {
        title: "Test 2: Macroeconomics",
        description: "Timed section focus on IS-LM, Multiplier, and Solow Model.",
        duration: 35,
        totalMarks: 20,
        sections: [
            { name: "Macroeconomics", type: "MCQ", questionIds: Array.from({ length: 20 }, (_, i) => `st_macro_${String(i + 1).padStart(3, '0')}`) }
        ]
    },
    "section_stats_001": {
        title: "Test 3: Statistics \u0026 Math",
        description: "Timed section focus on Correlation, Probability, and Optimization.",
        duration: 30,
        totalMarks: 20,
        sections: [
            { name: "Stats \u0026 Math", type: "MCQ", questionIds: Array.from({ length: 20 }, (_, i) => `st_stats_${String(i + 1).padStart(3, '0')}`) }
        ]
    },
    "section_ie_001": {
        title: "Test 4: Indian Economy",
        description: "Timed section focus on GDP, RBI, GST, and Fiscal Policy.",
        duration: 25,
        totalMarks: 20,
        sections: [
            { name: "Indian Economy", type: "MCQ", questionIds: Array.from({ length: 20 }, (_, i) => `st_ie_${String(i + 1).padStart(3, '0')}`) }
        ]
    },
    "section_mixed_001": {
        title: "Test 5: Mixed Full Length",
        description: "Balanced mix of Micro, Macro, Stats, and Indian Economy questions.",
        duration: 60,
        totalMarks: 40,
        sections: [
            { name: "Mixed", type: "MCQ", questionIds: Array.from({ length: 40 }, (_, i) => `st_mixed_${String(i + 1).padStart(3, '0')}`) }
        ]
    },
    // --- WEAK-AREA REINFORCEMENT TESTS ---
    "wa_consumer_001": {
        title: "Weak-Area: Consumer Theory",
        description: "Intensive 10-question drill to fix conceptual gaps in Consumer Optimization and Demand.",
        duration: 15,
        totalMarks: 10,
        sections: [
            { name: "Consumer Theory", type: "MCQ", questionIds: Array.from({ length: 10 }, (_, i) => `wa_consumer_${String(i + 1).padStart(3, '0')}`) }
        ]
    },
    "wa_prod_001": {
        title: "Weak-Area: Production \u0026 Cost",
        description: "Master cost functions, returns to scale, and firm optimization.",
        duration: 15,
        totalMarks: 10,
        sections: [
            { name: "Production \u0026 Cost", type: "MCQ", questionIds: Array.from({ length: 10 }, (_, i) => `wa_prod_${String(i + 1).padStart(3, '0')}`) }
        ]
    },
    "wa_islm_001": {
        title: "Weak-Area: IS-LM Model",
        description: "Focused drill on IS-LM shifts, equilibrium, and policy effectiveness.",
        duration: 12,
        totalMarks: 5,
        sections: [
            { name: "IS-LM Model", type: "MCQ", questionIds: Array.from({ length: 5 }, (_, i) => `wa_islm_${String(i + 1).padStart(3, '0')}`) }
        ]
    }
};
