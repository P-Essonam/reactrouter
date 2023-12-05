import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
const PostPage = () => {

  const params = useParams();


  return (
    <main>
      postpage maintenant
      <div>{JSON.stringify(params)}</div>
    </main>
  )
}

export default PostPage