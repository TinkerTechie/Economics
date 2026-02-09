
# Refactor Plan: "Proper Website" Transformation

## 1. Data Expansion (Question Bank)
- [ ] Expand `questions.js` to include at least 30 high-quality IIT JAM style questions.
- [ ] Cover all sections: Micro, Macro, Stats, Maths, Indian Economy.
- [ ] Ensure a mix of MCQ, MSQ, and NAT types.

## 2. Authentication System (Mock)
- [ ] Create `AuthContext.jsx` to handle user state (login/logout).
- [ ] Create `Login.jsx` and `Register.jsx` pages with premium UI.
- [ ] Add `ProtectedRoute` component to secure the app.

## 3. Practice Section Upgrade
- [ ] Redesign `Practice.jsx` to be a "Hub".
- [ ] Add selection cards: "Topic-wise Quiz" vs "Numerical Challenge".
- [ ] Implement filtering logic for these modes.

## 4. Chapter-wise / Section-wise Page
- [ ] Create `Topics.jsx` page.
- [ ] Layout: Grid of subjects (Micro, Macro, etc.).
- [ ] Detail view: List of subtopics with completion stats.

## 5. Mock Test Logic
- [ ] Update `MockTests.jsx` to define specific test configurations (e.g., "Mock 1" = IDs [1, 5, 12...]).
- [ ] Ensure `MockTestSession` loads the correct subset of questions.
