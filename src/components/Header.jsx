import Initials from "./Initals";

function Header() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[50vh] md:min-h-screen bg-[url('./assets/hand.png')] bg-center bg-cover bg-no-repeat bg-scroll md:bg-fixed">
      <Initials />
    </div>
  );
}

export default Header;
