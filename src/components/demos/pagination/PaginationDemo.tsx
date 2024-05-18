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
          <PaginationPreviousLink href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNextLink href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
