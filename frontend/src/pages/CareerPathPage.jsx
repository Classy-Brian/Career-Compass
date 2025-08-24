import React, {useState} from "react";

import { submitSurvey } from "../services/plannerService";

function CareerPathPage() {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting these answers:", answers);

    try {
      const recommendations = await submitSurvey(answers);
      console.log("Received recommendations:", recommendations);
      alert("Survey submitted successfully! Check the console for results.");
    } catch (error) {
      console.error("Failed to submit Survey:", error);
      alert("Failed to submit survey. See console for details.");
    }
  };

  return (
    <div>
      <h1>Career Planner Survey</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>What is your favorite  subject?</label>
          <input
            type="text"
            name="question1"
            value={answers.question1}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>What is your favorite hobby?</label>
          <input
            type="text"
            name="question2"
            value={answers.question2}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CareerPathPage;

// export default function CareerPathPage() {
//   return (
//     <>
//         <h1>CareerPath Page</h1>
//         <p>This is the homepage of CareerPath.</p>

//     </>


//   );
// }