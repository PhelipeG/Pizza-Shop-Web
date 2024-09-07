import { Helmet } from "react-helmet-async";

import { PopularProductsChart } from "./popular-product-chart";
import { MonthReceiptCard } from "./month-receipt-card";
import { MonthOrdersAmountCard } from "./month-orders-amount-card";
import { DayOrdersAmountCard } from "./day-orders-amount-card";
import { MonthCanceledOrdersAmountCard } from "./month-canceled-orders-amount-card";
import { ReceiptChart } from "./receipt-chart";



export function Dashboard() {
  return (
    <div>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthReceiptCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
            <ReceiptChart />
            <PopularProductsChart />
        </div>
      </div>
    </div>
  );
}