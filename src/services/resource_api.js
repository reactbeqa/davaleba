function getResource(){
    fetch('https://reqres.in/api/unknown',{
        method: 'GET'
    })
    .then(function (response){

        return response.json();
        

    })
    .then(function (resource){


        window.onload = () => {
            // let list = document.getElementById('list2');
            for (let i = 0; i < resource.data.length; i++) {
                const element = resource.data[i];
                let li2 = document.createElement('li');
                li2.textContent = element.name + ' ' + element.year + ' ' + element.color;
                // list.appendChild(li2);

                document.getElementById("list2").appendChild(li2);
                
            }
        }

       

    })
    


}
export default getResource()