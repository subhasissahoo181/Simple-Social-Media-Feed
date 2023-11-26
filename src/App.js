

// import logo from './logo.svg';
import './App.css';
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from "./pages/Register";
import Login from "./pages/login";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import  Alert from "./components/Alert";
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import {refreshToken} from './redux/actions/authActions';



function App() {
  const {auth} = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(refreshToken())
  })
  
  return (
    <div className="App">
    <Router>
    <Alert/>
      <Routes>
       <Route exact path="/register"></Route>
        <Route exact path="/">{auth.token?<Login/>:<Home/>}</Route> 
        <Route exact path="/login"><Login/></Route>
       
        <Route exact path="/post/:id" element={<Post/>} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;


 