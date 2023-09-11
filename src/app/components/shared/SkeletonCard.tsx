export default function SkeletonCard() {
  return (
    <>
      <div className="min-w-80 mx-2 my-4 flex gap-2 h-32 rounded-md p-2.5 border border-gray-200 shadow-md select-none">
        <div className="w-full">
          <div className="h-2.5 bg-gray-200 animate-pulse rounded-full w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 animate-pulse rounded-full max-w-[480px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 animate-pulse rounded-full mb-2.5"></div>
          <div className="h-2 bg-gray-200 animate-pulse rounded-full max-w-[440px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 animate-pulse rounded-full max-w-[460px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 animate-pulse rounded-full max-w-[360px]"></div>
        </div>
        <div className="flex items-center justify-center w-40 bg-gray-300 animate-pulse rounded"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
}
