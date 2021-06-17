function getUser(){
    fetch('https://reqres.in/api/users?page==2',{
        method: 'GET'
    })
    .then(function (response){

        return response.json();
        

    })
    .then(function (userlist){
   


        let list = document.getElementById('list')
        userlist.data.forEach(element => {
            let li = document.createElement('li');
            li.textContent = element.first_name + ' ' + element.last_name;
            list.appendChild(li);
            
        });

    })
    


}
getUser()