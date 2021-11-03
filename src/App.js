import { Route, Switch } from "react-router";
import Test from "./components/Test";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Test} />
    </Switch>
  );
}

export default App;
