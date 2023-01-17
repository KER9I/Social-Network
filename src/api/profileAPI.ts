import { PhotosType, ProfileType } from "../types/types"
import { instance, ResponseType } from "./api"


type SavePhotoResponseDataType = {
    photos: PhotosType
}


export const profileAPI = {
    getProfile(userID: number) {
        return instance.get<ProfileType>(`profile/${userID}`).then(res => res.data)
    },
    getStatus(userID: number) {
        return instance.get<string>(`profile/status/${userID}`).then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status`, { status: status }).then(res => res.data)
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put<ResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },
} 