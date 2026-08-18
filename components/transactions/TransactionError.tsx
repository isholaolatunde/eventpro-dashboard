export function TransactionError() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-50 ring-1 ring-rose-200">
        <svg
          className="h-6 w-6 text-rose-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4m0 4h.01" />
        </svg>
      </div>
      <h3 className="mt-4 text-base font-semibold text-slate-800">
        Something went wrong
      </h3>
      <p className="mt-1 text-sm text-slate-500">
        We couldn&apos;t load your transactions. Please try again.
      </p>
    </div>
  );
}
