import './App.css';
import {Routes, Route, NavLink} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ProgrammingQuotes from './Pages/ProgrammingQuotes';
import FamousQuotes from './Pages/FamousQuotes';

function App() {
  return (
    <div className="App">
      <header>
        <NavLink to='/' className='nav-link'>Home</NavLink>
        <NavLink to='/programming' className='nav-link'>Programming</NavLink>
        <NavLink to='/famous' className='nav-link'>Famous</NavLink>
      </header>

      <Routes>
        <Route path='/' element={ <Homepage /> } />
        <Route path='/programming' element={ <ProgrammingQuotes />} />
        <Route path='/famous' element={ <FamousQuotes />} />
        <Route path='*' />
      </Routes>
    </div>
  );
}

export default App;
