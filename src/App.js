import { useEffect, useState } from 'react';

import axios from 'axios'
import { TableCoins } from './components/TableCoins';

function App() {  

  const [ coins , setCoins ] = useState([])
  const [search , setSearch] = useState('')

  const loadCoins = async() =>{
    const result = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    setCoins(result.data)
  }

  const handleSearch = (e) =>{
    setSearch(e.target.value)
  }
  useEffect(()=>{
    loadCoins()
  } , [])

  return (
    <div className="container">
     <div className="row">
      <input onChange={handleSearch} type="text" className='text-white form-controlb bg-dark p-2 mt-3 border-0' placeholder='Search a coin anunaki:' />
    <TableCoins coins = {coins} search={search} />
     </div>
    </div>
  );
}

export default App;
