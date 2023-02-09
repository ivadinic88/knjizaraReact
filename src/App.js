import { useState, useEffect } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Forma from './components/Forma';
import Knjige from './components/Knjige';
import ListaZelja from './components/ListaZelja';
import NavBar from './components/NavBar';
import podaci from "./data"

function App() {

  /*const[knjige,setKnjige]= useState(podaci);
  const [brojOmiljenih, setBrojOmiljenih] = useState(0);
  const [loading, setLoading] = useState(true)
  function dodajOmiljene(id){
    podaci.forEach((p)=>{
      if(p.id===id){
        p.omiljena = 1;
        setBrojOmiljenih(brojOmiljenih+1)
      }
    });
  }
  const paginate = (knjige) => {
    const itemsPerPage = 6  
    const numberOfPages = Math.ceil(knjige.length / itemsPerPage)

    const newKnjige = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage
      return knjige.slice(start, start + itemsPerPage)
    })

    return newKnjige
  }

  function vratiKnjige() {
    setKnjige(paginate(knjige));
    setLoading(false);
    console.log(knjige);
  }
  useEffect(() => {
    vratiKnjige();
  }, []) */

  return (
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path='/kontakt' element={<Forma></Forma>}/>
      <Route path='/lista' element={<ListaZelja knjige={knjige} brojOmiljenih={brojOmiljenih} loading={loading}></ListaZelja>}/>
      <Route path='/' element={<Knjige knjige={knjige} dodajOmiljene={dodajOmiljene} loading={loading}></Knjige>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
