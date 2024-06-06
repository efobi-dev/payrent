import {prisma} from '@/lib/utils'
import { RoadmapItem } from '@/types/types'

export async function POST(req: Request) {
  const body =  await req.json()

    const title = body.title as RoadmapItem['title']
    const description = body.description as RoadmapItem['description']
    const type = body.type as RoadmapItem['type']
    const user = body.user as RoadmapItem['user']

    if (!title || !description || !type || !user) {
        console.log(`title: ${title} description: ${description} type ${type} user ${user}`)
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