import { Header } from "@/app/components"

export default async function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
