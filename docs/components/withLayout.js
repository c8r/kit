import React from 'react'
import { Logo, Kit } from '@compositor/logo'
import { Provider, BlockLink, Flex, Heading, Caps } from 'rebass'

const CSS = ({ css }) => <style dangerouslySetInnerHTML={{ __html: css }} />

CSS.defaultProps = {
  css: '*{box-sizing:border-box}body{margin:0}'
}

export default Component => props => (
  <React.Fragment>
    <head>
      <meta charSet="utf-8" />
      <title>Compositor Kit</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <CSS />
      <meta
        name="description"
        content="Tools for developing, documenting, and testing React component libraries"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@getcompositor" />
      <meta name="twitter:title" content="Compositor Kit" />
      <meta
        name="twitter:description"
        content="Tools for developing, documenting, and testing React component libraries"
      />
      <meta
        name="twitter:image"
        content="https://compositor.io/logo/dist/kit.png"
      />
    </head>
    <Provider>
      <BlockLink mt={3} mb={3} href="https://compositor.io">
        <Flex px={[3, 4, 5]} alignItems="center">
          <Logo size={32} />
          <Heading>
            <Caps fontSize={10}>Compositor</Caps>
          </Heading>
        </Flex>
      </BlockLink>
      <Component {...props} />
    </Provider>
  </React.Fragment>
)
