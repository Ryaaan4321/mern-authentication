import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice.js";
import { useDispatch, useSelector } from 'react-redux';
import OAuth from "../components/OAuth.jsx";



export default function SignIn() {
    const [formData, setformData] = useState({});
    const { loading, error } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setformData({ ...formData, [e.target.id]: e.target.value });


    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch(signInStart());
            const res = await fetch('/backend/auth/signin', {
                method: 'POST',
                headers: {

                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            // console.log(data);
            if (data.success == false) {
                dispatch(signInFailure(data.message));
                return;
            }
            dispatch(signInSuccess(data));
            navigate('/');
            
        } catch (error) {
            dispatch(signInFailure(error));
            
        }

        /*
        const res is the method used to connect the frontend url to backend url;
        and in the vite.config.js we have changed the proxy 
        */
       };

    return (

        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7  ">Sign In</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* <input type="text" placeholder="Username" id="username" className="bg-slate-100 p-3 rounded-lg" onChange={handleChange} /> */}
                <input type="email" placeholder="Email" id="email" className="bg-slate-100 p-3 rounded-lg" onChange={handleChange} />
                <input type="password" placeholder="Password" id="password" className="bg-slate-100 p-3 rounded-lg" onChange={handleChange} />
                <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-60 disabled:opacity-80">{loading ? 'Loading.. ' : 'Sign-In'}</button>
                <OAuth/>
            </form>
            <div className="flex gap-2 mt-5">
                <p>Not have an account?</p>
                <Link to='/sign-up'>
                    <span className="text-blue-600">Sign up</span>

                </Link>

            </div>
            <p className=" text-red-700 mt-5 font-bold ">
                {error ? error || "Something went wrong" : " "}
            </p>
        </div>
    )
}