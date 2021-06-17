import { useDebugValue } from "react";

function getUser(){
    fetch('https://reqres.in/api/users?page==2',{
        method: 'GET'
    })
    .then(function (response){

        return response.json();
        

    })
    .then(function (userlist){
   

        let list = document.getElementById('list1');



            for (let i = 0; i < userlist.data.length; i++) {
                const element = userlist.data[i];
                let li1 = document.createElement('li');
                li1.textContent = `${element.first_name} ${element.last_name}`;
                // list.appendChild(li2);

                document.getElementById("list1").appendChild(li1);
                
            }


        
    })
    


}
export default getUser()