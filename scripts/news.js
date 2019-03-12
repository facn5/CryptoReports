
fetch("https://newsapi.org/v2/everything?q=bitcoin&from=2019-02-12&sortBy=publishedAt&apiKey=decbac612c734abab9d1c80dc0a5f17a
")
  .then((resp) => resp.json())
  .then(function (data) {

    console.log(data);


  })

  fetch("https://newsapi.org/v2/everything?q=bitcoin&from=2019-02-12&sortBy=publishedAt&apiKey=decbac612c734abab9d1c80dc0a5f17a
  ")
    .then((resp) => resp.json())
    .then(function (data) {

      console.log(data);


    })
