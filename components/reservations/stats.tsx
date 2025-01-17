import StatsCard from "../admin/statscard";
import { fetchReservationStats } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";

async function Stats() {
  const stats = await fetchReservationStats();
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <StatsCard title="properties" value={stats.properties} />
      <StatsCard title="nights" value={stats.nights} />
      <StatsCard title="amount" value={formatCurrency(stats.amount)} />
    </div>
  );
}

export default Stats;
