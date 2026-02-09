
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
    }
};
