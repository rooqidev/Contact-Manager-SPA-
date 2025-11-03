export const users = JSON.parse(localStorage.getItem("userlist")) || {};
//localStorage.clear()

export function saveUser(name, number){
  users[name] = number;
  localStorage.setItem("userlist", JSON.stringify(users));
}

export function deleteUser(name){
  delete users[name];
  localStorage.setItem("userlist", JSON.stringify(users));
}

export function renderContacts(){
  const usersArray = [];
  for (let user in users) {
    usersArray.push({
      name: user,
      phone: users[user],
    })
  };
  
  const contactsHTML = usersArray.map((user) => `  <div class="contact-detail">
  <b class="person-name">Name | ${user.name}</b>
  <b class="person-phone">Phone | ${user.phone}</b>
  </div>
  `).join('');
  
  return contactsHTML;
}