import apiManager from "./apiManager"
import buildInterestComponent from "./buildInterestComponent"
import displayOnDOM from "./displayOnDOM"
import createPointOfInterest from "./createPointOfInterest";


let addNewInterest = () => {

    document.querySelector("#addInterest").addEventListener("click", () => {
        let name = document.querySelector("#placeName").value
        let description = document.querySelector("#placeDescription").value
        let country = document.querySelector("#places").value

        let newInterest = {
            placeId: country,
            name: name,
            description: description
        }

        if (name !== "" && description !== "") {
            console.log(newInterest)
            apiManager.postNewInterest(newInterest).then( () => {
                document.querySelector("#displayInputs").innerHTML = ""
            }).then(() => {
                displayOnDOM()
            })
        }
    })
}

export default addNewInterest