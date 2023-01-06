// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from "@ioc:Adonis/Lucid/Database"
import Mensaje from "App/Models/Mensaje"
import mongoose from "mongoose"
export default class MongosController
{
    public async guardarMensajes({request,response})
    {
        await mongoose.connect('mongodb+srv://AngelVargas2003:Angel2003@basesdedatosenlanube.fsnez.mongodb.net/Mensajes?retryWrites=true&w=majority')
        const id=request.input('id_grupo')
        const mensaje=request.input('mensaje')
        response= await Mensaje.MensajesModelo.updateOne({"id_grupo":Number(id)},{$push:{"mensajes":mensaje}})
        return response
      }
    public async guardarMongo({request,response})
    {
        await mongoose.connect('mongodb+srv://AngelVargas2003:Angel2003@basesdedatosenlanube.fsnez.mongodb.net/Mensajes?retryWrites=true&w=majority')
        const id=request.input('id_grupo')
        const comentarios=request.input('mensaje')
        console.log(id)
        const crear=new Mensaje.MensajesModelo({"id_grupo":id,"mensajes":[comentarios]})
        crear.save()
        return response.json(crear)
    }
    public async verMensajes({params,response})
    {
        await mongoose.connect('mongodb+srv://AngelVargas2003:Angel2003@basesdedatosenlanube.fsnez.mongodb.net/Mensajes?retryWrites=true&w=majority')
        response=await Mensaje.MensajesModelo.find({"id_grupo":params.id})
        return response
    }

}
