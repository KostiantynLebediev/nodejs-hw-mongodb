import { setupServer } from './server.js';
import { initMongoConnection } from '../src/db/initMongoConnection.js';

const bootstrap = async () => {
  await initMongoConnection();
  setupServer();
};

bootstrap();
//DKMMub9xZz0M9vcp



