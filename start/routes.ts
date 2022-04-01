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

import Database from '@ioc:Adonis/Lucid/Database';
import Route from '@ioc:Adonis/Core/Route';

Route.get('/', async () => {
  return 'Entry point';
});

Route.get('/users', 'UsersController.index');

Route.post('/users', async ({ request }) => {
  await Database.table('users').insert({ name: request.input('name') });
});

Route.delete('/users', async ({ request }) => {
  await Database.from('users').where('id', request.input('id')).delete();
});

// Route.resource('/ressource/users', 'UserController');
