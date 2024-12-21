"use server";

import { revalidatePath } from "next/cache";

export const addSubCategory = async (categoryObject) => {
  const added = await fetch(`${process.env.BASE_URL}api/subcategories`, {
    method: "POST",
    body: JSON.stringify(categoryObject),
  });
  revalidatePath("/admin/subcategories");
};

export const getSubCategories = async (category) => { 
  let url = `${process.env.BASE_URL}api/subcategories`;
  if (category) {
    url = `${process.env.BASE_URL}api/subcategories?category=${category}`;
  } else {
    url = `${process.env.BASE_URL}api/subcategories`;
  }
  let subcategories = await fetch(url);
  subcategories = await subcategories.json();
  console.log("SubCategories Successfully fetched...");
  return subcategories;
  revalidatePath("/admin/subcategories");
};
