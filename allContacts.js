import { users, deleteUser, renderContacts } from '/savedContacts.js';
export function AllContacts() {
  setTimeout(() => {
    const delBtn = document.querySelector(".delete-btn");
    const nameInputD = document.getElementById("nameInputD");
    delBtn.addEventListener("click", () => {
      deleteUser(nameInputD.value.trim());
      nameInputD.value = "";
    });
  }, 0)
  
  
  return `
  <h1>📞 Total Contacts Available.</h1>
     <input type="text" id="nameInputD" placeholder="Enter User Name.."/>
  <button class="delete-btn">Delete It</button>
  <br>
  <div class="contact-list">${renderContacts()}</div>
 `;
  
}