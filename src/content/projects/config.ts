import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        goal: z.number(),
        amount_raised: z.number(),
        status: z.string()
    })
})

export const collections = { projects }