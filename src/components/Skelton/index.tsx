export const PropertyCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="relative rounded-xl border border-dark/10 dark:border-white/10">
        {/* Image skeleton */}
        <div className="w-full h-[200px] bg-gray-200 dark:bg-gray-700 rounded-t-xl" />

        <div className="p-4">
          <div className="flex flex-col gap-3 justify-between mb-4">
            <div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2" />
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
            </div>
            <div>
              <div className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full" />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col gap-1 px-2">
              <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-3 w-10 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
            <div className="flex flex-col gap-1 px-2">
              <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-3 w-10 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
            <div className="flex flex-col gap-1 pl-2">
              <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
