import { useState } from "react";
import { useLogin } from '../hooks/useLogin'

const Login = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const { login, error, loading, msg } = useLogin()

    const handleSubmit = async (e)=>{
        e.preventDefault()

        await login(email, password)
    }
    
    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Log In</h3>

            <label>
                Email: 
                <span className="input">
                    <input 
                        type="text" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </span>
            </label>
            <label>
                Password: 

                <span className="input">
                    <input 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                </span>
            </label>
            

            <button disabled={loading}>Log in</button>
            {error && <div className="error">{error}</div>}
            {msg && <div className="msg">{msg}</div>}
        </form>
    );
}
 
export default Login;