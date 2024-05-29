import Student from './Student.jsx'
import Student2 from './Student2.jsx'

function App(){
 
  return (
    <>
      <Student name="Eddy" age={30} isStudent={true}/>
      <Student2 name="Nurudeen" age={40} isStudent={false}/>
    </>
  )
}

export default App
