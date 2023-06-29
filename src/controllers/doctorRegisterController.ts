import doctorModel from '#Schemas/doctorSchema.ts';
import specialistModel from '#Schemas/specialistSchema.ts';
import { Request, Response } from 'express';

const doctorRegisterController = async(req: Request, res: Response) => {
    const {name, surname, speciality, email, consulting} =req.body;

    const existingSpeciality = await specialistModel.findOne({_id:speciality}).exec()
    if (!existingSpeciality) return res.status(403).send({errors: ["Especialidad no existente"]})

    const existingDoctorByEmail = await doctorModel.findOne({email}).exec()
    if (existingDoctorByEmail) return res.status(409).send({errors: ["Correo ya usado"]})

    const existingDoctor = await doctorModel.findOne({name, surname, speciality, consulting}).exec()
    if (existingDoctor) return res.status(409).send({errors: ["Este usuario ya existe"]})

    const doctor= new doctorModel({ name, surname, speciality, email, consulting})
    await doctor.save()

    return res.send('Usuario registrado con exito')
}

export default doctorRegisterController