import axios from 'axios'

const API_REGISTER = 'http://localhost:5000/api/users/register'
const API_LOGIN = 'http://localhost:5000/api/users/login'

const register = async (userData) => {
    const response = await axios.post(API_REGISTER, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const login = async (userData) => {
    const response = await axios.post(API_LOGIN, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const logout = async () => {
    localStorage.removeItem('user')
}
const authService = {
    register,
    logout,
    login
}

export default authService