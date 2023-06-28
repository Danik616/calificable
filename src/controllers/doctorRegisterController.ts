import doctorModel from '#Schemas/doctorSchema.ts';
import { Request, Response } from 'express';

const doctorRegisterController = async(req: Request, res: Response) => {
    const {name, surname, speciality, email, consulting} =req.body;

    const existingDoctorByEmail = await doctorModel.findOne({email}).exec()
    if (existingDoctorByEmail) return res.status(409).send({errors: ["Este usuario ya existe"]})

    const doctor= new doctorModel({ name, surname, speciality, email, consulting})
    await doctor.save()

    return res.send('Usuario registrado con exito')
}

export default doctorRegisterController