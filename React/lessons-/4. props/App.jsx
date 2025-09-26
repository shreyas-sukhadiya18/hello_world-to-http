// Preps = read-only properties that are shared between components.
    //A parent can send data to a child component.
      // <component key=value />


// defualt values

import Student from "./student"
function App() {
  return(
    <>
    <Student naame="Shreyas " age={113} isStudent = {true}/>
    <Student naame="Shreyas " age={113} isStudent = {true}/>
    <Student naame="Shreyas " age={113} isStudent = {true}/>
    <Student/>
    </>
  )
}
export default App
