import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./Button";

interface SubjectSelectProps {
  selectedSubject: string;
  selectedTopic: string;
  selectedChapter: string;
  selectedLevel: string;
  onSubjectChange: (subject: string) => void;
  onTopicChange: (topic: string) => void;
  onChapterChange: (chapter: string) => void;
  onLevelChange: (level: string) => void;
  onContinue: () => void;
  activeTestCode?: string;
}

const subjects = {
  Mathematics: {
    "Arithematic": ["Basic Operations", "Fractions", "Decimals", "Percentages"],
    "Geometry": ["Lines & Angles", "Triangles", "Circles", "Polygons"],
    "Calculus": ["Limits", "Derivatives", "Integrals", "Applications"]
  },
  Science: {
    "Physics": ["Mechanics", "Thermodynamics", "Electromagnetism", "Optics"],
    "Chemistry": ["Atomic Structure", "Chemical Bonding", "Organic Chemistry", "Acids & Bases"],
    "Biology": ["Cell Biology", "Genetics", "Ecology", "Human Physiology"]
  },
  History: {
    "Ancient": ["Mesopotamia", "Egypt", "Greece", "Rome"],
    "Medieval": ["Byzantine Empire", "Islamic World", "European Feudalism", "Crusades"],
    "Modern": ["Renaissance", "Industrial Revolution", "World Wars", "Cold War"]
  },
  "General Knowledge": {
    "Sports": ["Olympics", "Football", "Cricket", "Basketball"],
    "Politics": ["Governance", "Elections", "International Relations", "Political Ideologies"],
    "Culture": ["Art", "Music", "Literature", "Festivals"]
  },
  "Machine Learning": {
    "Supervised Learning": ["Regression", "Classification", "Decision Trees", "Support Vector Machines"],
    "Unsupervised Learning": ["Clustering", "Dimensionality Reduction", "Anomaly Detection", "Association Rules"],
    "Deep Learning": ["Neural Networks", "CNNs", "RNNs", "Transformers"]
  },
};

const levels = ["Easy", "Medium", "Hard"];

export const SubjectSelect = ({
  selectedSubject,
  selectedTopic,
  selectedChapter,
  selectedLevel,
  onSubjectChange,
  onTopicChange,
  onChapterChange,
  onLevelChange,
  onContinue,
  activeTestCode,
}: SubjectSelectProps) => {
  const isTestCodeActive = !!activeTestCode;

  return (
    <motion.div
      key="subject-select"
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      }}
      className="w-full h-full flex flex-col p-5 overflow-y-auto max-h-[80vh]"
      initial="initial"
      animate="animate"
      exit="initial"
    >
      <div className="flex-1 flex flex-col">
        <h1 className="text-brand-cerulean-blue font-bold text-2xl text-center mb-8">
          Select Your Subject, Topic, Chapter, and Level
        </h1>

        {isTestCodeActive && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
            <h2 className="text-lg font-medium mb-1 text-green-700">Test Code Active</h2>
            <p className="text-green-600 text-sm">
              Test code <strong>{activeTestCode}</strong> is applied. Subject, topic, and chapter are pre-selected.
            </p>
          </div>
        )}

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-medium mb-3">Subject</h2>
            <select
              className={`w-full p-3 rounded-xl border ${isTestCodeActive ? "bg-gray-100" : ""} border-brand-light-gray`}
              onChange={(e) => !isTestCodeActive && onSubjectChange(e.target.value)}
              value={selectedSubject}
              disabled={isTestCodeActive}
            >
              <option value="">Select a Subject</option>
              {Object.keys(subjects).map((subject) => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>

          {selectedSubject && (
            <div>
              <h2 className="text-lg font-medium mb-3">Topic</h2>
              <select
                className={`w-full p-3 rounded-xl border ${isTestCodeActive ? "bg-gray-100" : ""} border-brand-light-gray`}
                onChange={(e) => !isTestCodeActive && onTopicChange(e.target.value)}
                value={selectedTopic}
                disabled={isTestCodeActive}
              >
                <option value="">Select a Topic</option>
                {Object.keys(subjects[selectedSubject]).map((topic) => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </select>
            </div>
          )}

          {selectedSubject && selectedTopic && (
            <div>
              <h2 className="text-lg font-medium mb-3">Chapter</h2>
              <select
                className={`w-full p-3 rounded-xl border ${isTestCodeActive ? "bg-gray-100" : ""} border-brand-light-gray`}
                onChange={(e) => !isTestCodeActive && onChapterChange(e.target.value)}
                value={selectedChapter}
                disabled={isTestCodeActive}
              >
                <option value="">Select a Chapter</option>
                {subjects[selectedSubject][selectedTopic].map((chapter) => (
                  <option key={chapter} value={chapter}>{chapter}</option>
                ))}
              </select>
            </div>
          )}

          <div>
            <h2 className="text-lg font-medium mb-3">Difficulty Level</h2>
            <div className="grid grid-cols-3 gap-2">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => onLevelChange(level)}
                  className={`p-4 rounded-xl border ${selectedLevel === level ? "border-brand-cerulean-blue bg-brand-cerulean-blue/10" : "border-brand-light-gray"}`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Button className="w-full mt-4" size="large" disabled={!selectedSubject || !selectedTopic || !selectedChapter || !selectedLevel} onClick={onContinue}>
        Continue
      </Button>
    </motion.div>
  );
};
