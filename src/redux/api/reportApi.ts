import { apiMethod } from "@/constants/apiMethod";
import { baseApi } from "./baseApi";
import { TRtqQueryResponse } from "@/types/redux";
import { TDashboardCountReport } from "@/types/report";

const reportApi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      getTotalCountReport: build.query<
         TRtqQueryResponse<TDashboardCountReport>,
         any
      >({
         query: () => ({
            url: "/reports",
            method: apiMethod.GET,
         }),
      }),
   }),
});

export const { useGetTotalCountReportQuery } = reportApi;
