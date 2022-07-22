import React from 'react';
import logo from '../images/logo.png';
export default function About() {
    return (
        <div className='container-fluid'>
            <div className="row p-2">
                <div className="pt-4">
                    <img  src={logo} alt="Logo of Maruel" />
                </div>
                <p className="mt-5"> <strong>Program: </strong>MAP-06</p>
                <p> <strong>Course: </strong>Client-side web programming</p>
                <p> <strong>Students:</strong> Kord Mafi Mahyar, Wang Ruoqi and Elina Sardaryan</p>
                <p className="mt-5"><strong>Github link: </strong><a href='https://github.com/sardaryanelina/React-team-project'>https://github.com/sardaryanelina/React-team-project</a></p>
            </div>
        </div>
    );

}