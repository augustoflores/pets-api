const { server, port } = require('./src/server')

server.listen(port, () => { console.log(`Escuchando en: ${port}`) })
