
export const multiplierAcceleratorQuestions = [
    // --- BASIC MULTIPLIER NUMERICALS (Q1-Q5) ---
    {
        id: "mult_acc_001",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Easy",
        question: "If MPC = 0.75, find the value of investment multiplier.",
        options: [],
        correctAnswer: "4",
        explanation: {
            concept: "Investment Multiplier",
            detailed: ["k = 1 / (1 – MPC) = 1 / (1 - 0.75) = 1 / 0.25 = 4"],
            takeaways: ["Higher MPC leads to higher multiplier"],
            challenge: "What happens to multiplier if MPC = 0.9?"
        }
    },
    {
        id: "mult_acc_002",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Easy",
        question: "MPC = 0.8 and autonomous investment increases by 50. Find change in income.",
        options: [],
        correctAnswer: "250",
        explanation: {
            concept: "Income Change",
            detailed: ["k = 1/(1-0.8) = 5", "ΔY = k × ΔI = 5 × 50 = 250"],
            takeaways: ["Multiplier magnifies impact of investment"],
            challenge: "Calculate if MPC = 0.6"
        }
    },
    {
        id: "mult_acc_003",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Easy",
        question: "MPC = 0.6 and government spending rises by 100. Find ΔY.",
        options: [],
        correctAnswer: "250",
        explanation: {
            concept: "Government Spending Multiplier",
            detailed: ["k = 1/(1-0.6) = 1/0.4 = 2.5", "ΔY = 2.5 × 100 = 250"],
            takeaways: ["Government spending has same multiplier as investment"],
            challenge: "Compare with tax multiplier"
        }
    },
    {
        id: "mult_acc_004",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Easy",
        question: "If MPS = 0.25 and ΔI = 80, find change in income.",
        options: [],
        correctAnswer: "320",
        explanation: {
            concept: "Multiplier using MPS",
            detailed: ["k = 1/MPS = 1/0.25 = 4", "ΔY = 4 × 80 = 320"],
            takeaways: ["k = 1/MPS = 1/(1-MPC)"],
            challenge: "Verify using MPC = 0.75"
        }
    },
    {
        id: "mult_acc_005",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Easy",
        question: "Given MPC = 0.9, find multiplier.",
        options: [],
        correctAnswer: "10",
        explanation: {
            concept: "High MPC Multiplier",
            detailed: ["k = 1/(1-0.9) = 1/0.1 = 10"],
            takeaways: ["Very high MPC creates large multiplier effect"],
            challenge: "What if MPC = 0.95?"
        }
    },

    // --- TAX MULTIPLIER (Q6-Q7) ---
    {
        id: "mult_acc_006",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Medium",
        question: "MPC = 0.8 and taxes increase by 40. Find change in income.",
        options: [],
        correctAnswer: "-160",
        explanation: {
            concept: "Tax Multiplier",
            detailed: ["Tax multiplier = –MPC/(1–MPC) = -0.8/0.2 = -4", "ΔY = -4 × 40 = -160"],
            takeaways: ["Tax multiplier is negative and smaller than spending multiplier"],
            challenge: "Why is tax multiplier smaller in absolute value?"
        }
    },
    {
        id: "mult_acc_007",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Medium",
        question: "MPC = 0.75 and taxes fall by 60. Find ΔY.",
        options: [],
        correctAnswer: "180",
        explanation: {
            concept: "Tax Cut Effect",
            detailed: ["Tax multiplier = –MPC/(1–MPC) = -0.75/0.25 = -3", "ΔY = -3 × (-60) = +180"],
            takeaways: ["Tax cuts increase income"],
            challenge: "Compare with government spending of 60"
        }
    },

    // --- BALANCED BUDGET MULTIPLIER (Q8-Q9) ---
    {
        id: "mult_acc_008",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Medium",
        question: "Government increases G and T by 100 with MPC = 0.8. Find net change in Y.",
        options: [],
        correctAnswer: "100",
        explanation: {
            concept: "Balanced Budget Multiplier",
            detailed: ["Balanced budget multiplier = 1 (always)", "ΔY = 1 × 100 = 100"],
            takeaways: ["Equal increase in G and T increases Y by same amount"],
            challenge: "Prove why it equals 1"
        }
    },
    {
        id: "mult_acc_009",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Medium",
        question: "G and T both rise by 50 with MPC = 0.6. Find ΔY.",
        options: [],
        correctAnswer: "50",
        explanation: {
            concept: "Balanced Budget Multiplier",
            detailed: ["Balanced budget multiplier = 1 (independent of MPC)", "ΔY = 1 × 50 = 50"],
            takeaways: ["MPC doesn't affect balanced budget multiplier"],
            challenge: "Calculate separately using G and T multipliers"
        }
    },

    // --- ACCELERATOR NUMERICALS (Q10-Q12) ---
    {
        id: "mult_acc_010",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Medium",
        question: "Capital-output ratio (accelerator v) = 3. If income rises from 100 to 120, find induced investment.",
        options: [],
        correctAnswer: "60",
        explanation: {
            concept: "Accelerator Principle",
            detailed: ["ΔY = 120 - 100 = 20", "Induced Investment I = v × ΔY = 3 × 20 = 60"],
            takeaways: ["Accelerator links investment to change in income"],
            challenge: "What if income falls?"
        }
    },
    {
        id: "mult_acc_011",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Medium",
        question: "v = 2 and income rises from 200 to 260. Find induced investment.",
        options: [],
        correctAnswer: "120",
        explanation: {
            concept: "Accelerator Effect",
            detailed: ["ΔY = 260 - 200 = 60", "I = v × ΔY = 2 × 60 = 120"],
            takeaways: ["Investment depends on rate of change of income"],
            challenge: "Calculate if v = 3"
        }
    },
    {
        id: "mult_acc_012",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Medium",
        question: "If income falls from 500 to 460 and v = 4, find induced investment.",
        options: [],
        correctAnswer: "-160",
        explanation: {
            concept: "Disinvestment",
            detailed: ["ΔY = 460 - 500 = -40", "I = v × ΔY = 4 × (-40) = -160 (disinvestment)"],
            takeaways: ["Negative income change leads to disinvestment"],
            challenge: "Economic interpretation of negative investment"
        }
    },

    // --- COMBINED MULTIPLIER–ACCELERATOR (Q13-Q15) ---
    {
        id: "mult_acc_013",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Hard",
        question: "MPC = 0.75 and v = 2. Autonomous investment rises by 40. Find total change in income (including accelerator effect).",
        options: [],
        correctAnswer: "480",
        explanation: {
            concept: "Combined Effect",
            detailed: [
                "Multiplier k = 1/(1-0.75) = 4",
                "Initial ΔY = k × ΔI₀ = 4 × 40 = 160",
                "Induced I = v × ΔY = 2 × 160 = 320",
                "Final ΔY = 160 + 320 = 480"
            ],
            takeaways: ["Accelerator amplifies multiplier effect"],
            challenge: "What determines system stability?"
        }
    },
    {
        id: "mult_acc_014",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Hard",
        question: "MPC = 0.8, v = 1.5, ΔI₀ = 100. Find final change in income.",
        options: [],
        correctAnswer: "1250",
        explanation: {
            concept: "Multiplier-Accelerator Interaction",
            detailed: [
                "k = 1/(1-0.8) = 5",
                "Initial ΔY = 5 × 100 = 500",
                "Induced I = 1.5 × 500 = 750",
                "Total ΔY = 500 + 750 = 1250"
            ],
            takeaways: ["Large combined effect with high MPC and v"],
            challenge: "Check stability condition"
        }
    },
    {
        id: "mult_acc_015",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Hard",
        question: "MPC = 0.6, v = 3, ΔI₀ = 50. Find final ΔY.",
        options: [],
        correctAnswer: "500",
        explanation: {
            concept: "Full Multiplier-Accelerator",
            detailed: [
                "k = 1/(1-0.6) = 2.5",
                "Initial ΔY = 2.5 × 50 = 125",
                "Induced I = 3 × 125 = 375",
                "Final ΔY = 125 + 375 = 500"
            ],
            takeaways: ["High accelerator creates large secondary effects"],
            challenge: "Calculate third round effects"
        }
    },

    // --- DYNAMIC PATH PROBLEMS (Q16-Q18) ---
    {
        id: "mult_acc_016",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Medium",
        question: "Income increases from 400 to 450 in year 1, v = 2. Find induced investment in year 2.",
        options: [],
        correctAnswer: "100",
        explanation: {
            concept: "Time Path",
            detailed: ["ΔY = 450 - 400 = 50", "I = 2 × 50 = 100"],
            takeaways: ["Investment responds to income changes"],
            challenge: "What happens in year 3?"
        }
    },
    {
        id: "mult_acc_017",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Medium",
        question: "If income next year rises to 480 (from 450), find next year induced investment (v = 2).",
        options: [],
        correctAnswer: "60",
        explanation: {
            concept: "Sequential Changes",
            detailed: ["ΔY = 480 - 450 = 30", "I = 2 × 30 = 60"],
            takeaways: ["Investment depends on current period income change"],
            challenge: "Trace full dynamic path"
        }
    },
    {
        id: "mult_acc_018",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Medium",
        question: "If income falls from 600 to 560 and v = 3, find induced investment.",
        options: [],
        correctAnswer: "-120",
        explanation: {
            concept: "Negative Acceleration",
            detailed: ["ΔY = 560 - 600 = -40", "I = 3 × (-40) = -120"],
            takeaways: ["Declining income causes disinvestment"],
            challenge: "Impact on future periods"
        }
    },

    // --- MULTISTAGE EFFECTS (Q19-Q21) ---
    {
        id: "mult_acc_019",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Medium",
        question: "MPC = 0.75, v = 1. Autonomous investment rises by 80. Find income after multiplier only.",
        options: [],
        correctAnswer: "320",
        explanation: {
            concept: "Multiplier Stage",
            detailed: ["k = 1/(1-0.75) = 4", "ΔY = 4 × 80 = 320"],
            takeaways: ["First stage: multiplier effect only"],
            challenge: "Add accelerator effect next"
        }
    },
    {
        id: "mult_acc_020",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Medium",
        question: "Using previous question (ΔY = 320, v = 1), find induced investment.",
        options: [],
        correctAnswer: "320",
        explanation: {
            concept: "Induced Investment Stage",
            detailed: ["Induced I = v × ΔY = 1 × 320 = 320"],
            takeaways: ["Second stage: accelerator effect"],
            challenge: "Calculate total effect"
        }
    },
    {
        id: "mult_acc_021",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Medium",
        question: "Total income change including accelerator (from Q19-Q20).",
        options: [],
        correctAnswer: "640",
        explanation: {
            concept: "Total Effect",
            detailed: ["Initial ΔY = 320", "Induced I = 320", "Total ΔY = 320 + 320 = 640"],
            takeaways: ["Combined multiplier-accelerator doubles the effect"],
            challenge: "Continue to third round"
        }
    },

    // --- STABILITY CONDITIONS (Q22-Q23) ---
    {
        id: "mult_acc_022",
        type: "MCQ",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Hard",
        question: "If MPC = 0.9 and v = 4, is the system stable?",
        options: [
            { id: "A", text: "Yes, stable" },
            { id: "B", text: "No, unstable" },
            { id: "C", text: "Neutral stability" },
            { id: "D", text: "Cannot determine" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Stability Condition",
            detailed: ["For stability: v × MPC < 1", "Here: 4 × 0.9 = 3.6 > 1", "System is unstable (explosive oscillations)"],
            takeaways: ["High MPC and v create instability"],
            challenge: "Find critical value of v"
        }
    },
    {
        id: "mult_acc_023",
        type: "MCQ",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Hard",
        question: "If MPC = 0.6 and v = 1, is stability condition satisfied?",
        options: [
            { id: "A", text: "Yes, v × MPC < 1" },
            { id: "B", text: "No, v × MPC > 1" },
            { id: "C", text: "Borderline case" },
            { id: "D", text: "Insufficient information" }
        ],
        correctAnswer: "A",
        explanation: {
            concept: "Stability Check",
            detailed: ["v × MPC = 1 × 0.6 = 0.6 < 1", "Condition satisfied, system is stable"],
            takeaways: ["Lower values ensure convergence"],
            challenge: "What if v = 2?"
        }
    },

    // --- AUTONOMOUS CONSUMPTION EFFECTS (Q24-Q25) ---
    {
        id: "mult_acc_024",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Medium",
        question: "MPC = 0.8 and autonomous consumption rises by 50. Find ΔY.",
        options: [],
        correctAnswer: "250",
        explanation: {
            concept: "Autonomous Consumption Multiplier",
            detailed: ["k = 1/(1-0.8) = 5", "ΔY = 5 × 50 = 250"],
            takeaways: ["Autonomous consumption has same multiplier as investment"],
            challenge: "Compare with induced consumption"
        }
    },
    {
        id: "mult_acc_025",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Medium",
        question: "With v = 2, find induced investment from previous question (ΔY = 250).",
        options: [],
        correctAnswer: "500",
        explanation: {
            concept: "Accelerator from Consumption",
            detailed: ["Induced I = v × ΔY = 2 × 250 = 500"],
            takeaways: ["Any income change triggers accelerator"],
            challenge: "Calculate total effect"
        }
    },

    // --- GOVERNMENT SPENDING WITH ACCELERATOR (Q26-Q27) ---
    {
        id: "mult_acc_026",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Hard",
        question: "MPC = 0.75, v = 2, ΔG = 60. Find final change in Y.",
        options: [],
        correctAnswer: "720",
        explanation: {
            concept: "Fiscal Policy with Accelerator",
            detailed: [
                "k = 4",
                "Initial ΔY = 4 × 60 = 240",
                "Induced I = 2 × 240 = 480",
                "Final ΔY = 240 + 480 = 720"
            ],
            takeaways: ["Government spending triggers both effects"],
            challenge: "Compare with pure multiplier"
        }
    },
    {
        id: "mult_acc_027",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Hard",
        question: "If MPC = 0.7, v = 1.5, ΔG = 100, find final ΔY.",
        options: [],
        correctAnswer: "700",
        explanation: {
            concept: "Government Multiplier-Accelerator",
            detailed: [
                "k = 1/(1-0.7) = 3.33",
                "Initial ΔY = 3.33 × 100 = 333.33",
                "Induced I = 1.5 × 333.33 = 500",
                "Approximate total ΔY ≈ 700"
            ],
            takeaways: ["Rounding may be needed in calculations"],
            challenge: "Exact calculation method"
        }
    },

    // --- NUMERICAL COMPARISONS (Q28-Q29) ---
    {
        id: "mult_acc_028",
        type: "MCQ",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Easy",
        question: "Which gives larger effect for same ΔI: MPC = 0.6 or MPC = 0.8?",
        options: [
            { id: "A", text: "MPC = 0.6" },
            { id: "B", text: "MPC = 0.8" },
            { id: "C", text: "Both equal" },
            { id: "D", text: "Depends on v" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Multiplier Comparison",
            detailed: ["Higher MPC → Higher multiplier", "k(0.6) = 2.5 vs k(0.8) = 5"],
            takeaways: ["MPC directly affects multiplier magnitude"],
            challenge: "Calculate exact difference"
        }
    },
    {
        id: "mult_acc_029",
        type: "MCQ",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Medium",
        question: "Higher accelerator makes economy:",
        options: [
            { id: "A", text: "More stable" },
            { id: "B", text: "More volatile" },
            { id: "C", text: "Unchanged" },
            { id: "D", text: "Deflationary" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Volatility",
            detailed: ["Higher v amplifies income fluctuations", "Creates larger swings in investment"],
            takeaways: ["Accelerator increases business cycle amplitude"],
            challenge: "Relate to stability condition"
        }
    },

    // --- TIME-PATH PROBLEMS (Q30-Q31) ---
    {
        id: "mult_acc_030",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Medium",
        question: "Year 0 income = 500, Year 1 income = 550, v = 2. Find induced investment in year 2.",
        options: [],
        correctAnswer: "100",
        explanation: {
            concept: "Time Series Analysis",
            detailed: ["ΔY (year 0 to 1) = 550 - 500 = 50", "I (year 2) = 2 × 50 = 100"],
            takeaways: ["Investment lags income change by one period"],
            challenge: "Build complete time path"
        }
    },
    {
        id: "mult_acc_031",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Medium",
        question: "If year 2 income = 620 (from 550), find induced investment in year 3 (v = 2).",
        options: [],
        correctAnswer: "140",
        explanation: {
            concept: "Continuing Time Path",
            detailed: ["ΔY (year 1 to 2) = 620 - 550 = 70", "I (year 3) = 2 × 70 = 140"],
            takeaways: ["Accelerating growth increases investment"],
            challenge: "Predict year 3 income"
        }
    },

    // --- TAX–ACCELERATOR COMBO (Q32) ---
    {
        id: "mult_acc_032",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Hard",
        question: "MPC = 0.8, v = 1.5. Taxes fall by 40. Find final ΔY.",
        options: [],
        correctAnswer: "240",
        explanation: {
            concept: "Tax Cut with Accelerator",
            detailed: [
                "Tax multiplier = -0.8/0.2 = -4",
                "Initial ΔY = -4 × (-40) = 160",
                "Induced I = 1.5 × 160 = 240",
                "Total ΔY = 160 + 80 = 240 (simplified)"
            ],
            takeaways: ["Tax policy also triggers accelerator"],
            challenge: "Compare with government spending"
        }
    },

    // --- CONTRACTION CASES (Q33-Q34) ---
    {
        id: "mult_acc_033",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Hard",
        question: "MPC = 0.75, v = 2. Autonomous investment falls by 60. Find final ΔY.",
        options: [],
        correctAnswer: "-360",
        explanation: {
            concept: "Contractionary Effect",
            detailed: [
                "k = 4",
                "Initial ΔY = 4 × (-60) = -240",
                "Induced I = 2 × (-240) = -480",
                "Final ΔY = -240 + (-120) = -360"
            ],
            takeaways: ["Negative shocks are amplified similarly"],
            challenge: "Asymmetric effects?"
        }
    },
    {
        id: "mult_acc_034",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Medium",
        question: "If income falls from 800 to 760, v = 3, find disinvestment.",
        options: [],
        correctAnswer: "-120",
        explanation: {
            concept: "Disinvestment Calculation",
            detailed: ["ΔY = 760 - 800 = -40", "I = 3 × (-40) = -120"],
            takeaways: ["Negative investment = capital stock reduction"],
            challenge: "Long-run implications"
        }
    },

    // --- REALISTIC JAM STYLE (Q35-Q36) ---
    {
        id: "mult_acc_035",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Medium",
        question: "MPC = 0.8, v = 1, ΔI₀ = 50. Find income change after two rounds.",
        options: [],
        correctAnswer: "250",
        explanation: {
            concept: "Two-Round Effect",
            detailed: [
                "k = 5",
                "Round 1: ΔY = 5 × 50 = 250",
                "Round 2: Induced I = 1 × 250 = 250 (but question asks after 2 rounds total)"
            ],
            takeaways: ["Multi-round analysis"],
            challenge: "Continue to convergence"
        }
    },
    {
        id: "mult_acc_036",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Hard",
        question: "MPC = 0.6, v = 2, ΔG = 100. Find total ΔY.",
        options: [],
        correctAnswer: "500",
        explanation: {
            concept: "Full Effect Calculation",
            detailed: [
                "k = 2.5",
                "Initial ΔY = 2.5 × 100 = 250",
                "Induced I = 2 × 250 = 500",
                "Total ΔY = 250 + 250 = 500"
            ],
            takeaways: ["Government spending with accelerator"],
            challenge: "Third round effects"
        }
    },

    // --- SPECIAL CASES (Q37-Q39) ---
    {
        id: "mult_acc_037",
        type: "MCQ",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Easy",
        question: "If v = 0, the system reduces to:",
        options: [
            { id: "A", text: "Simple Keynesian multiplier" },
            { id: "B", text: "Pure accelerator" },
            { id: "C", text: "Classical model" },
            { id: "D", text: "IS-LM model" }
        ],
        correctAnswer: "A",
        explanation: {
            concept: "No Accelerator",
            detailed: ["v = 0 means no induced investment", "Only multiplier effect remains"],
            takeaways: ["Accelerator is optional component"],
            challenge: "When is v = 0 realistic?"
        }
    },
    {
        id: "mult_acc_038",
        type: "MCQ",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Easy",
        question: "If MPC = 0, multiplier equals:",
        options: [
            { id: "A", text: "0" },
            { id: "B", text: "1" },
            { id: "C", text: "Infinity" },
            { id: "D", text: "Undefined" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Zero MPC",
            detailed: ["k = 1/(1-0) = 1", "No multiplier effect, one-to-one change"],
            takeaways: ["All income saved, no consumption chain"],
            challenge: "Economic interpretation"
        }
    },
    {
        id: "mult_acc_039",
        type: "MCQ",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Medium",
        question: "If MPC = 1, multiplier becomes:",
        options: [
            { id: "A", text: "0" },
            { id: "B", text: "1" },
            { id: "C", text: "Infinite (theoretically)" },
            { id: "D", text: "-1" }
        ],
        correctAnswer: "C",
        explanation: {
            concept: "Maximum MPC",
            detailed: ["k = 1/(1-1) = 1/0 = ∞", "All income consumed, perpetual expansion"],
            takeaways: ["Theoretical limit, unrealistic"],
            challenge: "Why impossible in reality?"
        }
    },

    // --- FINAL COMPREHENSIVE PROBLEM (Q40) ---
    {
        id: "mult_acc_040",
        type: "NAT",
        topic: "Keynesian Theory",
        subtopic: "Multiplier-Accelerator Numerical",
        difficulty: "Hard",
        question: "Given MPC = 0.75 and v = 0.5, ΔI₀ = 80. Find final ΔY.",
        options: [],
        correctAnswer: "480",
        explanation: {
            concept: "Complete Multiplier-Accelerator",
            detailed: [
                "k = 1/(1-0.75) = 4",
                "Initial ΔY = 4 × 80 = 320",
                "Induced I = 0.5 × 320 = 160",
                "Total ΔY = 320 + 160 = 480"
            ],
            takeaways: ["Low accelerator reduces secondary effects"],
            challenge: "Compare with v = 2"
        }
    }
];
