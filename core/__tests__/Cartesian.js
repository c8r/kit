import React from 'react';
import styled from 'styled-components';
import { render } from 'react-testing-library';
import { color, space, fontSize } from 'styled-system';

import { Cartesian } from '../src';

const buttonProps = {
  children: 'Hello, world!',
  fontSize: [1, 2, 3],
  px: [2, 3],
  backgroundColor: ['pink', 'tomato', 'purple'],
};

const Button = styled.a`
  ${color}
  ${fontSize}
  ${space}
`;

const Container = styled.div`
  padding: 1rem;
`;

test('Cartesian renders all examples', () => {
  const { container } = render(
    <Cartesian {...buttonProps} component={Button} />,
  );

  expect(container).toMatchSnapshot();
});

test('Cartesian renders all examples in a container', () => {
  const { getByTestId, container } = render(
    <Cartesian
      {...buttonProps}
      component={Button}
      container={() => <Container data-testid="container" />}
    />,
  );

  const containerNode = getByTestId('container');
  expect(containerNode.nodeName).toBe('DIV');
  expect(container).toMatchSnapshot();
});
