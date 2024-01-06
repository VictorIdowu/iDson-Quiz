import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

const Summary = ({ userAnswers }) => {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

  return (
    <div
      id="summary"
      className="max-w-[40rem] my-8 mx-auto p-8 bg-gradient-to-b from-[#a17eda] from-0% to-[#895fc4] to-100% text-[#191321] rounded-lg shadow-sm overflow-hidden"
    >
      <img
        src={quizCompleteImg}
        className="block w-32 h-32 object-contain mb-4 mx-auto p-4 drop-shadow-md border-2 border-solid border-[#3a2353] rounded-[50%] bg-[#c18cfa]"
        alt="Trophy icon"
      />
      <h2 className="font-roboto text-5xl text-center uppercase text-[#3a2353]">
        Quiz Completed!
      </h2>
      <div
        id="summary-stats"
        className="flex gap-8 my-8 mx-auto pb-8 border-b-2 border-solid border-[#594276]"
      >
        <p className="flex flex-1 flex-col m-0">
          <span className="font-Condensed text-3xl text-[#594276]">
            {skippedAnswersShare}%
          </span>
          <span className="font-Condensed uppercase text-sm text-[#30273a] ml-1">
            skipped
          </span>
        </p>
        <p className="flex flex-1 flex-col m-0">
          <span className="font-Condensed text-3xl text-[#594276]">
            {correctAnswersShare}%
          </span>
          <span className="font-Condensed uppercase text-sm text-[#30273a] ml-1">
            answered correctly
          </span>
        </p>
        <p className="flex flex-1 flex-col m-0">
          <span className=" font-Condensed text-3xl text-[#594276]">
            {wrongAnswersShare}%
          </span>
          <span className="font-Condensed uppercase text-sm text-[#30273a] ml-1">
            answered incorrectly
          </span>
        </p>
      </div>
      <ol className="list-none my-8 mx-auto p-0 flex flex-col gap-8 items-center">
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index} className="flex flex-col items-center">
              <h3 className="font-Condensed text-base my-0 mx-auto flex justify-center items-center bg-[#2c203d] text-[#d8cde8] w-6 h-8 rounded-[50%]">
                {index + 1}
              </h3>
              <p className="my-1 text-[1rem] text-[#30273a] text-center">
                {QUESTIONS[index].text}
              </p>
              <p className={`${cssClass} text-center`}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default Summary;
