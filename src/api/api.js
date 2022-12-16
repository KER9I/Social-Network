import axios from 'axios';



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "cd0f1475-3e93-46fe-bded-5fe46146ab91"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userID) {
        return instance.post(`follow/${userID}`)
    },
    unfollow(userID) {
        return instance.delete(`follow/${userID}`)
    },
}

export const profileAPI = {
    getProfile(userID) {
        return instance.get(`profile/${userID}`)
    },
    getStatus(userID) {
        return instance.get(`profile/status/${userID}`) 
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status}) 
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    }
}

