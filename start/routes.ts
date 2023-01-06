/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/
import Route from '@ioc:Adonis/Core/Route'
import('App/Middleware/Auth')
Route.group(()=>{
    Route.post('/guardarGrupo/:request','GruposController.store')
    Route.put('/guardarMensaje/:request','MongosController.guardarMensajes')
    Route.get('/logout','AuthController.Logout')
    Route.get('/getInfoUser','AuthController.getUser')
    Route.post('/abrirConversacion/:request','MongosController.guardarMongo')
    Route.get('/getMensajes/:id','MongosController.verMensajes')

}).middleware('auth:api')
Route.get('/verGrupos/:request','GruposController.show')
Route.get('/getRol','AuthController.validarrol')
Route.post('/login/:request','AuthController.Login')
Route.post('/storeUser/:request','UsuariosController.store')



