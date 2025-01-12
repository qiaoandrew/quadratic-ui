import { CategoryBar } from "~/components/charts/tremor/CategoryBar";

export default function CategoryBarMarkerDmeo() {
  return (
    <CategoryBar
      values={[10, 10, 20]}
      marker={{ value: 17, tooltip: "68", showAnimation: true }}
      colors={["pink", "amber", "emerald"]}
      className="w-full max-w-96"
    />
  );
}
