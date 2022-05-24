import React, { useState, useEffect } from 'react';
import './User.css';

export default function User(){

const [user, setUser] = useState({ name: '', avatar: '', bio: '', local: '' });
const tempo = {time: new Date().toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'})};


    useEffect(() => {
        fetch("https://api.github.com/users/levisoaress").
        then((response) => response.json()).
        then((data) => {
            setUser({
            name: data.name,
            avatar: data.avatar_url,
            bio: data.bio,
            local: data.location
            });
        });
    }, [])

    return(
        <div className='perfil'>

            <div className='more'>
                <img id='foto' src={user.avatar} alt='avatar'></img>
                <button><a href=''>Follow</a></button>

            </div>

            <div className='description'>

                <div className='user-about'>
                    <div className='topic'>
                        <h3>{user.name}</h3>
                        <h5>Front-end Developer | HTML | CSS | JavaScript | React JS</h5>
                        <small>{user.bio}</small>
                    </div>
                    <div className='topic'>
                    <h4>Tecnologies</h4>
                    <ul className='tecnologies'>
                        <li>
                            <h5>JavaScript</h5>
                        </li>
                        <li>
                            <h5>React Js</h5>
                        </li>
                        <li>
                            <h5>HTML</h5>
                        </li>
                        <li>
                            <h5>CSS</h5>
                        </li>
                    </ul>
                    </div>
                    <div className='topic'>
                        <div className='contato'>
                            <button>Contact</button>
                        </div>
                    </div>
                </div>

                <div className='horario'>
                <small>{user.local}</small>
                <small>{tempo.time}</small>
                </div>

            </div>
            
        </div>
    )

}