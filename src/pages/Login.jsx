import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let [person, setPerson] = useState({ email: "", password: "" })  
    const dispatch = useDispatch()
    let navigate = useNavigate()
    let [isLogin, setIsLogin] = useState(false)

    const handleChange = (e) => {
        setPerson({ ...person, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: "LOGIN",
            payload: {
                email: person.email,
                // Add any other necessary data here
            }
        })
        setIsLogin(true)
    }

    React.useEffect(() => {
        if (isLogin) {
            navigate('/')
        }
    }, [isLogin, navigate])

    return (
        <>
            <form className="w-1/2 bg-slate-100 m-auto my-5" onSubmit={handleSubmit}>
                <h2 className="text-center text-xl underline mb-5">
                    Login
                </h2>
                <div className="flex gap-12 items-center mt-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="w-full" onChange={handleChange} required />
                </div>
                <div className="flex gap-5 items-center mt-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className="w-full" onChange={handleChange} required />
                </div>
                <button type="submit" className="bg-slate-500 text-white p-2 my-2 rounded">
                    Login
                </button>
            </form>
        </>
    )
}

export default Login
