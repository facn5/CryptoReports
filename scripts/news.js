fetch("https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=decbac612c734abab9d1c80dc0a5f17a")
 .then((resp) => resp.json())
 .then(function(data) {

  //getting the titles


  for(var i=0;i<6;i++){
   document.getElementById("box"+(i+1)).textContent = data.articles[i].title;
   document.getElementById("description"+(i+1)).textContent = data.articles[i].description;
   document.getElementById("boximg"+(i+1)).src = data.articles[i].urlToImage;
  document.getElementById("url"+(i+1)).href=data.articles[i].url;

  }



  CheckIfImageIsNull();




 })
 .catch(function() {


    });

function CheckIfImageIsNull() {
 if (document.getElementById("boximg1").src === null)
  document.getElementById("boximg1").src = "https://image.freepik.com/free-vector/404-error-web-template-with-mad-cat_23-2147763345.jpg"

 if (document.getElementById("boximg2").src === null)
  document.getElementById("boximg2").src = "https://image.freepik.com/free-vector/404-error-web-template-with-mad-cat_23-2147763345.jpg"

 if (document.getElementById("boximg3").src === null)
  document.getElementById("boximg3").src = "https://image.freepik.com/free-vector/404-error-web-template-with-mad-cat_23-2147763345.jpg"

 if (document.getElementById("boximg4").src === null)
  document.getElementById("boximg4").src = "https://image.freepik.com/free-vector/404-error-web-template-with-mad-cat_23-2147763345.jpg"

 if (document.getElementById("boximg5").src === null)
  document.getElementById("boximg5").src = "https://image.freepik.com/free-vector/404-error-web-template-with-mad-cat_23-2147763345.jpg"

 if (document.getElementById("boximg6 ").src === null)
  document.getElementById("boximg6").src = "https://image.freepik.com/free-vector/404-error-web-template-with-mad-cat_23-2147763345.jpg"
}

//  fetch("https://newsapi.org/v2/everything?q=bitcoin&from=2019-02-12&sortBy=publishedAt&apiKey=decbac612c734abab9d1c80dc0a5f17a
//  ")
//    .then((resp) => resp.json())
//    .then(function (data) {

//      console.log(data);


//    })
