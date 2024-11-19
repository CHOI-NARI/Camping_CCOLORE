import Head from "./Head/Head";
import MainImage from "./Head/MainImage";
import Main from "./Main/Main";
import OurText from "./Main/OurText";
import MiddleImage from "./Main/MiddleImage";
import LastImage from "./Main/LastImage";
import LastTwoImage from "./Main/LastTwoImge";
import LastThreeImage from "./Main/LastThreeImage";
import Footer from "./Footer/Footer";
import Top from "./Head/Top";

function App(props) {
  return (
    <div className="App">
      <Top topText="완벽한 동계침낭 에어라이트 940" />
      <Head />
      <MainImage />
      <Main />
      <OurText text="OUR JOURNALS" />
      <MiddleImage />
      <OurText text="BRAND ACTIVITIES" />
      <div className="w-full flex justify-center">
        <div className="w-[1300px] flex justify-center p-5 gap-4">
          <LastImage />
          <LastTwoImage />
          <LastThreeImage />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
