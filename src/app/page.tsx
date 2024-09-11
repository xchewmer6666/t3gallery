import Image from "next/image";
import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/cda6bea3-299f-47e8-b9f4-a3bbb5246e43-1x989p.jpeg",
  "https://utfs.io/f/77943ef1-104c-4635-9b81-69bd6195a376-1x989s.JPG",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map(
          (image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} alt={`Image ${image.id}`} />
            </div>
          ),
        )}
      </div>
    </main>
  );
}
