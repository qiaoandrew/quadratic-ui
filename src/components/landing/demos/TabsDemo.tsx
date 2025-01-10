import { Tabs, TabsList, TabsTrigger } from "~/components/ui/Tabs";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="z-10">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
