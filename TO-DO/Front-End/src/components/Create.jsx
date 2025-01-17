import React from 'react'

function Create() {
  const [title, setTitle] =useState('');
  const [description, setDescription] =useState('');

  return (
    <>
    <input style={{
        padding:15,
        margin:12
    }} type="text" placeholder="title" />
    <br/>
    <br/>
    <input style={{
        padding:15,
        margin:12
    }}
     type="text" placeholder="description" />
    <br/>
    <br/>
    <button style={{
        backgroundColor:'purple',
        color:'white',
        borderRadius:15,
        border:0,
        width:'10%',
        cursor:'pointer',
        padding:15,
        margin:20
    }} >Add Todo</button>

    </>
  )
}

export default Create