import { Socket } from 'socket.io'
import App from '../app'

const io = App.io

io.on('connect', (socket:Socket) => {
  console.log('conneted', socket.id)
  socket.on('client_first_access', params => { console.log(params) })
})
