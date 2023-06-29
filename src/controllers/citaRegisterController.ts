
import citaModel from '#Schemas/citaSchema.ts';
import doctorModel from '#Schemas/doctorSchema.ts';
import pacienteModel from '#Schemas/pacienteSchema.ts';
import specialistModel from '#Schemas/specialistSchema.ts';
import { Request, Response } from 'express';

const citaRegisterController = async(req: Request, res: Response) => {
    const {id_paciente, speciality} =req.body;

    const existingPacienteByEmail = await pacienteModel.findOne({id:id_paciente}).exec()
    if (!existingPacienteByEmail) return res.status(409).send({errors: ["Usuario no registrado aun"]})

    const existingSpeciality = await specialistModel.findOne({_id:speciality}).exec()
    if (!existingSpeciality) return res.status(403).send({errors: ["Especialidad no existente"]})

    const existingCitaByEmail = await citaModel.findOne({id_paciente, speciality}).exec()
    if (existingCitaByEmail) return res.status(409).send({errors: ["Usted ya tiene una cita programada para esta especialidad"]})
    
    const existingDoctor = await doctorModel.find({speciality}).exec()
    if(existingDoctor.length===0) return res.status(403).send({errors: ["Sin doctor disponible"]})
    
    const ids:number= existingDoctor.length
    const indiceAleatorio:number = Math.floor(Math.random() * ids)

    const doctor= existingDoctor[indiceAleatorio]

    
    const nombre_doctor: string | undefined= doctor.name
    const mail: string | undefined= doctor.email

    const cita= new citaModel({id_paciente, speciality, doctor:mail})
    await cita.save()

    return res.send({status: "Cita registrada correctamente", info: `Cita registrada con el doctor: ${nombre_doctor}, comuniquese al correo ${mail}`})
}

export default citaRegisterController