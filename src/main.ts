import { loadManifest } from '@angular-architects/module-federation';

import config from './assets/json/config.json'

// import('./bootstrap')
// 	.catch(err => console.error(err));

console.log(config.env)

loadManifest(`assets/manifest/mf-${config.env}.manifest.json`,true) .catch((err) => console.error('Error loading remote entries', err))
.then(() => import('./bootstrap')) .catch((err) => console.error(err));


