import apiManager from "./apiManager"

const fillDropdowns = () => {
    let dropDownMenus = document.querySelector("#places")
    apiManager.getPlaces()
.then(places => {
    places.forEach(place => {
    console.log(place)

    let dropDownHTML = `
        <option id="${place.id}" value="${place.id}">${place.name}</option>
    `

    dropDownMenus.innerHTML = dropDownHTML
    });
})
}



const formCreator = () => {
    let displayInputs = document.querySelector("#displayInputs")
    let dropDownHTML = `
    <section id="inputForms">
    <label for="placeName">Name of Interest: </label>
    <input type = "text" id="placeName" placeholder="Enter point of Interest" name="placeName">
    </label>
    <label for="placeDescription">Description: </label>
    <input type = "text" id="placeDescription" placeholder="Enter a brief description" name="placeDescription">
    <label for="placeLocation">Location</label>
    <select id="places">
    </select>
    <button id="addInterest">Add Point of Interest!</button>
    `

    displayInputs.innerHTML = dropDownHTML
    fillDropdowns()
}

export default formCreator