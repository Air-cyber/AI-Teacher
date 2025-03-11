import { QuestionSet } from './types';

export const socialstudiesQuestions: QuestionSet = {
  easy: [
    {
      question: "Who was the first President of the United States?",
      options: ["John Adams", "Thomas Jefferson", "George Washington", "Benjamin Franklin"],
      correctAnswer: "George Washington",
      level: "Easy"
    },
    {
      question: "What event started World War I?",
      options: [
        "The assassination of Archduke Franz Ferdinand",
        "The invasion of Poland",
        "The bombing of Pearl Harbor",
        "The Russian Revolution"
      ],
      correctAnswer: "The assassination of Archduke Franz Ferdinand",
      level: "Easy"
    },
  ],
  medium: [
    {
      question: "Which civilization built the pyramids of Giza?",
      options: ["The Romans", "The Greeks", "The Egyptians", "The Persians"],
      correctAnswer: "The Egyptians",
      level: "Medium"
    },
    {
      question: "When did the Industrial Revolution begin?",
      options: ["Late 1700s", "Early 1600s", "Mid 1800s", "Early 1900s"],
      correctAnswer: "Late 1700s",
      level: "Medium"
    },
  ],
  hard: [
    {
      question: "What was the main cause of the French Revolution?",
      options: [
        "Social inequality and financial crisis",
        "Foreign invasion",
        "Natural disasters",
        "Religious conflict"
      ],
      correctAnswer: "Social inequality and financial crisis",
      level: "Hard"
    },
    {
      question: "Who wrote 'The Wealth of Nations'?",
      options: ["Karl Marx", "Adam Smith", "John Locke", "Thomas Hobbes"],
      correctAnswer: "Adam Smith",
      level: "Hard"
    },
  ]
};
