import React from 'react'
import code from './CodeBlock'

const cleanID = str => str.replace('user-content-', '')

export const heading = Comp => props => {
  return (
    <Comp {...props}
      id={cleanID(props.id)}>
      <a href={'#' + cleanID(props.id)}
        style={{
          color: 'inherit',
          textDecoration: 'none'
        }}>
        {props.children}
      </a>
    </Comp>
  )
}

export const relativize = href => /\.md$/.test(href) ? href.replace(/\.md$/, '/') : href

export const link = Comp => props => (
  <Comp {...props} href={relativize(props.href)} />
)

export default {
  // code,
  pre: code,
  link: link('a'),
  h1: heading('h1'),
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),
}
