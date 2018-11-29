import React from 'react'

import { asyncComponent } from '@jaredpalmer/after'
import NotFound from './NotFound'
import Home from './components/Home'

export default [
  {
    path: '/',
    exact: true,
    component: Home, // required
  },
  {
    path: '/about',
    exact: true,
    component: asyncComponent({
      loader: () => import('./About'), // required
      Placeholder: () => <div>...LOADING...</div> // this is optional, just returns null by default
    })
  },
  {
    path: '**',
    component: NotFound
  }
]
