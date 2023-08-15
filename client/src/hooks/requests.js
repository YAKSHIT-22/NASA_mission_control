const API_URL = 'https://nasa-mission-control-eight.vercel.app/v1';

async function httpGetPlanets() {
    const response = await fetch(`${API_URL}/planets`);
    return await response.json();
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
  const response = await fetch(`${API_URL}/launches`);
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  })
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
  try{
     return await fetch(`${API_URL}/launches`,{
    method: 'post',
    body: JSON.stringify(launch),
    headers: {
      'Content-Type': 'application/json',
      }
  });
} catch(err){
      return {
          ok:false,
      };
    }
 
  
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
  try{
  return await fetch(`${API_URL}/launches/${id}`,{
    method: 'delete',
  })}
  catch(err){
      return {
          ok:false,
      };
    }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};
