const NATS = require('nats')
const nats = NATS.connect('nats://127.0.0.1:4222')

async function main() {
  nats.publish('foo', 'Hello World!')
  setTimeout(() => {
    nats.close()
  }, 5)
}

main()
