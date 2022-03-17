import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import { main } from "./Components/styles/styles";

function App() {
  return (
    <div className="main container" style={main}>
      <Header />
    </div>
  );
}

export default App;
