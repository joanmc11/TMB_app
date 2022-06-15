const HOST = "https://api.tmb.cat/v1/";
const API_KEY = "?app_id=5c086012&app_key=e4b9fdceb44af8d5066d92643c3f8b43";
// https://api.tmb.cat/v1/transit/linies/bus/2/estacions?app_id=5c086012&app_key=e4b9fdceb44af8d5066d92643c3f8b43
//linias: https://api.tmb.cat/v1/transit/linies/metro?app_id=5c086012&app_key=e4b9fdceb44af8d5066d92643c3f8b43
//ibus: https://api.tmb.cat/v1/ibus/stops/3552?app_id=5c086012&app_key=e4b9fdceb44af8d5066d92643c3f8b43
 
const apiFetch = async (url) => {
    const response = await fetch(url);
    const json = await response.json(); 
    return json.features;
}

const apiFetchRB = async (url) => {
    const response = await fetch(url);
    const json = await response.json(); 
    return json.data;
}


 
export const getLineasMetro = () => apiFetch(`${HOST}transit/linies/metro${API_KEY}`);
export const getLineasBus = () => apiFetch(`${HOST}transit/linies/bus${API_KEY}`);
export const getEstacionsMetro = (codi_linia) =>  apiFetch(`${HOST}transit/linies/metro/${codi_linia}/estacions${API_KEY}`);
export const getEstacionsBus = (codi_linia) =>  apiFetch(`${HOST}transit/linies/bus/${codi_linia}/parades${API_KEY}`);
export const getHorarisMetro = (codi_linia) =>  apiFetch(`${HOST}transit/linies/metro/${codi_linia}/horaris${API_KEY}`);
export const getHorarisBus = (codi_linia) =>  apiFetch(`${HOST}transit/linies/bus/${codi_linia}/horaris${API_KEY}`);
export const getAllBusStops = ()=> apiFetch(`${HOST}transit/parades${API_KEY}`);

export const getIBus = (codi_parada) =>  apiFetchRB(`${HOST}ibus/stops/${codi_parada}${API_KEY}`);
 
 
export const getAccessosMetro = async (codi_linia, codi_estacio) => {
    const response = await fetch(`${HOST}transit/linies/metro/${codi_linia}/estacions/${codi_estacio}/accessos${API_KEY}`);
    const json = await response.json();
    return json.features;
}
 
export const getAccessosFisicsMetro = async (codi_linia, codi_estacio) => {
    const response = await fetch(`${HOST}transit/linies/metro/${codi_linia}/estacions/${codi_estacio}/accessos/fisics${API_KEY}`);
    const json = await response.json();
    return json.features;
}
 
export const getRecorregutsMetro = async (codi_linia) => {
    const response = await fetch(`${HOST}transit/linies/metro/${codi_linia}/trams${API_KEY}`);
    const json = await response.json();
    return json.features;
}

