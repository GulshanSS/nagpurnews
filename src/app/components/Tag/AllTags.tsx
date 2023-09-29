import Link from "next/link";
import { Tag } from "../../../../types";

type Props = {
  headline: string;
  tags: Tag[];
};

export default function AllTags({ headline, tags }: Props) {
  return (
    <>
      <span className="text-sm font-bold uppercase text-red-500 tracking-wide mb-5 mx-2">
        {headline}
      </span>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag: Tag) => (
          <Link key={tag.id} href={`/tag/${tag.slug}`}>
            <span className="text-sm border shadow-md border-primary-600 cursor-pointer bg-primary-100 uppercase tracking-widest text-primary-800 font-bold rounded-full w-fit px-3.5 py-1">
              {tag.name}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
