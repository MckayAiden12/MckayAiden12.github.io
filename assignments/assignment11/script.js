async function fetchMovies() {
    try {
        const response = await fetch("https://portiaportia.github.io/json/movies.json");
        const movies = await response.json();

        const container = document.getElementById("movie-container");

        movies.forEach(movie => {
            const card = document.createElement("div");
            card.className = "movie-card";

            const image = document.createElement("img");
            image.className = "movie-image";
            image.src = "https://portiaportia.github.io/json/" + movie.img;

            const description = document.createElement("div");
            description.className = "movie-description";

            const title = document.createElement("div");
            title.className = "movie-title";
            title.textContent = movie.title;

            const director = document.createElement("div");
            director.className = "movie-director";
            director.textContent = "Director: " + movie.director;

            const year = document.createElement("div");
            year.className = "movie-year";
            year.textContent = "Year: " + movie.year;

            const genres = document.createElement("div");
            genres.className = "movie-genres";
            genres.textContent = "Genres: " + movie.genres.join(", ");

            const actors = document.createElement("div");
            actors.className = "movie-actors";
            actors.textContent = "Actors: " + movie.actors.join(", ");

            const descriptionText = document.createElement("div");
            descriptionText.className = "movie-description-text";
            descriptionText.textContent = movie.description;

            description.appendChild(title);
            description.appendChild(director);
            description.appendChild(year);
            description.appendChild(descriptionText);
            description.appendChild(genres);
            description.appendChild(actors);

            card.appendChild(image);
            card.appendChild(description);

            container.appendChild(card);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchMovies();