import { z } from "zod"; 

import {
    createTRPCRouter,
    publicProcedure
} from "~/server/api/trpc"

//schema 




export const TransactionRouter = createTRPCRouter(
    
    {
    allTransactions: 
    publicProcedure
    .query(async({ctx:{prisma}})=> { 

        return await prisma.transactions.findMany({

        })

    }), 


    totalAgg:
    publicProcedure
    .query(async({ctx:{prisma}}) => {
        return await prisma.transactions.aggregate({ 
            _sum:{
                amount:true
            },
            _count:{
                id:true
            },
            _avg:{
                amount:true
            }
        })
    })

})
