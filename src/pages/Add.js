import React, { useState } from "react";
import './style.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Add =()=>{
    const [user,setUser]=useState({
        first_name:'',
        last_name:'',
        age:'',
        sexe:''
    })
    const navigate=useNavigate();
    const handleSubmit = event => {
        event.preventDefault();   
        if(user.first_name!=="" && user.last_name!=="" && user.age!=="" && user.sexe!==""){
            axios.post('http://localhost:3003/users', user)
            .then(() => {
                alert("Bien ajouter");
                navigate('/Main');
            })
            .catch(err=>console.log(err))
        }else{
            navigate('/Main');
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <h2>Ajouter</h2>
            <input type="text" placeholder='Nom' name='nom2' value={user.first_name} onChange={e=>setUser({...user,first_name:e.target.value})}/>
            <input type="text" placeholder='Prenom' name='prenom2' value={user.last_name} onChange={e=>setUser({...user,last_name:e.target.value})}/>
            <input type="text" placeholder='Âge' name='age2' value={user.age} onChange={e=>setUser({...user,age:e.target.value})}/>
            <input type="text" placeholder='Sexe' name='sexe2' value={user.sexe} onChange={e=>setUser({...user,sexe:e.target.value})}/>
            <button >Valider</button>
        </form>
    )
}
export default Add;