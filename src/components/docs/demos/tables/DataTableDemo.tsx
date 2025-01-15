"use client";

import { Fragment, useState } from "react";
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
  ChevronDownIcon,
  ChevronUpIcon,
  CodeIcon,
  CodeXmlIcon,
  CopyIcon,
  EditIcon,
  GlobeIcon,
  LockIcon,
  MoreVerticalIcon,
  PauseIcon,
  SearchIcon,
  SmartphoneIcon,
  SquareDashedBottomCodeIcon,
  TrashIcon,
  UnplugIcon,
  VideoIcon,
  ZapIcon,
} from "lucide-react";

import { cn } from "~/utils/tailwind";

import { Checkbox } from "~/components/ui/Checkbox";
import { Button } from "~/components/ui/Button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
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

type ColumnMeta = {
  name: string;
};

const columns: ColumnDef<Test, ColumnMeta>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <TableHead>
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="block size-3.5"
        />
      </TableHead>
    ),
    cell: ({ row }) => (
      <TableCell>
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="block size-3.5"
        />
      </TableCell>
    ),
    meta: {
      name: "Select",
    },
  },
  {
    id: "name",
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableSortingHead column={column}>Name</DataTableSortingHead>
    ),
    cell: ({ row }) => (
      <TableCell className="w-44 max-w-44">{row.getValue("name")}</TableCell>
    ),
    meta: {
      name: "Name",
    },
  },
  {
    id: "status",
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableSortingHead column={column}>Status</DataTableSortingHead>
    ),
    cell: ({ row }) => <StatusCell status={row.getValue("status")} />,
    meta: {
      name: "Status",
    },
  },
  {
    id: "type",
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableSortingHead column={column}>Type</DataTableSortingHead>
    ),
    cell: ({ row }) => <TypeCell type={row.getValue("type")} />,
    meta: {
      name: "Type",
    },
  },
  {
    id: "domain",
    accessorKey: "domain",
    header: ({ column }) => (
      <DataTableSortingHead column={column}>Domain</DataTableSortingHead>
    ),
    cell: ({ row }) => (
      <TableCell className="w-40 max-w-40">{row.getValue("domain")}</TableCell>
    ),
    meta: {
      name: "Domain",
    },
  },
  {
    id: "tags",
    accessorKey: "tags",
    header: ({ column }) => (
      <DataTableSortingHead column={column}>Tags</DataTableSortingHead>
    ),
    cell: ({ row }) => (
      <TagsCell tags={row.getValue("tags")} className="w-16" />
    ),
    meta: {
      name: "Tags",
    },
  },
  {
    id: "envs",
    accessorKey: "envs",
    header: ({ column }) => (
      <DataTableSortingHead column={column}>Envs</DataTableSortingHead>
    ),
    cell: ({ row }) => (
      <TagsCell tags={row.getValue("envs")} className="w-36 max-w-36" />
    ),
    meta: {
      name: "Envs",
    },
  },
  {
    id: "team",
    accessorKey: "team",
    header: ({ column }) => (
      <DataTableSortingHead column={column}>Team</DataTableSortingHead>
    ),
    cell: ({ row }) => <TeamCell team={row.getValue("team")} />,
    meta: {
      name: "Team",
    },
  },
  {
    id: "uptime",
    accessorKey: "uptime",
    header: ({ column }) => (
      <DataTableSortingHead column={column}>Uptime</DataTableSortingHead>
    ),
    cell: ({ row }) => <UptimeCell uptime={row.getValue("uptime")} />,
    meta: {
      name: "Uptime",
    },
  },
  {
    id: "lastModified",
    accessorKey: "lastModified",
    header: ({ column }) => (
      <DataTableSortingHead
        column={column}
        className="flex-row-reverse justify-start"
      >
        Last Modified
      </DataTableSortingHead>
    ),
    cell: ({ row }) => (
      <TableCell className="w-36 max-w-36 text-right">
        {getTimeAgo(row.getValue("lastModified"))}
      </TableCell>
    ),
    meta: {
      name: "Last Modified",
    },
  },
  {
    id: "actions",
    header: () => <TableHead />,
    cell: () => (
      <TableCell className="last:pr-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="xs"
              subject="icon"
              className="size-6 rounded-1"
            >
              <span className="sr-only">Open menu</span>
              <MoreVerticalIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem inset>
              <PauseIcon className="text-muted-foreground" />
              Pause
            </DropdownMenuItem>
            <DropdownMenuItem inset>
              <ZapIcon className="text-muted-foreground" />
              Run Test Now
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem inset>
              <EditIcon className="text-muted-foreground" />
              Edit Test
            </DropdownMenuItem>
            <DropdownMenuItem inset>
              <VideoIcon className="text-muted-foreground" />
              Edit Recording
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem inset>
              <CopyIcon className="text-muted-foreground" />
              Clone
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem inset>
              <LockIcon className="text-muted-foreground" />
              Permissions
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem inset>
              <TrashIcon className="text-muted-foreground" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    ),
    meta: {
      name: "Actions",
    },
  },
];

export default function DataTableDemo() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data: TESTS,
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
      <div className="flex gap-x-3">
        <div className="relative grow">
          <SearchIcon className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search for tests..."
            inputSize="sm"
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="pl-8"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="shrink-0 px-2.5">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {(column.columnDef.meta as ColumnMeta).name}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="overflow-auto rounded-2 border">
        <Table className="w-max min-w-full table-fixed">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <Fragment key={header.id}>
                    {header.isPlaceholder ? (
                      <TableHead />
                    ) : (
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )
                    )}
                  </Fragment>
                ))}
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
                    <Fragment key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </Fragment>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length}>No results.</TableCell>
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
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNextButton
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

interface DataTableSortingHeadProps {
  column: Column<Test, ColumnMeta>;
  className?: string;
  children: React.ReactNode;
}

function DataTableSortingHead({
  column,
  className,
  children,
}: DataTableSortingHeadProps) {
  const Icon =
    column.getIsSorted() &&
    (column.getIsSorted() === "asc" ? ChevronUpIcon : ChevronDownIcon);

  return (
    <TableHead className="p-0">
      <Button
        variant="ghost"
        size="md"
        onClick={() => column.toggleSorting()}
        className={cn(
          "size-full justify-start gap-x-1 px-3 hover:bg-transparent",
          className,
        )}
      >
        {children} {Icon && <Icon />}
      </Button>
    </TableHead>
  );
}

function StatusCell({ status }: { status: TestStatus }) {
  return (
    <TableCell className="w-24 max-w-24">
      <div
        className={cn(
          "w-18 rounded-1 py-1 text-center text-3 font-medium uppercase",
          status === TestStatus.OK && "bg-success text-success-foreground",
          status === TestStatus.Alert &&
            "bg-destructive text-destructive-foreground",
          status === TestStatus.Paused && "bg-muted text-muted-foreground",
        )}
      >
        {status}
      </div>
    </TableCell>
  );
}

function TypeCell({ type }: { type: TestType }) {
  const Icon = TEST_TYPE_ICON[type];

  return (
    <TableCell className="w-32 max-w-32">
      <div className="flex items-center gap-x-1.5">
        <Icon size={14} className="shrink-0 text-muted-foreground" />
        <p className="overlow-hidden grow truncate">{type}</p>
      </div>
    </TableCell>
  );
}

function TagsCell({ tags, className }: { tags: string[]; className?: string }) {
  return (
    <TableCell className={className}>
      <div className="flex items-center gap-x-1.5">
        {tags.map((tag, i) => (
          <div className="rounded-1 bg-muted px-1.5 py-1" key={i}>
            {tag}
          </div>
        ))}
      </div>
    </TableCell>
  );
}

function TeamCell({ team }: { team: string }) {
  return (
    <TableCell className="w-36">
      <span className="rounded-full border px-2 py-1">{team}</span>
    </TableCell>
  );
}

function UptimeCell({ uptime }: { uptime: number | null }) {
  const failureWidth = uptime === null ? "100%" : `calc(100% - ${uptime}%)`;

  return (
    <TableCell className="w-40 max-w-40">
      {uptime === null && (
        <span className="italic text-muted-foreground">No uptime data</span>
      )}
      {uptime !== null && (
        <span className="flex items-center justify-between gap-x-1 font-semibold">
          {uptime}%
          <span className="relative h-4 w-20 bg-emerald-600">
            <span
              className="absolute inset-y-0 right-0 bg-red-600"
              style={{ width: failureWidth }}
            />
          </span>
        </span>
      )}
    </TableCell>
  );
}

const getTimeAgo = (timestamp: string) => {
  const date = new Date(timestamp);
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return `${interval} Years Ago`;
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return `${interval} Months Ago`;
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return `${interval} Days Ago`;
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return `${interval} Hours Ago`;
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return `${interval} Minutes Ago`;
  }
  return `${Math.floor(seconds)} Seconds Ago`;
};

enum TestStatus {
  OK = "OK",
  Alert = "Alert",
  Paused = "Paused",
}

enum TestType {
  Browser = "Browser",
  API = "API",
  MultistepAPI = "Multistep API",
  Mobile = "Mobile",
  WebSocket = "WebSocket",
  SSL = "SSL",
  gRPC = "gRPC",
}

const TEST_TYPE_ICON = {
  [TestType.Browser]: GlobeIcon,
  [TestType.API]: CodeIcon,
  [TestType.MultistepAPI]: CodeXmlIcon,
  [TestType.Mobile]: SmartphoneIcon,
  [TestType.WebSocket]: UnplugIcon,
  [TestType.SSL]: LockIcon,
  [TestType.gRPC]: SquareDashedBottomCodeIcon,
};

type Test = {
  id: string;
  name: string;
  status: TestStatus;
  type: TestType;
  domain: string;
  tags: string[];
  envs: string[];
  team: string;
  uptime: number | null;
  lastModified: string;
};

const TESTS: Test[] = [
  {
    id: "eb93361a-6e6b-4ca7-bdfa-8cb197d58c5f",
    name: "User Login",
    status: TestStatus.OK,
    type: TestType.Browser,
    domain: "www.notion.so/login",
    tags: ["p0"],
    envs: ["prod"],
    team: "Authentication",
    uptime: 100,
    lastModified: "2022-01-01T00:00:00.000Z",
  },
  {
    id: "a1b2c3d4-e5f6-7g8h-9i0j-klmnopqrstuv",
    name: "Sign-Up Flow",
    status: TestStatus.Paused,
    type: TestType.Browser,
    domain: "www.notion.so/signup",
    tags: ["p1"],
    envs: ["staging"],
    team: "Onboarding",
    uptime: 95,
    lastModified: "2023-03-01T12:34:56.789Z",
  },
  {
    id: "w1x2y3z4-a5b6-c7d8-e9f0-ghijklmnopqr",
    name: "User Data API",
    status: TestStatus.OK,
    type: TestType.API,
    domain: "api.notion.so/user",
    tags: ["p0"],
    envs: ["prod"],
    team: "Backend",
    uptime: 90.7,
    lastModified: "2023-02-15T09:21:45.123Z",
  },
  {
    id: "s1t2u3v4-w5x6-y7z8-a9b0-cdefghijklmn",
    name: "Document Creation",
    status: TestStatus.OK,
    type: TestType.Browser,
    domain: "www.notion.so/create-document",
    tags: ["p2"],
    envs: ["prod", "staging"],
    team: "Editor",
    uptime: 100,
    lastModified: "2023-05-10T08:17:24.456Z",
  },
  {
    id: "o1p2q3r4-s5t6-u7v8-w9x0-yzabcdefghijkl",
    name: "Mobile Login",
    status: TestStatus.OK,
    type: TestType.Mobile,
    domain: "m.notion.so/login",
    tags: ["p0"],
    envs: ["prod"],
    team: "Mobile",
    uptime: 99.9,
    lastModified: "2023-04-05T15:32:18.789Z",
  },
  {
    id: "m1n2o3p4-q5r6-s7t8-u9v0-wxyzabcdefghij",
    name: "WebSocket Connection",
    status: TestStatus.Alert,
    type: TestType.WebSocket,
    domain: "ws.notion.so/connect",
    tags: ["p1"],
    envs: ["prod"],
    team: "Realtime",
    uptime: 97.3,
    lastModified: "2023-01-20T11:45:33.567Z",
  },
  {
    id: "k1l2m3n4-o5p6-q7r8-s9t0-uvwxyzabcdefg",
    name: "Payment Gateway",
    status: TestStatus.OK,
    type: TestType.API,
    domain: "api.notion.so/payment",
    tags: ["p0"],
    envs: ["prod"],
    team: "Payments",
    uptime: 100,
    lastModified: "2023-06-01T10:12:45.678Z",
  },
  {
    id: "j1k2l3m4-n5o6-p7q8-r9s0-tuvwxyzabcdef",
    name: "SSL Certificate Check",
    status: TestStatus.OK,
    type: TestType.SSL,
    domain: "www.notion.so",
    tags: ["p0"],
    envs: ["prod"],
    team: "Security",
    uptime: null,
    lastModified: "2023-02-28T14:27:36.890Z",
  },
  {
    id: "i1j2k3l4-m5n6-o7p8-q9r0-stuvwxyzabcde",
    name: "gRPC User Service",
    status: TestStatus.OK,
    type: TestType.gRPC,
    domain: "api.notion.so/user",
    tags: ["p1"],
    envs: ["prod"],
    team: "Backend",
    uptime: 99.2,
    lastModified: "2023-03-14T16:38:49.012Z",
  },
  {
    id: "g1h2i3j4-k5l6-m7n8-o9p0-qrsuvwxyzabc",
    name: "User Profile Load",
    status: TestStatus.OK,
    type: TestType.Browser,
    domain: "www.notion.so/profile",
    tags: ["p2"],
    envs: ["prod"],
    team: "Frontend",
    uptime: 99.8,
    lastModified: "2023-05-30T09:48:12.678Z",
  },
  {
    id: "f1g2h3i4-j5k6-l7m8-n9o0-pqrstuvwxyzab",
    name: "API Rate Limiting",
    status: TestStatus.OK,
    type: TestType.API,
    domain: "api.notion.so/rate-limit",
    tags: ["p0"],
    envs: ["prod"],
    team: "Backend",
    uptime: 97.9,
    lastModified: "2023-01-18T17:29:45.789Z",
  },
  {
    id: "e1f2g3h4-i5j6-k7l8-m9n0-opqrstuvwxyz",
    name: "Mobile Push Notifications",
    status: TestStatus.OK,
    type: TestType.Mobile,
    domain: "m.notion.so/notifications",
    tags: ["p1"],
    envs: ["prod"],
    team: "Mobile",
    uptime: 100,
    lastModified: "2023-03-08T10:56:34.123Z",
  },
  {
    id: "d1e2f3g4-h5i6-j7k8-l9m0-nopqrstuvwxy",
    name: "WebSocket Message Delivery",
    status: TestStatus.OK,
    type: TestType.WebSocket,
    domain: "ws.notion.so/messages",
    tags: ["p0"],
    envs: ["prod"],
    team: "Realtime",
    uptime: 98.4,
    lastModified: "2023-04-12T12:34:56.456Z",
  },
  {
    id: "c1d2e3f4-g5h6-i7j8-k9l0-mnopqrstuvwx",
    name: "SSL Expiration Check",
    status: TestStatus.OK,
    type: TestType.SSL,
    domain: "www.notion.so",
    tags: ["p0"],
    envs: ["prod"],
    team: "Security",
    uptime: null,
    lastModified: "2023-02-21T14:47:39.678Z",
  },
  {
    id: "b1c2d3e4-f5g6-h7i8-j9k0-lmnopqrstuvw",
    name: "gRPC Payment Service",
    status: TestStatus.OK,
    type: TestType.gRPC,
    domain: "api.notion.so/payment",
    tags: ["p1"],
    envs: ["prod"],
    team: "Payments",
    uptime: 99.0,
    lastModified: "2023-03-29T16:58:21.890Z",
  },
  {
    id: "a1b2c3d4-e5f6-g7h8-i9j0-klmnopqrstuv",
    name: "Multistep Order Processing",
    status: TestStatus.Paused,
    type: TestType.MultistepAPI,
    domain: "api.notion.so/order",
    tags: ["p2"],
    envs: ["staging"],
    team: "E-commerce",
    uptime: 98.2,
    lastModified: "2023-05-02T11:23:45.123Z",
  },
  {
    id: "z1y2x3w4-v5u6-t7s8-r9q0-ponmlkjihgfe",
    name: "API Key Validation",
    status: TestStatus.OK,
    type: TestType.API,
    domain: "api.notion.so/key-validation",
    tags: ["p0"],
    envs: ["prod"],
    team: "Security",
    uptime: 100,
    lastModified: "2023-06-04T13:12:34.456Z",
  },
  {
    id: "x1w2v3u4-t5s6-r7q8-p9o0-nmlkjihgfe",
    name: "User Profile Picture Upload",
    status: TestStatus.OK,
    type: TestType.Browser,
    domain: "www.notion.so/upload-profile-pic",
    tags: ["p1"],
    envs: ["prod"],
    team: "Frontend",
    uptime: 99.6,
    lastModified: "2023-03-18T14:28:39.567Z",
  },
  {
    id: "w1v2u3t4-s5r6-q7p8-o9n0-lkjihgfedcba",
    name: "Document Collaboration",
    status: TestStatus.OK,
    type: TestType.WebSocket,
    domain: "ws.notion.so/collaboration",
    tags: ["p2"],
    envs: ["prod"],
    team: "Realtime",
    uptime: 97.8,
    lastModified: "2023-05-06T16:47:12.890Z",
  },
  {
    id: "v1u2t3s4-r5q6-p7o8-n9m0-kjihgfedcb",
    name: "Mobile Document Editing",
    status: TestStatus.Paused,
    type: TestType.Mobile,
    domain: "m.notion.so/edit-document",
    tags: ["p0"],
    envs: ["prod"],
    team: "Mobile",
    uptime: 100,
    lastModified: "2023-04-30T12:39:45.678Z",
  },
  {
    id: "u1t2s3r4-q5p6-o7n8-m9l0-jihgfedcba",
    name: "Multistep Payment Process",
    status: TestStatus.OK,
    type: TestType.MultistepAPI,
    domain: "api.notion.so/payment-process",
    tags: ["p1"],
    envs: ["staging"],
    team: "Payments",
    uptime: 98.3,
    lastModified: "2023-03-10T09:58:27.345Z",
  },
  {
    id: "t1s2r3q4-p5o6-n7m8-l9k0-ihgfedcbazyx",
    name: "Notification Delivery",
    status: TestStatus.OK,
    type: TestType.API,
    domain: "api.notion.so/notifications",
    tags: ["p0"],
    envs: ["prod"],
    team: "Backend",
    uptime: 99.9,
    lastModified: "2023-01-25T15:16:38.456Z",
  },
  {
    id: "s1r2q3p4-o5n6-m7l8-k9j0-hgfedcba",
    name: "API User Authentication",
    status: TestStatus.Alert,
    type: TestType.API,
    domain: "api.notion.so/authenticate",
    tags: ["p0"],
    envs: ["prod"],
    team: "Authentication",
    uptime: 100,
    lastModified: "2023-06-07T10:47:45.123Z",
  },
  {
    id: "r1q2p3o4-n5m6-l7k8-j9i0-gfedcba",
    name: "API Data Encryption",
    status: TestStatus.OK,
    type: TestType.API,
    domain: "api.notion.so/encrypt",
    tags: ["p1"],
    envs: ["prod"],
    team: "Security",
    uptime: 98.1,
    lastModified: "2023-02-22T14:38:56.789Z",
  },
  {
    id: "q1p2o3n4-m5l6-k7j8-i9h0-fedcba",
    name: "Mobile API Integration",
    status: TestStatus.OK,
    type: TestType.Mobile,
    domain: "m.notion.so/api",
    tags: ["p2"],
    envs: ["prod"],
    team: "Mobile",
    uptime: 99.7,
    lastModified: "2023-03-29T11:27:39.456Z",
  },
  {
    id: "p1o2n3m4-l5k6-j7i8-h9g0-edcba",
    name: "Multistep Profile Update",
    status: TestStatus.OK,
    type: TestType.MultistepAPI,
    domain: "api.notion.so/update-profile",
    tags: ["p1"],
    envs: ["staging"],
    team: "Backend",
    uptime: 97.5,
    lastModified: "2023-05-01T12:16:49.678Z",
  },
  {
    id: "o1n2m3l4-k5j6-i7h8-g9f0-dcba",
    name: "WebSocket Real-time Updates",
    status: TestStatus.Alert,
    type: TestType.WebSocket,
    domain: "ws.notion.so/updates",
    tags: ["p0"],
    envs: ["prod"],
    team: "Realtime",
    uptime: 98.9,
    lastModified: "2023-04-11T16:28:50.123Z",
  },
  {
    id: "y1z2x3w4-v5u6-t7s8-r9q0-ponmlkjihgfe",
    name: "File Upload API",
    status: TestStatus.OK,
    type: TestType.API,
    domain: "api.notion.so/file-upload",
    tags: ["p1"],
    envs: ["prod"],
    team: "Backend",
    uptime: 98.5,
    lastModified: "2023-04-25T11:24:36.456Z",
  },
  {
    id: "z2y3x4w5-v6u7-t8s9-r0q1-ponmlkjihgfe",
    name: "Mobile Sign-Up Flow",
    status: TestStatus.OK,
    type: TestType.Mobile,
    domain: "m.notion.so/signup",
    tags: ["p0"],
    envs: ["prod"],
    team: "Mobile",
    uptime: 99.2,
    lastModified: "2023-03-22T14:35:47.789Z",
  },
  {
    id: "a2b3c4d5-e6f7-g8h9-i0j1-klmnopqrstuv",
    name: "Document Sharing",
    status: TestStatus.Paused,
    type: TestType.Browser,
    domain: "www.notion.so/share-document",
    tags: ["p2"],
    envs: ["staging"],
    team: "Collaboration",
    uptime: 95.3,
    lastModified: "2023-05-18T10:47:58.123Z",
  },
];
