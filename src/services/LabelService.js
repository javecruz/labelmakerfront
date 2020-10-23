import axios from 'axios';

function getLabel(id) {
    return axios.get("http://localhost:8000/api/labels/" + id + "/" )
}

function createLabel(label, token) {

    let headers = createHeaders(token)
    return axios.post(
            "http://localhost:8000/api/labels/",
            {
            front_text: label.userFrontText,
            back_text: label.userBackText
            },
            headers
    )
}

function createHeaders(token) {
    return {
        headers: {
            "Authorization": "Token " + token
        }
    }
}

export { getLabel, createLabel }