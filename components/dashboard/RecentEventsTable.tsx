import type { RecentEvent } from "@/types/dashboard";

const recentEvents: RecentEvent[] = [
  { name: "Tech Summit 2026",    date: "Aug 15, 2026", tickets: "450 / 500", revenue: "$22,500", status: "Active" },
  { name: "Art Festival",        date: "Aug 20, 2026", tickets: "320 / 400", revenue: "$9,600",  status: "Active" },
  { name: "Business Expo",       date: "Sep 01, 2026", tickets: "180 / 300", revenue: "$5,400",  status: "Upcoming" },
  { name: "Music Gala",          date: "Sep 10, 2026", tickets: "95 / 200",  revenue: "$2,850",  status: "Upcoming" },
  { name: "Wine & Dine Evening", date: "Jul 28, 2026", tickets: "150 / 150", revenue: "$7,500",  status: "Completed" },
];

const statusStyles: Record<string, string> = {
  Active:    "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Upcoming:  "bg-indigo-50 text-indigo-700 ring-indigo-200",
  Completed: "bg-slate-100 text-slate-600 ring-slate-200",
};

export function RecentEventsTable() {
  return (
    <div className="rounded-xl bg-white ring-1 ring-slate-200">
      <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
        <h3 className="text-base font-semibold text-slate-800">Recent Events</h3>
        <span className="text-xs text-slate-400">{recentEvents.length} events</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-left text-xs font-medium uppercase tracking-wide text-slate-400">
              <th className="px-6 py-3">Event</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Tickets</th>
              <th className="px-6 py-3">Revenue</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {recentEvents.map((event) => (
              <tr key={event.name} className="transition-colors hover:bg-slate-50/60">
                <td className="px-6 py-4 font-medium text-slate-800">{event.name}</td>
                <td className="px-6 py-4 text-slate-500">{event.date}</td>
                <td className="px-6 py-4 text-slate-500">{event.tickets}</td>
                <td className="px-6 py-4 font-medium text-slate-700">{event.revenue}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ${
                      statusStyles[event.status] ?? "bg-slate-100 text-slate-600 ring-slate-200"
                    }`}
                  >
                    {event.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
