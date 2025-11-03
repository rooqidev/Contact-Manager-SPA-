export function router(routes){
  const app = document.getElementById("app");
  
  function navigate(){
    const path = window.location.hash.replace("#","") || '/';
    const page = routes[path];
    
    
    if(page){
      app.innerHTML = page();
      
    }else{
      app.innerHTML = `
      <h1>404</h1>
      <p>Page Not Found..</p>`;
    }
  }
  
  window.addEventListener("hashchange", navigate);
  navigate();
}