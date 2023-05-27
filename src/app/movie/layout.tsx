
import Search from "@/components/Search";

export default function MovieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Search placeholder="Search for movies" />
      </header>
      {children}
    </>
  );
}
