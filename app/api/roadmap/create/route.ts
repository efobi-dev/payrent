import {prisma} from '@/lib/utils'
import { RoadmapItem } from '@/types/types'

export async function POST(req: Request) {
    const body =  await req.formData()

    const title = body.get('title') as RoadmapItem['title']
    const description = body.get('description') as RoadmapItem['description']
    const type = body.get('type') as RoadmapItem['type']
    const user = body.get('user') as RoadmapItem['user']

    if (!title || !description || !type || !user) {
        return new Response('Missing required form data', {status: 400})
    }

    try {
        await prisma.roadmap.create({
            data: {
                title: title,
                description: description,
                type: type, 
                userId: user
            }
        })
        return new Response('Request created successfully', {status: 200})
    } catch (error) {
        console.error(error)
        return new Response(`Something went wrong, error: ${error}`, {status: 500})
    }
}