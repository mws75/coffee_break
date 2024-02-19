import Head from "next/head";
import Link from "next/link";
import AddUser from "~/components/addUser";
import { BiSolidCoffee } from "react-icons/bi";

import { api } from "~/utils/api";
import { PageLayout } from "~/components/layouts";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Coffee Break</title>
        <meta
          name="description"
          content="Generate a Coffee Break with Fellow Users"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gradient-to-b from-[#ffffff] to-[#39918C]">
        <PageLayout>
          <div p-50>
            <AddUser></AddUser>
          </div>
        </PageLayout>

        <footer className="flex h-24 w-full items-center justify-center border-t">
          <a
            className="flex items-center justify-center gap-2"
            href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
          </a>
          <BiSolidCoffee className="h-6 w-6 animate-bounce" />
        </footer>
      </div>
    </>
  );
}
