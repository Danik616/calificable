import httpServer from "#Config/http.ts"
import '#Config/env.ts'

const bootstrap= async ()=>{

    httpServer.listen(process.env.PORT, () =>{
        console.log(`Servidor escuchando en el puerto ${process.env.PORT}`)
    })
}

bootstrap()

