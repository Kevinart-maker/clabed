import { useState } from "react";
import { useNavigate } from 'react-router-dom';


export const useSignup = ()=>{
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [msg, setMsg] = useState('')
    const navigate = useNavigate()

    const signup = async(email, password, role)=>{
        setLoading(true)
        setError(null)

        const response = await fetch('https://clabed-server.vercel.app/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password, role})
        })
        const json = await response.json()

        if(!response.ok){
            setLoading(false)
            setError(json.error)
        }
        if(response.ok){
            setLoading(false)
            setMsg('User created successfully')

            // setInterval(()=>{
            //     navigate('/vehicles')
            // }, 2000)
        }
    }

    return{ signup, loading, error, msg }
}