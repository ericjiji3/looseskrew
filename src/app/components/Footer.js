'use client'
import Link from 'next/link'
import {supabase} from '../../../supabase';
import { useState } from "react";

export default function Footer(){
    const [email,setEmail] = useState('');
    const [errMessage, setErrMessage] = useState('Stay up to date with DA$H:');

    const handleChange = (e) =>{
        setEmail(e.target.value);
        console.log(email);
    }
    const addEmail = async() =>{
        const {data,err} = await supabase.from("emails").select('email').eq('email', email)
        console.log(data)
        if(data.length == 0){
            const {data2, err2} = await supabase.from("emails").insert({email: email})
            setErrMessage('Success')
        }else{
            console.log('non uinique email')
            setErrMessage('This email has already been used.')
        }
    }
    return (
        <div className="footer-container">
                <label for="email">{errMessage}</label>
                <input type="text" id="email" name="email" value={email} onChange={handleChange}></input>
                <button onClick={addEmail}>Submit</button>
        </div>
    )
}