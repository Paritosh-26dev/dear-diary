import { useState , useEffect } from 'react';
import './App.css';
import Navbar from './components/common/Navbar';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Home from './components/Home';
import Newentry from './components/Newentry';
import Viewentry from './components/Viewentry';
import Viewmenu from './components/Viewmenu';
import NavbarLogin from './components/common/NavbarLogin';
import Login from './components/Login';
import Register from './components/Register';



function Activelogin(...props) {
  return (
    <Router>
        <Navbar logout={props[0].logout}/>
        <Switch>
          <Route path="/" exact><Home data={props[0].data}></Home></Route>
          <Route path="/create"><Newentry data={props[0].data} login={props[0].login}></Newentry></Route>
          <Route path="/view" exact><Viewmenu data={props[0].data}></Viewmenu></Route>
          <Route path="/view/:id"><Viewentry data={props[0].data}></Viewentry></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </Router>
  )
}

function NotActivelogin(...props) {
  return (
    <Router>
        <NavbarLogin/>
        <Switch>
          <Route path="/login" exact><Login login={props[0].login}/></Route>
          <Route path="/register" exact><Register login={props[0].login}></Register></Route>
          <Redirect to="/login"></Redirect>
        </Switch>
      </Router>
  )
}

function App() {
  const [login,setlogin] = useState(false);
  const [data,setdata]=useState({})

  const logind = (data) => {
    localStorage.setItem('login',"true")
    localStorage.setItem('data',JSON.stringify(data));
    setdata(prev => {
      return data;
    });
    setlogin(prev => {
      return true;
    });
  }

  const logoutd = () => {
    localStorage.setItem('login',"false")
    localStorage.setItem('data',JSON.stringify({}))
    setlogin(prev => {
      return false;
    })
  }
  useEffect(() => {
    if(localStorage.getItem('login')!=null)
    {
      if(localStorage.getItem('login')==="true")
      {
        setdata(prev => {
          return JSON.parse(localStorage.getItem('data'));
        });
        setlogin(prev => {
          return true;
        });
      }
    }
  },[])

  if(login)
  {
    return (
      <div className="app">
          <Activelogin data={data} logout={logoutd} login={logind}/>
      </div>
    );
  }
  else {
    return (
      <div className="app">
          <NotActivelogin login={logind} />
      </div>
    );
  }
  
}

export default App;
