import {createServer, ViteDevServer} from 'vite'

let server: ViteDevServer

export default async function startServer() {

  server = await createServer({
    configFile: false,
    root: '/Users/mac/Desktop/pro/yueer-ui/packages/site',
    server: {
      port: 5000,
      host: '0.0.0.0'
    }
  })  
  await server.listen()
  server.printUrls()
}