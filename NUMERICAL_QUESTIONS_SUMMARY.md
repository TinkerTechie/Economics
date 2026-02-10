# IIT JAM Macroeconomics - Numerical Questions Summary

## Overview
Successfully added **120 numerical problems** across three comprehensive question sets for IIT JAM Macroeconomics preparation.

---

## 📊 Question Sets Added

### 1. **Multiplier-Accelerator Numerical Set** (40 Problems)
**File:** `src/data/questions_multiplier_accelerator.js`

**Topics Covered:**
- ✅ Basic Multiplier (Q1-Q5)
  - Investment multiplier calculations
  - MPC and MPS relationships
  - Government spending multiplier
  
- ✅ Tax Multiplier (Q6-Q7)
  - Tax increase/decrease effects
  - Negative multiplier concept
  
- ✅ Balanced Budget Multiplier (Q8-Q9)
  - Equal changes in G and T
  - Unit multiplier theorem
  
- ✅ Accelerator Principle (Q10-Q12)
  - Capital-output ratio (v)
  - Induced investment
  - Disinvestment scenarios
  
- ✅ Combined Multiplier-Accelerator (Q13-Q15)
  - Interaction effects
  - Total income changes
  - Amplification mechanisms
  
- ✅ Dynamic Path Problems (Q16-Q18)
  - Time series analysis
  - Sequential changes
  - Multi-period effects
  
- ✅ Multistage Effects (Q19-Q21)
  - Round-by-round analysis
  - Cumulative impacts
  
- ✅ Stability Conditions (Q22-Q23)
  - v × MPC < 1 criterion
  - System stability analysis
  
- ✅ Special Cases (Q24-Q40)
  - Autonomous consumption
  - Government spending with accelerator
  - Numerical comparisons
  - Contraction scenarios
  - Edge cases (MPC=0, MPC=1, v=0)

**Question Types:**
- NAT (Numerical Answer Type): 34 questions
- MCQ (Multiple Choice): 6 questions

---

### 2. **Growth Models Numerical Set** (40 Problems)
**File:** `src/data/questions_growth_models.js`

**Topics Covered:**

#### Harrod-Domar Model (Q1-Q12)
- ✅ Basic growth rate calculations (g = s/v)
- ✅ Required savings rate determination
- ✅ Capital-output ratio analysis
- ✅ Comparative statics
- ✅ Instability and knife-edge problem
- ✅ Warranted vs actual growth rates

#### Solow Model (Q13-Q40)
- ✅ Steady state conditions (sY = δK)
- ✅ Capital-output ratio (K/Y = s/δ)
- ✅ Investment-output ratio
- ✅ Depreciation effects
- ✅ Savings rate impacts
- ✅ Long-run growth determinants
- ✅ Technological progress
- ✅ Golden Rule of capital accumulation
  - MPK = δ (+ n with population growth)
  - Dynamic efficiency
  - Over/under-accumulation
- ✅ Cobb-Douglas production functions
- ✅ Returns to scale analysis
- ✅ Output elasticity calculations
- ✅ Population growth effects
- ✅ Break-even investment
- ✅ Level vs growth effects
- ✅ Convergence properties

**Question Types:**
- NAT: 28 questions
- MCQ: 12 questions

---

### 3. **Inflation & Phillips Curve Numerical Set** (40 Problems)
**File:** `src/data/questions_inflation_phillips.js`

**Topics Covered:**

#### Basic Inflation Calculations (Q1-Q5)
- ✅ CPI-based inflation rates
- ✅ Price index changes
- ✅ Real vs nominal wage calculations
- ✅ Fisher equation (real = nominal - inflation)

#### Quantity Theory of Money (Q6-Q8)
- ✅ MV = PY applications
- ✅ Money growth and inflation
- ✅ Output growth adjustments

#### Phillips Curve (Q9-Q12)
- ✅ Basic Phillips curve (π = a - bu)
- ✅ Inflation-unemployment trade-offs
- ✅ Policy target calculations
- ✅ Slope coefficient interpretations

#### Expectations-Augmented Phillips Curve (Q13-Q15)
- ✅ π = πe - β(u - u*)
- ✅ Natural rate of unemployment
- ✅ Unemployment gap calculations
- ✅ Short-run vs long-run trade-offs

#### Cost-Push Inflation (Q16-Q17)
- ✅ Wage-productivity gap
- ✅ Supply shocks
- ✅ Unit labor cost inflation

#### Sacrifice Ratio & Disinflation (Q18-Q20)
- ✅ Output cost of reducing inflation
- ✅ Unemployment-years calculations
- ✅ Gradual vs rapid disinflation

#### Advanced Topics (Q21-Q40)
- ✅ Fisher equation applications
- ✅ Index number calculations
- ✅ Output gap analysis
- ✅ Adaptive expectations
- ✅ Money growth targeting
- ✅ Phillips curve shifts
- ✅ Deflation scenarios
- ✅ Hyperinflation
- ✅ Compound inflation rates
- ✅ Slope estimation from data

**Question Types:**
- NAT: 36 questions
- MCQ: 4 questions

---

## 📈 Total Statistics

| Metric | Count |
|--------|-------|
| **Total Questions** | 120 |
| **NAT Questions** | 98 |
| **MCQ Questions** | 22 |
| **Topics Covered** | 3 major areas |
| **Difficulty Levels** | Easy, Medium, Hard |

---

## 🎯 Question Format

Each question includes:
```javascript
{
    id: "unique_id",
    type: "NAT" or "MCQ",
    topic: "Main topic area",
    subtopic: "Specific numerical category",
    difficulty: "Easy/Medium/Hard",
    question: "Full question text",
    options: [], // empty for NAT, array for MCQ
    correctAnswer: "answer",
    explanation: {
        concept: "Key concept name",
        detailed: ["Step-by-step solution"],
        takeaways: ["Important points"],
        challenge: "Extension question"
    }
}
```

---

## 🔗 Integration

All question sets have been integrated into the main application:

**File:** `src/data/questions.js`
```javascript
import { multiplierAcceleratorQuestions } from './questions_multiplier_accelerator';
import { growthModelsQuestions } from './questions_growth_models';
import { inflationPhillipsQuestions } from './questions_inflation_phillips';

export const questions = [
    // ... other questions
    ...multiplierAcceleratorQuestions,
    ...growthModelsQuestions,
    ...inflationPhillipsQuestions
];
```

---

## ✅ Features

1. **Comprehensive Coverage**: All major numerical topics for IIT JAM Macroeconomics
2. **Detailed Explanations**: Step-by-step solutions with formulas
3. **Progressive Difficulty**: Questions range from basic to advanced
4. **Exam-Style Format**: Matches IIT JAM NAT and MCQ patterns
5. **Learning Aids**: 
   - Key concepts highlighted
   - Important takeaways
   - Challenge questions for deeper understanding

---

## 🎓 Usage in App

Students can now:
- Practice topic-wise numerical problems
- Filter by difficulty level
- Review detailed solutions
- Track progress across 120+ numerical questions
- Prepare systematically for IIT JAM Macroeconomics

---

## 📝 Notes

- All numerical answers are provided as strings for consistency
- Percentages are given as numbers (e.g., "10" for 10%)
- Negative values use "-" prefix for NAT questions
- Decimal answers rounded to appropriate precision
- MCQ options clearly labeled A, B, C, D

---

**Status:** ✅ All 120 questions successfully added and integrated
**Server:** ✅ Running without errors on http://localhost:5173/
