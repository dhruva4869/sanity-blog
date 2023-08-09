import { Post } from "./lib/interface";
import { client } from "./lib/sanity";
import Link from "next/link";

async function getData() {
  const query = `*[_type == "post"]`;
  const data = await client.fetch(query);
  return data;
}

export default async function IndexPage() {
  const data = (await getData()) as Post[];

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-bold font-sans leading-9 tracking-normal text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
          Useful Links
        </h1>
      </div>

      <ul>
        {data.map((post) => (
          <li key={post._id} className="py-4">

            <article className="space-y-2 xl:grid-cols-4 xl:items-baseline xl:space-y-0">

              <div className="p-1.5">
                <p className="text-base font-medium text-rose-500">
                  {new Date(post._createdAt).toISOString().split("T")[0]}<br></br>
                </p>
              </div>

              <Link href={`/post/${post.slug.current}`} prefetch className="space-y-3 xl:col-span-3">
                <div className="p-1.5 space-y-3  shadow-xl shadow-blue-100  dark:shadow-indigo-950 rounded-xl dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-900 to-black">
                  <h3 className="text-2xl font-serif leading-8 tracking-normal text-gray-900 dark:text-gray-100">
                    {post.title}
                  </h3>
                  <p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-3">
                    {post.overview}
                  </p>
                </div>
              </Link>

            </article>

          </li>
        ))}
      </ul>

    </div>
  );
}