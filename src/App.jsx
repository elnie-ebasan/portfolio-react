import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './components/pages/Home/Home'

function App() {

  return (
    <div className="App">
      <div className='color-bg'>
        <div className='App-box'>
          <section>
            <NavBar />
          </section>
          <section>
            <Home />
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
