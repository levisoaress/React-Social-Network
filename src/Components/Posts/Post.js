import './Post.css'
import React from 'react';
import post1 from './post1.jpg'
import Pessoa from './pessoa.jpg'

export default function(){
    
    
    return(
            <div className='posts'>

                <div className='poster'>
                    <div className='poster-pos'>
                        <img src={Pessoa}/>
                        <h2>Natasha R.</h2>
                    </div>
                </div>

                <div className='photo'>
                    <img src={post1}/>
                </div>

                <div className='photo-description'>
                    <p>Such a beatiful place</p>
                </div>

            </div>
    )
}