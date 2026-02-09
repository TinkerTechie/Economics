
export const islmNumericalQuestions = [
    // --- BASIC IS CURVE NUMERICALS (1-4) ---
    {
        id: "islm_num_001",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Hard",
        question: "Given: C = 50 + 0.8Y, I = 100 – 5r, G = 50. Find the equilibrium income (Y) if r = 0. (Enter the intercept term of the IS equation).",
        correctAnswer: "1000",
        explanation: { concept: "IS Equation", detailed: ["Y = C + I + G", "Y = 50 + 0.8Y + 100 - 5r + 50", "Y - 0.8Y = 200 - 5r", "0.2Y = 200 - 5r", "Y = 1000 - 25r"], takeaways: ["Algebraic Derivation"] }
    },
    {
        id: "islm_num_002",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Hard",
        question: "Using the IS equation Y = 1000 – 25r, if r = 10 (representing 10%), find equilibrium income.",
        correctAnswer: "750",
        explanation: { concept: "Substitute r", detailed: ["Y = 1000 - 25(10)", "Y = 1000 - 250", "Y = 750"], takeaways: ["Calculation"] }
    },
    {
        id: "islm_num_003",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Hard",
        question: "If government spending increases to G = 70 (from 50), what is the new autonomous expenditure component (intercept) in the IS equation Y = A - br?",
        correctAnswer: "1100",
        explanation: { concept: "Fiscal Shift", detailed: ["New A = 50 + 100 + 70 = 220.", "0.2Y = 220 - 5r", "Y = 1100 - 25r"], takeaways: ["Multiplier Effect"] }
    },
    {
        id: "islm_num_004",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Medium",
        question: "Given MPC = 0.75 and ΔI = 40, find value of change in income (ΔY).",
        correctAnswer: "160",
        explanation: { concept: "Investment Multiplier", detailed: ["k = 1 / (1 - 0.75) = 4", "ΔY = 4 * 40 = 160"], takeaways: ["Simple Multiplier"] }
    },

    // --- LM CURVE NUMERICALS (5-7) ---
    {
        id: "islm_num_005",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Hard",
        question: "Money demand: Md = 0.2Y – 10r, Money supply: Ms = 200. Find the constant term in the LM equation Y = A + br.",
        correctAnswer: "1000",
        explanation: { concept: "LM Equation", detailed: ["0.2Y - 10r = 200", "0.2Y = 200 + 10r", "Y = 1000 + 50r"], takeaways: ["Money Market Equilibrium"] }
    },
    {
        id: "islm_num_006",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Medium",
        question: "Using LM equation Y = 1000 + 50r, if r = 6, find Y.",
        correctAnswer: "1300",
        explanation: { concept: "Substitution", detailed: ["Y = 1000 + 50(6)", "Y = 1000 + 300 = 1300"], takeaways: ["Calculation"] }
    },
    {
        id: "islm_num_007",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Medium",
        question: "If money supply rises to 240, what is the new constant term in the LM equation Y = A + 50r?",
        correctAnswer: "1200",
        explanation: { concept: "Monetary Shift", detailed: ["0.2Y - 10r = 240", "0.2Y = 240 + 10r", "Y = 1200 + 50r"], takeaways: ["Rightward Shift"] }
    },

    // --- IS–LM EQUILIBRIUM (8-10) ---
    {
        id: "islm_num_008_r",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Hard",
        question: "Given IS: Y = 1000 – 20r and LM: Y = 200 + 40r. Find equilibrium interest rate (r). (Round to 2 decimal places)",
        correctAnswer: "13.33",
        explanation: { concept: "Equilibrium", detailed: ["1000 - 20r = 200 + 40r", "800 = 60r", "r = 800/60 = 13.33"], takeaways: ["Solving System"] }
    },
    {
        id: "islm_num_008_y",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Hard",
        question: "Given IS: Y = 1000 – 20r and LM: Y = 200 + 40r. Find equilibrium income (Y). (Round to 2 decimal places)",
        correctAnswer: "733.33",
        explanation: { concept: "Equilibrium Income", detailed: ["Substitute r=13.33 into IS or LM.", "Y = 1000 - 20(13.33) = 1000 - 266.6 = 733.34 (approx)"], takeaways: ["Substitution"] }
    },
    {
        id: "islm_num_009_r",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Hard",
        question: "IS: Y = 800 – 10r, LM: Y = 200 + 30r. Find equilibrium r.",
        correctAnswer: "15",
        explanation: { concept: "Equilibrium r", detailed: ["800 - 10r = 200 + 30r", "600 = 40r", "r = 15"], takeaways: ["Intersection"] }
    },
    {
        id: "islm_num_009_y",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Hard",
        question: "IS: Y = 800 – 10r, LM: Y = 200 + 30r. Find equilibrium Y.",
        correctAnswer: "650",
        explanation: { concept: "Equilibrium Y", detailed: ["Y = 800 - 10(15) = 800 - 150 = 650"], takeaways: ["Substitution"] }
    },
    {
        id: "islm_num_010",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Hard",
        question: "IS: Y = 900 – 15r, LM: Y = 300 + 45r. Find equilibrium Y.",
        correctAnswer: "750",
        explanation: { concept: "Equilibrium Y", detailed: ["900 - 15r = 300 + 45r", "600 = 60r", "r = 10", "Y = 900 - 15(10) = 750"], takeaways: ["Solve System"] }
    },

    // --- POLICY MULTIPLIER NUMERICALS (11-13) ---
    {
        id: "islm_num_011",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Hard",
        question: "Given initial IS: Y = 1200 – 20r. If G increases such that IS shifts right by 120 (pure fiscal shift), but equilibrium income eventually becomes 880 (from an unspecified original), just calculate 'New Y' based on user prompt logic or verify provided answer 880. (Actually, let's treat it as: If pure IS shift is +X... Wait, user question says 'If G increases by 60 and multiplier is 2, new Y?'. New Y depends on LM. User answer says 880. This implies finding intersection. Let's assume the question asked for the logic provided in the answer key: 'New Y = 880'. Let's construct a cleaner version). *Rethinking*: Given the user prompt 'Answer: Shift in IS = 120, New Y = 880', allow specific input.",
        // The user problem Q11 is incomplete without the original equilibrium. 
        // IS: Y = 1200 - 20r. LM: Y = 400 + 40r. (From user prompt).
        // Original Eq: 1200 - 20r = 400 + 40r => 800 = 60r => r = 13.33. Y = 1200 - 266.6 = 933.3.
        // If G increases by 60 and multiplier is 2 -> Shift is 120.
        // New IS: Y = 1320 - 20r.
        // New Eq: 1320 - 20r = 400 + 40r => 920 = 60r => r = 15.33.
        // New Y = 1320 - 20(15.33) = 1320 - 306.6 = 1013.3.
        // User Answer says '880'? That seems wrong based on the provided equations.
        // Let's look at Q11 prompt again: "Given IS: Y = 1200 – 20r, LM: Y = 400 + 40r. New Y = 880".
        // Maybe the equations were different in their source? 
        // 1200-20r = 880 => 320=20r => r=16. 
        // 400+40r = 880 => 480=40r => r=12.
        // They don't match.
        // I will SKIP this specific question or use the user's EXACT numbers if possible, but for a "NAT" (Numerical Answer Type), calculation must be consistent.
        // I will use Q13 logic which is simpler: "ΔG=50, multiplier=?, ΔY=?".
        // Let's replace Q11 with a consistent solvable problem based on Q9 logic.
        question: "IS: Y = 1200 – 20r, LM: Y = 400 + 40r. If IS shifts parallel by +120 (New IS: Y = 1320 - 20r), what is the new equilibrium Y? (Round to nearest integer)",
        correctAnswer: "1013", // 1320 - 20r = 400 + 40r -> 920=60r -> r=15.33. Y=400+40(15.33)=400+613.3=1013.
        explanation: { concept: "Shift effect", detailed: ["New IS: Y = 1320 - 20r.", "1320 - 20r = 400 + 40r", "920 = 60r => r = 15.33", "Y = 1013.33"], takeaways: ["Shift & Solving"] }
    },
    {
        id: "islm_num_012",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Medium",
        question: "If money supply increases so LM shifts by +100 (horizontal shift), and slopes are as per Q11 (IS slope -20, LM slope +40 inverse... wait, equations are Y=... so slopes are 1/-20 and 1/40? No, Y = A - br. Slope is -1/b in r-Y space. Here equations are Y in terms of r). Let's use simple Q12 prompt: 'If money supply increases so LM shifts by +100... new equilibrium income rises by...'. Model: IS: Y=A-br, LM: Y=C+dr. Shift LM -> Y=C+100+dr. Change = ?. ΔY = (br * 100) / (br + dr)? No.",
        // Let's solve algebraically.
        // Y = A - br
        // Y = C + dr + 100
        // A - br = C + dr + 100
        // A - C - 100 = (b+d)r
        // Δr = -100 / (b+d).
        // ΔY = -b * Δr = -b * (-100 / b+d) = 100b / (b+d).
        // Using Q11 values: b=20, d=40.
        // ΔY = 100 * 20 / (20 + 40) = 2000 / 60 = 33.33.
        // User Answer says: 66.67.
        // If user says 66.67, then 100 * 40 / 60 = 66.66.
        // This implies the formula was 100d / (b+d).
        // Which means ΔY = d * Δr? No.
        // Maybe the shift was vertical? "If LM shifts by +100" usually means horizontal (Y).
        // If Y = 400 + 40r becomes Y = 500 + 40r (Shift +100 in Y intercept).
        // Then 1200 - 20r = 500 + 40r => 700 = 60r => r = 11.66. Original r = 13.33.
        // Δr = -1.66.
        // ΔY = -20 * (-1.66) = +33.33.
        // Why is user answer 66.67?
        // Maybe equations were Y = ... r? No, standard is r = ... Y.
        // If equations were r = A - bY and r = C + dY.
        // Let's stick to valid math. I will use a reliable problem.
        question: "IS: Y = 1000 - 10r, LM: Y = 200 + 20r. If Ms increases shifting LM intercept to 350 (Shift +150), find increase in Y.",
        correctAnswer: "50",
        explanation: { concept: "Algebra", detailed: ["Old: 1000-10r=200+20r -> 800=30r -> r=26.66, Y=733.33", "New: 1000-10r=350+20r -> 650=30r -> r=21.66", "New Y = 1000 - 216.66 = 783.33", "Change = 50"], takeaways: ["Shift"] }
    },
    {
        id: "islm_num_013",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Medium",
        question: "With MPC = 0.8, ΔG = 50, calculate the change in the IS intercept (horizontal shift of IS curve).",
        correctAnswer: "250",
        explanation: { concept: "Spending Multiplier", detailed: ["k = 1/(1-0.8) = 5.", "Shift = k * ΔG = 5 * 50 = 250"], takeaways: ["Horizontal Shift"] }
    },

    // --- INTEREST RATE ELASTICITY (14-15) ---
    {
        id: "islm_num_014",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Easy",
        question: "Investment: I = 200 – 10r. If r falls from 8 to 6, find change in I.",
        correctAnswer: "20",
        explanation: { concept: "Investment Function", detailed: ["I1 = 200 - 80 = 120", "I2 = 200 - 60 = 140", "Change = 20"], takeaways: ["Negative Relation"] }
    },
    {
        id: "islm_num_015",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Medium",
        question: "Money demand: Md = 0.25Y – 20r. If r rises by 2 (e.g., from 4 to 6), how much must Y rise to keep Md constant?",
        correctAnswer: "160",
        explanation: { concept: "Iso-Money Line", detailed: ["ΔMd = 0 = 0.25ΔY - 20Δr", "0 = 0.25ΔY - 20(2)", "0.25ΔY = 40", "ΔY = 160"], takeaways: ["Slope Ratio"] }
    },

    // --- LIQUIDITY TRAP & CLASSICAL (16-19) ---
    {
        id: "islm_num_016",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Medium",
        question: "If LM is horizontal (Liquidity Trap) and IS shifts right by 200, what is the change in Equilibrium Y?",
        correctAnswer: "200",
        explanation: { concept: "Liquidity Trap", detailed: ["In trap, r does not change.", "Full multiplier effect exists.", "Change in Y = Shift in IS."], takeaways: ["Max Effectiveness"] }
    },
    {
        id: "islm_num_017",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Easy",
        question: "In liquidity trap, if money supply increases by 100, by how much does income change?",
        correctAnswer: "0",
        explanation: { concept: "Ineffective Monetary Policy", detailed: ["Economy is satiated with liquidity. Extra money is held as idle balances. No change in r or Y."], takeaways: ["Zero Impact"] }
    },
    // Skipping 18/19 text-based/redundant for NAT.

    // --- CROWDING OUT (20-21) ---
    {
        id: "islm_num_020",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Medium",
        question: "IS: Y = 1000 – 10r, LM: Y = 200 + 20r. If G rises by 90 (multiplier 3), what is the POTENTIAL increase in Y (horizontal shift) without crowding out?",
        correctAnswer: "270",
        explanation: { concept: "Multiplier Effect", detailed: ["Shift = Multiplier * ΔG = 3 * 90 = 270."], takeaways: ["No Crowding Out"] }
    },
    {
        id: "islm_num_021",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Hard",
        question: "Using Q20 (IS: Y = 1000 - 10r, LM: Y = 200 + 20r). After the shift (New IS: Y = 1270 - 10r), find the ACTUAL increase in Y (crowding out included).",
        correctAnswer: "180",
        explanation: { concept: "Actual Change", detailed: ["Old Eq: 1000-10r=200+20r -> 800=30r -> r=26.67, Y=733.33", "New Eq: 1270-10r=200+20r -> 1070=30r -> r=35.67", "New Y = 200 + 20(35.67) = 913.33", "Actual ΔY = 913.33 - 733.33 = 180"], takeaways: ["Damping"] }
    },

    // --- MIXED POLICY (23-24) ---
    {
        id: "islm_num_023",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Hard",
        question: "IS: Y = 1000 – 20r, LM: Y = 500 + 40r. If Ms increases so LM shifts by 120 (New LM: Y = 620 + 40r), find new equilibrium Y.",
        correctAnswer: "840", // 1000-20r = 620+40r -> 380=60r -> r=6.33. Y = 1000 - 126.6 = 873.33. User key says 840...
        // Let's re-eval Logic.
        // Maybe shift is defined differently.
        // If user says "Answer: 840" for Q23.
        // Let's work backwards. Y=840.
        // IS: 840 = 1000 - 20r => 20r = 160 => r = 8.
        // LM: 840 = (OrigLM + Shift) + 40(8).
        // 840 = (500 + Shift) + 320.
        // 840 = 820 + Shift.
        // Shift = 20.
        // User prompt says "Shift by 120".
        // There is a disconnection. I will omit this specific one to avoid error, or just provide the user's logic if I can find it.
        // I'll assume valid math and modify the question to fit the math.
        question: "IS: Y = 1000 – 20r, LM: Y = 500 + 40r. If LM shifts to Y = 620 + 40r, calculatethe new equilibrium Y.",
        correctAnswer: "873.33", // Calculated above.
        explanation: { concept: "Shift", detailed: ["1000-20r = 620+40r", "380=60r", "r=6.33", "Y=873.33"], takeaways: ["Calculation"] }
    },

    // --- DERIVATIONS (25-27) ---
    {
        id: "islm_num_025",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Hard",
        question: "Given C = 100 + 0.8Y, I = 150 – 5r, G = 50. Find the intercept of the IS equation (Y = A - br).",
        correctAnswer: "1500",
        explanation: { concept: "IS Equation", detailed: ["Y = 100 + 0.8Y + 150 - 5r + 50", "0.2Y = 300 - 5r", "Y = 1500 - 25r"], takeaways: ["Derivation"] }
    },
    {
        id: "islm_num_026",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Hard",
        question: "Money demand: 0.3Y – 15r = 300 (Equilibrium condition with Ms included implicitly or Ms=300?). If this represents L=M, find intercept of LM equation (Y = A + br).",
        correctAnswer: "1000",
        explanation: { concept: "LM Equation", detailed: ["0.3Y = 300 + 15r", "Y = 1000 + 50r"], takeaways: ["Derivation"] }
    },
    {
        id: "islm_num_027",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Hard",
        question: "Using IS: Y = 1500 – 25r and LM: Y = 1000 + 50r, find equilibrium Y.",
        correctAnswer: "1333.33", // 1500-25r=1000+50r -> 500=75r -> r=6.66. Y=1000+333.33.
        explanation: { concept: "System Solution", detailed: ["1500 - 25r = 1000 + 50r", "500 = 75r => r = 6.67", "Y = 1000 + 50(6.67) = 1333.33"], takeaways: ["Final Value"] }
    },

    // --- MONEY MULTIPLIER (32) ---
    {
        id: "islm_num_032",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Medium",
        question: "CRR = 0.2, Ms rises by 50 (High Powered Money rise). Final change in Total Money Supply?",
        correctAnswer: "250",
        explanation: { concept: "Money Multiplier", detailed: ["m = 1/CRR = 1/0.2 = 5", "ΔMs = 5 * 50 = 250"], takeaways: ["Expansion"] }
    },

    // --- FULL MODEL (37-40) ---
    {
        id: "islm_num_037",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Hard",
        question: "IS: Y = 1600 – 40r, LM: Y = 400 + 20r. Find equilibrium r.",
        correctAnswer: "20",
        explanation: { concept: "Equilibrium r", detailed: ["1600 - 40r = 400 + 20r", "1200 = 60r", "r = 20"], takeaways: ["Solve Match"] }
    },
    {
        id: "islm_num_038",
        type: "NAT",
        topic: "Macroeconomics",
        subtopic: "IS-LM Numericals",
        difficulty: "Hard",
        question: "IS: Y = 1600 – 40r, LM: Y = 400 + 20r. Find equilibrium Y.",
        correctAnswer: "800",
        explanation: { concept: "Equilibrium Y", detailed: ["Y = 400 + 20(20) = 400 + 400 = 800"], takeaways: ["Substitution"] }
    }
];
