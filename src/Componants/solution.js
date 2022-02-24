import Ball from './ball'
import {useState} from 'react'

function Solution({solution, gameOver, endGame}) {
    const [display, show] = useState(false)

    function solClick() {
        show(true)
        endGame(true)
    }
    
    return(
        <div className='Line'>
        <button className="showSol" onClick={()=>solClick(true)}>Show solution</button>
        {display === true ? <div className='solution'>
        {solution.map((x,i) => <Ball color={x} key={i+"Sol"}/>)}
         </div> : null}
         </div>
    )
}

export default Solution