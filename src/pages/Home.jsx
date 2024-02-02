import Map from "../components/Map";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import { ContextProvider } from "../context";
import '../styles/home.css';

function Home()
{
    return (
    <ContextProvider>
      <div className="app">
          <Navbar/>
          <div className='container'>
            <Search className='search-container'/>
            <Map className='map-container'/>
            
        </div>
      </div>
    </ContextProvider>
    )
}
export default Home;