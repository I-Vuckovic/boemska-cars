export interface User {
    id? : string,
    password: string,
    userName: string
}

export interface UserLogin {
    client_id: string,
    client_secret: string,
    grant_type: string,
    password: string,
    username: string
}