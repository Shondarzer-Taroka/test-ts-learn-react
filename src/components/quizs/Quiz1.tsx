// import React from 'react';

// type QuizOption = {
//   id: string;
//   text: string;
// };

// type QuizQuestion = {
//   id: number;
//   title: string;
//   options: QuizOption[];
// };

// const quizData: QuizQuestion[] = [
//   {
//     id: 1,
//     title: "What is the capital of France?",
//     options: [
//       { id: "a", text: "Paris" },
//       { id: "b", text: "London" },
//       { id: "c", text: "Berlin" },
//       { id: "d", text: "Madrid" },
//     ],
//   },
//   {
//     id: 2,
//     title: "Which planet is known as the Red Planet?",
//     options: [
//       { id: "a", text: "Earth" },
//       { id: "b", text: "Mars" },
//       { id: "c", text: "Jupiter" },
//       { id: "d", text: "Venus" },
//     ],
//   },
//   {
//     id: 3,
//     title: "Who wrote 'Romeo and Juliet'?",
//     options: [
//       { id: "a", text: "William Wordsworth" },
//       { id: "b", text: "William Shakespeare" },
//       { id: "c", text: "Charles Dickens" },
//       { id: "d", text: "Jane Austen" },
//     ],
//   },
//   {
//     id: 4,
//     title: "What is the boiling point of water?",
//     options: [
//       { id: "a", text: "90°C" },
//       { id: "b", text: "100°C" },
//       { id: "c", text: "110°C" },
//       { id: "d", text: "120°C" },
//     ],
//   },
//   {
//     id: 5,
//     title: "Which language is used for web apps?",
//     options: [
//       { id: "a", text: "Python" },
//       { id: "b", text: "Java" },
//       { id: "c", text: "JavaScript" },
//       { id: "d", text: "C++" },
//     ],
//   },
// ];

// const Quiz1: React.FC = () => {
//   return (
//     <div className="p-6 max-w-2xl mx-auto space-y-8">
//       {quizData.map((question) => (
//         <div
//           key={question.id}
//           className="p-4 border rounded-lg shadow-sm bg-white space-y-4 text-left"
//         >
//           <h2 className="text-lg font-semibold text-gray-800">{question.title}</h2>
//           <ul className="space-y-2">
//             {question.options.map((option) => (
//               <li key={option.id}>
//                 <label className="inline-flex items-center space-x-2">
//                   <input
//                     type="radio"
//                     name={`question-${question.id}`}
//                     className="text-red-600 focus:ring-lime-500-500"
//                   />
//                   <span>{option.text}</span>
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Quiz1;















// // // custom designed

// import React from 'react';

// type QuizOption = {
//   id: string;
//   text: string;
// };

// type QuizQuestion = {
//   id: number;
//   title: string;
//   options: QuizOption[];
// };

// const quizData: QuizQuestion[] = [
//   {
//     id: 1,
//     title: "What is the capital of France?",
//     options: [
//       { id: "a", text: "Paris" },
//       { id: "b", text: "London" },
//       { id: "c", text: "Berlin" },
//       { id: "d", text: "Madrid" },
//     ],
//   },
//   {
//     id: 2,
//     title: "Which planet is known as the Red Planet?",
//     options: [
//       { id: "a", text: "Earth" },
//       { id: "b", text: "Mars" },
//       { id: "c", text: "Jupiter" },
//       { id: "d", text: "Venus" },
//     ],
//   },
//   {
//     id: 3,
//     title: "Who wrote 'Romeo and Juliet'?",
//     options: [
//       { id: "a", text: "William Wordsworth" },
//       { id: "b", text: "William Shakespeare" },
//       { id: "c", text: "Charles Dickens" },
//       { id: "d", text: "Jane Austen" },
//     ],
//   },
//   {
//     id: 4,
//     title: "What is the boiling point of water?",
//     options: [
//       { id: "a", text: "90°C" },
//       { id: "b", text: "100°C" },
//       { id: "c", text: "110°C" },
//       { id: "d", text: "120°C" },
//     ],
//   },
//   {
//     id: 5,
//     title: "Which language is used for web apps?",
//     options: [
//       { id: "a", text: "Python" },
//       { id: "b", text: "Java" },
//       { id: "c", text: "JavaScript" },
//       { id: "d", text: "C++" },
//     ],
//   },
// ];

// const Quiz1: React.FC = () => {
//   return (
//     <div className="p-6 max-w-2xl mx-auto space-y-8">
//       {quizData.map((question) => (
//         <div
//           key={question.id}
//           className="p-4 border rounded-lg shadow-sm bg-white space-y-4"
//         >
//           <h2 className="text-lg font-semibold text-gray-800">{question.title}</h2>
//           <ul className="space-y-2">
//             {question.options.map((option) => (
//               <li key={option.id}>
//                 <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-100 transition duration-200 peer-checked:border-lime-500">
//                   <input
//                     type="radio"
//                     name={`question-${question.id}`}
//                     value={option.id}
//                     className="peer hidden"
//                   />
//                   <div className="w-5 h-5 mr-3 rounded-full border-2 border-gray-400 peer-checked:border-lime-500 peer-checked:bg-lime-500 transition"></div>
//                   <span className="text-gray-800">{option.text}</span>
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Quiz1;










// /// custom radio a b c d

// import React from 'react';

// type QuizOption = {
//   id: string; // a, b, c, d
//   text: string;
// };

// type QuizQuestion = {
//   id: number;
//   title: string;
//   options: QuizOption[];
// };

// const quizData: QuizQuestion[] = [
//   {
//     id: 1,
//     title: "What is the capital of France?",
//     options: [
//       { id: "a", text: "Paris" },
//       { id: "b", text: "London" },
//       { id: "c", text: "Berlin" },
//       { id: "d", text: "Madrid" },
//     ],
//   },
//   {
//     id: 2,
//     title: "Which planet is known as the Red Planet?",
//     options: [
//       { id: "a", text: "Earth" },
//       { id: "b", text: "Mars" },
//       { id: "c", text: "Jupiter" },
//       { id: "d", text: "Venus" },
//     ],
//   },
//   {
//     id: 3,
//     title: "Who wrote 'Romeo and Juliet'?",
//     options: [
//       { id: "a", text: "William Wordsworth" },
//       { id: "b", text: "William Shakespeare" },
//       { id: "c", text: "Charles Dickens" },
//       { id: "d", text: "Jane Austen" },
//     ],
//   },
//   {
//     id: 4,
//     title: "What is the boiling point of water?",
//     options: [
//       { id: "a", text: "90°C" },
//       { id: "b", text: "100°C" },
//       { id: "c", text: "110°C" },
//       { id: "d", text: "120°C" },
//     ],
//   },
//   {
//     id: 5,
//     title: "Which language is used for web apps?",
//     options: [
//       { id: "a", text: "Python" },
//       { id: "b", text: "Java" },
//       { id: "c", text: "JavaScript" },
//       { id: "d", text: "C++" },
//     ],
//   },
// ];

// const Quiz1: React.FC = () => {
//   return (
//     <div className="p-6 max-w-2xl mx-auto space-y-8">
//       {quizData.map((question) => (
//         <div
//           key={question.id}
//           className="p-4 border rounded-lg shadow-sm bg-white space-y-4"
//         >
//           <h2 className="text-lg font-semibold text-gray-800">{question.title}</h2>
//           <ul className="space-y-2">
//             {question.options.map((option) => (
//               <li key={option.id}>
//                 <label className="flex items-center gap-4 cursor-pointer">
//                   {/* Hidden radio input */}
//                   <input
//                     type="radio"
//                     name={`question-${question.id}`}
//                     value={option.id}
//                     className="peer hidden"
//                   />
//                   {/* Custom radio with letter inside */}
//                   <div className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center font-bold text-gray-600 peer-checked:border-lime-500 peer-checked:bg-lime-500 peer-checked:text-white transition">
//                     {option.id.toUpperCase()}
//                   </div>
//                   {/* Option text */}
//                   <span className="text-gray-800">{option.text}</span>
//                 </label>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Quiz1;


















import React, { useState } from 'react';

type QuizOption = {
  id: string; // a, b, c, d
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
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});

  const handleSelect = (questionId: number, optionId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handleSubmit = () => {
    console.log('Selected Answers:', selectedAnswers);
    // You can display or send this data
  };

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
                <label className="flex items-center gap-4 cursor-pointer">
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option.id}
                    checked={selectedAnswers[question.id] === option.id}
                    onChange={() => handleSelect(question.id, option.id)}
                    className="peer hidden"
                  />
                  <div className="w-8 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center font-bold text-gray-600 peer-checked:border-lime-500 peer-checked:bg-lime-500 peer-checked:text-white transition">
                    {option.id.toUpperCase()}
                  </div>
                  <span className="text-gray-800">{option.text}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="block mx-auto mt-6 px-6 py-2 bg-lime-500 text-white rounded-lg hover:bg-lime-600 transition"
      >
        Submit
      </button>
      
    </div>
  );
};

export default Quiz1;
