import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

type Props = {
  page: number;
  pages: number;
  changePage: Function;
  top: number;
};

const Pagination = ({ page, pages, changePage, top }: Props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  };

  return (
    pages > 1 && (
      <>
        <div className="mx-2 flex justify-center items-center gap-2">
          <button
            className={`${
              page === 1 ? "hidden" : "visible"
            } w-10 h-10 text-sm text-primary-100 bg-primary-800 font-bold flex justify-center items-center rounded-full`}
            onClick={() => {
              scrollToTop();
              changePage((page: number) => page - 1);
            }}
            disabled={page === 1}
          >
            <BiLeftArrow />
          </button>
          <button className="w-10 h-10 text-sm text-primary-800 bg-primary-100 border border-primary-600 font-bold flex justify-center items-center rounded-full cursor-not-allowed">
            {page}
          </button>
          <button
            className={`${
              page === pages ? "hidden" : "visible"
            } w-10 h-10 text-sm text-primary-100 bg-primary-800 font-bold flex justify-center items-center rounded-full`}
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
