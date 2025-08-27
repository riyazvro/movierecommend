import clientPromise from "@/app/lib/mongodb"
const client = await clientPromise
const db = client.db("MovieRecommend")
const collection = db.collection("favorites")
export async function POST(request) {
    const body = await request.json()
    const isAlreadyFav=await collection.findOne({movieid:body.movieid})
    console.log(isAlreadyFav);
    if (!isAlreadyFav) {
        const result = await collection.insertOne(body)
        
        if (result) {
    
            return Response.json({ message: 'Added to Favorites', success: true,  result: result })
        }
    }
    return Response.json({ message: "error" })

}
export async function DELETE(request) {
    const body = await request.json()
    const id=body.movieid
    const result=await collection.deleteOne({movieid:id})
    if (result) {
        
        return Response.json({message:"Removed from Favorites",result:result,success:true})
    }
    return Response.json({message:"Error deleting"})
}
export async function GET() {
    const result=await collection.find({}).toArray()
    return Response.json({result:result})
}

