
const fs = require('fs');

async function mergeQuestions() {
    // Read the file content
    let content = fs.readFileSync('src/data/questions.js', 'utf8');

    // Split at the point where extraQuestions starts
    const parts = content.split('export const extraQuestions = [');

    if (parts.length < 2) {
        console.log("No extraQuestions found to merge.");
        return;
    }

    const mainPart = parts[0].trim();
    // Remove the last closing bracket and semicolon of the main array
    const mainArrayEndIndex = mainPart.lastIndexOf('];');
    const questionsArrayContent = mainPart.substring(0, mainArrayEndIndex);

    const extraPart = parts[1];
    // Remove the last closing bracket and semicolon of the extra array
    const extraArrayEndIndex = extraPart.lastIndexOf('];');
    const extraQuestionsContent = extraPart.substring(0, extraArrayEndIndex).trim();

    // Create the merged content
    const newContent = `${questionsArrayContent},
    
    // --- ADDED PRACTICE QUESTIONS ---
    ${extraQuestionsContent}
];`;

    fs.writeFileSync('src/data/questions.js', newContent);
    console.log("Successfully merged questions.");
}

mergeQuestions();
