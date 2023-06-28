import { Name, Surname, Id, Age, Tel } from '#Lib/types.ts'
import { Type } from '@sinclair/typebox'
import { Request, Response, NextFunction } from 'express';
import Ajv from 'ajv'
import addErrors from 'ajv-errors'


const registerPacienteSchema= Type.Object({
    name: Name,
    surname:Surname,
    id: Id,
    age: Age,
    tel: Tel
},{
    additionalProperties: false,
    errorMessage: {
        additionalProperties: 'El formato del objeto no es válido'
    }
})

const ajv= new Ajv({allErrors: true}).addKeyword('kind').addKeyword('modifier')
addErrors(ajv)

const validateSchema= ajv.compile(registerPacienteSchema)

const pacienteRegisterDTO= (req: Request, res: Response, next: NextFunction) => {
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

export default pacienteRegisterDTO