"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cell-action"

import Image from "next/image"

export type BillboardColumn = {
  id: string;
  imageUrl:string;
  label: string;
  createdAt: string;
}

export const columns: ColumnDef<BillboardColumn>[] = [
  {
    accessorKey: "imageUrl",
    header: "Image",
    cell: ({ row }) => {
      return (
        <Image
          alt=""
          height={48}
          width={48}
          className="w-10 h-10 rounded-md object-cover"
          src={row.original?.imageUrl}
        />
      );
    },
  },



  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  },
];
