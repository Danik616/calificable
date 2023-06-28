import { Router } from 'express'

const userRouter= Router()



userRouter.get('/ping', (_req, res) => {

    console.log('logrado')
    res.send('pong')
  })

export default userRouter