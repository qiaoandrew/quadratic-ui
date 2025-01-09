"use client";

import { Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNextButton,
  PaginationPreviousButton,
} from "~/components/ui/Pagination";

const TOTAL_PAGES = 3;

export default function PaginationDemo() {
  return (
    <Suspense>
      <PaginationDemoContent />
    </Suspense>
  );
}

function PaginationDemoContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const curPage = parseInt(searchParams.get("page")?.toString() ?? "1");

  const handleChangePage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handlePrevPage = () => {
    if (curPage > 1) {
      handleChangePage(curPage - 1);
    }
  };

  const handleNextPage = () => {
    if (curPage < TOTAL_PAGES) {
      handleChangePage(curPage + 1);
    }
  };

  return (
    <Pagination className="z-10">
      <PaginationContent className="gap-x-1">
        <PaginationItem>
          <PaginationPreviousButton
            onClick={handlePrevPage}
            disabled={curPage === 1}
            size="sm"
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationButton
            onClick={() => handleChangePage(1)}
            isActive={curPage === 1}
            size="sm"
          >
            1
          </PaginationButton>
        </PaginationItem>
        <PaginationItem>
          <PaginationButton
            onClick={() => handleChangePage(2)}
            isActive={curPage === 2}
            size="sm"
          >
            2
          </PaginationButton>
        </PaginationItem>
        <PaginationItem>
          <PaginationButton
            onClick={() => handleChangePage(3)}
            isActive={curPage === 3}
            size="sm"
          >
            3
          </PaginationButton>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis className="size-8 [&>svg]:size-4" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNextButton
            onClick={handleNextPage}
            disabled={curPage === TOTAL_PAGES}
            size="sm"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
