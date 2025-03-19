export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  level: "Easy" | "Medium" | "Hard";
  topic: string;
  chapter: string; // Added chapter property
}

export interface QuestionSet {
  [topic: string]: {
    [chapter: string]: { // Added chapter level nesting
      easy: Question[];
      medium: Question[];
      hard: Question[];
    };
  };
}
