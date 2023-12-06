import { data } from "autoprefixer";
import { set } from "mongoose";
import React, { useState } from "react";
import { Link , useNavigate } from 'react-router-dom';
import OAuth from "../components/OAuth";

export default function SignUp() {
    const [formData, setformData] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate= useNavigate(); // is used to redirect the user into the home page if the user crednetials are all ok;
    const handleChange = (e) => {
        setformData({ ...formData, [e.target.id]: e.target.value });


    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError(false);
            const res = await fetch('/backend/auth/signup', {
                method: 'POST',
                headers: {

                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            console.log(data);
            setLoading(false);
            if(data.success==false){
                setError(true);
                return;
            }
            navigate('/')
            


        } catch (error) {
            setLoading(false);
            setError(true);

        }

        /*
        const res is the method used to connect the frontend url to backend url;
        and in the vite.config.js we have changed the proxy 
        */





    };

    return (

        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl text-center font-semibold my-7  ">Sign Up</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input type="text" placeholder="Username" id="username" className="bg-slate-100 p-3 rounded-lg" onChange={handleChange} />
                <input type="email" placeholder="Email" id="email" className="bg-slate-100 p-3 rounded-lg" onChange={handleChange} />
                <input type="password" placeholder="Password" id="password" className="bg-slate-100 p-3 rounded-lg" onChange={handleChange} />
                <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-60 disabled:opacity-80">{loading?'Loading.. ' :'Sign-Up'}</button>
            <OAuth/>
            </form>
            <div className="flex gap-2 mt-5">
                <p>Have an account?</p>
                <Link to='/sign-in'>
                    <span className="text-blue-600">Sign in</span>

                </Link>

            </div>
            <p className=" text-red-700 mt-5 font-bold ">
               {error && "Something went wrong"} 
            </p>
        </div>
    )
}