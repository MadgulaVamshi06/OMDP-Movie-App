// script.js

const apiKey = "f7b73d44"; 

async function searchMovie() {
   
  const searchInput = document.getElementById("searchInput").value;
  console.log(searchInput)
  const Url = `https://omdbapi.com/?s=${searchInput}&page=1&apikey=f7b73d44`;

  try {
    const response = await fetch(Url);
    const data = await response.json();
    // console.log(data);

    if (data.Response === "True") {
      displayMovieInfo(data.Search);
    } else {
      document.getElementById("movieInfo").innerHTML = "Movie not found.";
    }
  } catch (error) {
    console.log("Error fetching movie data:", error);
  }
}

function displayMovieInfo(movie) {
    console.log(movie)

  const movieInfoDiv = document.getElementById("movieInfo");
  movieInfoDiv.innerHTML = ""
  movie.forEach((ele) => {
    let div = document.createElement("div")
    let p_title = document.createElement("p")
    let p_year = document.createElement("p")
    let img = document.createElement("img");
    p_title.innerText = `Movie : ${ele.Title}`
    p_year.innerText = `Year : ${ele.Year}`
    img.src = ele.Poster
    img.alt = "No Image"
    div.append( p_title,p_year,img)
    movieInfoDiv.append(div)
    
  });
}


