import React from "react";
import './element.css';
import { Link} from "react-router-dom";
import axios from "axios";

const Element =(props)=>{
    return(
        <div className="Element">
            <div><h3>{props.first_name}</h3></div>
            <div><p>{props.last_name}</p></div>
            <div> <p>{props.age}</p></div>
            <div><p>{props.sexe}</p></div>
            <button ><Link to={`/Update/${props.id}`}>Modifier</Link></button>
            <button onClick={()=>handleDelete(props.id)}>Supprimer</button>
        </div>
    );
    function handleDelete(id){
        const confirmation = window.confirm("Voulez vous vraiment Supprimer?");
        if(confirmation){
            axios.delete('http://localhost:3003/users/'+id)
            .then(()=>{
                alert("Suppression réussie")
            })
        }   
    }
}

export default Element;