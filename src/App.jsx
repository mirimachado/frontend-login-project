import './App.css'
import './Components/Login/Login.css'
import Login from './Components/Login/Login'

function App() {

  return (
      <div className='container'>

        <div className='left-side'>
        <div className='login-box'>
        <div className='login-content'>
          <Login/>
          </div>
        </div>
        </div>
        <div className='right-side'></div>

      </div>
      
  )
}

export default App
