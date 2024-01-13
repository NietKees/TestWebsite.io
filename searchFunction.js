const button = document.getElementById("btn");
button.addEventListener("click", search);

const apikey = '403886da';


async function search(event) {
    event.preventDefault();

    const query = document.getElementById("sq").value;
    const url = `https://www.omdbapi.com/?apikey=${apikey}&s=${query}`;

    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
        if (data.Search && data.Search.length > 0) {
            // Display results for each movie
            const result = data.Search.map(movie => {
                return `<header>
                            <p>Title: ${movie.Title}</p>
                            <p>Year: ${movie.Year}</p>
                            <p>Type: ${movie.Type}</p>
                            <img src="${movie.Poster}" alt="${movie.Title}" width="100px">
                            <br>
                            <hr>
                        </header>`;
            }).join('');

            document.getElementById("result").innerHTML = result;
        } else {
            document.getElementById("result").innerHTML = "No results found.";
        }
    } else {
        console.error('Error:', data.Error);
    }
}

  
