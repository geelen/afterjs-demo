import { render } from '@jaredpalmer/after'
import routes from './routes'
import Document from './Document'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

export default async (req, res, settings) => {
  // Add headers here, or use ctx.res.setHeader inside getInitialProps
  res.setHeader('Content-Type', 'text/html')
  res.setHeader('Cache-Control', 'public, max-age=0')

  // Default settings, overridden by settings above.
  const production_settings = {
    world_name: 'World!'
  }

  return await render({
    req,
    res,
    routes,
    assets,
    document: Document,
    // Anything else you add here will be made available
    // within getInitialProps(ctx)
    // e.g a redux store...
    server_time: new Date().toString(),
    ...production_settings,
    ...settings
  })
}
