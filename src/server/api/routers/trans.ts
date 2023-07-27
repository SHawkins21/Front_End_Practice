import { z } from "zod"; 

import { 
    createTRPCRouter, 
    publicProcedure 
} from "~/server/api/trpc";

export const transSchema = z.object(
    {
        name:z.string().trim(),
        amount:z.number(), 
        type:z.boolean()

    }
)

export const TransactionRouter = createTRPCRouter(

      {
        allTransaction:
        publicProcedure
        .query(async({ctx:{prisma}})=>{
        
            return await prisma.transactions.findMany({

            })
        
        
      }), 

      totalAgg:
      publicProcedure
      .query(async({ctx:{prisma}}) => {

        const render = await prisma.transactions.aggregate({
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
        const f = Intl.NumberFormat("en-us",{ 
            currency:"USD", 
            style:"currency"
        })
        const obj = {
            sum:f.format(render?._sum.amount as number),
            count:render?._count.id,
            avg:f.format(render?._avg.amount as number)
        }
        console.log(obj);

        return obj

      })
   }
)