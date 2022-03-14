import {createServer, ViteDevServer} from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'

let server: ViteDevServer

export default async function startServer() {

  server = await createServer({
    configFile: false,
    root: '/Users/mac/Desktop/pro/yueer-ui/packages/site',
    server: {
      port: 5000,
      host: '0.0.0.0'
    },
    plugins: [
      vue(),
      jsx()
    ]
  })  
  await server.listen()
  server.printUrls()
}