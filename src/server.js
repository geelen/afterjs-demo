import { render } from '@jaredpalmer/after'
import routes from './routes'
import MockRes from 'mock-res'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

export default async req => {
  const res = new MockRes()
  const html = await render({
    req,
    res,
    routes,
    assets,
    // Anything else you add here will be made available
    // within getInitialProps(ctx)
    // e.g a redux store...
    customThing: 'thing'
  })

  return html
}
