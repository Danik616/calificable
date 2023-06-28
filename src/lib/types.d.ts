import { Type } from '@sinclair/typebox';

export const Name=Type.String({
    errorMessage: {
        type: "El nombre tiene que ser una cadena de texto"
    }
})

export const Surname=Type.String({
    errorMessage: {
        type: "El apellido tiene que ser una cadena de texto"
    }
})

export const Consulting=Type.Number({
    errorMessage: {
        type: "El consultorio tiene que ser un numero"
    }
})

export const Mail=Type.String({
    format: 'email',
    errorMessage: {
        type: "El correo tiene que ser una cadena de texto",
        format: "El correo no tiene el formato deseado xxxxx@xxx.xxx"
    }
})
export const Id=Type.Number({
    errorMessage: {
        type: "La cedula tiene que ser un numero"
    }
})
export const Speciality=Type.Number({
    errorMessage: {
        type: "La especialidad se escoje por su ID"
    }
})
export const Age=Type.Number({
    errorMessage: {
        type: "La edad tiene que ser un numero"
    }
})
export const Tel=Type.Number({
    errorMessage: {
        type: "El telefono tiene que ser un numero"
    }
})

