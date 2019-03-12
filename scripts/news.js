
fetch("https://newsapi.org/v2/everything?q=cryptocurrency&from=2019-02-12&sortBy=publishedAt&apiKey=decbac612c734abab9d1c80dc0a5f17a")
  .then((resp) => resp.json())
  .then(function (data) {

    //getting the titles
        document.getElementById("box1").textContent =data.articles[0].title;
        document.getElementById("box2").textContent =data.articles[1].title;
        document.getElementById("box3").textContent =data.articles[2].title;
        document.getElementById("box4").textContent =data.articles[3].title;
        document.getElementById("box5").textContent =data.articles[4].title;
        document.getElementById("box6").textContent =data.articles[5].title;


        //getting the description
            document.getElementById("description1").textContent =data.articles[0].description ;
            document.getElementById("description2").textContent =data.articles[1].description ;
            document.getElementById("description3").textContent =data.articles[2].description ;
            document.getElementById("description4").textContent =data.articles[3].description ;
            document.getElementById("description5").textContent =data.articles[4].description ;
            document.getElementById("description6").textContent =data.articles[5].description ;

   //getting the images
   document.getElementById("boximg1").src =data.articles[0].urlToImage;
   document.getElementById("boximg2").src =data.articles[1].urlToImage;
   document.getElementById("boximg3").src =data.articles[2].urlToImage;
   document.getElementById("boximg4").src =data.articles[3].urlToImage;
   document.getElementById("boximg5").src =data.articles[4].urlToImage;
   document.getElementById("boximg6").src =data.articles[5].urlToImage;

       CheckIfImageIsNull();
  
    console.log(data.articles[0].title);


    //getting the article links

    document.getElementById("url1").href=data.articles[0].url;
    document.getElementById("url2").href =data.articles[1].url;
    document.getElementById("url3").href =data.articles[2].url;
    document.getElementById("url4").href =data.articles[3].url;
    document.getElementById("url5").href =data.articles[4].url;
    document.getElementById("url6").href =data.articles[5].url;

  })

function CheckIfImageIsNull() {
  if( data.articles[0].urlToImage == null )
    document.getElementById("boximg1").src = "https://image.freepik.com/free-vector/404-error-web-template-with-mad-cat_23-2147763345.jpg"
  
    if( data.articles[1].urlToImage == null )
    document.getElementById("boximg2").src = "https://image.freepik.com/free-vector/404-error-web-template-with-mad-cat_23-2147763345.jpg"
  
    if( data.articles[2].urlToImage == null )
    document.getElementById("boximg3").src = "https://image.freepik.com/free-vector/404-error-web-template-with-mad-cat_23-2147763345.jpg"
  
    if( data.articles[3].urlToImage == null )
    document.getElementById("boximg4").src = "https://image.freepik.com/free-vector/404-error-web-template-with-mad-cat_23-2147763345.jpg"
  
    if( data.articles[4].urlToImage == null )
    document.getElementById("boximg5").src = "https://image.freepik.com/free-vector/404-error-web-template-with-mad-cat_23-2147763345.jpg"
  
    if( data.articles[5].urlToImage == null )
   document.getElementById("boximg6").src = "https://image.freepik.com/free-vector/404-error-web-template-with-mad-cat_23-2147763345.jpg"
}

//  fetch("https://newsapi.org/v2/everything?q=bitcoin&from=2019-02-12&sortBy=publishedAt&apiKey=decbac612c734abab9d1c80dc0a5f17a
//  ")
//    .then((resp) => resp.json())
//    .then(function (data) {

//      console.log(data);


//    })
