import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

export default function Users() {
  const users = [
    {
      id: "1",
      userName: "Muhammad Talha",
      email: "talhanoormalik0321@gmail.com",
      profilePhoto:
        "https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      location: "Karachi",
      events: 6,
    },
    {
      id: "2",
      userName: "Shaman Ali",
      email: "talhanoormalik0321@gmail.com",
      profilePhoto:
        "https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      location: "Karachi",
      events: 6,
    },
    {
      id: "3",
      userName: "Jawad Asad",
      email: "talhanoormalik0321@gmail.com",
      profilePhoto:
        "https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      location: "Karachi",
      events: 6,
    },
    {
      id: "4",
      userName: "Izhar Shams",
      email: "talhanoormalik0321@gmail.com",
      profilePhoto:
        "https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      location: "Karachi",
      events: 6,
    },
  ];

  return (
    <div className="min-h-screen"> <div className="flex justify-around items-center py-6">
<h1 className="font-bold text-xl">Users</h1></div>
      <Table>
        <TableCaption>A list of your recent Users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>

            <TableHead >Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Events</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody >
        {users.map((data) => (
            <TableRow key={data.id} >
              <TableCell>
                <Image
                  src={data.profilePhoto}
                  width={70}
                  height={70}
                  alt={`${data.userName}'s Image`}
                />
              </TableCell>

              <TableCell className="font-medium">{data.userName}</TableCell>
              <TableCell>{data.email}</TableCell>
              <TableCell>{data.location}</TableCell>
              <TableCell>{data.events}</TableCell>
            </TableRow>
        ))}
        </TableBody>
      </Table>
    </div>
  );
}
