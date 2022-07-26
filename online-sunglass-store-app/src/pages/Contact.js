import React from 'react';
import logo from '../images/Logo_withYellow.png';

export default function Contact() {

    return (
        <div className='container-fluid'>
            <div className="row p-4">
                <div className="pt-4 m-4">
                    <img src={logo} alt="Logo of Maruel" width="220" />
                </div>
                <p className="mt-4">Elina Sardaryan</p>
                <p ><strong>Linkedin:
                </strong><a href='https://www.linkedin.com/in/elinasardaryan/' target={'_blank'}> https://www.linkedin.com/in/elinasardaryan/</a></p>
                <p className="mt-4">Mahyar Kordmafi</p>
                <p ><strong>Linkedin:
                </strong><a href='https://www.linkedin.com/in/mahyar-kordmafi-a0526410/' target={'_blank'}> https://www.linkedin.com/in/mahyar-kordmafi-a0526410/</a></p>
                <p className="mt-4">Ruoqi Wang</p>
                <p ><strong>Linkedin:
                </strong><a href='https://www.linkedin.com/in/wang-ruoqi-b721901a4/' target={'_blank'}> https://www.linkedin.com/in/wang-ruoqi-b721901a4/</a></p>
            </div>
        </div>
    );
}