import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import Create from "./components/Create"
import Edit from "./components/Edit"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App(){
  let [data,setData] = useState([
{
  name:"Ajith",
  username:"ajith123",
  email:"ajith123@gmail.com",
  mobile:"0123456789",
  batch:"B100",
},
{
  name:"Kumar",
  username:"kumar123",
  email:"kumar123@gmail.com",
  mobile:"9876543210",
  batch:"B500",
}
])
  return <>
  <div id='wrapper'>
    <BrowserRouter>
    <Sidebar/>
    <Routes>
   <Route path='/dashboard' element={<Dashboard data={data}/>}/>
   <Route path='/create' element={<Create/>}/>
   <Route path='/edit' element={<Edit/>}/>
   </Routes>
   </BrowserRouter>
  </div>
  
  </>
  
}

export default App