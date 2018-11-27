const render = require('./server').default;

const port = process.env.PORT || 3000;

render({
  url: '/',
  method: 'GET',
  headers: {
    host: 'localhost:3000',
    'user-agent': 'curl/7.54.0',
    accept: '*/*'
  }
}).then(response => {
  console.log("GOT RESPONSE")
  console.log(response)
})
