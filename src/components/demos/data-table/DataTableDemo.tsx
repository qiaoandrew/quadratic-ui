"use client";

import { useState } from "react";
import {
  type ColumnDef,
  type Column,
  type SortingState,
  type ColumnFiltersState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  MoreHorizontalIcon,
  ChevronsUpDownIcon,
} from "lucide-react";

import { Badge, type BadgeProps } from "~/components/ui/Badge";
import { Checkbox } from "~/components/ui/Checkbox";
import { Button } from "~/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/DropdownMenu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/Table";

type User = {
  id: string;
  name: string;
  email: string;
  status: Status;
  role: string;
};

enum Status {
  Active = "Active",
  Inactive = "Inactive",
  Onboarding = "Onboarding",
}

const STATUS_BADGE_VARIANTS: {
  [key in Status]: BadgeProps["variant"];
} = {
  [Status.Active]: "success-outline",
  [Status.Inactive]: "destructive-outline",
  [Status.Onboarding]: "warning-outline",
};

const USERS: User[] = [
  {
    id: "eb93361a-6e6b-4ca7-bdfa-8cb197d58c5f",
    name: "John Doe",
    email: "john.doe@gmail.com",
    status: Status.Active,
    role: "Designer",
  },
  {
    id: "f1a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Jane Grant",
    email: "jane.grant@gmail.com",
    status: Status.Onboarding,
    role: "Developer",
  },
  {
    id: "e1a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Alice Smith",
    email: "alice.smith@gmail.com",
    status: Status.Inactive,
    role: "Designer",
  },
  {
    id: "d1a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Bob Brown",
    email: "bob.brown@gmail.com",
    status: Status.Active,
    role: "Manager",
  },
  {
    id: "c1a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Charlie Davis",
    email: "charlie.davis@gmail.com",
    status: Status.Onboarding,
    role: "Developer",
  },
  {
    id: "f1a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Isabella Lewis",
    email: "isabella.lewis@gmail.com",
    status: Status.Onboarding,
    role: "Developer",
  },
  {
    id: "g1a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Jack Hill",
    email: "jack.hill@gmail.com",
    status: Status.Active,
    role: "Designer",
  },
  {
    id: "h1a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Karen Scott",
    email: "karen.scott@gmail.com",
    status: Status.Inactive,
    role: "Manager",
  },
  {
    id: "i1a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Liam Green",
    email: "liam.green@gmail.com",
    status: Status.Onboarding,
    role: "Developer",
  },
  {
    id: "j1a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Mia Adams",
    email: "mia.adams@gmail.com",
    status: Status.Active,
    role: "Designer",
  },
];

const columns: ColumnDef<User>[] = [
  {
    accessorKey: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="block"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="block"
      />
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableSortingHeader column={column}>Name</DataTableSortingHeader>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableSortingHeader column={column}>Email</DataTableSortingHeader>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: Status = row.getValue("status");

      return <Badge variant={STATUS_BADGE_VARIANTS[status]}>{status}</Badge>;
    },
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user: User = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8 rounded-1.5">
              <span className="sr-only">Open menu</span>
              <MoreHorizontalIcon size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              Copy employee ID
            </DropdownMenuItem>
            <DropdownMenuItem>View employee details</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

interface DataTableSortingHeaderProps {
  column: Column<User, unknown>;
  children: React.ReactNode;
}

function DataTableSortingHeader({
  column,
  children,
}: DataTableSortingHeaderProps) {
  const Icon = !column.getIsSorted()
    ? ChevronsUpDownIcon
    : column.getIsSorted() === "asc"
      ? ChevronDownIcon
      : ChevronUpIcon;

  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc", true)}
      className="p-0 hover:bg-transparent"
    >
      {children} <Icon size={14} className="ml-1" />
    </Button>
  );
}

export default function DataTableDemo() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data: USERS,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="w-full rounded-2 border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className="py-2.5" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
