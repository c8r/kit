import React from 'react'
import { Toolbar, NavLink } from 'rebass'

export default () => (
  <Toolbar bg='gray9'>
    <NavLink>
      Compositor Kit
    </NavLink>
    <NavLink ml='auto'>
      Beep
    </NavLink>
    <NavLink>
      Boop
    </NavLink>
  </Toolbar>
)
