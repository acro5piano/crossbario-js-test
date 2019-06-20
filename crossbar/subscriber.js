const autobahn = require('autobahn')

async function main() {
  const connection = new autobahn.Connection({ url: 'ws://127.0.0.1:41240/ws', realm: 'realm1' })

  connection.onopen = session => {
    session.subscribe('com.myapp.hello', args => {
      console.log('Event:', args[0])
    })

    session.register('com.myapp.add2', function add2(args) {
      return args[0] + args[1]
    })
  }

  await connection.open()
}

main()
