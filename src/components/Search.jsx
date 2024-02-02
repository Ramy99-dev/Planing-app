import { useQuery } from 'react-query';
import { useContext, useEffect, useState } from 'react';
import ReactSwitch from 'react-switch';
import '../styles/search.css';
import { Context } from '../context';

const fetchData = async (search) => {
  const response = await fetch(`/api&name_sf=${search}`)
  let data = await response.json()
  return data.locations;
};

function Search()
{
  const { setLocation } = useContext(Context);

  const [search, setSearch] = useState('someText');
  const [start, setStart] = useState('');
  const [checked, setChecked] = useState(true);
  let word = "";
  const { data, isLoading, isError ,refetch ,isFetching } = useQuery('QueryKey', () => fetchData(search),);
    
  useEffect(()=>{
    refetch();
  },[search, refetch])

  const handleChange = val => {
    setChecked(val)
  }
  
  return (
    <div >
      <div className="search">
       <input value={start} type="text" onChange={(e)=>{
           setStart(e.target.value)
           word = e.target.value
       }} name="" id="" />
       <input onClick={()=>{
          setSearch(start)
       }} type="button" value="Search" name="Search" id="" />
       </div>
       { isFetching ? <p></p> : isError ?   <p>Error fetching data</p> :
       <div className="suggestions">
       <ul>
         {data.map((location)=>{
           return (<li key={location.id}  onClick={(e)=>{
                setStart(location.name)
                setLocation(location.coord)
               
           }}>{location.name}</li>)
         })}
       </ul>
     </div> 
    
     }
      <div className='details'>
        <button onClick={()=>{
          setStart('')
          setLocation([59.51261, 13.54858])
        }} className='cancelBtn'>Cancel</button>
        <button className='requestBtn'>Request</button>
      </div>
      <div className='box'>
          <h3>Tarifcheck</h3>
          <div className="row">
            <p>If you want to take your existing tickets into account, activate the slider.</p>
            <ReactSwitch 
            uncheckedIcon={false}
            checkedIcon={false}
            checked={checked}
            onChange={handleChange}
          />
          </div>
      </div>  
    </div>
  );
}

export default Search;
