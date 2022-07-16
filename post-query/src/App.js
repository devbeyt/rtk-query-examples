import React, { useState } from 'react'
import { useAddPostMutation, useGetPostsQuery} from './services/postApi'

function App() {
  const [count,setCount] = useState('')
  const [newPost,setNewPost] = useState('')
  const { data, error, isLoading } = useGetPostsQuery(count)
  const [addPost,{isError}] = useAddPostMutation()

  const addLimit = (e)=>{
      setCount(e.target.value)
  }

  const addPostHandler = async ()=>{
     if(newPost){
        await addPost({title: newPost}).unwrap()
        setNewPost('')
     }
  }

  return (
    <div className="App">

      <div>
        <input type="text" value={newPost} onChange={(e)=>setNewPost(e.target.value)}/>
        <button onClick={addPostHandler}>add Post</button>
      </div>

 <div>
  <select value={count} onChange={addLimit}>
    <option value="">all</option>
    <option value="5">5</option>
    <option value="10">10</option>
    <option value="15">15</option>
  </select>
 </div>

    {error ? (
      <>Oh no, there was an error</>
    ) : isLoading ? (
      <>Loading...</>
    ) : data ? (
      <ul>
      {data.map(post=>{
        return <li >{post.title}</li>
      })}
    </ul>
    ) : null}
  </div>
  )
}

export default App