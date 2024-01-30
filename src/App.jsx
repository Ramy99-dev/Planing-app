import logo from './logo.svg';
import './App.css';

import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';

const fetchData = async (search) => {
  console.log(search)
  const response = await fetch(`/api&name_sf=${search}`)
  let data = await response.json()
  console.log(data.locations)
  return data.locations;
};


function App() {
  const [search, setSearch] = useState('k');
  let word = "";
  const { data, isLoading, isError ,refetch ,isFetching } = useQuery('exampleQueryKey', () => fetchData(search),);
    
  useEffect(()=>{
    refetch();
    
    console.log(isLoading)
  },[search, refetch])
  
  


  return (
    <div className="App">
      <div className="search">
       <input type="text" onChange={(e)=>{
           word = e.target.value
       }} name="" id="" />
       <input onClick={()=>{
          setSearch(word)
       }} type="button" value="Search" name="Search" id="" />
       </div>
       {isLoading || isFetching ? <p>Loading...</p> : isError ?   <p>Error fetching data</p> :
       <div className="suggestions">
       <ul>
         {data.map((location)=>{
           return (<li>{location.name}</li>)
         })}
       </ul>
    </div>  }
       
    </div>
  );
}

export default App;
