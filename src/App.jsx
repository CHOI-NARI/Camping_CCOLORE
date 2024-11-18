import Head from "./Head/Head";
import MainImage from "./Head/MainImage";
import Main from "./Main/Main";
import MidImage from "./Main/LeftImage";

function App(props) {
  return (
    <div className="App">
      <Head />
      <MainImage />
      <div>
        <Main />
      </div>
    </div>
  );
}

export default App;
