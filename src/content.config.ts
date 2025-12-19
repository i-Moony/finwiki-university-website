import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const ChapterSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string(),
});

const LessonSchema = z.object({
    chapterId: z.number(),
    id: z.number(),
    name: z.string(),
    description: z.string(),
});

const chapters = defineCollection({
    loader: glob({
        pattern: "**/meta.md",
        base: "./src/content/lessons",
    }),
    schema: ChapterSchema,
});

const lessons = defineCollection({
    loader: glob({
        pattern: "**/**/lesson.md",
        base: "./src/content/lessons",
    }),
    schema: LessonSchema,
});

export const collections = {
    chapters,
    lessons,
};
