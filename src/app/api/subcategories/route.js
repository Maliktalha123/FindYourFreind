import { connectDB } from "@/lib/db/connectDB";
import { SubcategoryModal } from "@/lib/models/Subcategory";

export async function GET(request) {
  await connectDB();
  

  const reqURL = request.url;
  console.log( "URL => ",reqURL)
  const { searchParams } = new URL(reqURL);
  console.log("Search Params => ",searchParams)
  const query = {};
  if (searchParams.get("category")) {
    query.category = searchParams.get("category");
  }
const subCategories = await SubcategoryModal.find(query).populate(
    "category",
    "title"
  );
  return Response.json(
    {
      msg: "Subcategories fetched successfully",
      subCategories,
    },
    { status: 200 }
  );
}
export async function POST(request) {
  await connectDB();
  const obj = await request.json();
  let newSubcategory = new SubcategoryModal(obj);
  await newSubcategory.save();

  return Response.json(
    {
      msg: "Subcategory Added successfully",
      newSubcategory: newSubcategory,
    },
    { status: 201 }
  );
}
