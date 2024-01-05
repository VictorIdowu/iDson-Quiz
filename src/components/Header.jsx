import logoImg from "../assets/quiz-logo.png";

const Header = () => {
  return (
    <header className="w-full my-8 mx-0 flex flex-col items-center">
      <img className="w-12 h-12 shadow-md" src={logoImg} alt="Quiz logo" />
      <h1 className="font-Condensed font-bold uppercase text-4xl tracking-[0.6rem] bg-gradient-to-r from-[#6ad2d2] from-40% to-[#d0fa76] to-60% m-0">
        iDsOnQuiz
      </h1>
    </header>
  );
};
export default Header;
