import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNextLink,
  PaginationPreviousLink,
} from "~/components/ui/Pagination";

export default function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPreviousLink href="?page=1" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=1">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=2" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="?page=3">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNextLink href="?page=3" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
