import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany();

  console.log(images);

  return (
    <main>
      <div>
        <div className="flex flex-wrap gap-4">
          {[...images, ...images, ...images, ...images].map((item, index) => (
            <div key={item.id + "-" + index} className="w-48">
              <img src={item.url as any} alt={`item ${item.id}`} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
