import { Route ,Switch} from "react-router-dom"
import './App.css';
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Contact from './Components/Contact'

function App() {
  return <>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={Contact} />
        </Switch >
    
    </>
}

export default App;
