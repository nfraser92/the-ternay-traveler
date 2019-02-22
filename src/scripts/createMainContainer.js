const createMainContainer = () => {
  let outpulEl =  document.querySelector("#output")

  let mainHTML = `
    <div id="formInput"></div>
    <div id="displayInputs"></div>
  `
  outpulEl.innerHTML += mainHTML

}

export default createMainContainer