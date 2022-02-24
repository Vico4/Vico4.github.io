import '../App.css'

function Ball({id, sent, color, action}) {
const colors = ['baudroie', 'mante', 'dragon', 'blob']
    return(
        <button 
        className={colors[color]+"Ball"}
        onClick={()=> {!sent ? action(id) 
            : alert("you can't change this anymore")}}
        ></button>
    )
}

export default Ball