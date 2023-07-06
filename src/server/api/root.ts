import { createTRPCRouter } from "~/server/api/trpc";
import { exampleRouter } from "~/server/api/routers/example";
import { TransactionRouter } from "~/pages/trans";
// import {navRoutes} from "./routers/nav"
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  trans:TransactionRouter
  // navigation:navRoutes
});

// export type definition of API
export type AppRouter = typeof appRouter;
