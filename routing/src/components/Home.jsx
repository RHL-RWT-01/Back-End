import React from 'react'
import Nav from './Nav'
function Home() {
  return (
    <>

     <h1>Welcome to My Website</h1>
     <Nav/>
     <div style={{textAlign: 'center'
        , marginTop: '100px'
        , marginBottom: '100px'
        , backgroundColor: '#f8f9fa'
        , padding: '20px'
        , borderRadius: '10px'
        , boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
        , width: '50%'
        , margin: 'auto'
     }}>
        <h1>Home</h1>
        <p>Welcome to the Home Page</p>
        <p style={{color:'black'
            , fontSize: '16px'
            , marginTop: '10px'
            ,backgroundColor:'white'
        }}>Here you can find information about the website</p>
        <img src="https://t4.ftcdn.net/jpg/05/23/88/59/240_F_523885906_HOwhqK2pavrRM8G0ffqnb4UbJirnkhdj.jpg"
        style={{width: '100%', height: 'auto', marginTop: '20px'}} alt="Home"
        ></img>
        
     </div>
    </>
  )
}

export default Home