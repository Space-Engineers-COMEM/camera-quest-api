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

Route.get('/', 'RootsController.root').middleware('auth');

// Users routes
Route.resource('/users', 'UsersController').only(['index', 'destroy', 'show']).apiOnly();
Route.post('/users', 'UsersController.store');

// Points of interest routes
Route.post('/pois/prediction', 'PoisController.getPrediction');
Route.get('/pois/previews/:id', 'PoisController.getPreview');
Route.get('/pois/previews/', 'PoisController.getPreviews');
Route.get('/pois/:id/:lang', 'PoisController.getPoiData');

Route.resource('/pois', 'PoisController').only(['index', 'store', 'destroy', 'show']).apiOnly();

// Resources routes
Route.resource('/resources', 'ResourcesController')
  .only(['index', 'store', 'destroy', 'show'])
  .apiOnly();

// Auth routes
Route.get('/token', 'TokensController.isLoggedIn');
Route.post('/login', 'AuthController.login');
Route.post('/logout', 'AuthController.logout');
