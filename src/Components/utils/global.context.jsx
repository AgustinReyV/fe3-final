import { createContext, useContext, useState, useEffect, useReducer } from "react";
import axios from "axios";

export const ContextGlobal = createContext();
const lsCard = JSON.parse(localStorage.getItem('cards')) || [];

const reducer = (state, action) => {
  switch (action.type){
      case'GET_DENTISTAS':
        return{...state, dentistas: action.payload};
      case'GET_DETALLE':
        return{};
      case'ADD_CARDEN':
        return{...state, cardDen: [...state.cardDen, action.payload]};
      case'DELETE_CARDDEN':
        const filterCard = state.cardDen.filter((item) => item.id !== action.payload.id)
          return{...state, cardDen: filterCard};
      case'CHANGE-THEME':
        return{...state, theme:action.payload};
  }
}

export const initialState = {
  dentistas: [],
  cardDen: lsCard,
  theme: 'light',
  detalle:[]
}

export const ContextProvider = ({ children }) => {
 
const [state, dispatch] = useReducer(reducer, initialState)

  const url= "https://jsonplaceholder.typicode.com/users"
  useEffect(() => {
    axios(url).then((res) => dispatch({type:'GET_DENTISTAS', payload: res.data}))
  }, []);

 useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(state.cardDen))
  }, [state.cardDen])

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useCardContext = () => useContext(ContextGlobal);