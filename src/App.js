import './App.css';
import {Routes, Route, NavLink} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ProgrammingQuotes from './Pages/ProgrammingQuotes';

function App() {
  return (
    <div className="App">
      <header>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/programming'>Programming</NavLink>
      </header>

      <Routes>
        <Route path='/' element={ <Homepage /> } />
        <Route path='/programming' element={ <ProgrammingQuotes />} />
        <Route path='*' />
      </Routes>
    </div>
  );
}

export default App;
