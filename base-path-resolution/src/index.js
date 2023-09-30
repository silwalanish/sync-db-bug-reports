const path = require('path');
const { synchronize, loadConfig, resolveConnections } = require('@leapfrogtechnology/sync-db');

(async () => {
  const config = await loadConfig(path.join(process.cwd(), './src/sync-db.yml')); // Load sync-db.yml
  const connections = await resolveConnections(); // Load connections.sync-db.json

  // Uncommenting the following line makes it work as normal
  // process.chdir("src");

  // Invoke the command.
  await synchronize(config, connections);
})();
