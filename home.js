import { users, saveUser, deleteUser } from './savedContacts.js';

export function Home() {
	setTimeout(() => {
		const nameInput = document.getElementById("nameInput");
		const ageInput = document.getElementById("ageInput");
		const emailInput = document.getElementById("emailInput");
		// const imageInput = document.getElementById("imageInput");
		const numberInput = document.getElementById("numberInput");
		const addBtn = document.querySelector("#add-btn");
		// Incase user pressed save without entering something..
		addBtn.addEventListener("click", () => {
			if (nameInput.value === "" || ageInput.value === "" || emailInput.value === "" || numberInput.value === "") {
				[nameInput, ageInput, emailInput, numberInput].forEach((input) => input.style.border = "2px solid darkred");
			} else {
				// alert("working!");
				const nameValue = nameInput.value.trim().toLowerCase();
				const ageValue = ageInput.value.trim();
				const emailValue = emailInput.value.trim().toLowerCase();
				// const imageValue = imageInput.value;
				const numberValue = numberInput.value.trim();
				if (Number(ageValue) && Number(numberValue)) {
					saveUser(nameValue, ageValue, emailValue, numberValue);
					[nameInput, ageInput, emailInput, numberInput].forEach((input) => input.value = "");
					[nameInput, ageInput, emailInput, numberInput].forEach((input) => input.style.border = "none");
				} else {
					[nameInput, ageInput, emailInput, numberInput].forEach((input) => input.style.border = "2px solid darkred");
				}
				
			}
		});
		
		
	}, 0)
	
	return `
  <div class="home">
  <h1>Contact Manager</h1>
  <input class="item" tabindex="0" type="text" id="nameInput" placeholder="Enter User Name.."/>
  <input class="item" tabindex="0" type="text" id="ageInput" placeholder="Enter User Age.."/>
  <input class="item" tabindex="0" type="text" id="emailInput" placeholder="Enter User Email.."/>
  <input class="item" tabindex="0" type="text" id="numberInput" placeholder="Enter User Number.."/>
  <button class="item" tabindex="0" id="add-btn">Add Contact</button>
  </div>
  `;
}