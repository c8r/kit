import React from 'react'

export default ({ children }) =>
  <style
    dangerouslySetInnerHTML={{
      __html: children
    }}
  />
