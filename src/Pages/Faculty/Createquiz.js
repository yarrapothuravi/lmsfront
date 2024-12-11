import React, { useState } from "react";
import FacultyNavbar from "../../components/facultyNavbar";
const CreateQuiz = () => {
  const [quizTitle, setQuizTitle] = useState("");
  const [questions, setQuestions] = useState([
    { questionText: "", options: ["", "", "", ""], correctAnswer: "" },
  ]);

  const handleQuizTitleChange = (e) => setQuizTitle(e.target.value);

  const handleQuestionChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].questionText = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].options[oIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleCorrectAnswerChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].correctAnswer = value;
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { questionText: "", options: ["", "", "", ""], correctAnswer: "" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ quizTitle, questions });
    alert("Quiz created successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100">
    {/* Navbar */}
    <FacultyNavbar />
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Create a Quiz</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-medium mb-2">Quiz Title</label>
          <input
            type="text"
            value={quizTitle}
            onChange={handleQuizTitleChange}
            placeholder="Enter quiz title"
            className="w-full px-4 py-2 border rounded-lg focus:ring focus:outline-none"
            required
          />
        </div>

        {questions.map((question, qIndex) => (
          <div
            key={qIndex}
            className="p-4 bg-white rounded-lg shadow-md space-y-4"
          >
            <div>
              <label className="block text-lg font-medium mb-2">
                Question {qIndex + 1}
              </label>
              <input
                type="text"
                value={question.questionText}
                onChange={(e) =>
                  handleQuestionChange(qIndex, e.target.value)
                }
                placeholder="Enter question"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:outline-none"
                required
              />
            </div>

            <div className="space-y-2">
              {question.options.map((option, oIndex) => (
                <div key={oIndex}>
                  <label className="block text-sm font-medium mb-1">
                    Option {oIndex + 1}
                  </label>
                  <input
                    type="text"
                    value={option}
                    onChange={(e) =>
                      handleOptionChange(qIndex, oIndex, e.target.value)
                    }
                    placeholder={`Option ${oIndex + 1}`}
                    className="w-full px-4 py-2 border rounded-lg focus:ring focus:outline-none"
                    required
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-lg font-medium mb-2">
                Correct Answer
              </label>
              <select
                value={question.correctAnswer}
                onChange={(e) =>
                  handleCorrectAnswerChange(qIndex, e.target.value)
                }
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:outline-none"
                required
              >
                <option value="" disabled>
                  Select the correct answer
                </option>
                {question.options.map((option, oIndex) => (
                  <option key={oIndex} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addQuestion}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Question
        </button>

        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
        >
          Create Quiz
        </button>
      </form>
    </div>
    </div>
  );
};

export default CreateQuiz;
