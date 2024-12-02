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
  const handleAddCategory =async (formData) => {
    console.log("Form Data => ", formData);
    const file = formData.get("thumbnail")
    console.log("File => ",file)
const uploadLink = await uploadImage(formData)
    console.log("uploadLink => ," ,uploadLink)
  };
  return (
    <form
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
      <Button type="submit">Save changes</Button>
    </form>
  );
}
