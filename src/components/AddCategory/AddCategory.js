"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
import { uploadImage } from "@/actions/upload";
import { addCategory } from "@/actions/categories";

export function AddCategory() {
  const [open, setOpen] = React.useState(false);

  const isDesktop = true;
  

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Category</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Category</DialogTitle>
            <DialogDescription>
              Add an Category here.Click save when you are done...
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Category</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add Category</DrawerTitle>
          <DrawerDescription>
            Add an Category here.Click save when you are done...
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

function ProfileForm({ className }) {
  const [loading,setLoading] = React.useState(false)
  const formRef = useRef()
  const { toast } = useToast()
  const handleAddCategory = async (formData) => {
    setLoading(true)
    const uploadLink = await uploadImage(formData);   
    const categoryObject = {
      title: formData.get("title"),
      discription: formData.get("discription"),
      thumbnail: uploadLink,
    };
    console.log("uploadLink => ,", uploadLink);
    await addCategory(categoryObject);
    toast({
      title: "Category added successfully...",
      description: "Friday, February 10, 2023 at 5:57 PM",
    })
    formRef?.current?.reset()
    setLoading(false)
  };
  return (
    <form
    ref={formRef}
      action={handleAddCategory}
      className={cn("grid items-start gap-4", className)}
    >
      <div className="grid gap-2">
        <Label htmlFor="title">Title</Label>
        <Input name="title" type="title" id="title" placeholder="Enter Title" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="discription">Discription</Label>
        <Input
          name="discription"
          type="discription"
          id="discription"
          placeholder="Enter Discription"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="thumbnail">Thumbnail</Label>
        <Input
          type="file"
          name="thumbnail"
          id="thumbnail"
          placeholder="Enter Thumbnail"
        />
      </div>
      <Button disabled={loading} type="submit">{loading ? "Loading...":"Add Category"}</Button>
    </form>
  );
}
