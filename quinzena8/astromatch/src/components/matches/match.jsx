import React, { useState } from 'react'
import Styled from './style.css'
import Index from '../home/Index'


const Match = () => {



    return (
        <div className="match-container">

            <div className='header-Match-container'>

                <div className='header-itens'>
                    <div className='header-itens-configurations'>
                    {/* <svg viewBox="0 0 24 24" role="presentation" class="sc-kAzzGY jgDggH" style="width: 1.5rem; height: 1.5rem;"><path d="M16,9C18.33,9 23,10.17 23,12.5V15H17V12.5C17,11 16.19,9.89 15.04,9.05L16,9M8,9C10.33,9 15,10.17 15,12.5V15H1V12.5C1,10.17 5.67,9 8,9M8,7A3,3 0 0,1 5,4A3,3 0 0,1 8,1A3,3 0 0,1 11,4A3,3 0 0,1 8,7M16,7A3,3 0 0,1 13,4A3,3 0 0,1 16,1A3,3 0 0,1 19,4A3,3 0 0,1 16,7M9,16.75V19H15V16.75L18.25,20L15,23.25V21H9V23.25L5.75,20L9,16.75Z"></path></svg> */}
                    </div>
                    <button className='match-button'>voltar</button>
                    <h1 className='match-h1'>Astromatch</h1>
                </div>
            </div> 
        </div>
    )
}

export default Match


 