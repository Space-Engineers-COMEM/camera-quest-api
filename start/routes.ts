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

// Auth routes
Route.get('/token', 'TokensController.isLoggedIn');
Route.post('/login', 'AuthController.login');
Route.post('/logout', 'AuthController.logout');

// Points of interest routes
Route.group(() => {
  Route.post('/prediction', 'PoisController.getPrediction');
  Route.get('/:id/:lang', 'PoisController.getPoiData');
}).prefix('/pois');

Route.resource('/pois', 'PoisController')
  .only(['index', 'store', 'update', 'destroy', 'show'])
  .apiOnly();

// Users routes
Route.group(() => {
  Route.resource('/', 'UsersController').only(['index', 'destroy', 'show']).apiOnly();
  Route.post('/', 'UsersController.store');
}).prefix('/users');

// Resources routes
Route.resource('/resources', 'ResourcesController')
  .only(['index', 'store', 'update', 'destroy', 'show'])
  .apiOnly();

// Tags routes
Route.resource('/tags', 'TagsController')
  .only(['index', 'store', 'update', 'destroy', 'show'])
  .apiOnly();

// Languages routes
Route.resource('/languages', 'LanguagesController')
  .only(['index', 'store', 'update', 'destroy', 'show'])
  .apiOnly();

// Translations routes
Route.resource('/translations', 'TranslationsController')
  .only(['index', 'store', 'update', 'destroy', 'show'])
  .apiOnly();

// /!\ DEBUG /!\ À SUPPRIMER AVANT DEPLOY /!\
Route.post('/pois/prediction/debug', 'PoisController.getPredictionDebug');

Route.get('*', () => {
  return 'Toutes les routes mènent à Denis, mais pas celle-ci !';
});
