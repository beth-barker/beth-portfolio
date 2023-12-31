
import './App.css';
import Header from './Header.js'
import Footer from './Footer'
import Resume from './Resume.js'
import Work from './Work.js'
import Home from './Home.js'
import { Route, Routes, Navigate} from 'react-router-dom'

function App() {
  return (
    <div className="App font-body flex flex-col bg-leaf bg-center bg-cover w-screen text-lig">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/resume' element={<Resume/>}/>
      </Routes>
    <div className='mt-auto'>
      <Footer />
    </div>
    </div>
  );
}

export default App;
