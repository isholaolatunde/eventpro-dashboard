export function DashboardSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div>
        <div className="h-8 w-56 rounded-lg bg-slate-200" />
        <div className="mt-2 h-4 w-72 rounded-lg bg-slate-200" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-xl bg-white p-5 ring-1 ring-slate-200">
            <div className="flex items-center justify-between">
              <div className="h-4 w-24 rounded bg-slate-200" />
              <div className="h-9 w-9 rounded-lg bg-slate-200" />
            </div>
            <div className="mt-3 h-9 w-32 rounded bg-slate-200" />
            <div className="mt-2 h-3 w-28 rounded bg-slate-200" />
          </div>
        ))}
      </div>

      <div className="rounded-xl bg-white ring-1 ring-slate-200">
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <div className="h-5 w-32 rounded bg-slate-200" />
          <div className="h-4 w-12 rounded bg-slate-200" />
        </div>
        <div className="divide-y divide-slate-50">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-6 px-6 py-4">
              <div className="h-4 w-40 rounded bg-slate-200" />
              <div className="h-4 w-24 rounded bg-slate-200" />
              <div className="h-4 w-20 rounded bg-slate-200" />
              <div className="h-4 w-20 rounded bg-slate-200" />
              <div className="h-5 w-16 rounded-full bg-slate-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
