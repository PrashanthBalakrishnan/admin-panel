"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./CellAction";

export type BillboardColumnProps = {
  id: string;
  label: string;
  createdAt: string;
  textColor: string;
};

export const BillboardColumn: ColumnDef<BillboardColumnProps>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    accessorKey: "textColor",
    header: "Text Color",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        <div
          className="h-6 w-6 rounded-full border"
          style={{ backgroundColor: row.original.textColor }}
        />
      </div>
    ),
  },

  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
