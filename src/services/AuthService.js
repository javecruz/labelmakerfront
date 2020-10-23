import axios from 'axios'

function login(username, password) {
    // MOCK USER DATA DEMO PURPOSES
        return axios.post("http://localhost:8000/api/login", 
            {
                username: "user123@gmail.com",
                password: "Password1!"
            }
        )
} 

export { login }