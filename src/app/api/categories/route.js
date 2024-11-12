import { connectDB } from "@/lib/db/connectDB";
import { CategoryModal } from "@/lib/models/Category";

export async function GET(request) {
  await connectDB();
  const categories = await CategoryModal.find();
  return Response.json(
    {
      msg: "Categories fetched successfully",
      categories,
    },
    { status: 200 }
  );
}
export async function POST(request) {
    await connectDB();
    const obj = await request.json();
    let newCategory = new CategoryModal(obj)
await newCategory.save()



    return Response.json(
      {
        msg: "Category Added successfully",
        category: newCategory
      },
      { status: 201 }
    );
  }