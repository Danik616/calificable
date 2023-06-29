import doctorModel from '#Schemas/doctorSchema.ts';

import { Request, Response } from 'express';

const showDoctorController = async(_req: Request, res: Response) => {
    const existingDoctors = await doctorModel.find().exec()

    return res.status(200).send({doctores_actuales: existingDoctors})
}

export default showDoctorController