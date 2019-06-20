const NATS = require('nats')
const nats = NATS.connect('nats://127.0.0.1:4222')

// nats.subscribe('foo', msg => {
//   console.log('Received a message: ' + msg)
// })

nats.publish('foo', 'Hello World!')

// Simple Subscriber
nats.subscribe('foo', function(msg) {
  console.log('Received a message: ' + msg)
})
