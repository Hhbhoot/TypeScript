export  interface IUser{
    _id? : string,
    firstname : string,
    middlename : string,
    lastname : string,
    username : string,
    email : string,
    password : string,
    profileimage? : string,
    gender? : string,
    mobile_no? : string,
    DOB ?: Date,
    token: string
       
}