export function router(routes) {
  const app = document.getElementById("app");
  
  function navigate() {
    const path = window.location.hash.replace("#", "") || '/';
    const page = routes[path];
    
    
    if (page) {
      app.innerHTML = page();
      
    } else {
      app.innerHTML = `
      <h1>404</h1>
      <p>Page Not Found..</p>`;
    }
    let focusables = Array.from(document.querySelectorAll(".item"));
    
    function updateFocusList() {
      focusables = Array.from(document.querySelectorAll(".item"));
    }
    updateFocusList();
    
    let currentIndex = 0;
    
    function focusNext() {
      updateFocusList();
      currentIndex = (currentIndex + 1) % focusables.length;
      focusables[currentIndex].focus();
    };
    
    function focusPrev() {
      updateFocusList();
      currentIndex = (currentIndex - 1 + focusables.length) % focusables.length;
      focusables[currentIndex].focus();
    }
    
    document.addEventListener("keydown", (e) => {
      const key = e.key;
      if (key === "Tab") {
        e.preventDefault();
        if (e.shiftKey) focusPrev();
        else focusNext();
      }
      
      if (key === "ArrowUp") focusPrev();
      if (key === "ArrowDown") {
        e.preventDefault();
        focusNext();
        
      };
    });
  }
  
  window.addEventListener("hashchange", navigate);
  navigate();
}