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

Route.get('/', 'RootsController.root');

// Auth routes
Route.get('/token', 'TokensController.isLoggedIn');
Route.post('/login', 'AuthController.login');
Route.post('/logout', 'AuthController.logout');

// Users routes
Route.group(() => {
  Route.resource('/', 'UsersController').only(['index', 'destroy', 'show']).apiOnly();
  Route.post('/', 'UsersController.store');
}).prefix('/users');

// Points of interest routes
Route.group(() => {
  Route.post('/prediction', 'PoisController.getPrediction');
  Route.get('/previews/:id', 'PoisController.getPreview');
  Route.get('/previews/', 'PoisController.getPreviews');
  Route.get('/:id/:lang', 'PoisController.getPoiData');
}).prefix('/pois');

Route.resource('/pois', 'PoisController').only(['index', 'store', 'destroy', 'show']).apiOnly();

// Resources routes
Route.resource('/resources', 'ResourcesController')
  .only(['index', 'store', 'update', 'destroy', 'show'])
  .apiOnly();

// Tags routes
Route.resource('/tags', 'TagsController').only(['index', 'store', 'destroy', 'show']).apiOnly();
