import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const date = z.coerce.date();
const image = z.object({ src: z.string(), alt: z.string(), caption: z.string().optional() });
const youtubeVideo = z.object({ id: z.string(), title: z.string(), caption: z.string().optional() });

const journal = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/journal' }), schema: z.object({
  title: z.string(), researchDate: date, publishedDate: date, createdAt: date.optional(), updatedAt: date.optional(), authors: z.array(z.string()).min(1), summary: z.string(), activityTypes: z.array(z.enum(['tai-lieu','co-khi','dien-tu','lap-trinh','che-tao','hieu-chuan','thi-nghiem','phan-tich','sua-loi','bao-cao'])), status: z.enum(['planned','in-progress','completed','issue']), experimentIds: z.array(z.string()).default([]), systemVersion: z.string().optional(), tags: z.array(z.string()).default([]), coverImage: z.string().optional(), coverAlt: z.string().optional(), images: z.array(image).default([]), youtubeIds: z.array(z.string()).default([]), youtubeVideos: z.array(youtubeVideo).default([]), dataFiles: z.array(z.string()).default([]), githubCommit: z.string().optional(), draft: z.boolean().default(false), objective: z.string().optional(), equipment: z.string().optional(), procedure: z.string().optional(), observations: z.string().optional(), data: z.string().optional(), issues: z.string().optional(), adjustments: z.string().optional(), nextSteps: z.string().optional()
}) });
const experiments = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experiments' }), schema: z.object({ id: z.string(), title: z.string(), order: z.number(), status: z.enum(['planned','in-progress','completed','issue']), summary: z.string(), startDate: date, endDate: date.nullable().default(null), coverImage: z.string().optional(), independentVariables: z.array(z.string()).default([]), dependentVariables: z.array(z.string()).default([]), controlVariables: z.array(z.string()).default([]), dataStatus: z.string().default('Chưa có dữ liệu') }) });
const systemVersions = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/system-versions' }), schema: z.object({ version: z.string(), title: z.string(), date, status: z.enum(['draft','active','archived']), summary: z.string(), images: z.array(image).default([]), changes: z.array(z.string()).default([]), previousIssues: z.array(z.string()).default([]), improvements: z.array(z.string()).default([]), journalSlugs: z.array(z.string()).default([]) }) });
export const collections = { journal, experiments, systemVersions };
