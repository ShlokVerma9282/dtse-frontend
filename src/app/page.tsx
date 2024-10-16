"use client";

import Dashboard from "@/screens/Dashboard";
import OrderDetails from "@/screens/OrderDetails";
import { RootState } from "@/store";
import { useSelector } from 'react-redux';

export default function Home() {
  const orderDetailsVisible = useSelector((state: RootState) => state.orders.orderDetailsVisible);
  return (
    <div className="">
      {orderDetailsVisible ? <OrderDetails /> : <Dashboard />}
    </div>
  );
}
