import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (_req, res) => {
  const user = await User.create({
    name: 'Wolfang Amadeus Mozart',
    email: 'wolfmozart@music.com',
    password_hash: '1231231231',
  });
  res.json(user);
});

export default routes;
