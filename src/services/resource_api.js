function getResource() {
  fetch('https://reqres.in/api/unknown', {
    method: 'GET',
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (resource) {
      window.onload = () => {
        for (let i = 0; i < resource.data.length; i++) {
          const element = resource.data[i];
          let li2 = document.createElement('li');
          li2.textContent = `${element.name} ${element.year} ${element.color}`;
          document.getElementById('resource').appendChild(li2);
        }
      };
    });
}
export default getResource();
