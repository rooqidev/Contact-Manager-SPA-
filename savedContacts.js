export let users = JSON.parse(localStorage.getItem("userlist")) || [];

export function updateContacts(){
  localStorage.setItem("userlist", JSON.stringify(users));
}

export function saveUser(name, age, email, number){
   //alert(name);
   //alert(age);
   //alert(email);
   //alert(number);
   users.push({
     id: Date.now(),
     name: name,
     age: age,
     email: email,
     number: number,
   });
   updateContacts();
}

export function deleteUser(ID){
  // alert(ID)
  users = users.filter(user => user.id != ID);
  updateContacts();
}

export function renderContacts(){
  const renderContactsHTML = document.querySelector(".contact-list");
  renderContactsHTML.innerHTML = "";
  if(users.length >= 1){
  	// console.log(users);
    users.map((user)=>{
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
  } else{
    renderContactsHTML.innerHTML = `
    <b>No contacts found..</b>
    `;
  }
}
// <img src="${user.image}"/>