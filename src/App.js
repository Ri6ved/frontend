import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';

import ViewBlog from './components/ViewBlog';
import Main from './components/Main';
import Navbar from './components/Navbar';
import AddBlog from './components/AddBlog';
import Myprofile from './components/Myprofile';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/'element={<Login/>}/>
      <Route path='/sign'element={<Signup/>}/>
      <Route path='/add' element={<Main child={<AddBlog/>}/>}/>
      <Route path='/view' element={<Main child={<ViewBlog/>}/>}/>
      <Route path='/Nav' element={<Main/>}/>
      <Route path='/mypro' element={<Main child={<Myprofile/>}/>}/>
     </Routes>
    </div>
  );
}

export default App;
