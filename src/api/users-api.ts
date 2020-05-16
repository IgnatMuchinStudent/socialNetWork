import {GetItemsType, instance} from "./api";
import {AxiosPromise} from "axios";

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        // eslint-disable-next-line no-undef
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`). then(res=>res.data) as Promise<ResponseType>

    }
}