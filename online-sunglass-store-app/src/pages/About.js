import React from 'react';
import logo from '../images/logo.png';
export default function About() {
    return (
        <div className='container-fluid'>
            <div className="row p-4">
                <div className="pt-4">
                    <img  src={logo} alt="Logo of Maruel"  width="220"/>
                </div>
                <p className="mt-5"> <strong>Program: </strong>MAP-06</p>
                <p> <strong>Course: </strong>Client-side web programming</p>
                <p> <strong>Students:</strong> Kord Mafi Mahyar, Wang Ruoqi and Elina Sardaryan</p>
                <p className="mt-5"><strong>Github link: 
                    </strong><a href='https://github.com/sardaryanelina/React-team-project' target={'_blank'}>https://github.com/sardaryanelina/React-team-project</a></p>
            </div>
        </div>
    );

}