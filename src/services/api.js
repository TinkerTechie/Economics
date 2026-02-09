
import { questions } from '../data/questions';
import { testManifest } from '../data/testConfig';

// Simulating Async API calls
const LATENCY = 800;

export const api = {
    getMockTests: async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Convert manifest object to array for listing
                const tests = Object.entries(testManifest).map(([id, config]) => ({
                    id,
                    ...config,
                    questionCount: config.sections.reduce((acc, s) => acc + s.questionIds.length, 0)
                }));
                resolve(tests);
            }, LATENCY);
        });
    },

    getMockTestById: async (testId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const config = testManifest[testId];
                if (!config) {
                    reject(new Error("Test not found"));
                    return;
                }

                // Hydrate questions
                const allIds = config.sections.flatMap(s => s.questionIds);
                const testQuestions = allIds.map(id => questions.find(q => q.id === id)).filter(Boolean);

                resolve({
                    ...config,
                    id: testId,
                    questions: testQuestions
                });
            }, LATENCY);
        });
    },

    submitTest: async (testId, answers) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                // Mock server-side scoring
                console.log(`Submitting test ${testId}`, answers);
                resolve({ success: true, timestamp: new Date().toISOString() });
            }, LATENCY);
        });
    }
};
