import 'dotenv/config'
import express from 'express'

function bootstrap() {
  const app = express()

  const port = process.env.PORT || 5050
  app.listen(port, () => {
    console.log(`Express server is running on port ${port}`)
  })
}

bootstrap()
