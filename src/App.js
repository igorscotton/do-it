import Routes from "./Routes"
import GlobalStyle from "./styles/global"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <GlobalStyle/>
      <Routes/>
    </div>
  );
}

export default App;
