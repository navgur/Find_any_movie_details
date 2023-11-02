var click = document.getElementById("button")

click.onclick = function () {
    var input = document.getElementById("text-name").value;
    var apiUrl = "https://www.omdbapi.com/?t=" + input + "&apikey=8649126c";

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            let director1 = data.Director;
            var check = document.getElementById("director");
            check.innerHTML = director1;

            let movie = data.Title;
            var find = document.getElementById("Movie");
            find.innerHTML = movie;

            let rating = data.Ratings[0].Value;
            var findd = document.getElementById("rating");
            findd.innerHTML = rating;
        })
        .catch((error) => {
            var search = document.getElementById("else");
            search.innerHTML = "Something went wrong.";
        });
};

