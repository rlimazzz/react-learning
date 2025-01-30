import UserGreeting from "./Components/UserGreeting/UserGreeting"

function App() {
  return (
    <>
      <UserGreeting isLoggedIn="Olá" name="Ryan"/>
      <UserGreeting isLoggedIn={true} name="Josh"/>
      <UserGreeting isLoggedIn="Hello World" name={1234}/>
    </>
  )
}

export default App
