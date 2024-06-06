import {z} from 'zod'

export const roadmapSchema = z.object({
  title: z.string().min(2).max(50, {message: 'Title must be between 2 and 50 characters'}),
  description: z.string().min(5).max(256, {message: 'Description must be between 5 and 256 characters'}),
  user: z.string(),
  type: z.enum(["FEATURE", "COMPLAINT", "SUGGESTION"], {message: 'Type must be one of FEATURE, COMPLAINT, SUGGESTION'})
})

export interface RoadmapItem {
    id: number;
    title: string;
    description: string;
    user: string;
    votes: number;
    status: "PENDING" | 'REJECTED' | "ACCEPTED" | "REJECTED" | "IN_PROGRESS" | "COMPLETED";
    type: "FEATURE" | "COMPLAINT" | "SUGGESTION"
  }
  