import { useState } from "react";

import Perfil from "./components/perfil";
import Formulario from "./components/formulario";


function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  return (
    <>
      <Perfil nome="Michel" endereco="https://github.com/Michel07062007.png"/>
      
      {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button>
    </>
  )
}


export default App
