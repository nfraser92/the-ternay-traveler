const apiManager = {
    getPlaces: () => {
        return fetch("http://localhost:8088/places")
        .then(r => r.json())
    },
    getInterests: () => {
        return fetch("http://localhost:8088/interests")
        .then(r => r.json())
    },
    deleteInterests: (id) => {
        return fetch(`http://localhost:8088/interests/${id}`, {
            method: "DELETE",
        })
    },
    postNewInterest: (newInterest) => {
        return fetch(`http://localhost:8088/interests`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newInterest)
        })
    }
}

export default apiManager
