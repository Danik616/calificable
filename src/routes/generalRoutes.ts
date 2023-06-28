import doctorRegisterController from '#Controllers/doctorRegisterController.ts'
import doctorRegisterDTO from '#Dto/doctorRegister.dto.ts'
import { Router } from 'express'

const userRouter= Router()



userRouter.post('/register-doctor', doctorRegisterDTO, doctorRegisterController)

export default userRouter