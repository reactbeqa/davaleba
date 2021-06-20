function getUsers() {
  fetch('https://reqres.in/api/users?page==2', {
    method: 'GET',
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (users) {
      for (let i = 0; i < users.data.length; i++) {
        const el = users.data[i];
        let usr = document.createElement('li');
        usr.innerHTML = `${el.first_name} ${el.last_name}`;
        document.getElementById('users').appendChild(usr);
      }
    });
}
export default getUsers();
