import React from 'react'
import backgroundShape from '../../style/images/backgroundShape.png';
import './login.css';

export default function Login() {
    //זו הקומפוננטה חני:)
    return (
        <div>
            <img src={backgroundShape}
                 alt={backgroundShape}
                 className="background-shape"/>
        </div>
    )
}
