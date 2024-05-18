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
  SearchIcon,
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
import { Input } from "~/components/ui/Input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/Table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNextButton,
  PaginationPreviousButton,
} from "~/components/ui/Pagination";

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
  {
    id: "k2a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Nathan White",
    email: "nathan.white@gmail.com",
    status: Status.Onboarding,
    role: "Developer",
  },
  {
    id: "l2a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Olivia Black",
    email: "olivia.black@gmail.com",
    status: Status.Inactive,
    role: "Manager",
  },
  {
    id: "m2a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Patrick Evans",
    email: "patrick.evans@gmail.com",
    status: Status.Active,
    role: "Designer",
  },
  {
    id: "n2a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Quinn Walker",
    email: "quinn.walker@gmail.com",
    status: Status.Onboarding,
    role: "Developer",
  },
  {
    id: "o2a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Rachel Young",
    email: "rachel.young@gmail.com",
    status: Status.Inactive,
    role: "Manager",
  },
  {
    id: "p2a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Samuel Harris",
    email: "samuel.harris@gmail.com",
    status: Status.Active,
    role: "Designer",
  },
  {
    id: "r2a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Uma Martinez",
    email: "uma.martinez@gmail.com",
    status: Status.Inactive,
    role: "Manager",
  },
  {
    id: "s2a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Victor King",
    email: "victor.king@gmail.com",
    status: Status.Active,
    role: "Designer",
  },
  {
    id: "t2a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Wendy Lee",
    email: "wendy.lee@gmail.com",
    status: Status.Onboarding,
    role: "Developer",
  },
  {
    id: "u2a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Xander Perez",
    email: "xander.perez@gmail.com",
    status: Status.Inactive,
    role: "Manager",
  },
  {
    id: "v2a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Yasmine Collins",
    email: "yasmine.collins@gmail.com",
    status: Status.Active,
    role: "Designer",
  },
  {
    id: "w2a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Zachary Adams",
    email: "zachary.adams@gmail.com",
    status: Status.Onboarding,
    role: "Developer",
  },
  {
    id: "a3a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Amanda Clark",
    email: "amanda.clark@gmail.com",
    status: Status.Inactive,
    role: "Manager",
  },
  {
    id: "b3a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Brandon Lewis",
    email: "brandon.lewis@gmail.com",
    status: Status.Active,
    role: "Designer",
  },
  {
    id: "c3a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Catherine Miller",
    email: "catherine.miller@gmail.com",
    status: Status.Onboarding,
    role: "Developer",
  },
  {
    id: "e3a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Ella Martinez",
    email: "ella.martinez@gmail.com",
    status: Status.Active,
    role: "Designer",
  },
  {
    id: "f3a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Fiona Wilson",
    email: "fiona.wilson@gmail.com",
    status: Status.Onboarding,
    role: "Developer",
  },
  {
    id: "i3a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Ian Wright",
    email: "ian.wright@gmail.com",
    status: Status.Onboarding,
    role: "Developer",
  },
  {
    id: "j3a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Julia Harris",
    email: "julia.harris@gmail.com",
    status: Status.Inactive,
    role: "Manager",
  },
  {
    id: "k3a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Kevin Martinez",
    email: "kevin.martinez@gmail.com",
    status: Status.Active,
    role: "Designer",
  },
  {
    id: "l3a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Lily Clark",
    email: "lily.clark@gmail.com",
    status: Status.Onboarding,
    role: "Developer",
  },
  {
    id: "m3a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Michael Lewis",
    email: "michael.lewis@gmail.com",
    status: Status.Inactive,
    role: "Manager",
  },
  {
    id: "n3a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Nancy Robinson",
    email: "nancy.robinson@gmail.com",
    status: Status.Active,
    role: "Designer",
  },
  {
    id: "o3a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Oliver White",
    email: "oliver.white@gmail.com",
    status: Status.Onboarding,
    role: "Developer",
  },
  {
    id: "p3a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Pamela Johnson",
    email: "pamela.johnson@gmail.com",
    status: Status.Inactive,
    role: "Manager",
  },
  {
    id: "q3a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Quentin Wright",
    email: "quentin.wright@gmail.com",
    status: Status.Active,
    role: "Designer",
  },
  {
    id: "r3a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Rachel Brown",
    email: "rachel.brown@gmail.com",
    status: Status.Onboarding,
    role: "Developer",
  },
  {
    id: "s3a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Steven Harris",
    email: "steven.harris@gmail.com",
    status: Status.Inactive,
    role: "Manager",
  },
  {
    id: "t3a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Tina Clark",
    email: "tina.clark@gmail.com",
    status: Status.Active,
    role: "Designer",
  },
  {
    id: "u3a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Uma Scott",
    email: "uma.scott@gmail.com",
    status: Status.Onboarding,
    role: "Developer",
  },
  {
    id: "v3a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Victor Young",
    email: "victor.young@gmail.com",
    status: Status.Inactive,
    role: "Manager",
  },
  {
    id: "w3a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Wendy Hill",
    email: "wendy.hill@gmail.com",
    status: Status.Active,
    role: "Designer",
  },
  {
    id: "x3a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Xander Evans",
    email: "xander.evans@gmail.com",
    status: Status.Onboarding,
    role: "Developer",
  },
  {
    id: "z3a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Zachary Clark",
    email: "zachary.clark@gmail.com",
    status: Status.Active,
    role: "Designer",
  },
  {
    id: "a4a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Amanda Lewis",
    email: "amanda.lewis@gmail.com",
    status: Status.Onboarding,
    role: "Developer",
  },
  {
    id: "c4a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Catherine White",
    email: "catherine.white@gmail.com",
    status: Status.Active,
    role: "Designer",
  },
  {
    id: "d4a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "David Johnson",
    email: "david.johnson@gmail.com",
    status: Status.Onboarding,
    role: "Developer",
  },
  {
    id: "e4a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Ella Wright",
    email: "ella.wright@gmail.com",
    status: Status.Inactive,
    role: "Manager",
  },
  {
    id: "f4a7b6d3-6b0c-4c7a-9a3e-8c1f7d58c5f",
    name: "Fiona Brown",
    email: "fiona.brown@gmail.com",
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
    cell: ({ row }) => <div className="w-28">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableSortingHeader column={column}>Status</DataTableSortingHeader>
    ),
    cell: ({ row }) => {
      const status: Status = row.getValue("status");

      return <Badge variant={STATUS_BADGE_VARIANTS[status]}>{status}</Badge>;
    },
  },
  {
    accessorKey: "role",
    header: ({ column }) => (
      <DataTableSortingHeader column={column}>Role</DataTableSortingHeader>
    ),
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

  const toggleSorting = () => {
    if (column.getIsSorted() === "asc") {
      column.toggleSorting(true, true);
    } else if (column.getIsSorted() === "desc") {
      column.clearSorting();
    } else {
      column.toggleSorting(false, true);
    }
  };

  return (
    <Button
      variant="ghost"
      onClick={toggleSorting}
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
    <div className="flex w-full flex-col gap-y-3">
      <div>
        <div className="relative">
          <SearchIcon
            size={16}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            placeholder="Search for employees..."
            inputSize="sm"
            value={table.getColumn("name")?.getFilterValue() as string}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="pl-8"
          />
        </div>
      </div>
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
                  className="h-16 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <Pagination className="justify-end">
        <PaginationContent className="gap-x-3">
          <PaginationItem>
            <PaginationPreviousButton
              variant="outline"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNextButton
              variant="outline"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
