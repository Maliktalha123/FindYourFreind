import { getSubCategories } from "@/actions/subcategories";
import { AddSubcategory } from "@/components/AddSubcategory/AddSubcategory";
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

export default async function Subcategories() {
  const subcategor = await getSubCategories();
  console.log("S ---------ubCategories => ",subcategor)
  const subcategories = [
    {
      id: "2",
      category: "Sports",
      title: "Indoor Games",
      thumbnail:
        "https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      discription: "All community will be have Indoor skills",
    },
    {
      id: "3",
      category: "Sports",
      title: "Climbing",
      thumbnail:
        "https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      discription: "All community will be have Climbing skills",
    },
    {
      id: "4",
      category: "Sports",
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
        <AddSubcategory />
      </div>
      <Table>
        <TableCaption>A list of your SubCategories</TableCaption>
        <TableHeader>

          
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {subcategor?.subCategories?.map((subCat) => (
            <TableRow key={subCat._id}>
              <TableCell>
                <Image
                  src={subCat.thumbnail}
                  width={70}
                  height={70}
                  alt={`${subCat.title}'s Image`}
                />
              </TableCell>
              <TableCell className="font-medium">{subCat.title}</TableCell>
              <TableCell className="font-medium">{subCat?.category?.title}</TableCell>

              <TableCell>{subCat.discription}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
