import { users, updateContacts, deleteUser, renderContacts } from './savedContacts.js';
export function AllContacts() {
	setTimeout(() => {
		document.addEventListener("input", (e) => {
			if (e.target.id === "nameInputD") {
				const input = e.target.value;
				console.log(input);
				const usersList = users.filter(user => user.name.includes(input));
				const renderContactsHTML = document.querySelector(".contact-list");
				renderContactsHTML.innerHTML = "";
				console.log(usersList);
				usersList.map((user) => {
					const userDiv = document.createElement("div");
					userDiv.className = "user-div";
					userDiv.innerHTML = `
  				<b>Name: ${user.name}</b>
		      <b>Age: ${user.age}</b>
		      <b>Email: ${user.email}</b>
		      <b>Number: ${user.number}</b>
		      <div>
		      <button class="item" tabindex="0" id="deleteBtn" data-id="${user.id}">Delete this</button>
  				</div>
  				`;
  				renderContactsHTML.appendChild(userDiv);
				});
			}
		});
		
		document.addEventListener("click", (e) => {
			if (e.target.id === "deleteBtn") {
				const index = e.target.dataset.id;
				deleteUser(index);
				updateContacts();
				renderContacts();
			}
		});
		
		renderContacts();
	}, 0)
	
	
	
	return `
  <h1>📞 Total Contacts Available.</h1>
  <input class="item" tabindex="0" type="text" id="nameInputD" placeholder="Find User.."/>
  <br>
  <div class="contact-list"></div>
 `;
}