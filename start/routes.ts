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

import Route from '@ioc:Adonis/Core/Route';

Route.post('/predictions', 'PredictionsController.handlePrediction');
Route.get('/', 'RootsController.root').middleware('auth');
Route.post('/login', 'AuthController.login');
Route.post('/logout', 'AuthController.logout');
Route.resource('/users', 'UsersController').apiOnly();

Route.resource('/pois', 'PoisController').only(['index', 'store', 'destroy', 'show']).apiOnly();
Route.get('/pois/:id/:lang', 'PoisController.poi');
Route.resource('/resources', 'ResourcesController')
  .only(['index', 'store', 'destroy', 'show'])
  .apiOnly();
