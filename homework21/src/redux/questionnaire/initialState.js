export const initialState = {
    questions: [
        {
            id: 1,
            text: "Question 1?",
            options: ["Option 1", "Option 2"],
            correctAnswer: 0, // индекс правильного ответа (например, 0 или 1)
            selectedAnswer: null, //выбранный пользователем вариант (null по умолчанию)
        },
        {
            id: 2,
            text: "Question 2?",
            options: ["Option 1", "Option 2"],
            correctAnswer: 1,
            selectedAnswer: null,
        },
        {
            id: 3,
            text: "Question 3?",
            options: ["Option 1", "Option 2"],
            correctAnswer: 0,
            selectedAnswer: null,
        },
        {
            id: 4,
            text: "Question 4?",
            options: ["Option 1", "Option 2"],
            correctAnswer: 0,
            selectedAnswer: null,
        },
        {
            id: 5,
            text: "Question 5?",
            options: ["Option 1", "Option 2"],
            correctAnswer: 1,
            selectedAnswer: null,
        },
    ],
    score: null,
};