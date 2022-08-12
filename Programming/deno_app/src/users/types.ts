export type User = {
    username: string,
    hash: string,
    salt: string,
    createdAt: Date
}
export type CreateUser = 
    Pick<User, "username" | "hash" | "salt">;

//UserDto :User Data Transfer
export type UserDto = Pick<User, "createdAt" | "username">

export interface UserRepository {
    create: (user: CreateUser ) => Promise<User>
    exists: (username: string) => Promise<boolean>
    getByUsername: (username: string) => Promise<User>
    
}

export type RegisterPayload = { username: string; password: string }

export type LoginPayload = { username: string; password: string };

export interface UserController {
    register: (payload: RegisterPayload ) => Promise<UserDto>;
    login: ({ username, password }: LoginPayload) => Promise< { user: UserDto,token:string } >;

}

// export type CreateUser = 
// Pick<User, "username" | "hash" | "salt">;


