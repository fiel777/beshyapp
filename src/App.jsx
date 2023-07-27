
import './App.css'
import Content from './Components/Content'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className='dark:bg-slate-900 h-screen '>
        <Content />
      </div>


    </>
  )
}

export default App
