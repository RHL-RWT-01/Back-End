const z= require('zod');

const bookSchema=z.object({
    name:z.string(),
    description:z.string().optional(),
});

module.exports=bookSchema;