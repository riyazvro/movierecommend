import clientPromise from "@/app/lib/mongodb"
const client = await clientPromise
const db = client.db("MovieRecommend")
const collection = db.collection("watchlater")
export async function POST(request) {
    const body = await request.json()
    const isAlreadyWatchLater=await collection.findOne({movieid:body.movieid})
    if (!isAlreadyWatchLater) {
        const result = await collection.insertOne(body)
        
        if (result) {
    
            return Response.json({ message: 'Added to Watch Later', success: true,  result: result })
        }
    }
    return Response.json({ message: "error" })

}
export async function DELETE(request) {
    const body = await request.json()
    const id=body.movieid
    const result=await collection.deleteOne({movieid:id})
    if (result) {
        
        return Response.json({message:"Removed from Watch later",result:result,success:true})
    }
    return Response.json({message:"Error deleting"})
}
export async function GET() {
    const result=await collection.find({}).toArray()
    return Response.json({result:result})
}
