
// import React, { useEffect, useState } from "react";

// type Question = {
//   id: number;
//   question: string;
//   options: string[];
// };

// const Quiz2: React.FC = () => {
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [selectedAnswers, setSelectedAnswers] = useState<{ [id: number]: string }>({});
//   const [results, setResults] = useState<{ [id: number]: boolean }>({});

//   useEffect(() => {
//     fetch("http://localhost:5000/api/quiz")
//       .then((res) => res.json())
//       .then(setQuestions);
//   }, []);

//   const submitAnswer = (id: number, selected: string) => {
//     fetch("http://localhost:5000/api/submit", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ id, selected })
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setResults((prev) => ({ ...prev, [id]: data.correct }));
//       });
//   };

//   return (
//     <div className="App" style={{ padding: 20 }}>
//       <h1>Quiz</h1>
//       {questions.map((q) => (
//         <div key={q.id} style={{ marginBottom: 20 }}>
//           <p><strong>{q.question}</strong></p>
//           {q.options.map((opt) => (
//             <div key={opt}>
//               <label>
//                 <input
//                   type="radio"
//                   name={`q-${q.id}`}
//                   value={opt}
//                   checked={selectedAnswers[q.id] === opt}
//                   onChange={() => {
//                     setSelectedAnswers({ ...selectedAnswers, [q.id]: opt });
//                     submitAnswer(q.id, opt);
//                   }}
//                 />
//                 {opt}
//               </label>
//             </div>
//           ))}
//           {results[q.id] !== undefined && (
//             <p style={{ color: results[q.id] ? "green" : "red" }}>
//               {results[q.id] ? "Correct!" : "Wrong answer"}
//             </p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Quiz2;














// ==== FRONTEND: App.tsx ====
import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";

const SECRET_KEY = "my32lengthsupersecretnooneknows1";

function decryptData(encryptedData: string) {
  const [ivBase64, encrypted] = encryptedData.split(":");
  const iv = CryptoJS.enc.Base64.parse(ivBase64);
  const key = CryptoJS.enc.Utf8.parse(SECRET_KEY);

  const decrypted = CryptoJS.AES.decrypt(encrypted, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });

  return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
}

type Question = {
  id: number;
  question: string;
  options: string[];
};

const Quiz2: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [id: number]: string }>({});
  const [results, setResults] = useState<{ [id: number]: boolean }>({});

  useEffect(() => {
    fetch("http://localhost:5000/api/quiz")
      .then((res) => res.json())
      .then((res) => {
        const decrypted = decryptData(res.data);
        setQuestions(decrypted);
      });
  }, []);

  const submitAnswer = (id: number, selected: string) => {
    fetch("http://localhost:5000/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, selected })
    })
      .then((res) => res.json())
      .then((data) => {
        setResults((prev) => ({ ...prev, [id]: data.correct }));
      });
  };

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>Secure Quiz</h1>
      {questions.map((q) => (
        <div key={q.id} style={{ marginBottom: 20 }}>
          <p><strong>{q.question}</strong></p>
          {q.options.map((opt) => (
            <div key={opt}>
              <label>
                <input
                  type="radio"
                  name={`q-${q.id}`}
                  value={opt}
                  checked={selectedAnswers[q.id] === opt}
                  onChange={() => {
                    setSelectedAnswers({ ...selectedAnswers, [q.id]: opt });
                    submitAnswer(q.id, opt);
                  }}
                />
                {opt}
              </label>
            </div>
          ))}
          {results[q.id] !== undefined && (
            <p style={{ color: results[q.id] ? "green" : "red" }}>
              {results[q.id] ? "Correct!" : "Wrong answer"}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Quiz2;
