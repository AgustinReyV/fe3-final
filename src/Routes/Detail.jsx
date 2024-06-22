import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [detalle, setDetalle] = useState({});
  const {id} = useParams(); 
  const url = `https://jsonplaceholder.typicode.com/users/${id}`
  
  useEffect(() => {
    axios(url).then((res) => setDetalle(res.data));
  }, []);
 
  return (
    <>
      <h1>Detail Dentist {detalle.id} </h1>
      <table>
          <thead>
            <tr>
              <th><h4>Name</h4></th>
              <th><h4>Email</h4></th>
              <th><h4>Phone</h4></th>
              <th><h4>Website</h4></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><h4>{detalle.name}</h4></td>
              <td><h4>{detalle.email}</h4></td>
              <td><h4>{detalle.phone}</h4></td>
              <td><h4>{detalle.website}</h4></td>
            </tr>
          </tbody>
        
      </table>
      
    </>
  )
}

export default Detail