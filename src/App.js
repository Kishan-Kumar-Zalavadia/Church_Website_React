import { Route ,Switch} from "react-router-dom"
import './App.css';
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Contact from './Components/Contact'
import Youth from "./Components/Youth"
import Women from "./Components/Women"

function App() {
  return <>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/youth" component={Youth} />
          <Route exact path="/women" component={Women} />
        </Switch >
    
    </>
}

export default App;
