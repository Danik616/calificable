import {Id, Speciality} from '#Lib/types.ts'
import { Type } from '@sinclair/typebox'
import { Request, Response, NextFunction } from 'express';
import Ajv from 'ajv'
import addErrors from 'ajv-errors'
import addFormats from 'ajv-formats'


const registerCitaSchema= Type.Object({
    id_paciente: Id,
    speciality: Speciality
},{
    additionalProperties: false,
    errorMessage: {
        additionalProperties: 'El formato del objeto no es válido'
    }
})

const ajv= new Ajv({allErrors: true}).addKeyword('kind').addKeyword('modifier')
addFormats(ajv, ['email'])
addErrors(ajv)

const validateSchema= ajv.compile(registerCitaSchema)

const citaRegisterDTO= (req: Request, res: Response, next: NextFunction) => {
    const isDTOValid = validateSchema(req.body)

    if(!isDTOValid) 
    return res
        .status(400)
        .send({
            errors: validateSchema.errors?.map(error => error.message) || undefined
        })
     
    next()

    return
}

export default citaRegisterDTO