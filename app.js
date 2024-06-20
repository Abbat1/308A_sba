/*const apiKey = "live_h28BRSM3aJknyH0RiIYcyRTKh1hQtex5urMHxVXc4dUWpe7CRN91jib9ETwCEbg3";
const apiUrl = ("https://api.thedogapi.com/v1/images/search?limit=10");

async function fetchImg () {
    try{
        const dogData =  await fetch('https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANOM&page=0&limit=')
    console.log(Data)
    fetch(apiUrl,{headers: {
        "x-api-key":apiKey
    }})
    .then((Data) => {
        return Data,json();
    })

}catch (error){}
}  partial code i had used to rework code*/

//below is my url, and key for the photos using the api to show on webpage
// while also using a function, to loop through the link, grab 10 pictures, and return them to the webpage.

const url = `https://api.thedogapi.com/v1/images/search?limit=9`;
const api_key = "live_h28BRSM3aJknyH0RiIYcyRTKh1hQtex5urMHxVXc4dUWpe7CRN91jib9ETwCEbg3";

 fetch(url,{headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
  const imagesData = data;
  imagesData.map(function(imageData) {
    
    const image = document.createElement('img');
    

    image.src = `${imageData.url}`;
        
    const gridCell = document.createElement('div');
    gridCell.classList.add('col');
    gridCell.classList.add('col-lg');
    gridCell.appendChild(image)
      
    document.getElementById('grid').appendChild(gridCell);
    
    });
})
.catch(function(error) {
   console.log(error);
});
