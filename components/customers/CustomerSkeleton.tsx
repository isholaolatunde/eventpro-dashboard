export function CustomerSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div>
        <div className="h-8 w-40 rounded-lg bg-slate-200" />
        <div className="mt-2 h-4 w-72 rounded-lg bg-slate-200" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[0, 1, 2].map((item) => (
          <div
            key={item}
            className="rounded-xl bg-white p-5 ring-1 ring-slate-200"
          >
            <div className="h-4 w-24 rounded bg-slate-200" />
            <div className="mt-3 h-9 w-16 rounded bg-slate-200" />
          </div>
        ))}
      </div>

      <div className="rounded-xl bg-white ring-1 ring-slate-200">
        <div className="border-b border-slate-100 px-6 py-4">
          <div className="h-5 w-40 rounded bg-slate-200" />
        </div>
        <div className="space-y-4 p-6">
          {[0, 1, 2, 3].map((item) => (
            <div key={item} className="h-12 rounded-lg bg-slate-100" />
          ))}
        </div>
      </div>
    </div>
  );
}
