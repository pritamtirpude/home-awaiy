import { Fragment } from "react";
import { Skeleton } from "../ui/skeleton";

function LoadingTable({ rows }: { rows?: number }) {
  const tableRows = Array.from({ length: rows || 5 }, (_, i) => {
    return (
      <div className="mb-4" key={i}>
        <Skeleton className="h-8 w-full rounded" />
      </div>
    );
  });
  return <Fragment>{tableRows}</Fragment>;
}

export default LoadingTable;
