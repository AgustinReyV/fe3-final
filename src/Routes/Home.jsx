import React from 'react'
import Card from '../Components/Card'
import { useCardContext } from '../Components/utils/global.context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  
  const {state} = useCardContext()

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {state.dentistas.length ? state.dentistas.map((dentista) => 
        <Card data={dentista} key={dentista.id}/>) : null}
      </div>
    </main>
  )
}

export default Home