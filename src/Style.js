import React from 'react'

export default ({ children }) => {
  console.log(children)
  return (
  <style
    dangerouslySetInnerHTML={{
      __html: children
    }}
  />
)}
