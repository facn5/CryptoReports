
fetch("https://newsapi.org/v2/everything?q=bitcoin&from=2019-02-12&sortBy=publishedAt&apiKey=decbac612c734abab9d1c80dc0a5f17a")
  .then((resp) => resp.json())
  .then(function (data) {
  document.getElementById("box1").textContent =data.articles[0].title;
    console.log(data.articles[0].title);
    document.getElementById("box2").textContent =data.articles[1].title;
    document.getElementById("box3").textContent =data.articles[2].title;
    document.getElementById("box4").textContent =data.articles[3].title;
    document.getElementById("box5").textContent =data.articles[4].title;
    document.getElementById("box6").textContent =data.articles[5].title;


  })

//  fetch("https://newsapi.org/v2/everything?q=bitcoin&from=2019-02-12&sortBy=publishedAt&apiKey=decbac612c734abab9d1c80dc0a5f17a
//  ")
//    .then((resp) => resp.json())
//    .then(function (data) {

//      console.log(data);


//    })
