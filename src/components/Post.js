import React,{useEffect,useState} from 'react'
import './Post.css'
import { useDispatch ,useSelector } from 'react-redux'
import {fetchData, postDatas} from "../redux/actions/index"

export default function Post() {
  const [status, setStatus] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");


  const dispatch = useDispatch();
  const postData = useSelector((state)=>state.postlist.postData)

 const handleAdd = (e)=>{
   e.preventDefault()
    setStatus(true)

    let payload={
      title:title,
      body:desc
    }
    // console.log(payload,"payload");
    dispatch(postDatas(payload))
    setTitle("")
    setDesc("")
  } 


 const handleClear = (e)=>{
  e.preventDefault()

  setStatus(false)
  setTitle("")
  setDesc("")
  
 }


  useEffect(()=>{
    dispatch(fetchData())

   
  },[dispatch])

  return (
    <>
    <h1>POST</h1>

    <form className="container">
        {status ? (
          <>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
            />
            <br />
            <input
              type="text"
              name="body"
              placeholder="body"
              value={desc}
              onChange={(e)=>setDesc(e.target.value)}
            />
            <br />
          </>
        ) : null}
        <button onClick={handleAdd}>add</button>
        <button onClick={handleClear}>clear</button>
      </form>
    
    {postData.map((el, ky) => {
        return (
          <React.Fragment key={ky}>
            <h2>{el.title}</h2>
            <p>{el.body}</p>
          </React.Fragment>
        );
      })}
    </>
  )
}
