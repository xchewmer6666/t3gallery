import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/cda6bea3-299f-47e8-b9f4-a3bbb5246e43-1x989p.jpeg",
  "https://utfs.io/f/77943ef1-104c-4635-9b81-69bd6195a376-1x989s.JPG",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main>
      <div>
        <div className="flex flex-wrap gap-4">
          {posts.map((post: any) => (
            <div key={post.id}>{post.name}</div>
          ))}
          {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map(
            (item, index) => (
              <div key={item.id + "-" + index} className="w-48">
                <img src={item.url} alt={`item ${item.id}`} />
              </div>
            ),
          )}
        </div>
      </div>
    </main>
  );
}
