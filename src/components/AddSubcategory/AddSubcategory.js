"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";
import { getCategories } from "@/actions/categories";
import { useToast } from "@/hooks/use-toast";
import { uploadImage } from "@/actions/upload";
import { addSubCategory } from "@/actions/subcategories";

export function AddSubcategory({ categories }) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = true;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Subcategory</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Subcategory</DialogTitle>
            <DialogDescription>
              Add Subcategory here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm categories={categories} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Sub category</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add Subcategory</DrawerTitle>
          <DrawerDescription>
            Add Subcategory here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className, categories }) {
  const [loading, setLoading] = React.useState(false);
  const formRef = React.useRef();
  const { toast } = useToast();
  const handleAddSubcategory = async (formData) => {
    setLoading(true);
    const uploadLink = await uploadImage(formData);
    const categoryObject = {
      title: formData.get("title"),
      discription: formData.get("discription"),
      category: formData.get("category"),
      thumbnail: uploadLink,
    };
    console.log("uploadLink => ,", uploadLink);
    await addSubCategory(categoryObject);
    toast({
      title: "Category added successfully...",
      description: "Friday, February 10, 2023 at 5:57 PM",
    });
    formRef?.current?.reset();
    setLoading(false);
  };

  return (
    <form
      className={cn("grid items-start gap-4", className)}
      ref={formRef}
      action={handleAddSubcategory}
    >
      <div className="grid gap-2">
        <Label htmlFor="title">Title</Label>
        <Input type="title" id="title" name = "title" placeholder="Sports..." />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="discription">Discription</Label>
        <Input id="discription" name="discription" placeholder="Description" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="thumbnail">Thumbnail</Label>
        <Input required name="thumbnail" type="file" />
      </div>

      <Select name="category">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select CategorY" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((data) => (
            <SelectItem value={data._id} key={data._id}>
              {data.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button type="submit">Save changes</Button>
    </form>
  );
}
