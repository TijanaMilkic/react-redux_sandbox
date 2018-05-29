const key = '169fcd3a';
const baseURL = `http://www.omdbapi.com/?apikey=${key}&`;

export default function fetchMovie(title, year) {
    let url = `${baseURL}t=${title}`;
    if (year) {
        url += `&y=${year}`;
    }
    return fetch(url)
        .then(response => response.json())
}

