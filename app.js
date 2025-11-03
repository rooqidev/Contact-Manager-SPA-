import { router } from '/router.js';
import { Home } from '/home.js';
import { AllContacts } from '/allContacts.js';
import { AboutUs } from '/aboutUs.js';

window.addEventListener("load", ()=>{
  router({
    '/':Home,
    '/allcontacts':AllContacts,
    '/aboutus':AboutUs,
  });
});

