
import { useState } from 'react';
import './App.css'
import { Cart } from './component/Cart'
import { data } from './util/data';
import {Footer} from './component/Footer'
function App() {

  const [val, setval] = useState('');
  const [filterdata,setfilterdata]=useState(data)
  function searchFilter() {
    let rs = data.filter((item) => item.title.toLowerCase().includes(val.toLowerCase()))
    setfilterdata(rs)
  }

  return (
    
    <div className=" lg:flex flex-col items-center  ">
      <div className='sticky top-0 bg-[#edeae5]  w-full '>
        <h1 className="w-full h-8 text-[15px] text-center"  > do  search something intreasting </h1>
        <div className="text-center">
          <input type='text' placeholder='search any thing' onChange={(e) => setval(e.target.value)}
            className='w-[250px] mb-5 border-b-4 h-11 rounded-l-xl pl-4 '
          />
          <button onClick={searchFilter} className='h-11 rounded  -r-xl bg-[#4776D5] w-20'>search</button>
        </div>
      </div>
      {(filterdata.length) <= 0 ? <h1>no item</h1> : <Cart data={filterdata} />}
      
      <Footer />

    </div>
   )
}

export default App
