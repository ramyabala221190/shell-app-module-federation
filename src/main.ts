import { loadManifest } from '@angular-architects/module-federation';

loadManifest(`assets/manifest/mf.manifest.json`,true)
.catch((err) => console.error('Error loading remote entries', err))
.then(() => import('./bootstrap')) .catch((err) => console.error(err));  

