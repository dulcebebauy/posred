const API_DES = "https://script.google.com/macros/s/AKfycbyLNPKzt0ROtLnBE5ICTZS9hGfFmpc5GEEFmw3W5qhNMMt_gK5GoqdwAYL23MmzicZxdw/exec";

function getAPI( ambiente = "desa"){
  if(ambiente.lower() == "desa"){
    return API_DESA;
  }
  if((ambiente.lower() == "prod"){
    return API_PROD;
  }
  return false;
}
