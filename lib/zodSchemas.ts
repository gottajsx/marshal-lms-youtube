import { z } from 'zod';

export const courseLevels = ['Beginner', 'Intermediate', 'Advanced'] as const;

export const courseStatus = ['Draft', 'Published', 'Archived'] as const;

export const courseCategories = [
    'Development',
    'Business',
    'Finance',
    'IT & Software',
    'Office Productivity',
    'Personal Development',
    'Design',
    'Marketing',
    'Health & Fitness',
    'Music',
    'Teaching & Academics',
] as const;

export const courseSchema = z.object({
    title: z
        .string()
        .min(3, { message: 'Title must be at least 3 characters long' })
        .max(100, { message: 'Title must be at most 100 characters long' }),
    
    description: z.string()
        .min(3, { message: 'Title must be at least 3 characters long' }),

    fileKey: z.string().min(1, { message: "File is required" }),

    price: z.coerce
        .number()
        .min(1, { message: "Price must be a positive number" }),
    
    duration: z.coerce
        .number()
        .min(1, { message: 'Duration must be at least 1 hour' })
        .max(500, { message: "Duration must be at most 100 hours" }),
    
    level: z.enum(courseLevels, { message: "Level is required" }),
    
    category: z.enum(courseCategories, { message: "Category is required" }),
    
    smallDescription: z
        .string()
        .min(3, { message: "Small Description must be at least 3 characters longs" })
        .max(200, { message: "Small Description must be at most 100 characters long" }),
    
    slug: z
    .string()
    .min(3, { message: "Slug must be at least 3 characters long" }),
    
    status: z.enum(courseStatus, { message: "Status is required" }),
});

//export type CourseSchemaType = z.infer<typeof courseSchema>
export type CourseSchemaType = z.input<typeof courseSchema> // SSC because of zod 4
