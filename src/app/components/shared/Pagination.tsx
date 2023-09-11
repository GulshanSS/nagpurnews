import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

type Props = {
  page: number;
  pages: number;
  changePage: Function;
};

const Pagination = ({ page, pages, changePage }: Props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };

  return (
    pages > 1 && (
      <>
        <div className="mx-2 flex justify-center items-center gap-2">
          <button
            className="w-10 h-10 text-sm font-bold flex justify-center items-center  border border-slate-500 rounded-full disabled:bg-slate-500 disabled:text-primary-50 disabled:cursor-not-allowed"
            onClick={() => {
              scrollToTop();
              changePage((page: number) => page - 1);
            }}
            disabled={page === 1}
          >
            <BiLeftArrow />
          </button>
          <button className="w-10 h-10 text-sm font-bold flex justify-center items-center  border border-slate-500 rounded-full cursor-not-allowed">
            {page}
          </button>
          <button
            className="w-10 h-10 text-sm font-bold flex justify-center items-center  border border-slate-500 rounded-full disabled:bg-slate-500 disabled:text-primary-50 disabled:cursor-not-allowed"
            onClick={() => {
              scrollToTop();
              changePage((page: number) => page + 1);
            }}
            disabled={page === pages}
          >
            <BiRightArrow />
          </button>
        </div>
      </>
    )
  );
};

export default Pagination;
