import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/Table";

import { cn } from "~/utils/tailwind";

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

const STATUS_BADGE_CLASSES: {
  [key in Status]: {
    text: string;
    border: string;
  };
} = {
  [Status.Active]: {
    text: "text-success-foreground",
    border: "border-success-border",
  },
  [Status.Inactive]: {
    text: "text-destructive-foreground",
    border: "border-destructive-border",
  },
  [Status.Onboarding]: {
    text: "text-warning-foreground",
    border: "border-warning-border",
  },
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

export default function TableDemo() {
  return (
    <Table>
      <TableCaption className="text-left">
        A list of your employees.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {USERS.slice(0, 10).map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <span
                className={cn(
                  "rounded-full border px-2 py-1",
                  STATUS_BADGE_CLASSES[user.status].border,
                  STATUS_BADGE_CLASSES[user.status].text,
                )}
              >
                {user.status}
              </span>
            </TableCell>
            <TableCell className="text-right">{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Count</TableCell>
          <TableCell className="text-right">10</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
