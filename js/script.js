

// const myHeaders = new Headers();
// myHeaders.append('mode', 'no-cors');
// // myHeaders.append('proxy', 'http://localhost');
// myHeaders.append('X-MAL-CLIENT-ID','69e86981b1fc774cb0e903636c22bb8e');


function fetchMyAnimeListData(){
    const url = 'https://api.jikan.moe/v4/anime/';

  fetch(url)
     .then(response => response.json())
     .then(data => console.log(data));
    // console.log(data.mal_id);
    // return data;
}

console.log(fetchMyAnimeListData());