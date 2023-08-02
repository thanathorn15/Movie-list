import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from "./components/Header/Header"
import Home from './components/Home/Home'
import { Provider } from 'react-redux'
import store from './store/Store'
import MovieDetail from './components/MovieDetail/MovieDetail'

function App() {
  
BrowserRouter
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movie/:id' element={<MovieDetail/>}/>
        </Routes>
        </div>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
