import http from 'http';

import app from './server';

export default () => {
  const server = http.createServer(app);
  const port = process.env.PORT || 3000;

  let currentApp = app;

  server
    .listen(port, () => {
      console.log(`🚀 started on port ${port} `);
    })
    .on('error', e => {
      console.error(e.message);
      throw e;
    });

  return () => {
    console.log('✅  Server-side HMR Enabled!');

    module.hot.accept('./server', () => {
      console.log('🔁  HMR Reloading `./server`...');
      server.removeListener('request', currentApp);
      const newApp = require('./server').default; // eslint-disable-line global-require
      server.on('request', newApp);
      currentApp = newApp;
    });
  };
};
