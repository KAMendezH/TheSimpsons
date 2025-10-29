
import './App.css'


// COMPONENTS
import Header from './components/Header'
import Footer from './components/Footer'
import Modal from './components/Modal'
import CardCharacter from './components/cardCharacter'
// REACT
import { useEffect } from 'react'
// IMPORT STORES ZUSTAND
import useDataStore from './stores/useDataStore'
// TYPES
import type { Character } from './Types/Types'


function App() {
  const {addCharacter, data} = useDataStore();

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const res = await fetch("https://thesimpsonsapi.com/api/characters");
        const data = await res.json();
        data.results.map((c :Character) => {
          addCharacter(c)
        });
      }catch(err){
        console.error("Error al obtener los datos: \n", err);
      }
    }
    fetchData();
  },[]);
  return (
    <section className='Section__App'>
      <Modal />
      <Header />
      
      <div className='App_container__cards'>
        {
          data ? data.map((character, id) => (
              <CardCharacter 
              key={id} 
              portrait_path={character.portrait_path} 
              name={character.name} 
              age={character.age} 
              birthdate={character.birthdate} 
              gender={character.gender} 
              id={character.id} 
              occupation={character.occupation} 
              phrases={character.phrases} 
              status={character.status}/>
              
            ))
            : 
            <div className='App__load'>
            <h3>Cargando datos...</h3>
           </div>
        }
      </div>

      
      <Footer />
    </section>
  )
}

export default App
