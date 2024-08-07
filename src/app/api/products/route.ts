import { db } from "@/lib/db/db";
import { products } from "@/lib/db/schema";
import { productSchema } from "@/lib/validators/productSchema";
import { desc } from "drizzle-orm";

import { writeFile, unlink } from "node:fs/promises";
import path from "node:path";

export async function POST(request: Request) {
    // todo: check user access
    const data = await request.formData();

    let validatedData;

    try {
        validatedData = productSchema.parse({
            name: data.get("name"),
            description: data.get("description"),
            price: Number(data.get("price")),
            image: data.get("image"),
        });
    } catch (error) {
        return Response.json({message:error},{status:400});
    }

    const filename = `${Date.now()}.${validatedData.image.name.split(".").slice(-1)[0]}`;

    try {
        const buffer = Buffer.from(await validatedData.image.arrayBuffer());
        await writeFile(path.join(process.cwd(), "public/assets", filename), buffer);
    } catch (error) {
        return new Response(JSON.stringify({ message: "Failed to save the file to fs" }), { status: 500 });
    }

    try {
        await db.insert(products).values({ ...validatedData, image: filename });
    } catch (error) {
        // Remove stored image from fs if saving to database fails
        try {
            await unlink(path.join(process.cwd(), "public/assets", filename));
        } catch (fsError) {
            console.error("Failed to remove file from fs:", fsError);
        }
        return new Response(JSON.stringify({ message: "Failed to store product into database" }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: "OK" }), { status: 201 });
}


export async function GET (){
    try {
        const allProducts = await db.select().from(products).orderBy(desc(products.id))
        return Response.json(allProducts)
        
    } catch (error) {
        return Response.json({message:"Failed to fetch products"},{status:500})
        
    }
}