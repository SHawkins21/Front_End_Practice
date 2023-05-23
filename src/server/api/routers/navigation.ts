// import {z} from Zod

// import {
//     createTRPCRouter, 
//     publicProcedure, 
//     protectedProcedure, 

// } from "~/server/api/trpc"; 

// const navSchema =z.object({
//     text:z.string().trim, 
//     url:z.string()
// })
// export const navRoutes = createTRPCRouter({
//     AllNav:publicProcedure
//     .query(({ctx:{prisma}}) => {
//         return prisma.note.findMany()
//     }), 
// create:protectedProcedure
//  .input(navSchema)
//  .mutation(({ctx:{prisma, session}, 
//  input:{text, url}
// }) => {
//  return prisma.nav.create({
//     data:{
//         text, 
//         url,
//     }

//   })

// }) 
// })