import Nav from './Components/Navbar/Nav';
import Home from './Components/Home/Home';
import Category from './Components/Category/Category';
import Destination from './Components/Destination/Destination';
import Guide from './Components/Guide/Guide';

function App() {
  return (
    <div className='container mx-auto'>
      <Nav/>
      <Home/>
      <Category/>
      <Destination/>
      <Guide/>
      
    </div>
  );
}

export default App;
