import React from 'react'

function Profile() {
  return (
    <div>
        <h1>Profile</h1>
        <p>Welcome to my profile page.</p>
        <img src="https://example.com/image.jpg" alt="Profile picture" />
        <button onClick={() => alert('Profile updated!')}>Update Profile</button>
  
    </div>
  )
}

export default Profile