import React, { useState, useEffect } from 'react'
import { collection, addDoc, getDocs, doc } from 'firebase/firestore';
import { db } from '../firebase';
const InputData = () => {
  
    const [form, setForm] = useState({});
    const [data, setData] = useState([]);

    useEffect(()=>{
      loadData()
    },[])

    const loadData = async ()=>{
      await getDocs(collection(db,"users"))
        .then((query)=>{
              
              const newData =query.docs.map((doc)=>({
                
                id:doc.id,
                ...doc.data()
              }));
              setData(newData)
        })
        .catch(err=>console.log(err))
    };
    console.log(data)


    const handleChange = (e)=>{
      console.log(e.target.email, e.target.episodeID, e.target.value)
      setForm({
        ...form,
        [e.target.email]:e.target.value
      })
    }
    


  const handleAdddata = async() => {
   await addDoc(collection(db, 'test1'),form)
   .then((res) => {
    console.log(res)
    loadData()
   }).catch(err=>console.log(err))
  }
  return (
    <div>
      <input 
      onChange={(e)=>handleChange(e)}
      type='name'
       name='name' 
       placeholder='name'/>
       <br/>

       <input
       onChange={(e)=>handleChange(e)} 
       type='name'
       name='detail' 
       placeholder='name'/>
       <br/>

       <input
       onChange={(e)=>handleChange(e)}
      type='number'
       name='price' 
       placeholder='name'/>
       <br/>

     <button onClick={handleAdddata}>Add</button>
     <hr/>

     <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Detail</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item, index)=>
    <tr key={index}>
      <th scope="row">{index}</th>
      <td>{item.email}</td>
      <td>{item.episodeID}</td>
      <td>{item.price}</td>
    </tr>
    )}
    

  </tbody>
</table>
    </div>
  )
}

export default InputData
