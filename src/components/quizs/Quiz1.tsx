import React from 'react';

type QuizOption = {
  id: string;
  text: string;
};

type QuizQuestion = {
  id: number;
  title: string;
  options: QuizOption[];
};

const quizData: QuizQuestion[] = [
  {
    id: 1,
    title: "What is the capital of France?",
    options: [
      { id: "a", text: "Paris" },
      { id: "b", text: "London" },
      { id: "c", text: "Berlin" },
      { id: "d", text: "Madrid" },
    ],
  },
  {
    id: 2,
    title: "Which planet is known as the Red Planet?",
    options: [
      { id: "a", text: "Earth" },
      { id: "b", text: "Mars" },
      { id: "c", text: "Jupiter" },
      { id: "d", text: "Venus" },
    ],
  },
  {
    id: 3,
    title: "Who wrote 'Romeo and Juliet'?",
    options: [
      { id: "a", text: "William Wordsworth" },
      { id: "b", text: "William Shakespeare" },
      { id: "c", text: "Charles Dickens" },
      { id: "d", text: "Jane Austen" },
    ],
  },
  {
    id: 4,
    title: "What is the boiling point of water?",
    options: [
      { id: "a", text: "90°C" },
      { id: "b", text: "100°C" },
      { id: "c", text: "110°C" },
      { id: "d", text: "120°C" },
    ],
  },
  {
    id: 5,
    title: "Which language is used for web apps?",
    options: [
      { id: "a", text: "Python" },
      { id: "b", text: "Java" },
      { id: "c", text: "JavaScript" },
      { id: "d", text: "C++" },
    ],
  },
];

const Quiz1: React.FC = () => {
  return (
    <div className="p-6 max-w-2xl mx-auto space-y-8">
      {quizData.map((question) => (
        <div
          key={question.id}
          className="p-4 border rounded-lg shadow-sm bg-white space-y-4 text-left"
        >
          <h2 className="text-lg font-semibold text-gray-800">{question.title}</h2>
          <ul className="space-y-2">
            {question.options.map((option) => (
              <li key={option.id}>
                <label className="inline-flex items-center space-x-2">
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span>{option.text}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Quiz1;
