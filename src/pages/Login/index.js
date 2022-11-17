import React from "react";
import './login.css';
import {useDispatch} from 'react-redux';
import {
  fetchDoLogin
} from '../../store/features/authSlice';
export default function Index() {
  const dispatch = useDispatch();
  const [email,setEmail] = React.useState('');
  const [password,setPassword] = React.useState('');  
  /**
   * DİKKAT!!! 
   * fonksiyonlarınız lütfen bileşenlerin gövdesinde yazmayın. yani
   * onClick methodunun içinde arrowfunction açarak yazmayın.
   */
  const doLogin = () =>{
      dispatch(fetchDoLogin({
         email: email,
         password: password
      }));
  };
  return (
      <div id="container log">
        <h1>Log In</h1>
        <span className="close-btn">
          <img alt="" src="https://cdn4.iconfinder.com/data/icons/miu/22/circle_close_delete_-128.png"></img>
        </span>
        <input type="text" onChange={(text)=>setEmail(text.target.value)} placeholder="Email" />
        <input type="password" onChange={(text)=>setPassword(text.target.value)}  placeholder="Password" />
        <input className="login" type="submit" value="Log in" onClick={doLogin}/>       
        <a href="/register">Sifremi unuttum</a> 
        <p>
          <label className="error" />
        </p>       
      
      </div>  
  );
}