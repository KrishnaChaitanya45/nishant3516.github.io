import "./App.css";
import { Router } from "./routes/Routes";
import Homepage from "./pages/Home/index";
import { Route } from "./routes/Route";
import NavBar from "./global/Navbar";
import Footer from "./global/Footer";
import Faculty from "./pages/Faculty";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Router initialPath={"/"}>
        <Route path="/">
          <Homepage />
        </Route>
        <Route path="/faculty">
          <Faculty />
        </Route>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
