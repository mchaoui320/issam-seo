import Image from "next/image";
import type { EditorialImage } from "@/lib/editorial-images";

export function Figure({
  image,
  className = "",
}: {
  image: EditorialImage;
  className?: string;
}) {
  return (
    <figure className={`editorial-visual ${className}`.trim()}>
      <div className="editorial-visual__frame">
        <Image
          src={image.src}
          alt={image.alt}
          width={1600}
          height={900}
          sizes="(max-width: 760px) 100vw, (max-width: 1200px) 92vw, 1180px"
        />
      </div>
      <figcaption>
        <span>{image.code}</span>
        <p>{image.caption}</p>
      </figcaption>
    </figure>
  );
}
