import apiManager from "./apiManager"
import buildInterestComponent from "./buildInterestComponent"

const displayOnDOM = () => {
    apiManager.getInterests()
    .then(interests => {
        console.log(interests)
        interests.forEach(interest => {
        buildInterestComponent(interest)
        });
    })
}

export default displayOnDOM
