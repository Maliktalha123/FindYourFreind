import { connectDB } from "@/lib/db/connectDB";
import { CategoryModal } from "@/lib/models/Category";
import { EventModal } from "@/lib/models/Event";
import { SubcategoryModal } from "@/lib/models/Subcategory";
import { UserModal } from "@/lib/models/User";

export async function GET(request) {
  await connectDB();
  const reqUrl = request.url;
  const query = {};

  const events = await EventModal.find(query)
    .populate("category", "title")
    .populate("createdBy", "fullname email")
    .populate("subcategory", "title");
  return Response.json(
    {
      msg: "Events fetched successfully",
      events,
    },
    { status: 200 }
  );
}
export async function POST(request) {
  await connectDB();
  const obj = await request.json();

  const user = await UserModal.findOne({ _id: obj.createdBy });
  if (!user)
    return Response.json(
      {
        error: true,
        message: "User not Found !",
        data: null,
      },
      { status: 404 }
    );

  let newEvent = new EventModal(obj);
  await newEvent.save();

  return Response.json(
    {
      msg: "Event Added successfully",
      event: newEvent,
    },
    { status: 201 }
  );
}
