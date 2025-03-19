"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Countdown } from "@/ui/components/Countdown";
import { Intro } from "@/ui/components/Intro";
import { Quiz } from "@/ui/components/Quiz";
import { SubjectSelect } from "@/ui/components/SubjectSelect";

export default function Home() {
  const [displayView, setDisplayView] = useState("intro");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [activeTestCode, setActiveTestCode] = useState("");

  const handleTestCodeApplied = (subject: string, topic: string, chapter: string, code: string) => {
    setSelectedSubject(subject);
    setSelectedTopic(topic);
    setSelectedChapter(chapter);
    setActiveTestCode(code);
    // Skip the subject selection screen and go directly to countdown
    setDisplayView("countdown");
  };

  return (
    <main className="h-viewport flex flex-col w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {
          {
            intro: (
              <Intro
                onGetStartedClick={() => {
                  setDisplayView("subject-select");
                }}
                onTestCodeApplied={handleTestCodeApplied}
              />
            ),
            "subject-select": (
              <SubjectSelect
                selectedSubject={selectedSubject}
                selectedTopic={selectedTopic}
                selectedChapter={selectedChapter}
                selectedLevel={selectedLevel}
                onSubjectChange={(subject) => {
                  setSelectedSubject(subject);
                  setSelectedTopic(""); // Reset topic when subject changes
                  setSelectedChapter(""); // Reset chapter when subject changes
                }}
                onTopicChange={(topic) => {
                  setSelectedTopic(topic);
                  setSelectedChapter(""); // Reset chapter when topic changes
                }}
                onChapterChange={setSelectedChapter}
                onLevelChange={setSelectedLevel}
                onContinue={() => {
                  setDisplayView("countdown");
                }}
                activeTestCode={activeTestCode}
              />
            ),
            countdown: (
              <Countdown
                onGoClick={() => {
                  setDisplayView("quiz");
                }}
              />
            ),
            quiz: (
              <Quiz
                subject={selectedSubject}
                topic={selectedTopic}
                chapter={selectedChapter}
                level={selectedLevel}
                testCode={activeTestCode}
              />
            ),
          }[displayView]
        }
      </AnimatePresence>
    </main>
  );
}
