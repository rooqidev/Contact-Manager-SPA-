import { users, saveUser, deleteUser } from '/savedContacts.js';
export function Home() {
  setTimeout(() => {
    const nameInput = document.getElementById("nameInput");
    const numberInput = document.getElementById("numberInput");
    const addBtn = document.querySelector(".add-btn");
    // In case user pressed save without entering something..
    addBtn.addEventListener("click", () => {
      if (nameInput.value === "" && numberInput.value === "") {
        
        nameInput.style.border = "2px solid darkred";
        numberInput.style.border = "2px solid darkred";
        return;
      } else {
        nameInput.style.border = "none";
        numberInput.style.border = "none";
        saveUser(nameInput.value.trim(), numberInput.value.trim());
      }
      nameInput.value = "";
      numberInput.value = "";
    });
    
    
  }, 0)
  
  return `
  <div class="home">
  <h1>Contact Manager</h1>
  <input type="text" id="nameInput" placeholder="Enter User Name.."/>
  <input type="number" id="numberInput" placeholder="Enter User Number.."/>
  <button class="add-btn">Add Contact</button>
  </div>
  `;
}