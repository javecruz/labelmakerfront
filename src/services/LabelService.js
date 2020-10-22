import axios from 'axios';

async function getLabel(id) {
    console.log("Getting label with id " + id)
    let response;
    try {
        response = await axios.get("http://localhost:8000/api/labels/" + id + "/" )
        return response.data
    } catch (error) {
        console.log("Label with id " + id + " was not found")
        console.log(error)
    }
}

function createLabel(label, token) {
    console.log(label, token)
}

export { getLabel, createLabel }