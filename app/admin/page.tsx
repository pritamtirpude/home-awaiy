import ChartsContainer from "@/components/admin/chartscontainer";
import {
  ChartsLoadingContainer,
  StatsLoadingContainer,
} from "@/components/admin/Loading";
import StatsContainer from "@/components/admin/statscontainer";
import { Fragment, Suspense } from "react";

function AdminPage() {
  return (
    <Fragment>
      <Suspense fallback={<StatsLoadingContainer />}>
        <StatsContainer />
      </Suspense>
      <Suspense fallback={<ChartsLoadingContainer />}>
        <ChartsContainer />
      </Suspense>
    </Fragment>
  );
}

export default AdminPage;
