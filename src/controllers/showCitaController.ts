
import citaModel from '#Schemas/citaSchema.ts';
import doctorModel from '#Schemas/doctorSchema.ts';
import pacienteModel from '#Schemas/pacienteSchema.ts';
import specialistModel from '#Schemas/specialistSchema.ts';
import { Request, Response } from 'express';

const showCitaController = async(_req: Request, res: Response) => {
    
    const existingCitas = await citaModel.find().exec()
    
    let lista=await Promise.all(existingCitas.map(async cita => {
        const existingSpeciality = await specialistModel.findById(cita.speciality).exec()
        const nombre_especialidad= existingSpeciality?.name
        const id_paciente=cita.id_paciente
        const existingPaciente = await pacienteModel.findOne({id:id_paciente}).exec()
        const nombrePaciente=existingPaciente?.name
        const mail_doctor=cita.doctor
        const existingDoctor = await doctorModel.findOne({email: mail_doctor}).exec()
        const nombre_doctor=existingDoctor?.name

        const objeto= {paciente: nombrePaciente, id_paciente: id_paciente, especialidad: nombre_especialidad, nombre_doctor: nombre_doctor, mail_doctor: mail_doctor}
        return objeto
    }))
    return res.send({citas_registradas: lista})
}

export default showCitaController