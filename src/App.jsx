import React, { useEffect, useState } from 'react'
import Users from './components/Users.jsx';
import Post from './components/Post.jsx';

let API_Url = "https://jsonplaceholder.typicode.com"

const App = () => {

  let [users , setUseres] = useState([])
  let [posts, setPosts] = useState([]);

  let option = {
    method: 'GET',
    headers: {
      'Content-Type' : "application/json"
    }
  }
  

  const fetchData = async (router, query) => {
    try {

      let URL = query 
      ? `${API_Url}/${router}?${query}`
      : `${API_Url}/${router}`

      const res = await fetch(URL, option);
      if(!res.ok) throw new Error(`HTTP ${res.status}`)

      let data = await res.json();
      

      if(router === "users") setUseres(data);
      if(router === "posts") setPosts(data);


    }catch(e) {
      console.error('Filed fetch data', e)
    }
  }


  useEffect(() => {
     fetchData('users')
  }, [])


  const handlClick = (user) => {
     fetchData('posts', `userId=${user.id}`)
  }



  return (
    <div className='container'>

      <div className='users_content'>
      <ul>

        { 
          users.map(user => (
            <Users 
            key={user.id} 
            user={user}

            onClick={() => handlClick(user)}
            
            />
          ))
        }

      </ul>
      </div>
      <div className='posts_content'>
        <ul>

          {
            posts.map(post => (
              <Post key={post.id} post={post}/>
            ))
            
          }
        </ul>
      </div>

    </div>
  )
}

export default App
