import clientPromise from "@/app/lib/mongodb"
const client = await clientPromise
const db = client.db("MovieRecommend")
const collection = db.collection("goodMovies")
export async function POST(request) {
    const movies=await collection.find({}).toArray()
    const today=new Date()
    const start=new Date(today.getFullYear(),0,0)
    const diff=today-start
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    const movieid=movies[dayOfYear]
    return Response.json({message:true,movieid:movieid})
}