document.addEventListener('DOMContentLoaded', init);


const global = {
  'currentPage': window.location.pathname,
  'api':{
    'url': 'https://api.jikan.moe/v4/anime/',
    'options':{
      'cors': 'no-cors',
      'headers':{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        
      }
    }
  }
}




async function fetchData(endpoint){
  const URL = global.api.url;
  const options = global.api.options;
  
  let response = await fetch(`${URL}${endpoint}`, options);
  let data = await response.json()
  
  return data;
}


function init(){
    switch(global.currentPage){
      case '/':
      case '/index.html':
        fetchData();
        break;
      default:
        break;  
    }
}
