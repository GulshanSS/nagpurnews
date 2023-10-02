import { Article } from "../../../../types";

type Props = {
  article: Article;
};

export default function ArticleCardForCategory({ article }: Props) {
  return (
    <div className="relative overflow-hidden md:w-96 flex flex-col justify-center gap-2 rounded-md cursor-pointer bg-black">
      {article.media.length > 0 &&
        article.media[0].type.startsWith("image/") && (
          <img
            loading="lazy"
            className="w-full h-64 overflow-hidden text-sm object-cover rounded-md"
            alt={article.title}
            src={article.media[0].key}
          />
        )}
      {article.media.length > 0 &&
        article.media[0].type.startsWith("video/") && (
          <video
            className="flex justify-center bg-black w-full h-64 rounded-md"
            controls={true}
            autoPlay={false}
            src={article.media[0].key}
          />
        )}
      {article.media.length === 0 && (
        <div
          className="text-[14px] w-full h-64 leading-6 text-justify font-thin text-gray-400 line-clamp-div article-card p-5"
          dangerouslySetInnerHTML={{ __html: article.content }}
        ></div>
      )}
      <span className="absolute p-2 flex w-full bg-black/30 backdrop-blur-lg bottom-0 text-sm font-bold text-white">
        {article.title}
      </span>
    </div>
  );
}
