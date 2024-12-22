import { getCategories } from "@/actions/categories";
import { getSubCategories } from "@/actions/subcategories";
import { AddSubcategory } from "@/components/AddSubcategory/AddSubcategory";
import CategoryDropdown from "@/components/CategoryDropdown/CategoryDropdown";
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

export default async function Subcategories({ searchParams }) {
  console.log("Search Params => ", searchParams);
  const subcategor = await getSubCategories(searchParams?.category);
  const categories = await getCategories();
  const cat = categories.categories;
  console.log("SubCategories => ... ", subcategor);

  return (
    <div className="min-h-screen">
      <div className="flex justify-around items-center py-6">
        <h1 className="font-bold text-xl">SubCategories</h1>
        <div className="flex gap-2">
          <CategoryDropdown
            placeholder="Select CategorY"
            dropdownValues={cat}
          />
          <AddSubcategory categories={cat} />
        </div>
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
              <TableCell className="font-medium">
                {subCat?.category?.title}
              </TableCell>
              <TableCell className="font-medium">{subCat.title}</TableCell>

              <TableCell>{subCat.discription}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
