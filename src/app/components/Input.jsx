import React from 'react'

const Input = ({richText, ...props}) => {
  return (
      <>
      { 
      richText ?  <textarea {...props} /> : <input {...props} type="text" />   
      }
      </> 
  )
}

export default Input