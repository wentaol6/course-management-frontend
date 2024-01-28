import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import SideNav from './SideNav';
import Home from './query/Home';
import ByUser from './query/ByUser';
import Manage from './manage/Manage';
import ByCourse from './query/ByCourse';
import All from './query/All';
import Users from './manage/Users';
import Courses from './manage/Courses';
import Enrolments from './manage/Enrolments';

function App() {
  return (
    <Router>
    <div className="App">
    <SideNav />
    <div className='main-layout'>
      <Navbar />
      <div className='content-area'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/user'>
            <ByUser />
          </Route>
          <Route path='/course'>
            <ByCourse />
          </Route>
          <Route path='/all'>
            <All />
          </Route>
          <Route exact path='/manage'>
            <Manage />
          </Route>
          <Route path='/manage/users'>
            <Users />
          </Route>
          <Route path='/manage/courses'>
            <Courses />
          </Route>
          <Route path='/manage/enrolments'>
            <Enrolments />
          </Route>
        </Switch>
      </div>
    </div>
    </div>
    </Router>
    
  );
}

export default App;
