import httpServer from "#Config/http.ts"
import '#Config/env.ts'
import connectDB from "#Config/db.ts"

const bootstrap= async ()=>{

    await connectDB(String(process.env.MONGODB_URL))

    httpServer.listen(process.env.PORT, () =>{
        console.log(`Servidor escuchando en el puerto ${process.env.PORT}`)
    })
}

bootstrap()

