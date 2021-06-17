function getResource(){
    fetch('https://reqres.in/api/unknown',{
        method: 'GET'
    })
    .then(function (response){

        return response.json();
        

    })
    .then(function (resource){


        let list = document.getElementById('list')
        resource.data.forEach(element => {
            let li = document.createElement('li');
            li.textContent = element.name + ' ' + element.year + ' ' + element.color;
            list.appendChild(li);
            
        });

    })
    


}
getResource()