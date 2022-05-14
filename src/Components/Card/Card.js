import './Card.css';
import React from 'react';
import Pessoa from './pessoa.jpg'
import Pessoa1 from './pessoa1.jpg'
import Pessoa2 from './pessoa2.jpg'
import Pessoa3 from './pessoa3.jpg'
import Pessoa4 from './pessoa4.jpg'
export default function Card(){


    return(
        <div className="Stats">

            <div className='cards'>
                <img src={Pessoa}/>
                <div>
                    <h2>Natasha R.</h2>
                    <button>Follow</button>
                </div>
            </div>

            <div className='cards'>
                <img src={Pessoa1}/>
                <div>
                    <h2>Peter Meyer</h2>
                    <button>Follow</button>
                </div>
            </div>

            <div className='cards'>
                <img src={Pessoa2}/>
                <div>
                    <h2>S. Kolshova</h2>
                    <button>Follow</button>
                </div>
            </div>

            <div className='cards'>
                <img src={Pessoa3}/>
                <div>
                    <h2>Sylvia & Jake</h2>
                    <button>Follow</button>
                </div>
            </div>
                
            <div className='cards'>
                <img src={Pessoa4}/>
                <div>
                    <h2>Mike</h2>
                    <button>Follow</button>
                </div>
            </div>
            </div>

    )
}
