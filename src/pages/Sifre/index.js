import React,{useState} from 'react'
import {
    fetchDoForgotPassword,
    
} from '../../store/features/authSlice'
import {useDispatch,useSelector} from 'react-redux'
export default function Index() {
    const dispatch = useDispatch();
    /**
     * Local state tanımlıyoruz.
     */
    
    const [email,setEmail]= useState('');
    const isRegisterLoading = useSelector((state)=>state.auth.isRegisterLoading);
    /**
     * Yeni üyelik için tetiklenecek bir arrow function tanımlıyoruz.
     */
    const forgotPassword = ()=> {
        /**
         * redux bişlenlerini tetiklemek için dispatch kullanıyoruz.
         */
        dispatch(fetchDoForgotPassword({
            email
        }));
    }
  return (
    <div className='container'>
        {
            isRegisterLoading ?
            <iframe title='register' src="https://embed.lottiefiles.com/animation/87482"></iframe>
            : null
        }
        <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6 mt-5'>

          
            <div className='mb-3'>
                <label className='form-label'>Email</label>
                <input type='email' className='form-control'
                onChange={(text)=> setEmail(text.target.value)}
                />
            </div>            
            <div className='mb-3'>
                <button className='btn btn-success'
                onClick={forgotPassword}
                >Check</button>
            </div>
        </div>
        <div className='col-md-3'></div>
        </div>
    </div>
  )
}
