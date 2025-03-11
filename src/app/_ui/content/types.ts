export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  level: "Easy" | "Medium" | "Hard";
}

export interface QuestionSet {
  easy: Question[];
  medium: Question[];
  hard: Question[];
} 