import React, { useState } from 'react';

export default function ResumeCheckerPage() {
  const [resumeText, setResumeText] = useState('');
  const [jobText, setJobText] = useState('');
  const [results, setResults] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/resume/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resume: resumeText, job: jobText }),
      });

      const data = await response.json();
      setResults(data);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Resume Checker</h1>

      <div>
        <h3>Paste your Resume</h3>
        <textarea
          rows={10}
          cols={80}
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
        />
      </div>

      <div style={{ marginTop: '1rem' }}>
        <h3>Paste Job Description</h3>
        <textarea
          rows={10}
          cols={80}
          value={jobText}
          onChange={(e) => setJobText(e.target.value)}
        />
      </div>

      <button onClick={handleSubmit} style={{ marginTop: '1rem' }}>
        Submit
      </button>

      {results && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Missing Keywords:</h3>
          <ul>
            {results.missingKeywords.map((word, idx) => (
              <li key={idx}>{word}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
