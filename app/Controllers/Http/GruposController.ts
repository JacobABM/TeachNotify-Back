// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from "@ioc:Adonis/Lucid/Database"
import Grupo from "App/Models/Grupo"
import User from "App/Models/User"
export default class GruposController
{
     public async show({response})
     {
          const grupo=await Database
          .query()
          .from('grupos')
          .select('grupos.id')
          .select('grupos.Nombre as Nombre')
          console.log(grupo)
          return response.json(grupo)
     }
     public async store({auth,request,response})
     {
          const grupo=new Grupo()
          const Nombre_Grupo=request.input('Nombre_Grupo')
          try{
              await auth.use('api').authenticate()
              grupo.Nombre=Nombre_Grupo
              await grupo.save()
          }
          catch{
            return response.badRequest('No tienes permisos')
          }
     }

}
