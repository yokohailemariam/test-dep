// Import the Client Component into a parent Layout (Server Component)

import { Header } from "@/app/_components";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
