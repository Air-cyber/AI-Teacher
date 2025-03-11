import { QuestionSet } from './types';

export const generalknowledgeQuestions: QuestionSet = {
  easy: [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: "Paris",
      level: "Easy"
    },
    {
      question: "Which is the largest planet in our solar system?",
      options: ["Mars", "Saturn", "Jupiter", "Neptune"],
      correctAnswer: "Jupiter",
      level: "Easy"
    },
  ],
  medium: [
    {
      question: "Who painted the Mona Lisa?",
      options: ["Van Gogh", "Da Vinci", "Picasso", "Michelangelo"],
      correctAnswer: "Da Vinci",
      level: "Medium"
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correctAnswer: "Pacific",
      level: "Medium"
    },
  ],
  hard: [
    {
      question: "Who won the first Nobel Prize in Physics?",
      options: ["Einstein", "Röntgen", "Planck", "Bohr"],
      correctAnswer: "Röntgen",
      level: "Hard"
    },
    {
      question: "What year was the United Nations founded?",
      options: ["1943", "1944", "1945", "1946"],
      correctAnswer: "1945",
      level: "Hard"
    },
  ]
};
