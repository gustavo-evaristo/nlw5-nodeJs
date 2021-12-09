import App from './app'
import './websocket/client'

const http = App.http

http.listen(3000, () => console.log('Server is running'))
