import userRouter from "#Routes/generalRoutes.ts";
import express from 'express'
const app = express()
app.use(express.json())
app.use("/",userRouter)

export default app
