import { Router } from 'express'

const router = Router()

router.get('/', (request, response) => {
  response.send(200)
})

export { router }
