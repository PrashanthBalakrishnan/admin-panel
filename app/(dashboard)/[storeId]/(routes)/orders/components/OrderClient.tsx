"use client";

import Heading from "@/components/ui/Heading";
import { Separator } from "@/components/ui/separator";
import { OrderColumn, OrderColumnProps } from "./OrderColumn";
import { DataTable } from "@/components/ui/DataTable";

interface OrderClientProps {
  data: OrderColumnProps[];
}

const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      />
      <Separator />
      <DataTable columns={OrderColumn} data={data} searchKey="products" />
    </>
  );
};
export default OrderClient;
