
import citaModel from '#Schemas/citaSchema.ts';
import { Request, Response } from 'express';

const citaRegisterController = async(req: Request, res: Response) => {
    const {id_paciente, speciality} =req.body;

    const existingCitaByEmail = await citaModel.findOne({id_paciente, speciality}).exec()
    if (existingCitaByEmail) return res.status(409).send({errors: ["Usted ya tiene una cita programada para esta especialidad"]})
    const doctor: string="dasaf"
    const cita= new citaModel({id_paciente, speciality, doctor})
    await cita.save()

    return res.send('Cita registrada con exito')
}

export default citaRegisterController