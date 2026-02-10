
export const indianEconomyPovertyNumericals = [
    // --- SECTION A: POVERTY NUMERICALS (Q1-Q10) ---
    {
        id: "ind_poverty_001",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Poverty Numerical",
        difficulty: "Easy",
        question: "Total population = 140 crore, People below poverty line = 28 crore. Find poverty ratio (as percentage).",
        options: [],
        correctAnswer: "20",
        explanation: {
            concept: "Poverty Ratio/Headcount Ratio",
            detailed: ["Poverty Ratio = (Poor / Total Population) × 100", "= (28/140) × 100 = 20%"],
            takeaways: ["Percentage of population below poverty line"],
            challenge: "Poverty line determination methods"
        }
    },
    {
        id: "ind_poverty_002",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Poverty Numerical",
        difficulty: "Easy",
        question: "Urban population = 50 crore, Urban poor = 7.5 crore. Find urban poverty rate (as percentage).",
        options: [],
        correctAnswer: "15",
        explanation: {
            concept: "Urban Poverty",
            detailed: ["Urban poverty rate = (7.5/50) × 100 = 15%"],
            takeaways: ["Lower than rural poverty typically"],
            challenge: "Urban vs rural poverty differences"
        }
    },
    {
        id: "ind_poverty_003",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Poverty Numerical",
        difficulty: "Easy",
        question: "Rural population = 90 crore, Rural poor = 18 crore. Find rural poverty rate (as percentage).",
        options: [],
        correctAnswer: "20",
        explanation: {
            concept: "Rural Poverty",
            detailed: ["Rural poverty rate = (18/90) × 100 = 20%"],
            takeaways: ["Higher in rural areas"],
            challenge: "Causes of rural poverty"
        }
    },
    {
        id: "ind_poverty_004",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Poverty Numerical",
        difficulty: "Easy",
        question: "Poverty rate falls from 30% to 22% over 10 years. Find percentage point decline.",
        options: [],
        correctAnswer: "8",
        explanation: {
            concept: "Poverty Reduction",
            detailed: ["Decline = 30% - 22% = 8 percentage points"],
            takeaways: ["Absolute change in poverty rate"],
            challenge: "Annual rate of decline"
        }
    },
    {
        id: "ind_poverty_005",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Poverty Numerical",
        difficulty: "Hard",
        question: "State A: population 4 crore, poverty 10%. State B: population 6 crore, poverty 20%. Find combined poverty rate (as percentage).",
        options: [],
        correctAnswer: "16",
        explanation: {
            concept: "Weighted Average Poverty",
            detailed: ["Poor in A = 0.4 crore, Poor in B = 1.2 crore", "Combined = (0.4 + 1.2)/(4 + 6) × 100 = 1.6/10 × 100 = 16%"],
            takeaways: ["Population-weighted average"],
            challenge: "Regional disparities"
        }
    },
    {
        id: "ind_poverty_006",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Poverty Numerical",
        difficulty: "Medium",
        question: "Monthly poverty line income = ₹1200, Family income = ₹960. Find poverty gap ratio (as percentage).",
        options: [],
        correctAnswer: "20",
        explanation: {
            concept: "Poverty Gap",
            detailed: ["Poverty gap ratio = (1200 - 960)/1200 × 100", "= 240/1200 × 100 = 20%"],
            takeaways: ["Depth of poverty measure"],
            challenge: "Poverty gap index"
        }
    },
    {
        id: "ind_poverty_007",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Poverty Numerical",
        difficulty: "Easy",
        question: "Average income of poor = ₹900, Poverty line = ₹1200. Find income shortfall (in rupees).",
        options: [],
        correctAnswer: "300",
        explanation: {
            concept: "Income Shortfall",
            detailed: ["Shortfall = 1200 - 900 = ₹300"],
            takeaways: ["Average gap from poverty line"],
            challenge: "Transfer needed to eliminate poverty"
        }
    },
    {
        id: "ind_poverty_008",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Poverty Numerical",
        difficulty: "Easy",
        question: "Headcount ratio = 25%, Population = 80 million. Find number of poor (in millions).",
        options: [],
        correctAnswer: "20",
        explanation: {
            concept: "Absolute Number of Poor",
            detailed: ["Number of poor = 25% of 80 = 0.25 × 80 = 20 million"],
            takeaways: ["Converting ratio to absolute numbers"],
            challenge: "Ratio vs absolute poverty"
        }
    },
    {
        id: "ind_poverty_009",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Poverty Numerical",
        difficulty: "Medium",
        question: "Poverty ratio declines 1% per year for 5 years from 24%. Find new ratio (as percentage).",
        options: [],
        correctAnswer: "19",
        explanation: {
            concept: "Poverty Trend",
            detailed: ["New ratio = 24% - (1% × 5) = 24% - 5% = 19%"],
            takeaways: ["Linear decline assumption"],
            challenge: "Actual trends non-linear"
        }
    },
    {
        id: "ind_poverty_010",
        type: "MCQ",
        topic: "Indian Economy",
        subtopic: "Poverty Numerical",
        difficulty: "Easy",
        question: "Gini coefficient rises from 0.32 to 0.36. Interpret change:",
        options: [
            { id: "A", text: "Inequality decreased" },
            { id: "B", text: "Inequality increased" },
            { id: "C", text: "No change" },
            { id: "D", text: "Perfect equality achieved" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Gini Coefficient",
            detailed: ["Higher Gini means higher inequality", "0 = perfect equality, 1 = perfect inequality"],
            takeaways: ["Measure of income distribution"],
            challenge: "Lorenz curve interpretation"
        }
    },

    // --- SECTION B: INEQUALITY NUMERICALS (Q11-Q20) ---
    {
        id: "ind_poverty_011",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Inequality Numerical",
        difficulty: "Medium",
        question: "Top 10% earn 40% of income, bottom 10% earn 2%. Find income ratio (rich/poor).",
        options: [],
        correctAnswer: "20",
        explanation: {
            concept: "Income Ratio",
            detailed: ["Ratio = 40% / 2% = 20"],
            takeaways: ["Top 10% earn 20 times bottom 10%"],
            challenge: "Decile ratio interpretation"
        }
    },
    {
        id: "ind_poverty_012",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Inequality Numerical",
        difficulty: "Medium",
        question: "Share of poorest 20% = 8%, Share of richest 20% = 48%. Find quintile ratio.",
        options: [],
        correctAnswer: "6",
        explanation: {
            concept: "Quintile Ratio",
            detailed: ["Quintile ratio = 48% / 8% = 6"],
            takeaways: ["Top quintile earns 6 times bottom quintile"],
            challenge: "International comparisons"
        }
    },
    {
        id: "ind_poverty_013",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Inequality Numerical",
        difficulty: "Easy",
        question: "Gini coefficient given as 0.40. Convert to percentage terms.",
        options: [],
        correctAnswer: "40",
        explanation: {
            concept: "Gini Percentage",
            detailed: ["Gini = 0.40 = 40%"],
            takeaways: ["Can be expressed as percentage"],
            challenge: "India's Gini over time"
        }
    },
    {
        id: "ind_poverty_014",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Inequality Numerical",
        difficulty: "Hard",
        question: "Income share of bottom 50% = 20%, top 10% = 35%. Find Palma ratio (round to 2 decimals).",
        options: [],
        correctAnswer: "1.75",
        explanation: {
            concept: "Palma Ratio",
            detailed: ["Palma ratio = Share of top 10% / Share of bottom 40%", "Bottom 40% share ≈ 20% (assuming bottom 50% = 20%)", "Ratio = 35% / 20% = 1.75"],
            takeaways: ["Alternative inequality measure"],
            challenge: "Advantages over Gini"
        }
    },
    {
        id: "ind_poverty_015",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Inequality Numerical",
        difficulty: "Hard",
        question: "Lorenz curve shows area between curve and line of equality = 0.18. Find Gini coefficient.",
        options: [],
        correctAnswer: "0.36",
        explanation: {
            concept: "Gini from Lorenz Curve",
            detailed: ["Gini = 2 × Area between Lorenz curve and diagonal", "= 2 × 0.18 = 0.36"],
            takeaways: ["Geometric interpretation of Gini"],
            challenge: "Derive formula"
        }
    },
    {
        id: "ind_poverty_016",
        type: "MCQ",
        topic: "Indian Economy",
        subtopic: "Inequality Numerical",
        difficulty: "Medium",
        question: "Mean income = ₹1,00,000, Median income = ₹70,000. Interpret inequality:",
        options: [
            { id: "A", text: "Left-skewed distribution" },
            { id: "B", text: "Right-skewed distribution" },
            { id: "C", text: "Symmetric distribution" },
            { id: "D", text: "Uniform distribution" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Income Distribution Skewness",
            detailed: ["Mean > Median indicates right skew", "Few high earners pull mean up"],
            takeaways: ["Typical of unequal societies"],
            challenge: "Mode, median, mean relationship"
        }
    },
    {
        id: "ind_poverty_017",
        type: "MCQ",
        topic: "Indian Economy",
        subtopic: "Inequality Numerical",
        difficulty: "Medium",
        question: "Income of poorest rises 10%, richest rises 20%. Effect on inequality:",
        options: [
            { id: "A", text: "Decreases" },
            { id: "B", text: "Increases" },
            { id: "C", text: "No change" },
            { id: "D", text: "Becomes zero" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Inequality Dynamics",
            detailed: ["Rich gaining faster than poor increases inequality"],
            takeaways: ["Relative growth rates matter"],
            challenge: "Pro-poor growth definition"
        }
    },
    {
        id: "ind_poverty_018",
        type: "MCQ",
        topic: "Indian Economy",
        subtopic: "Inequality Numerical",
        difficulty: "Medium",
        question: "Income ratio D10/D1 rises from 8 to 10. This indicates:",
        options: [
            { id: "A", text: "Lower inequality" },
            { id: "B", text: "Higher inequality" },
            { id: "C", text: "No change" },
            { id: "D", text: "Perfect equality" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Decile Ratio Change",
            detailed: ["Rising D10/D1 ratio means gap between rich and poor widening"],
            takeaways: ["Decile ratios measure inequality"],
            challenge: "P90/P10 ratio"
        }
    },
    {
        id: "ind_poverty_019",
        type: "MCQ",
        topic: "Indian Economy",
        subtopic: "Inequality Numerical",
        difficulty: "Easy",
        question: "Share of middle 40% income = 35%. This indicates:",
        options: [
            { id: "A", text: "Very high inequality" },
            { id: "B", text: "Moderate inequality" },
            { id: "C", text: "Perfect equality" },
            { id: "D", text: "No middle class" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Middle Class Share",
            detailed: ["Middle 40% getting 35% suggests moderate inequality", "In perfect equality, they'd get 40%"],
            takeaways: ["Middle class income share indicator"],
            challenge: "Hollowing out of middle class"
        }
    },
    {
        id: "ind_poverty_020",
        type: "MCQ",
        topic: "Indian Economy",
        subtopic: "Inequality Numerical",
        difficulty: "Easy",
        question: "Gini falls from 0.45 to 0.38. Change in inequality:",
        options: [
            { id: "A", text: "Increase" },
            { id: "B", text: "Decrease" },
            { id: "C", text: "No change" },
            { id: "D", text: "Indeterminate" }
        ],
        correctAnswer: "B",
        explanation: {
            concept: "Gini Decline",
            detailed: ["Lower Gini means lower inequality"],
            takeaways: ["Improvement in income distribution"],
            challenge: "Policies to reduce inequality"
        }
    },

    // --- SECTION C: HUMAN DEVELOPMENT INDEX (Q21-Q27) ---
    {
        id: "ind_poverty_021",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Human Development Numerical",
        difficulty: "Hard",
        question: "Life expectancy index = 0.80, Education index = 0.70, Income index = 0.60. Find HDI using geometric mean (round to 3 decimals).",
        options: [],
        correctAnswer: "0.693",
        explanation: {
            concept: "HDI Calculation",
            detailed: ["HDI = (0.80 × 0.70 × 0.60)^(1/3)", "= (0.336)^(1/3) ≈ 0.693"],
            takeaways: ["Geometric mean of three indices"],
            challenge: "Why geometric vs arithmetic mean?"
        }
    },
    {
        id: "ind_poverty_022",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Human Development Numerical",
        difficulty: "Medium",
        question: "HDI rises from 0.62 to 0.68. Find percentage improvement (round to 1 decimal).",
        options: [],
        correctAnswer: "9.7",
        explanation: {
            concept: "HDI Growth",
            detailed: ["% improvement = (0.68 - 0.62)/0.62 × 100", "= 0.06/0.62 × 100 ≈ 9.7%"],
            takeaways: ["Relative improvement in human development"],
            challenge: "India's HDI trajectory"
        }
    },
    {
        id: "ind_poverty_023",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Human Development Numerical",
        difficulty: "Medium",
        question: "Education index = 0.75, Income index = 0.65, Life index = 0.70. Find approximate HDI (round to 2 decimals).",
        options: [],
        correctAnswer: "0.70",
        explanation: {
            concept: "HDI Geometric Mean",
            detailed: ["HDI = (0.75 × 0.65 × 0.70)^(1/3)", "= (0.34125)^(1/3) ≈ 0.70"],
            takeaways: ["Balanced development across dimensions"],
            challenge: "Component-wise analysis"
        }
    },
    {
        id: "ind_poverty_024",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Human Development Numerical",
        difficulty: "Hard",
        question: "Life expectancy = 70 years, Minimum = 20, Maximum = 85. Find life expectancy index (round to 2 decimals).",
        options: [],
        correctAnswer: "0.77",
        explanation: {
            concept: "Dimension Index",
            detailed: ["Index = (Actual - Min) / (Max - Min)", "= (70 - 20) / (85 - 20) = 50/65 ≈ 0.77"],
            takeaways: ["Normalization formula"],
            challenge: "Goalposts for each dimension"
        }
    },
    {
        id: "ind_poverty_025",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Human Development Numerical",
        difficulty: "Medium",
        question: "Mean years schooling index = 0.72, Expected years index = 0.78. Find education index.",
        options: [],
        correctAnswer: "0.75",
        explanation: {
            concept: "Education Index",
            detailed: ["Education index = (MYS index + EYS index) / 2", "= (0.72 + 0.78) / 2 = 0.75"],
            takeaways: ["Arithmetic mean of two education components"],
            challenge: "MYS vs EYS interpretation"
        }
    },
    {
        id: "ind_poverty_026",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Human Development Numerical",
        difficulty: "Easy",
        question: "Income index increases from 0.60 to 0.66. Find percentage change.",
        options: [],
        correctAnswer: "10",
        explanation: {
            concept: "Index Change",
            detailed: ["% change = (0.66 - 0.60)/0.60 × 100 = 0.06/0.60 × 100 = 10%"],
            takeaways: ["Income dimension improvement"],
            challenge: "Income vs other dimensions"
        }
    },
    {
        id: "ind_poverty_027",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Human Development Numerical",
        difficulty: "Easy",
        question: "Country A HDI = 0.75, Country B = 0.65. Find HDI gap.",
        options: [],
        correctAnswer: "0.10",
        explanation: {
            concept: "HDI Comparison",
            detailed: ["Gap = 0.75 - 0.65 = 0.10"],
            takeaways: ["Cross-country comparison"],
            challenge: "HDI categories (low, medium, high, very high)"
        }
    },

    // --- SECTION D: OTHER DEVELOPMENT INDICATORS (Q28-Q40) ---
    {
        id: "ind_poverty_028",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Development Indicators Numerical",
        difficulty: "Easy",
        question: "Literacy rate rises from 70% to 77%. Find absolute improvement (in percentage points).",
        options: [],
        correctAnswer: "7",
        explanation: {
            concept: "Literacy Improvement",
            detailed: ["Improvement = 77% - 70% = 7 percentage points"],
            takeaways: ["Absolute change in literacy"],
            challenge: "Gender gap in literacy"
        }
    },
    {
        id: "ind_poverty_029",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Development Indicators Numerical",
        difficulty: "Medium",
        question: "Infant mortality falls from 40 to 30 per 1000 live births. Find percentage decline.",
        options: [],
        correctAnswer: "25",
        explanation: {
            concept: "Infant Mortality Reduction",
            detailed: ["% decline = (40 - 30)/40 × 100 = 10/40 × 100 = 25%"],
            takeaways: ["Health outcome improvement"],
            challenge: "IMR vs U5MR"
        }
    },
    {
        id: "ind_poverty_030",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Development Indicators Numerical",
        difficulty: "Medium",
        question: "Population growth rate = 1.5%, GDP growth = 6%. Find per capita GDP growth (as percentage).",
        options: [],
        correctAnswer: "4.5",
        explanation: {
            concept: "Per Capita Growth",
            detailed: ["Per capita growth ≈ GDP growth - Population growth", "= 6% - 1.5% = 4.5%"],
            takeaways: ["Demographic dividend/drag"],
            challenge: "Exact formula using (1+g)/(1+n)"
        }
    },
    {
        id: "ind_poverty_031",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Development Indicators Numerical",
        difficulty: "Medium",
        question: "Labor force participation = 60%, Working age population = 100 crore. Find labor force size (in crore).",
        options: [],
        correctAnswer: "60",
        explanation: {
            concept: "Labor Force",
            detailed: ["Labor force = LFPR × Working age population", "= 0.60 × 100 = 60 crore"],
            takeaways: ["Economically active population"],
            challenge: "Low female LFPR in India"
        }
    },
    {
        id: "ind_poverty_032",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Development Indicators Numerical",
        difficulty: "Easy",
        question: "Unemployment rate = 8%, Labor force = 50 crore. Find number unemployed (in crore).",
        options: [],
        correctAnswer: "4",
        explanation: {
            concept: "Unemployment Calculation",
            detailed: ["Unemployed = Unemployment rate × Labor force", "= 0.08 × 50 = 4 crore"],
            takeaways: ["Absolute unemployment numbers"],
            challenge: "Types of unemployment measurement"
        }
    },
    {
        id: "ind_poverty_033",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Development Indicators Numerical",
        difficulty: "Easy",
        question: "School enrollment rises from 85% to 93%. Find increase (in percentage points).",
        options: [],
        correctAnswer: "8",
        explanation: {
            concept: "Enrollment Improvement",
            detailed: ["Increase = 93% - 85% = 8 percentage points"],
            takeaways: ["Education access improvement"],
            challenge: "Enrollment vs retention"
        }
    },
    {
        id: "ind_poverty_034",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Development Indicators Numerical",
        difficulty: "Medium",
        question: "Maternal mortality falls from 200 to 150 per 100,000 live births. Find percentage reduction.",
        options: [],
        correctAnswer: "25",
        explanation: {
            concept: "Maternal Mortality Reduction",
            detailed: ["% reduction = (200 - 150)/200 × 100 = 50/200 × 100 = 25%"],
            takeaways: ["Women's health indicator"],
            challenge: "SDG targets for MMR"
        }
    },
    {
        id: "ind_poverty_035",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Development Indicators Numerical",
        difficulty: "Medium",
        question: "Gender parity index rises from 0.90 to 0.95. Find change.",
        options: [],
        correctAnswer: "0.05",
        explanation: {
            concept: "Gender Parity",
            detailed: ["Change = 0.95 - 0.90 = 0.05"],
            takeaways: ["Moving towards gender equality (GPI = 1)"],
            challenge: "GPI in different education levels"
        }
    },
    {
        id: "ind_poverty_036",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Development Indicators Numerical",
        difficulty: "Easy",
        question: "Access to electricity rises from 88% to 96%. Find percentage point increase.",
        options: [],
        correctAnswer: "8",
        explanation: {
            concept: "Infrastructure Access",
            detailed: ["Increase = 96% - 88% = 8 percentage points"],
            takeaways: ["Basic infrastructure coverage"],
            challenge: "Quality vs access"
        }
    },
    {
        id: "ind_poverty_037",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Development Indicators Numerical",
        difficulty: "Hard",
        question: "Poverty elasticity w.r.t growth = –2. If GDP grows 4%, find poverty change (as percentage, use + or -).",
        options: [],
        correctAnswer: "-8",
        explanation: {
            concept: "Poverty-Growth Elasticity",
            detailed: ["% change in poverty = Elasticity × % GDP growth", "= -2 × 4% = -8%"],
            takeaways: ["Pro-poor growth measurement"],
            challenge: "Factors affecting elasticity"
        }
    },
    {
        id: "ind_poverty_038",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Development Indicators Numerical",
        difficulty: "Easy",
        question: "HDI rank improves from 140 to 130. Find improvement in rank positions.",
        options: [],
        correctAnswer: "10",
        explanation: {
            concept: "HDI Ranking",
            detailed: ["Improvement = 140 - 130 = 10 positions"],
            takeaways: ["Lower rank number is better"],
            challenge: "Rank vs index value"
        }
    },
    {
        id: "ind_poverty_039",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Development Indicators Numerical",
        difficulty: "Medium",
        question: "Per capita income doubles in 10 years. Find approximate annual growth rate using rule of 70 (as percentage).",
        options: [],
        correctAnswer: "7",
        explanation: {
            concept: "Rule of 70",
            detailed: ["Years to double = 70 / growth rate", "10 = 70 / r", "r = 70/10 = 7%"],
            takeaways: ["Quick approximation for doubling time"],
            challenge: "Exact calculation using compound growth"
        }
    },
    {
        id: "ind_poverty_040",
        type: "NAT",
        topic: "Indian Economy",
        subtopic: "Development Indicators Numerical",
        difficulty: "Easy",
        question: "Female literacy = 68%, Male literacy = 84%. Find gender literacy gap (in percentage points).",
        options: [],
        correctAnswer: "16",
        explanation: {
            concept: "Gender Gap",
            detailed: ["Gap = 84% - 68% = 16 percentage points"],
            takeaways: ["Gender disparity in education"],
            challenge: "Trends in gender gap over time"
        }
    }
];
