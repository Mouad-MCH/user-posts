import React from 'react'
import Users from './components/Users.jsx';
import Post from './components/Post.jsx';

const App = () => {
  return (
    <div className='container'>

      <div className='users_content'>
      <ul>
        {Array.from({ length: 10 }, (_, i) => (
          <Users key={i} num={i}/>
        ))}
      </ul>
      </div>
      <div className='posts_content'>
        <ul>
          {
            Array.from({ length: 20 }, (_, i) => (
              <Post key={i} num={i}/>
            ))
          }
        </ul>
      </div>

    </div>
  )
}

export default App
