import Home from "./Home";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Browse from "./Browse";
import BrowseList from "./BrowseList";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/browse">
              <Browse />
            </Route>  
            <Route path="/browse/:keyword">
              <BrowseList />
            </Route> 
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
