import citaRegisterController from '#Controllers/citaRegisterController.ts'
import doctorRegisterController from '#Controllers/doctorRegisterController.ts'
import pacienteRegisterController from '#Controllers/pacienteRegisterController.ts'
import showCitaController from '#Controllers/showCitaController.ts'
import showDoctorController from '#Controllers/showDoctorController.ts'
import showPacienteController from '#Controllers/showPacientesController.ts'
import citaRegisterDTO from '#Dto/citaRegister.dto.ts'
import doctorRegisterDTO from '#Dto/doctorRegister.dto.ts'
import pacienteRegisterDTO from '#Dto/pacienteRegister.dto.ts'
import { Router } from 'express'

const userRouter= Router()



userRouter.post('/register-doctor', doctorRegisterDTO, doctorRegisterController)
userRouter.post('/register-paciente', pacienteRegisterDTO, pacienteRegisterController)
userRouter.post('/register-cita', citaRegisterDTO, citaRegisterController)
userRouter.get('/get-pacientes', showPacienteController)
userRouter.get('/get-doctores', showDoctorController)
userRouter.get('/get-citas', showCitaController)

export default userRouter