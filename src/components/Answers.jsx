import { useRef } from "react";

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul className="m-0 p-0 flex flex-col items-center gap-2">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }

        return (
          <li key={answer} className="answer w-[90%] my-0 mx-auto">
            <button
              onClick={() => onSelect(answer)}
              className={`${cssClass}  w-full text-[#3f7a70] inline-block font-Condensed text-[0.9rem] py-4 px-8 border-none bg-gradient-to-b from-[#81f1fb] from-0% to-[#73d2f8] to-100% cursor-pointer transition-all duration-700 ease-in-out rounded-3xl `}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default Answers;
