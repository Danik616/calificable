
import pacienteModel from '#Schemas/pacienteSchema.ts';
import { Request, Response } from 'express';

const showPacienteController = async(_req: Request, res: Response) => {
    const existingPaciente = await pacienteModel.find().exec()
    return res.status(200).send({pacientes_registrados: existingPaciente})
}

export default showPacienteController