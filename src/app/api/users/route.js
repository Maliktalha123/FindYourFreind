import { connectDB } from "@/lib/db/connectDB";
import { UserModal } from "@/lib/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

  const isUserExist = await UserModal.findOne({ email: obj.email });

  if (isUserExist) {
    return Response.json(
      {
        error: true,
        msg: "User Already exist...",
      },
      { status: 404 }
    );
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(obj.password, saltRounds);
  obj.password = hashedPassword;
  console.log("Object => ", obj);
  let newUser = new UserModal(obj);
  await newUser.save();
  console.log("creating userr...");
  let token = jwt.sign(
    { id: newUser._id, role: newUser.role },
    process.env.JWT_KEY
  );
  console.log(" token");
  return Response.json(
    { msg: "User Added Successfully", user: newUser, token },

    { status: 201 }
  );
}
