import express from 'express'

class MyApp {
  express: express.Application

  constructor() {
    this.express = express()
  }

  middlewares() {}

  routes() {}
}

export default new MyApp().express
