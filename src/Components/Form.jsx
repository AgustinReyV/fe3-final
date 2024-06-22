import React from "react";
import { useState } from "react";

const Form = () => {
  const [persona, setPersona] = useState({
    nombre: "",
    email: "",
});
const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

const [show, setShow] = useState(false);
const [error, setError] = useState(false);

const handleSubmit = () => {
    event.preventDefault();
    if(persona.nombre.length > 5 && validEmail.test(persona.email)){
        setShow(true) 
        setError(false)
    }else{
        setError(true)
        setShow(false)
    }
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            
            <input type="text" placeholder="Nombre" value={persona.nombre} onChange={(event) => setPersona({ ...persona, nombre: event.target.value })}/>
            
            <input type="email" placeholder="email" value={persona.email} onChange={(event) => setPersona({ ...persona, email: event.target.value })}/>
            
            <button >Enviar</button>
        </form>
        {show ? <h3>Gracias {persona.nombre}, te contactaremos cuanto antes vía mail</h3> : null}
        {error && <h3>Por favor verifique su información nuevamente</h3>}
        </div>
  );
};

export default Form;
