import axios from 'axios';
import { UserType } from '../types/types';

export enum ResultCodeEnam {
    Success = 0,
    Error = 1
}

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": 'cd0f1475-3e93-46fe-bded-5fe46146ab91' || '8e3251ab-f925-4151-bd12-5c79adf83448'
    }
});

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

export type ResponseType<D = {}> = {
    data: D
    resultCode: ResultCodeEnam
    messages: Array<string>
}


