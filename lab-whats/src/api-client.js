
const api = require('./api');

api.send('554497681976', 'HELLO')
    .then((res) => {
        console.log(res)
    })
    .catch((e) => {
        console.log(e)
    })
