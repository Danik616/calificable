
import pacienteModel from '#Schemas/pacienteSchema.ts';
import { Request, Response } from 'express';

const pacienteRegisterController = async(req: Request, res: Response) => {
    const {name, surname, id, age, tel} =req.body;

    const existingPacienteByEmail = await pacienteModel.findOne({id}).exec()
    if (existingPacienteByEmail) return res.status(409).send({errors: ["Este usuario ya existe"]})

    const paciente= new pacienteModel({ name, surname, id, age, tel})
    await paciente.save()

    return res.send('Usuario registrado con exito')
}

export default pacienteRegisterController