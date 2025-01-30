import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/Breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/DropdownMenu";

export default function BreadcrumbDemo() {
  return (
    <Breadcrumb className="relative z-10">
      <BreadcrumbList className="text-3 gap-1.5">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="[&>svg]:size-3" />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-x-1">
              <BreadcrumbEllipsis className="size-4 [&>svg]:size-3.5" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="rounded-1.5 min-w-36">
              <DropdownMenuItem className="text-3 px-1.5 py-1" asChild>
                <a href="/docs/getting-started/quickstart">Documentation</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-3 px-1.5 py-1" asChild>
                <a
                  href="https://github.com/qiaoandrew/quadratic-ui"
                  rel="noreferrer noopenner"
                >
                  GitHub
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-3 px-1.5 py-1" asChild>
                <a
                  href="https://www.figma.com/community/file/1351315753275186770/quadratic-ui"
                  rel="noreferrer noopenner"
                >
                  Figma
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="[&>svg]:size-3" />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/docs/components/primitives/accordion">Components</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="[&>svg]:size-3" />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
