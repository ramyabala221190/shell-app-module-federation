import { loadManifest } from '@angular-architects/module-federation';


// import('./bootstrap')
// 	.catch(err => console.error(err));
fetch('/assets/json/config.json').then(response=>response.json()).then((configuration:any)=>{
    console.log(configuration);
    loadManifest(`assets/manifest/mf-${configuration.env}.manifest.json`,true)
    .catch((err) => console.error('Error loading remote entries', err))
    .then(() => import('./bootstrap')) .catch((err) => console.error(err));  
})
.catch(err=>{
    console.log(err)
})


