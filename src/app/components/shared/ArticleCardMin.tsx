import { Article } from "../../../../types";
import Link from "next/link";

type Props = {
  article: Article;
};

export default function ArticleCardMin({ article }: Props) {
  return (
    <Link href={`/article/${article.slug}`}>
      <div className="relative overflow-hidden w-64 flex flex-col justify-center gap-2 rounded-md cursor-pointer">
        {article.media[0].type.startsWith("image/") && (
          <div className="w-full h-48">
            <img
              loading="lazy"
              className="w-full h-full overflow-hidden text-sm object-cover rounded-md"
              alt={article.title}
              src={article.media[0].key}
            />
          </div>
        )}
        {article.media[0].type.startsWith("video/") && (
          <video
            className="flex justify-center bg-black w-full h-48 rounded-md"
            controls={true}
            autoPlay={false}
            src={article.media[0].key}
          />
        )}
        <span className="absolute p-2 flex w-full bg-black/30 backdrop-blur-lg bottom-0 text-sm font-bold text-white">
          {article.title}
        </span>
      </div>
    </Link>
  );
}
