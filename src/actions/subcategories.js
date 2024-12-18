"use server";

import { revalidatePath } from "next/cache";

export const addSubCategory = async (categoryObject) => {
  const added = await fetch(`${process.env.BASE_URL}api/categories`, {
    method: "POST",
    body: JSON.stringify(categoryObject),
  });
  revalidatePath("/admin/categories");
};

export const getSubCategories = async () => {
  let url = `${process.env.BASE_URL}api/subcategories`;
  // if (category) {
  //   url = `${process.env.BASE_URL}api/subcategories?category=${category}`;
  // } else {
  //   url = ``;
  // }
  let subcategories = await fetch(url);
  subcategories = await subcategories.json();
  console.log("Categories Successfully fetched...");
  return subcategories;
  revalidatePath("/admin/subcategories");
};
