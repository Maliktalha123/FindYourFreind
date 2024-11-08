import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex bg-red-300 items-center gap-4 h-11 content-center">
      <div className="flex w-1/3 m-auto h-full items-center gap-5 content-center">
        <Link href={"/admin"}>Admin</Link>
      </div>
    </div>
  );
}
