import express from 'express'
import render from './index.fab'

const server = express()
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {
    try {
      const html = await render(req, res, { customThing: 'thing' })
      res.send(html)
    } catch (error) {
      console.log(error)
      res.json(error)
    }
  })

export default server
