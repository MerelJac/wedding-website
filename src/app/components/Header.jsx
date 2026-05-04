import Initials from "./Initals";

function Header() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[100vh] md:min-h-screen bg-[url('/hand.png')] bg-center bg-cover bg-no-repeat bg-scroll md:bg-fixed">
      <Initials />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2D190E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </div>
  );
}

export default Header;
