import fastify from 'fastify';

import { UserPreference } from 'ets2-dashboard-core/dist/configuration/user-preference/user-preference.type.js';

import configApplication from 'ets2-dashboard-server-lib/src/config/config.json' assert { type: "json" };
import { toUserPreferencesCollection } from 'ets2-dashboard-server-lib/src/user-preference/transformer.js';

const server = fastify();

server.get('/ping', async () => {
  return 'pong++';
});

server.get('/user-preferences', async (): Promise<UserPreference[]> => {
  return toUserPreferencesCollection(configApplication).toJson();
});

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
