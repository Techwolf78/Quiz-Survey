import { useState } from "react";
import Slider from "./components/Slider";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const [sliderValue, setSliderValue] = useState(2); // Neutral

  const totalQuestions = 5;
  const progress = (currentQuestion / totalQuestions) * 100;

  const handlePrev = () => {
    if (currentQuestion > 1) setCurrentQuestion(currentQuestion - 1);
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions)
      setCurrentQuestion(currentQuestion + 1);
  };

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
    setTimeout(() => {
      handleNext();
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <div className="bg-white rounded-lg shadow-lg p-10 max-w-5xl w-full">
        <div className="flex justify-center mb-20">
          <div className="relative w-1/4">
            <div
              className="absolute top-0 z-10 left-0 h-1.5 bg-teal-500 rounded"
              style={{ width: `${progress}%` }}
            ></div>
            <div className="absolute top-0 left-0 h-1.5 bg-gray-300 w-full text-center rounded"></div>
            <span className="block mt-4 text-teal-500 text-xl font-bold text-center">
              IDEALISTIC
            </span>
          </div>
        </div>
        <div className="text-center text-gray-500 mb-4">
          {currentQuestion}/{totalQuestions}
        </div>
        <div className="text-center text-lg font-semibold mb-20">
          I have ambitious aims of making a difference.
        </div>
        <Slider value={sliderValue} onChange={handleSliderChange} />

        <div className="flex justify-between mt-20">
          <button className="text-teal-500" onClick={handlePrev}>
            &larr; PREV
          </button>
          <button className="text-teal-500" onClick={handleNext}>
            NEXT &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;