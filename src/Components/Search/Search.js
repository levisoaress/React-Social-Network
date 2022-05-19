import React from 'react';
import './Search.css'
import lupa from './lupa.png'

export default function Search(){

    return(
        <div className='Search-bar'>
            <div className=''>
            <button><input type='text' placeholder='Pesquisar'/> <img src={lupa}/></button>
            </div>
        </div>
    )
}