const app = require('./src/app')

const port = 9005

app.listen(port, () => console.log('app listen in port: ' + port))