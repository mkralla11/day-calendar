import apisauce from 'apisauce'

const _url = 'https://appcues-interviews.firebaseio.com';


// constructor
const create = (baseURL = _url) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })


  function fetchEvents(){
    return api.get('calendar/events.json')
  }

  return {
    fetchEvents
  }
}

const api = create();
export default api;
