
import Student from './Student.jsx'
import Student2 from './Student2.jsx'
import Student3 from './Student3.jsx'


function App(){
 
  return (
    <>
      <Student />
      <Student2 name="Nurudeen" age={40} isStudent={false}/>
      <Student3 name="Smart" age={17} isStudent={true}/>
    </>
  )
}

export default App
