

// const myHeaders = new Headers();
// myHeaders.append('mode', 'no-cors');
// // myHeaders.append('proxy', 'http://localhost');
// myHeaders.append('X-MAL-CLIENT-ID','69e86981b1fc774cb0e903636c22bb8e');

const urlOptions = {
    "headers":{
        'X-MAL-CLIENT-ID':'69e86981b1fc774cb0e903636c22bb8e',
    },
    "mode": 'no-cors'
    };


async function fetchMyAnimeListData(){
    const url = 'https://api.myanimelist.net/v2/anime/ranking?ranking_type=all'

    const response = await fetch(url, urlOptions);
    const data = await response.json();
    
    // console.log(response);
    return data;
}

console.log(fetchMyAnimeListData());