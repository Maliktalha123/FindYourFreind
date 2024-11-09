import { connectDB } from "@/lib/db/connectDB";
import { UserModal } from "@/lib/models/User";

export async function GET(request) {
  connectDB();
  const users = await UserModal.find();
  return Response.json(
    {
      msg: "USers fetched successfully......",
      users,
    },
    { status: 200 }
  );
}

export async function POST(request) {
  await connectDB();
  const obj = await request.json();
  let newUser = new UserModal(obj);
  await newUser.save();

  return Response.json(
    { msg: "User Added Successfully", user: newUser },
    { status: 201 }
  );
}
