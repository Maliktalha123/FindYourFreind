export const getUsers = async () => {
  let users = await fetch(`${process.env.BASE_URL}api/users`);
  users = await users.json();
  console.log("users Successfully fetched...");
  return users;
  revalidatePath("/admin/users");
};
