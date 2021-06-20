function getUsers() {
  fetch('https://reqres.in/api/users?page==2', {
    method: 'GET',
  })
    .then(function (response) {
      return response.json();
    })
<<<<<<< HEAD
    .then(function (users) {
      for (let i = 0; i < users.data.length; i++) {
        const el = users.data[i];
        let usr = document.createElement('li');
        usr.innerHTML = `${el.first_name} ${el.last_name}`;
        document.getElementById('users').appendChild(usr);
      }
    });
=======
    .then(function (response){

        return response.json();
        

    })
    .then(function (userlist){
   




            for (let i = 0; i < userlist.data.length; i++) {
                const element = userlist.data[i];
                let li1 = document.createElement('li');
                li1.textContent = `${element.first_name} ${element.last_name}`;
                // list.appendChild(li2);

                document.getElementById("list1").appendChild(li1);
                
            }


        
    })
    


>>>>>>> 317a362565690b92dfcf8248750589c93c78340d
}
export default getUsers();
