

//Api Rest
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const myInit = 
  { method: 'GET',
    headers: myHeaders,
    cache: 'default' 
  };

const stationsService = {
  getStationsList() {
    return fetch('url', myInit)
      .then(response => response.json())
      .then(res => {
          return res.stations});
  }
};

/* Call rest api get list stations */
export default stationsService;
