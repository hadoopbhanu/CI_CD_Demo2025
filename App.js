import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/oscars" element={<Oscars />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/interviews" element={<InterviewScorer />} />
        </Routes>
      </div>
    </Router>
  );
}

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md flex justify-between">
      <h1 className="text-xl font-bold">ESnet</h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-blue-400">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/news" className="hover:text-blue-400">
              NEWS & EVENTS
            </Link>
          </li>
          <li>
            <Link to="/oscars" className="hover:text-blue-400">
              OSCARS
            </Link>
          </li>
          <li>
            <Link to="/careers" className="hover:text-blue-400">
              CAREERS
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Home() {
  return <div className="p-6 text-gray-800">🏠 Welcome to ESnet</div>;
}

function About() {
  return <div className="p-6 text-gray-800">ℹ️ About ESnet</div>;
}

function News() {
  return <div className="p-6 text-gray-800">📰 Latest News and Events</div>;
}

function Oscars() {
  return <div className="p-6 text-gray-800">🏆 Oscars Section</div>;
}

function Careers() {
  return (
    <div className="p-6 text-gray-800">
      <h2 className="text-2xl font-bold mb-4">💼 Careers</h2>
      <p>Explore job opportunities and our panel interview scorer.</p>
      <Link to="/careers/interviews" className="text-blue-500 hover:underline">
        🎯 Go to Interview Scoring Dashboard
      </Link>
    </div>
  );
}

function InterviewScorer() {
  const [scores, setScores] = useState([0, 0, 0, 0]);
  const totalScore = scores.reduce((a, b) => a + b, 0) / scores.length;

  const handleScoreChange = (index, value) => {
    const newScores = [...scores];
    newScores[index] = value;
    setScores(newScores);
  };

  return (
    <div className="p-6 text-gray-800">
      <h2 className="text-2xl font-bold mb-4">📝 Panel Interview Scorer</h2>
      <div className="grid grid-cols-2 gap-4">
        {scores.map((score, index) => (
          <div key={index} className="flex flex-col items-center">
            <label className="text-lg font-medium">Panelist {index + 1}</label>
            <input
              type="range"
              min="0"
              max="100"
              value={score}
              onChange={(e) =>
                handleScoreChange(index, parseInt(e.target.value))
              }
              className="w-40"
            />
            <span>{score}%</span>
          </div>
        ))}
      </div>
      <div className="mt-6 text-xl font-bold">
        Overall Score:{" "}
        <span
          className={
            totalScore > 90
              ? "text-green-500"
              : totalScore > 70
              ? "text-orange-500"
              : "text-red-500"
          }
        >
          {totalScore.toFixed(2)}%
        </span>
      </div>
    </div>
  );
}
