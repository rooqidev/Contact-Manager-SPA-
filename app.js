import { router } from './router.js';
import { Home } from './home.js';
import { AllContacts } from './allContacts.js';

window.addEventListener("load", ()=>{
  router({
    '/':Home,
    '/allcontacts':AllContacts,
  });
});

