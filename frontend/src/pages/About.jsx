import React from "react";

export default function About() {
    return (
        <div className="px-4 py-12 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4  text-slate-700">About </h1>
            <p className="mb-4 text-slate-700">This is a full stack web application built with
                the MERN stack .it includes authentication features that allow userd to signup , log in and log out and provides access to protected routes only for authenticated user
            </p>
            <p className="mb-4 text-slate-700">
                The frontend of the application is built with React and uses React router for client
                side routing .The back-end is build with Node js and uses MONGO db as the database.
                Authentication is implemented by JSON web token
            </p>

            <p className="mb-4 text-slate-700">
                This application is intended as a starting point
                for building fullstack application with authentication using the mern stack
            </p>
        </div>
    )
}