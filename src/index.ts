import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// 1 -> inserting in User table
// async function insertUser(firstName: string, lastName: string, email: string, password: string){
//     const res = await prisma.user.create({
//         data: {
//             firstName,
//             lastName,
//             email,
//             password
//         }
//     })
//     console.log(res)
// }
// insertUser('kshitij', 'jain','kshitijjain@gmail.com', 'password');


// 2 -> updating the user

// interface updateParams{
//     middleName: string
// }
// async function updateUser(email: string, {
//     middleName
// }: updateParams){
//     const res = await prisma.user.update({
//         where: { email },
//         data: {
//             middleName
//         }
//     })
//     console.log(res);
    
// }
// updateUser('kshitijjain@gmail.com', {
//     middleName: 'Kumar'
// })




//3 -> deleting data from user table

//deleting complete user
// async function deleteUser(email: string){
//     const res = await prisma.user.delete({
//         where: {
//             email
//         }
//     })
//     console.log(res);
    
// }
// deleteUser('kshitijjain@gmail.com')

//deleting part of user (say middleName)
//can't delete a specific part of user's data, only complete record of user's data will be deleted
//if want to delete specific user data then use update instead, like for middleName use data:{middleName} and pass NULL
//because delete does not support data field


//4 -> get user detail

// async function getUserDetail(email:string) {
//     const res = await prisma.user.findMany({
//         where:{
//             email
//         }
//     })
//     console.log(res);
    
// }
// getUserDetail('kshitijjain@gmail.com')

interface updateUserData{
    firstName?: string,
    middleName?: null | string,
    lastName?: string
    email?: string,
    password?: string,
    phoneNumber?: string,
}
async function deletePartOfUser(email: string, {middleName}: updateUserData){
    const res = await prisma.user.update({
        where:{
            email
        },
        data:{
            middleName
        }
    })
    console.log(res);
    
}
deletePartOfUser('kshitijjain@gmail.com', {middleName: null})

