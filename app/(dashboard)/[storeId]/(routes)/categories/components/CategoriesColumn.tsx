"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./CellAction";

export type CategoriesColumnProps = {
  id: string;
  name: string;
  billboardLabel: string;
  createdAt: string;
};

export const CategoriesColumn: ColumnDef<CategoriesColumnProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "billboard",
    header: "Billboard",
    cell: ({ row }) => row.original.billboardLabel,
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
