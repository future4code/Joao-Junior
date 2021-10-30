import React, { useState } from 'react'
import Styled from './style.css'
import Index from '../home/Index'


const Match = () => {

// const [pageName,setpageName] = useState("home")

// const getPagina = () => {
//     switch (pageName) {
//       case "home":
//         return <Index/>
//       case "matches":
//         return <Match/>
//         default:
//           return <Index/>
//     }
//   }

// const goIndex = () => {
//  setpageName()
// }

    return (
        <div className="match-container">

            <div className='header-Match'>
                <button className='match-button'>voltar</button>
                <h1 className='match-h1'>Astromatch</h1>
            </div> 
        </div>
    )
}

export default Match


 