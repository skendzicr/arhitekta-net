import * as path from 'path';
import * as express from 'express';
import universal, {
  BASE_URL,
  SERVER_LOCATION_PROVIDERS
} from 'angular2-universal-preview';

// Angular 2
import {provide, enableProdMode} from 'angular2/core';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {App} from './app/app';

let app = express();
let root = path.join(path.resolve(__dirname, '..'));

enableProdMode();

// Express View
app.engine('.html', universal.ng2engine);
app.set('views', __dirname);
app.set('view engine', 'html');

// Serve static files
app.use(express.static(root));

// Routes
app.use('/*', (req, res) => {
  res.render('index', {
    App,
    providers: [
      ROUTER_PROVIDERS,
      provide(BASE_URL, {useValue: 'http://localhost:3000' + req.originalUrl}),
      SERVER_LOCATION_PROVIDERS,
    ],
    preboot: true
  });
});

// Server
app.listen(3000, () => {
  console.log('Listen on http://localhost:3000');
});
