import { prisma } from "@/lib/utils";

export async function GET() {
    try {
        const roadmap = await prisma.roadmap.findMany({
            where: {
                status: {
                    not: 'PENDING' || 'REJECTED'
                }
            },
            orderBy: {
                votes: 'desc'
            }
        })

        return new Response(JSON.stringify(roadmap), {status: 200});
    } catch (error) {
        return new Response('Something went wrong', {status: 500})
    }
}