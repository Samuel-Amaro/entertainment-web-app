import SectionMoviesTreding from "@/components/SectionMoviesTrending";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<p>Loading Movies Trending...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <SectionMoviesTreding />
      </Suspense>
    </main>
  );
}
