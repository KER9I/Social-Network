import { instance, ResponseType } from "./api"

type AuthMeResponseDataType = {
        id: number
        email: string
        login: string
}
type LoginResponseDataType = {id: number}


export const authAPI = {
    authMe() {
        return instance.get<ResponseType<AuthMeResponseDataType>>(`auth/me`).then(res => res.data);
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post<ResponseType<LoginResponseDataType>>(`auth/login`, { email, password, rememberMe }).then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}