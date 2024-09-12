import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  console.log(images);

  return (
    <main>
      <div>
        <div className="flex flex-wrap gap-4">
          {[...images, ...images, ...images, ...images].map(
            (image: any, index) => (
              <div key={image.id + "-" + index} className="flex w-48 flex-col">
                <img src={image.url as any} alt={`image ${image.id}`} />
                <div>{image.name}</div>
              </div>
            ),
          )}
        </div>
      </div>
    </main>
  );
}
