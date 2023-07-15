'use client'
import './footer.css';
import {supabase} from '../../../supabase';
import { useState } from "react";
import localFont from 'next/font/local'

const helpMe = localFont({src: '../fonts/HelpMe.ttf'})
const sectar = localFont({src: '../fonts/Sectar.otf'})
export default function Footer(){
    const [email,setEmail] = useState('');
    const [errMessage, setErrMessage] = useState('SUBMIT');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) =>{
        setEmail(e.target.value);
        console.log(email);
    }
    const verifyEmail = () =>{
        if(email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
            return true
        }else{
            return false
        }
    }
    const addEmail = async() =>{
        setErrMessage('LOADING...')
        const validEmail = verifyEmail();
        console.log(validEmail);
        const {data,err} = await supabase.from("emails").select('email').eq('email', email)
        console.log(data)
        if(data.length == 0 && validEmail){
            const {data2, err2} = await supabase.from("emails").insert({email: email})
            setErrMessage('Success')
            setSuccess(true);
        }else if(data.length != 0 && validEmail){
            console.log('non uinique email')
            setErrMessage('Email already used.')
        }else{
            console.log('non uinique email')
            setErrMessage('Not a valid email.')
        }
    }
    return (
        <div className={`footer-container ${helpMe.className} ${success ? 'success' : ''}`}>
                <label htmlFor="email">KEEP UP WITH DA$H</label>
                <div className="input-button">
                    <input type="text" id="email" name="email" placeholder="example@domain.com" value={email} onChange={handleChange}></input>
                    <button className={`button-container ${helpMe.className}`} onClick={addEmail}>{errMessage}</button>
                </div>
        </div>
    )
}