import clientPromise from "@/app/lib/mongodb"
const client = await clientPromise
const db = client.db("MovieRecommend")
const collection = db.collection("watchlater")
export async function POST(request) {

    const body = await request.json();
    const movieid = body.movieid;

    if (!movieid) {
        return Response.json({ success: false, message: "Movie ID is required" });
    }

    const result = await collection.findOne({ movieid: Number(movieid) });

    if (result) {
        return Response.json({ success: true });
        
    }
    return Response.json({ success: false });
    



}
