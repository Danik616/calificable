
import pacienteModel from '#Schemas/pacienteSchema.ts';
import { Request, Response } from 'express';

const pacienteRegisterController = async(req: Request, res: Response) => {
    const {name, surname, id, age, tel} =req.body;

    const existingDoctorByEmail = await pacienteModel.findOne({id}).exec()
    if (existingDoctorByEmail) return res.status(409).send({errors: ["Este usuario ya existe"]})

    const doctor= new pacienteModel({ name, surname, id, age, tel})
    await doctor.save()

    return res.send('Usuario registrado con exito')
}

export default pacienteRegisterController