import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Main.css';
import { Link} from "react-router-dom";
import Element from '../components/element';


const Main=()=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3003/users")
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[])
    return(
        <div className="Main">
            <div className="first_div_child">
                <h1>Authentification</h1>
                <button><Link to="/Add">Ajouter</Link></button>
            </div>
            <div className="container_header">
                <h2>NOM</h2>
                <h2 className="modified_h2">PRENOMS</h2>
                <h2 className="age_h2">ÂGE</h2>
                <h2 className="sexe_h2">SEXE</h2>
            </div>
            {
                data.map((item,index)=>{
                    return(
                        <div key={index}>
                            <Element id={item.id}  first_name={item.first_name} last_name={item.last_name} age={item.age} sexe={item.sexe}/>
                        </div>
                    );
                })
            }
        </div>
    );
}
export default Main;