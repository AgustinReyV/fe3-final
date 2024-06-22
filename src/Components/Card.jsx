
import React from "react";
import { Link } from 'react-router-dom';
import { useCardContext } from "./utils/global.context";

const Card = ({ data }) => {
  
  const {state, dispatch} = useCardContext()
  
  const findCard = state.cardDen.find((item) =>  data.id === item.id)

  const addFav = ()=>{
    if(findCard){
      dispatch({type: 'DELETE_CARDDEN', payload: data})
    }else{
      dispatch({type: 'ADD_CARDEN', payload: data})
    }
  }

  return (
    <>
      {
          <div className="card">
            <img src="/public/images/doctor.jpg" alt="doctorImagen" className="imgDoc"></img> 
            <Link to={"/detail/" + data.id}><h4 >{data.name}</h4></Link>
          
            <p>{data.username}</p>
          
            <button onClick={addFav} className="favButton"> {findCard ? '🗑️':'⭐'}</button>
        
        </div>
      }
    </>
    
  );
};

export default Card;
