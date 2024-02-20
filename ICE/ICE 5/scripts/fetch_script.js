console.log('fetch_script.js loaded');

let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';

// Updated fetch function to handle async operations properly
async function goFetch(url) {
    try {
        const response = await fetch(url); // Wait for the fetch to complete
        const data = await response.json(); // Wait for the JSON conversion to complete
        return data; // Return the data
    } catch (error) {
        console.error(error); // Log any errors that occur
    }
}

// Fetch and log data for each URL
goFetch(url_posts).then(data => console.log(data));
goFetch(url_comments).then(data => console.log(data));
goFetch(url_albums).then(data => console.log(data));
goFetch(url_todos).then(data => console.log(data));
goFetch(url_users).then(data => console.log(data));

// Simplified version to populate images without using figcaption
goFetch(url_photos).then(photos => {
    if (photos && photos.length > 0) {
        // Select two random photos from the fetched data
        let indexes = [];
        while (indexes.length < 2) {
            let r = Math.floor(Math.random() * photos.length);
            if (indexes.indexOf(r) === -1) indexes.push(r);
        }

        // Directly update the src attribute of the img elements
        document.getElementById('photo1').src = photos[indexes[0]].url;
        document.getElementById('photo2').src = photos[indexes[1]].url;
    }
}).catch(error => console.error("Failed to fetch photos:", error));
