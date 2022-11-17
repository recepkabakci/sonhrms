import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Sifre from './pages/Sifre';
import Datas from './pages/View';
import {useSelector} from 'react-redux';
function App() {
  const isLogin = useSelector((state)=>state.auth.isAuthenticated);

  return (   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={isLogin ? <Home/> : <Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/data' element={<Datas/>}/>
        <Route path='/sifremiUnuttum' element={<Sifre/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
