"use client";

import { useState } from "react";

const SPEAKING = [
  "I’m starting with my first words",
  "I can manage simple conversations",
  "I can discuss most everyday topics",
];
const READING = [
  "I don't read it yet",
  "I can sound out words and short lines",
  "I can read paragraphs with confidence",
];
const RESULT_COPY: Record<string, string> = {
  Beginner: "Start with practical speech and the building blocks of Devanagari.",
  Intermediate: "Strengthen conversation, reading fluency, and grammar in context.",
  Advanced: "Refine expression, accuracy, and cultural nuance through deeper material.",
};

export default function StageFinder() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [speaking, setSpeaking] = useState(0);
  const [reading, setReading] = useState(0);

  function reset() {
    setStep(1);
    setSpeaking(0);
    setReading(0);
  }

  if (step === 1) {
    return (
      <div className="finder-panel" aria-live="polite">
        <div className="question-count">Question 1 of 2</div>
        <h3>How comfortable are you speaking Hindi?</h3>
        <div className="answer-list">
          {SPEAKING.map((label, i) => (
            <button
              key={label}
              className="answer"
              onClick={() => {
                setSpeaking(i);
                setStep(2);
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="finder-panel" aria-live="polite">
        <div className="question-count">Question 2 of 2</div>
        <h3>How comfortable are you reading Devanagari?</h3>
        <div className="answer-list">
          {READING.map((label, i) => (
            <button
              key={label}
              className="answer"
              onClick={() => {
                setReading(i);
                setStep(3);
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  const score = speaking + reading;
  const level = score <= 1 ? "Beginner" : score <= 3 ? "Intermediate" : "Advanced";

  return (
    <div className="finder-panel" aria-live="polite">
      <div className="result-badge">Suggested starting stage</div>
      <h3>{level}</h3>
      <p className="result-copy">{RESULT_COPY[level]}</p>
      <div className="result-skills">
        <span>Speaking</span>
        <span>Reading</span>
        <span>Writing</span>
      </div>
      <a className="button primary" href="#bookingForm">
        Book at the {level} stage
      </a>
      <br />
      <button className="restart" onClick={reset}>
        Retake the questions
      </button>
    </div>
  );
}
