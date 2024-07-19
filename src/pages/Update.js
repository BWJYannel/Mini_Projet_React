import React, { useState } from "react";
import './style.css';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios';

const Update =()=>{
    const {id}=useParams();
    const [values,setValues]=useState({
        id:id,
        first_name:'',
        last_name:'',
        age:'',
        sexe:''
    })
    useEffect(()=>{
        axios.get('http://localhost:3003/users/'+id)
        .then(res=>{
            setValues({...values,first_name:res.data.first_name,last_name:res.data.last_name,age:res.data.age,sexe:res.data.sexe})
        })
        .catch(err=>console.log(err))
    },[id])
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(values.first_name!=="" && values.last_name!=="" && values.age!=="" && values.sexe!==""){
            axios.put('http://localhost:3003/users/'+id,values)
            .then(()=>{
                alert("Modification réussie")
                navigate('/Main');
            })
            .catch(err=>console.log(err))
        }else{
            navigate('/Main');
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <h2>Modification</h2>
            <input type="text" placeholder='Nom' name='nom2' value={values.first_name} onChange={e=>setValues({...values,first_name:e.target.value})}/>
            <input type="text" placeholder='Prenom' name='prenom2' value={values.last_name} onChange={e=>setValues({...values,last_name:e.target.value})}/>
            <input type="text" placeholder='Âge' name='age2' value={values.age} onChange={e=>setValues({...values,age:e.target.value})}/>
            <input type="text" placeholder='Sexe' name='sexe2' value={values.sexe} onChange={e=>setValues({...values,sexe:e.target.value})}/>
            <button >Valider</button>
        </form>
    )
}
export default Update;