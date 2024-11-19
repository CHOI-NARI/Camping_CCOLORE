import { PiWindmill } from "react-icons/pi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Menu from "./Menu";

const Head = () => {
  return (
    <header className="w-full fixed flex justify-between items-center px-20 py-5 text-white">
      <div className="flex items-center gap-1 text-3xl">
        <PiWindmill />
        <Menu menuText="CCOLORE" />
      </div>
      <div className="flex justify-center items-center gap-5 text-base ">
        <Menu menuText="About" />
        <Menu menuText="Shop" />
        <Menu menuText="Journal" />
        <Menu menuText="Stores" />
        <Menu menuText="Service" />
      </div>
      <div className="flex justify-center items-center gap-5 text-base ">
        <Menu menuText="Bag" />
        <Menu menuText="Join" />
        <Menu menuText="Login" />
        <Menu menuText="|" />
        <FaMagnifyingGlass size={"13px"} />
      </div>
    </header>
  );
};

export default Head;
