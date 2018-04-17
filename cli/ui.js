'use strict'

const { h, Component, Text } = require('ink')
const BigText = require('ink-big-text')
const Box = require('ink-box')

class UI extends Component {
  render() {
    return (
			<div>
				<Box>
					<BigText text='Kit' />
				</Box>
				<br />
				<Text>by Compositor</Text>
			</div>
		)
  }
}

module.exports = UI
