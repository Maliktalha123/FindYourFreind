import { getCategories } from "@/actions/categories";
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
import { CategoryModal } from "@/lib/models/Category";
import Image from "next/image";

export default async function Categories() {
  const categories =await getCategories()
  console.log('categories => ', categories)
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
          {categories?.categories?.map((data) => (
            <TableRow key={data._id}>
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
