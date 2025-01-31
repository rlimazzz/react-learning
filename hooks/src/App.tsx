import { useState } from 'react'

function App() {
  const [name, setName] = useState("Anonymous")

  const updateName = () => {
    if(name == "Ryan") {
      setName("Anonymous")
    }else {
      setName("Ryan")
    }
  }

  return(
    <>
      <h1> Hello user {name}</h1>
      <button onClick={updateName}>{name}</button> 
    </>
  );
}

export default App
