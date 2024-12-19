import { initMongoConnection } from "./db/initMongoConnection.js";
import { setupServer } from "./server.js";
//DKMMub9xZz0M9vcp


( async () => {
  await initMongoConnection();
  setupServer();
})();
