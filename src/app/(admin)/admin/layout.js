import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }) {
  const session = await auth();
  console.log("Session => ", session);
  if (!session) return redirect("/signin");

  return (
    <html lang="en">
      <body>
        <div>
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="w-full my-4">
              <Link href={"/admin/dashboard"}>
                <TabsTrigger className="text-xl" value="dashboard">
                  Dashboard
                </TabsTrigger>
              </Link>
              <Link href={"/admin/users"}>
                <TabsTrigger className="text-xl" value="users">
                  Users
                </TabsTrigger>
              </Link>
              <Link href={"/admin/events"}>
                <TabsTrigger className="text-xl" value="evetns">
                  Events
                </TabsTrigger>
              </Link>
              <Link href={"/admin/categories"}>
                <TabsTrigger className="text-xl" value="categories">
                  Categories
                </TabsTrigger>
              </Link>
              <Link href={"/admin/subcategories"}>
                <TabsTrigger className="text-xl" value="subcategories">
                  Sub Categories
                </TabsTrigger>
              </Link>
            </TabsList>

            <TabsContent value="dashboard">{children}</TabsContent>
            <TabsContent value="users">{children}</TabsContent>
            <TabsContent value="events">{children}</TabsContent>
            <TabsContent value="categories">{children}</TabsContent>
            <TabsContent value="subcategories">{children}</TabsContent>
          </Tabs>
        </div>
        {children}
      </body>
    </html>
  );
}
