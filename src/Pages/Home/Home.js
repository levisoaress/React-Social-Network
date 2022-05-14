import React from 'react';
import './Home.css'
import User from '../../Components/User/User';
import Card from '../../Components/Card/Card';

export default function Home() {
  return (
    <>
      <div className="home">

        <div className='user'>
          <User/>
        </div>
    
        <div className='container'>

          <div className='container-son'>
            <div className='Pessoas-title'>
              <h1>People you may know</h1>
            </div>
            <Card/>
            
          </div>

        </div>
      
      </div>
    </>
    )

}