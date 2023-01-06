import {Schema,model} from 'mongoose'
export default class Mensaje {
  static mensajes=new Schema({
      id_grupo:Number,
      mensajes:Array
  },{
    versionKey:false
  })
  static MensajesModelo:any=model('Mensajes',this.mensajes)


}
