import { prisma } from "@/lib/utils"

interface VoteRequest {
    roadmapId: number
    vote: 'up' | 'down'
}

export async function POST(req: Request) {
    try {
    const body = await req.json() as VoteRequest
    const {roadmapId, vote} = body

        const roadmap = await prisma.roadmap.findUnique({
            where: {
                id: roadmapId
            }
        })
        if (!roadmap) {
                return new Response("Roadmap not found", {status: 404})
            }
            await prisma.roadmap.update({
                where: {
                    id: roadmapId
                },
                data: {
                    votes: vote === 'up' ? roadmap.votes + 1 : roadmap.votes - 1
                }
            })
            return new Response('Roadmap updated successfully', {status: 200})
    } catch (error) {
        console.error('Error voting on roadmap', error)
        return new Response('Something went wrong', {status: 500})
    }
}