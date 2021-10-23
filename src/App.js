import Dropdown from "./bootstrap/Dropdown";
import { Route, Switch } from "react-router";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  );
}

export default App;
