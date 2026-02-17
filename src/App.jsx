import React from 'react'
import Users from './components/Users.jsx'

const App = () => {
  return (
    <div className='container'>

      <div className='users_content'>
      <ul>
        {Array.from({ length: 10 }, (_, i) => (
          <Users key={i} />
        ))}
      </ul>
      </div>
      <div className='posts_content'></div>

    </div>
  )
}

export default App
