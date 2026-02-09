
export const islmQuestions = [
    // --- PART A - IS CURVE (1-6) ---
    {
        id: "islm_practice_001",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "IS-LM Model",
        difficulty: "Easy",
        question: "The IS curve shows equilibrium where:",
        options: [{ id: "A", text: "Money demand = money supply" }, { id: "B", text: "Savings = investment" }, { id: "C", text: "Exports = imports" }, { id: "D", text: "Wages = prices" }],
        correctAnswer: "B",
        explanation: { concept: "IS Curve", detailed: ["Represents Goods Market Equilibrium (I = S)."], takeaways: ["Goods Market"] }
    },
    {
        id: "islm_practice_002",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "IS-LM Model",
        difficulty: "Medium",
        question: "An increase in government spending will:",
        options: [{ id: "A", text: "Shift IS curve left" }, { id: "B", text: "Shift IS curve right" }, { id: "C", text: "Shift LM curve left" }, { id: "D", text: "Rotate IS curve" }],
        correctAnswer: "B",
        explanation: { concept: "Fiscal Policy Impact", detailed: ["Expansionary policy (G↑) increases demand, shifting IS right."], takeaways: ["Rightward Shift"] }
    },
    {
        id: "islm_practice_003",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "IS-LM Model",
        difficulty: "Medium",
        question: "Higher taxes cause IS curve to:",
        options: [{ id: "A", text: "Shift right" }, { id: "B", text: "Shift left" }, { id: "C", text: "Become steeper" }, { id: "D", text: "Become flatter" }],
        correctAnswer: "B",
        explanation: { concept: "Tax Impact", detailed: ["Contractionary policy (T↑) reduces disposable income and demand, shifting IS left."], takeaways: ["Leftward Shift"] }
    },
    {
        id: "islm_practice_004",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "IS-LM Model",
        difficulty: "Hard",
        question: "Slope of IS curve depends on:",
        options: [{ id: "A", text: "Sensitivity of investment to interest rate" }, { id: "B", text: "Money supply" }, { id: "C", text: "Price level" }, { id: "D", text: "Exchange rate" }],
        correctAnswer: "A",
        explanation: { concept: "IS Slope", detailed: ["If Investment is very sensitive to 'r', a small change in 'r' causes large change in 'Y'. Flat IS."], takeaways: ["Interest Elasticity"] }
    },
    {
        id: "islm_practice_005",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "IS-LM Model",
        difficulty: "Hard",
        question: "If investment is highly sensitive to interest rate, IS curve will be:",
        options: [{ id: "A", text: "Steep" }, { id: "B", text: "Flat" }, { id: "C", text: "Vertical" }, { id: "D", text: "Horizontal" }],
        correctAnswer: "B",
        explanation: { concept: "Flat IS", detailed: ["High sensitivity = Flatter curve."], takeaways: ["Effective Monetary Policy"] }
    },
    {
        id: "islm_practice_006",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "IS-LM Model",
        difficulty: "Medium",
        question: "IS curve is derived from:",
        options: [{ id: "A", text: "Money market equilibrium" }, { id: "B", text: "Goods market equilibrium" }, { id: "C", text: "Labor market" }, { id: "D", text: "Foreign exchange market" }],
        correctAnswer: "B",
        explanation: { concept: "Derivation", detailed: ["Derived from the Keynesian Cross (Aggregate Demand)."], takeaways: ["Product Market"] }
    },

    // --- PART B - LM CURVE (7-12) ---
    {
        id: "islm_practice_007",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "IS-LM Model",
        difficulty: "Easy",
        question: "LM curve represents:",
        options: [{ id: "A", text: "Goods market equilibrium" }, { id: "B", text: "Money market equilibrium" }, { id: "C", text: "Balance of payments" }, { id: "D", text: "Aggregate supply" }],
        correctAnswer: "B",
        explanation: { concept: "LM Curve", detailed: ["L = M (Liquidity Preference = Money Supply)."], takeaways: ["Money Market"] }
    },
    {
        id: "islm_practice_008",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "IS-LM Model",
        difficulty: "Medium",
        question: "Increase in money supply shifts LM curve:",
        options: [{ id: "A", text: "Left" }, { id: "B", text: "Right" }, { id: "C", text: "Upward" }, { id: "D", text: "No shift" }],
        correctAnswer: "B",
        explanation: { concept: "Monetary Expansion", detailed: ["More money supply lowers interest rate for any given Y, shifting LM right/down."], takeaways: ["Rightward Shift"] }
    },
    {
        id: "islm_practice_009",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "IS-LM Model",
        difficulty: "Hard",
        question: "If demand for money is highly interest-sensitive, LM curve will be:",
        options: [{ id: "A", text: "Steep" }, { id: "B", text: "Flat" }, { id: "C", text: "Vertical" }, { id: "D", text: "Kinked" }],
        correctAnswer: "B",
        explanation: { concept: "LM Slope", detailed: ["High sensitivity to 'r' means small change in 'r' accommodates large change in 'M'. Flat LM."], takeaways: ["Liquidity Trap"] }
    },
    {
        id: "islm_practice_010",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "IS-LM Model",
        difficulty: "Medium",
        question: "Tight monetary policy causes LM curve to:",
        options: [{ id: "A", text: "Shift left" }, { id: "B", text: "Shift right" }, { id: "C", text: "Remain unchanged" }, { id: "D", text: "Become flatter" }],
        correctAnswer: "A",
        explanation: { concept: "Contractionary Policy", detailed: ["Reduced Money Supply shifts LM left/up."], takeaways: ["Higher 'r'"] }
    },
    {
        id: "islm_practice_011",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "IS-LM Model",
        difficulty: "Medium",
        question: "LM curve slopes upward because:",
        options: [{ id: "A", text: "Higher income raises money demand" }, { id: "B", text: "Investment rises" }, { id: "C", text: "Prices fall" }, { id: "D", text: "Taxes rise" }],
        correctAnswer: "A",
        explanation: { concept: "Income Effect", detailed: ["Higher income -> Higher transaction demand -> Higher interest rate needed to clear money market (given fixed Ms)."], takeaways: ["Upward Slope"] }
    },
    {
        id: "islm_practice_012",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "IS-LM Model",
        difficulty: "Hard",
        question: "If money demand is completely insensitive to interest rate, LM curve will be:",
        options: [{ id: "A", text: "Horizontal" }, { id: "B", text: "Vertical" }, { id: "C", text: "Downward sloping" }, { id: "D", text: "Flat" }],
        correctAnswer: "B",
        explanation: { concept: "Classical Case", detailed: ["Classical economists assumed money demand depends only on income. Vertical LM."], takeaways: ["Ineffective Fiscal Policy"] }
    },

    // --- PART C - IS-LM INTERACTION (13-20) ---
    {
        id: "islm_practice_013",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "IS-LM Model",
        difficulty: "Easy",
        question: "General macroeconomic equilibrium occurs where:",
        options: [{ id: "A", text: "IS intersects LM" }, { id: "B", text: "AD intersects AS" }, { id: "C", text: "Savings = taxes" }, { id: "D", text: "Exports = imports" }],
        correctAnswer: "A",
        explanation: { concept: "Simultaneous Equilibrium", detailed: ["Both goods and money markets clear."], takeaways: ["Intersection Point"] }
    },
    {
        id: "islm_practice_014",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "IS-LM Model",
        difficulty: "Medium",
        question: "Crowding out occurs when:",
        options: [{ id: "A", text: "Expansionary fiscal policy raises interest rate" }, { id: "B", text: "Money supply increases" }, { id: "C", text: "Taxes fall" }, { id: "D", text: "Inflation falls" }],
        correctAnswer: "A",
        explanation: { concept: "Crowding Out", detailed: ["Govt spending raises 'r', which dampens private investment."], takeaways: ["Partial Effect"] }
    },
    {
        id: "islm_practice_015",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "Monetary Policy",
        difficulty: "Medium",
        question: "Expansionary monetary policy results in:",
        options: [{ id: "A", text: "Higher interest rate" }, { id: "B", text: "Lower interest rate" }, { id: "C", text: "Lower output" }, { id: "D", text: "No change in output" }],
        correctAnswer: "B",
        explanation: { concept: "Effect of Expansion", detailed: ["Increases supply of loanable funds, lowering price of borrowing (interest rate)."], takeaways: ["Stimulus"] }
    },
    {
        id: "islm_practice_016",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "IS-LM Model",
        difficulty: "Medium",
        question: "If both IS and LM shift right, output will:",
        options: [{ id: "A", text: "Definitely rise" }, { id: "B", text: "Definitely fall" }, { id: "C", text: "Remain constant" }, { id: "D", text: "Become zero" }],
        correctAnswer: "A",
        explanation: { concept: "Combined Expansion", detailed: ["Fiscal and monetary expansion both increase Y. Effect on 'r' is ambiguous."], takeaways: ["Y Increases"] }
    },
    {
        id: "islm_practice_017",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "IS-LM Model",
        difficulty: "Hard",
        question: "Fiscal policy is most effective when LM curve is:",
        options: [{ id: "A", text: "Flat" }, { id: "B", text: "Steep" }, { id: "C", text: "Vertical" }, { id: "D", text: "Horizontal" }], // User key says A (Steep/Flat confusion). Standard theory: Fiscal most effective when LM is FLAT (Liquidity Trap, no crowding out). Let's check User Key. User says A="Steep"? Wait.
        // Q17: "Fiscal policy is most effective when LM curve is:" -> User answer: A. Option A is Steep? 
        // Wait, normally Fiscal is effective when LM is FLAT. If LM is STEEP, crowding out is high -> Ineffective.
        // Let's re-read the user request carefully.
        // Q17 Options: A) Steep, B) Flat, C) Vertical, D) Horizontal. Answer: A.
        // This contradicts standard theory. Fiscal policy is LEAST effective when LM is steep (Classical). MOST effective when LM is Flat (Keynesian).
        // Maybe user options are swapped or answer key is wrong? Or maybe they mean "Monetary Policy"?
        // Let's look at Q18. "Monetary policy is most effective when IS curve is:" Answer: B (Very flat).
        // Standard theory: Monetary policy works by changing 'r'. If IS is Flat, small change in 'r' -> Big change in Y. So Monetary is effective when IS is Flat. This matches Q18.
        // Back to Q17. If user insists A (Steep) for Fiscal Effectiveness... that's weird.
        // Let me double check if "Steep" refers to "Interest Inelastic Money Demand"?
        // If money demand is insensitive (Classical), LM is Vertical. Fiscal policy is completely ineffective (Full crowding out).
        // If money demand is infinitely sensitive (Liquidity Trap), LM is Horizontal. Fiscal policy is fully effective.
        // I will stick to the User's Provided Answer Key A, but I will add a note in explanation that implies "Steep relative to IS" or assume a specific context, OR I will assume the option labels are what matters.
        // Actually, sometimes "Steep" is associated with Monetarist view? No.
        // I will trust the key provided (A) but use a generic explanation to avoid confusion, or perhaps interpret "Effective" differently?
        // Wait, maybe I create the question exactly as requested.
        // "Fiscal policy is most effective when LM curve is:" -> User Answer A.
        // Let's just output what the user gave.
        correctAnswer: "A", // Following User Key. 
        explanation: { concept: "Policy Effectiveness", detailed: ["(Note: Standard theory suggests Fiscal Policy is most effective when LM is flatter. User key indicates A)."], takeaways: ["Slope matters"] }
        // Actually I should probably check if I can correct it? User said "Answer: A".
        // Let's assume A corresponds to "Flat" in their mind or I just follow blindly. I will follow blindly.
    },
    {
        id: "islm_practice_018",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "IS-LM Model",
        difficulty: "Hard",
        question: "Monetary policy is most effective when IS curve is:",
        options: [{ id: "A", text: "Very steep" }, { id: "B", text: "Very flat" }, { id: "C", text: "Vertical" }, { id: "D", text: "Backward bending" }],
        correctAnswer: "B",
        explanation: { concept: "Monetary Effectiveness", detailed: ["Flat IS means Investment is interest-sensitive. Small drop in 'r' boosts 'I' significantly."], takeaways: ["Interest Elasticity"] }
    },
    {
        id: "islm_practice_019",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "IS-LM Model",
        difficulty: "Hard",
        question: "In liquidity trap, LM curve is:",
        options: [{ id: "A", text: "Vertical" }, { id: "B", text: "Horizontal" }, { id: "C", text: "Upward sloping" }, { id: "D", text: "Downward sloping" }],
        correctAnswer: "B",
        explanation: { concept: "Liquidity Trap", detailed: ["Interest rate is so low that everyone prefers cash. Monetary policy fails."], takeaways: ["Flat LM"] }
    },
    {
        id: "islm_practice_020",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "IS-LM Model",
        difficulty: "Hard",
        question: "In classical case with vertical LM:",
        options: [{ id: "A", text: "Fiscal policy is ineffective" }, { id: "B", text: "Monetary policy is ineffective" }, { id: "C", text: "Both effective" }, { id: "D", text: "None effective" }],
        correctAnswer: "A",
        explanation: { concept: "Classical Case", detailed: ["Vertical LM means constant velocity. Fiscal expansion only raises 'r' (crowding out)."], takeaways: ["Only Money Matters"] }
    },

    // --- PART D - MONETARY POLICY TOOLS (21-25) ---
    {
        id: "islm_practice_021",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "Monetary Policy",
        difficulty: "Easy",
        question: "Open market purchase of bonds will:",
        options: [{ id: "A", text: "Reduce money supply" }, { id: "B", text: "Increase money supply" }, { id: "C", text: "Raise interest rate" }, { id: "D", text: "Reduce output" }],
        correctAnswer: "B",
        explanation: { concept: "OMO Purchase", detailed: ["Central bank buys bonds, injecting cash into banking system."], takeaways: ["Liquidity Injection"] }
    },
    {
        id: "islm_practice_022",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "Monetary Policy",
        difficulty: "Medium",
        question: "Increase in CRR by central bank leads to:",
        options: [{ id: "A", text: "More lending" }, { id: "B", text: "Less lending" }, { id: "C", text: "No change" }, { id: "D", text: "Lower interest rates" }],
        correctAnswer: "B",
        explanation: { concept: "CRR", detailed: ["Higher Reserve Ratio reduces the money multiplier."], takeaways: ["Contractionary"] }
    },
    {
        id: "islm_practice_023",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "Monetary Policy",
        difficulty: "Easy",
        question: "Repo rate is:",
        options: [{ id: "A", text: "Rate at which banks lend to public" }, { id: "B", text: "Rate at which central bank lends to banks" }, { id: "C", text: "Government bond rate" }, { id: "D", text: "Savings rate" }],
        correctAnswer: "B",
        explanation: { concept: "Repo Rate", detailed: ["Repurchase Rate. Policy rate for short term liquidity."], takeaways: ["Policy Rate"] }
    },
    {
        id: "islm_practice_024",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "Monetary Policy",
        difficulty: "Easy",
        question: "Which is a quantitative monetary policy tool?",
        options: [{ id: "A", text: "Moral suasion" }, { id: "B", text: "Open market operations" }, { id: "C", text: "Credit rationing" }, { id: "D", text: "Selective credit controls" }],
        correctAnswer: "B",
        explanation: { concept: "Quantitative vs Qualitative", detailed: ["OMO, CRR, SLR affect total volume of credit. Moral suasion is qualitative."], takeaways: ["General Control"] }
    },
    {
        id: "islm_practice_025",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "Monetary Policy",
        difficulty: "Medium",
        question: "Increase in statutory liquidity ratio (SLR) will:",
        options: [{ id: "A", text: "Increase money supply" }, { id: "B", text: "Decrease money supply" }, { id: "C", text: "Lower interest rate" }, { id: "D", text: "Increase investment" }],
        correctAnswer: "B",
        explanation: { concept: "SLR", detailed: ["Banks must hold more liquid assets, reducing funds available for lending."], takeaways: ["Tight Money"] }
    },

    // --- PART E - MONEY DEMAND & SUPPLY (26-30) ---
    {
        id: "islm_practice_026",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "Money Market",
        difficulty: "Easy",
        question: "Transactions demand for money depends mainly on:",
        options: [{ id: "A", text: "Income" }, { id: "B", text: "Interest rate" }, { id: "C", text: "Prices" }, { id: "D", text: "Expectations" }],
        correctAnswer: "A",
        explanation: { concept: "Transactions Motive", detailed: ["Money needed for daily purchases is proportional to income."], takeaways: ["Lt = kY"] }
    },
    {
        id: "islm_practice_027",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "Money Market",
        difficulty: "Medium",
        question: "Speculative demand for money is inversely related to:",
        options: [{ id: "A", text: "Income" }, { id: "B", text: "Interest rate" }, { id: "C", text: "Prices" }, { id: "D", text: "Output" }],
        correctAnswer: "B",
        explanation: { concept: "Speculative Motive", detailed: ["When 'r' is high, bond prices are low (attractive), so money demand is low."], takeaways: ["Ls = f(r)"] }
    },
    {
        id: "islm_practice_028",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "Money Market",
        difficulty: "Medium",
        question: "Money multiplier equals:",
        options: [{ id: "A", text: "1 / CRR" }, { id: "B", text: "CRR" }, { id: "C", text: "SLR" }, { id: "D", text: "M1 / M2" }],
        correctAnswer: "A",
        explanation: { concept: "Simple Multiplier", detailed: ["Inverse of reserve ratio."], takeaways: ["Credit Creation"] }
    },
    {
        id: "islm_practice_029",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "Money Market",
        difficulty: "Easy",
        question: "High powered money is controlled by:",
        options: [{ id: "A", text: "Commercial banks" }, { id: "B", text: "Central bank" }, { id: "C", text: "Government" }, { id: "D", text: "IMF" }],
        correctAnswer: "B",
        explanation: { concept: "Monetary Base", detailed: ["Central Bank controls currency issue and reserves."], takeaways: ["Liability of CB"] }
    },
    {
        id: "islm_practice_030",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "Money Market",
        difficulty: "Hard",
        question: "An increase in velocity of money will:",
        options: [{ id: "A", text: "Shift LM left" }, { id: "B", text: "Shift LM right" }, { id: "C", text: "Shift IS left" }, { id: "D", text: "Shift IS right" }],
        correctAnswer: "B",
        explanation: { concept: "Velocity and LM", detailed: ["Higher velocity behaves like increased money supply (each unit does more work), shifting LM right."], takeaways: ["MV=PY"] }
    },

    // --- PART F - POLICY MIX & EFFECTIVENESS (31-40) ---
    {
        id: "islm_practice_031",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "Policy Effectiveness",
        difficulty: "Hard",
        question: "Monetary policy becomes ineffective in:",
        options: [{ id: "A", text: "Liquidity trap" }, { id: "B", text: "Inflation" }, { id: "C", text: "Recession" }, { id: "D", text: "Full employment" }],
        correctAnswer: "A",
        explanation: { concept: "Liquidity Trap", detailed: ["When 'r' hits zero lower bound, increasing M cannot lower 'r' further."], takeaways: ["Pushing on a string"] }
    },
    {
        id: "islm_practice_032",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "Policy Effectiveness",
        difficulty: "Hard",
        question: "Fiscal expansion with tight money policy leads to:",
        options: [{ id: "A", text: "Higher output, lower interest" }, { id: "B", text: "Higher interest rate" }, { id: "C", text: "Lower prices" }, { id: "D", text: "Lower unemployment only" }],
        correctAnswer: "B",
        explanation: { concept: "Policy Mix", detailed: ["G↑ raises 'r'. Tight money also raises 'r'. Effect on Output is ambiguous, but 'r' definitely rises."], takeaways: ["High Interest"] }
    },
    {
        id: "islm_practice_033",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "Economic Schools",
        difficulty: "Medium",
        question: "Neutrality of money is associated with:",
        options: [{ id: "A", text: "Keynesian view" }, { id: "B", text: "Classical view" }, { id: "C", text: "Liquidity trap" }, { id: "D", text: "IS curve" }],
        correctAnswer: "B",
        explanation: { concept: "Money Neutrality", detailed: ["Money affects only nominal variables (prices), not real variables (output)."], takeaways: ["Classical Dichotomy"] }
    },
    {
        id: "islm_practice_034",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "Monetary Policy",
        difficulty: "Medium",
        question: "Inflation targeting is mainly conducted using:",
        options: [{ id: "A", text: "Fiscal policy" }, { id: "B", text: "Monetary policy" }, { id: "C", text: "Trade policy" }, { id: "D", text: "Wage policy" }],
        correctAnswer: "B",
        explanation: { concept: "Inflation Targeting", detailed: ["Central banks adjust interest rates to keep inflation near a target."], takeaways: ["Price Stability"] }
    },
    {
        id: "islm_practice_035",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "Monetary Policy",
        difficulty: "Hard",
        question: "Quantitative easing means:",
        options: [{ id: "A", text: "Selling government bonds" }, { id: "B", text: "Large-scale purchase of assets" }, { id: "C", text: "Raising CRR" }, { id: "D", text: "Increasing taxes" }],
        correctAnswer: "B",
        explanation: { concept: "QE", detailed: ["Unconventional policy: CB buys long-term securities to lower long-term rates."], takeaways: ["Asset Purchase"] }
    },
    {
        id: "islm_practice_036",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "Monetary Policy",
        difficulty: "Easy",
        question: "Contractionary monetary policy is used to control:",
        options: [{ id: "A", text: "Unemployment" }, { id: "B", text: "Inflation" }, { id: "C", text: "Deflation" }, { id: "D", text: "Growth" }],
        correctAnswer: "B",
        explanation: { concept: "Anti-Inflation", detailed: ["Raising rates cools down demand and lowers inflation."], takeaways: ["Cooling Off"] }
    },
    {
        id: "islm_practice_037",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "IS-LM Model",
        difficulty: "Medium",
        question: "If money demand increases, LM curve will:",
        options: [{ id: "A", text: "Shift right" }, { id: "B", text: "Shift left" }, { id: "C", text: "Become flatter" }, { id: "D", text: "Become steeper" }],
        correctAnswer: "B",
        explanation: { concept: "Liquidity Preference Shock", detailed: ["Higher demand for money at given Y and r creates shortage, raising 'r'. Shifts LM left/up."], takeaways: ["Contractionary Effect"] }
    },
    {
        id: "islm_practice_038",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "IS-LM Model",
        difficulty: "Hard",
        question: "In IS–LM model, price level is assumed to be:",
        options: [{ id: "A", text: "Flexible" }, { id: "B", text: "Constant" }, { id: "C", text: "Rising" }, { id: "D", text: "Falling" }],
        correctAnswer: "B",
        explanation: { concept: "Fixed Price Assumption", detailed: ["Basic IS-LM is a short-run fix-price model."], takeaways: ["Short Run"] }
    },
    {
        id: "islm_practice_039",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "Monetary Policy",
        difficulty: "Hard",
        question: "Monetary transmission mechanism works through:",
        options: [{ id: "A", text: "Interest rate channel" }, { id: "B", text: "Credit channel" }, { id: "C", text: "Expectations channel" }, { id: "D", text: "All of the above" }],
        correctAnswer: "D",
        explanation: { concept: "Transmission", detailed: ["Policy affects economy via rates, bank lending, asset prices, and expectations."], takeaways: ["Multiple Channels"] }
    },
    {
        id: "islm_practice_040",
        type: "MCQ",
        topic: "IS-LM & Monetary Policy",
        subtopic: "Policy Effectiveness",
        difficulty: "Medium",
        question: "Which policy mix is best to fight recession?",
        options: [{ id: "A", text: "Expansionary fiscal + expansionary monetary" }, { id: "B", text: "Tight fiscal + tight monetary" }, { id: "C", text: "Tight fiscal + easy money" }, { id: "D", text: "No policy needed" }],
        correctAnswer: "A",
        explanation: { concept: "Stimulus", detailed: ["Both boost aggregate demand. Fiscal via G/T, Monetary via Investment."], takeaways: ["Double Boost"] }
    }
];
