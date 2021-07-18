import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Main from './Pages/Main';
import AddProfile from './Pages/AddProfile';
import Contact from './Pages/Contact'
import Enquiry from './Pages/Enquiry'
import Layout from './Components/Layout';

// routes all the pages into the main app
function App() {
  return (
    <Router>
      <Layout>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Enquiry">
          <Enquiry />
        </Route>
      </Switch>
      </Layout>
    </Router>
  );
}

export default App;
