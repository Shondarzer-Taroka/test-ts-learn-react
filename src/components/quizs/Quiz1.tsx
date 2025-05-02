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
  