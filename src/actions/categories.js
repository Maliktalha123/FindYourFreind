"use server";

import { revalidatePath } from "next/cache";

export const addCategory = async (categoryObject) => {
  const added = await fetch(`${process.env.BASE_URL}api/categories`, {
    method: "POST",
    body: JSON.stringify(categoryObject),
  });
  revalidatePath("/admin/categories");
};

export const getCategories = async () => {
  let categories = await fetch(`${process.env.BASE_URL}api/categories`);
  categories = await categories.json();
  console.log("Categories Successfully fetched...");
  return categories;
  revalidatePath("/admin/categories");
};
