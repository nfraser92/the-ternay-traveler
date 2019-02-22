let buildInterestComponent = (entry) => {
    let displayEl = document.querySelector("#displayInputs")
    let displayHTML = `
    <h3>${entry.name}</h3>
    <p>${entry.place.name}</p>
    <p>${entry.description}</p>
    <button id="deleteButton--${id}">Delete</button>
    `
    displayEl.innerHTML = displayHTML
}

export default buildInterestComponent

