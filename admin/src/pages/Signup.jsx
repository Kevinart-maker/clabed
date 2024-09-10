import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { NavLink } from "react-router-dom";

const Signup = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ role, setRole ] = useState('')
    const { signup, error, loading, msg } = useSignup()

    const handleSubmit = async (e)=>{
        e.preventDefault()

        await signup(email, password, role)
    }
    
    return (
        <form className="signup" onSubmit={handleSubmit}>
        <h1 className="crumb">
          <NavLink to='/admins'>Admins /</NavLink>
          <NavLink to='' className='scnd-nav'>Add</NavLink>
        </h1>

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
            <label>
                Role: 

                <span className="input">
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                    {/* <input 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                /> */}
                </span>
            </label>

            <button disabled={loading}>Sign up</button>
            {error && <div className="error">{error}</div>}
            {msg && <div className="msg">{msg}</div>}
        </form>
    );
}
 
export default Signup;