# IIT JAM Economics Tutor - Design & Architecture

## 1. UX Flow

### A. Onboarding / Dashboard
- **Welcome Screen**: "Continue where you left off" or "Start new session".
- **Dashboard Widgets**:
  - **Daily Progress**: Questions solved today vs goal.
  - **Weak Areas**: Pulse check on topics needing attention (e.g., " revise Micro: Consumer Theory").
  - **Quick Links**: [Practice Mode] [Mock Test] [My Mistakes]

### B. Practice Mode (Learning Mode)
1. **Topic Selection**: User selects Subject (Micro) -> Subtopic (Engel Curve).
2. **Configuration**: Choose Difficulty (Easy/Medium/Hard) & Number of Questions.
3. **Question Interface**:
   - Shows question + options.
   - **"Check Answer"**: Reveals instruction, correctness, and detailed breakdown.
   - **"Explain"**:
     - **Result**: Correct/Incorrect with visual cue.
     - **Concept**: The specific theory involved.
     - **Detailed Solution**: Step-by-step derivation.
     - **Key Takeaways**: Flashcard-style points.
     - **Challenge**: A follow-up to provoke thought.
   - **Bookmark**: Save for later review.

### C. Exam Mode (Mock Test)
- Similar to Practice but:
  - Timer is active.
  - No immediate feedback/hints.
  - Navigation palette (Review, Next, Previous).
  - specific IIT JAM pattern (MCQ, MSQ, NAT sections).

### D. Analytics & Revision
- **Stats Page**: Accuracy by topic, time spent per question.
- **Mistakes Log**: Filterable list of incorrect attempts.

## 2. Component Structure

```
src/
  components/
    layout/
      Sidebar.jsx       // Navigation (Home, Practice, Analytics)
      Layout.jsx        // Wrapper with Sidebar + Main Content Area
    common/
      Button.jsx        // Standardized buttons (Primary, Secondary, Ghost)
      Badge.jsx         // detailed tags (Difficulty, Topic)
      Card.jsx          // Glassmorphism containers
    quiz/
      QuestionCard.jsx  // The core question display
      OptionList.jsx    // Handles MCQ/MSQ selection logic
      Feedback.jsx      // The breakdown (Concept -> Solution -> Challenge)
      Timer.jsx         // For Exam Mode
    dashboard/
      StatCard.jsx      // "85% Accuracy" widget
      TopicProgress.jsx // Bar chart for topic mastery
  pages/
    Dashboard.jsx
    PracticeConfig.jsx  // Select topics/difficulty
    QuizSession.jsx     // Active session controller
    Analytics.jsx
    Mistakes.jsx
  context/
    QuizContext.jsx     // Manages current session state, user progress, bookmarks
```

## 3. Data Schema

### Question Schema
```javascript
{
  id: "micro_consumer_001",
  type: "MCQ", // "MCQ" | "MSQ" | "NAT"
  topic: "Microeconomics",
  subtopic: "Consumer Theory",
  tags: ["Engel Curve", "Income Effect"],
  difficulty: "Medium", // "Easy" | "Medium" | "Hard"
  question: "In a two-goods consumption framework...",
  options: [
    { id: "A", text: "income and quantity demanded..." },
    { id: "B", text: "price of one good..." }
  ],
  correctAnswer: "A", // For MSQ: ["A", "C"], For NAT: { min: 5.0, max: 5.2 }
  explanation: {
    concept: "Engel Curve & Income Elasticity",
    detailed: [
      "Step 1: Define Engel Curve...",
      "Step 2: Differentiate from Demand Curve...",
      "Step 3: Analyze options..."
    ],
    optionAnalysis: [
      { id: "A", status: "Correct", reason: "Matches definition exactly." },
      { id: "B", status: "Incorrect", reason: "Describes a Demand Curve." }
    ],
    takeaways: [
      "Engel Curve: Income vs Quantity",
      "Slope determines good type (Normal/Inferior)"
    ],
    challenge: "If the Engel curve is downward sloping, what type of good is it?"
  }
}
```

### User Profile / Progress Schema (Local Storage / Context)
```javascript
{
  user: { name: "Student" },
  stats: {
    totalSolved: 15,
    accuracy: 0.8,
    topicMastery: {
      "Microeconomics": 0.75,
      "Macroeconomics": 0.40
    }
  },
  bookmarks: ["micro_consumer_001"],
  mistakes: ["micro_consumer_005"], // List of IDs incorrectly answered
  history: [
    {
      questionId: "micro_consumer_001",
      selected: "A",
      isCorrect: true,
      timestamp: 1715420000000,
      timeTaken: 45 // seconds
    }
  ]
}
```

## 4. Implementation Steps by Priority
1. **Refactor Data**: Update `questions.js` with the rich schema and add 4-5 dummy questions across topics.
2. **Routing**: Install `react-router-dom` and set up the Sidebar navigation.
3. **Core Quiz Component**: Rebuild `QuestionCard` to handle the new `explanation` structure and `type` (MCQ vs MSQ).
4. **Context**: Create `QuizContext` to track score and history across the session.
5. **Dashboard**: Build the view to visualize the `stats`.
