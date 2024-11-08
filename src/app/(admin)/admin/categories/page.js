import { AddCategory } from "@/components/AddCategory/AddCategory";
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

export default function Categories() {
  const categories = [
    {
      id: "1",
      title: "Sports",
      thumbnail:
        "https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      discription: "All community will be have Sports skills",
    },
    {
      id: "2",
      title: "Indoor Games",
      thumbnail:
        "https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      discription: "All community will be have Indoor skills",
    },
    {
      id: "3",
      title: "Climbing",
      thumbnail:
        "https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      discription: "All community will be have Climbing skills",
    },
    {
      id: "4",
      title: "Cricket",
      thumbnail:
        "https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      discription: "All community will be have Cricket skills",
    },
  ];
  return (
    <div className="min-h-screen">
      <div className="flex justify-around items-center py-6">
        <h1 className="font-bold text-xl">SubCategories</h1>
        <AddCategory />
      </div>
      <Table>
        <TableCaption>A list of your Categories</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>

            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((data) => (
            <TableRow key={data.id}>
              <TableCell className="font-medium">{data.title}</TableCell>
              <TableCell>
                <Image
                  src={data.thumbnail}
                  width={70}
                  height={70}
                  alt={`${data.title}'s Image`}
                />
              </TableCell>

              <TableCell>{data.discription}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
