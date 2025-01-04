import { Card, CardBody } from "~/components/ui/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/Carousel";

export default function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-80">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardBody className="flex aspect-[3/2] items-center justify-center p-6">
                  <span className="text-8 font-semibold">{index + 1}</span>
                </CardBody>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
