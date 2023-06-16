type Props = {
  params: { from: string };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function Page({ params, searchParams }: Props) {
  let pageIndex =
    searchParams["page"] && typeof searchParams["page"] === "string"
      ? Number(searchParams["page"])
      : 1;
  if (
    typeof pageIndex !== "number" ||
    pageIndex <= 0 ||
    pageIndex >= 500 ||
    isNaN(pageIndex)
    //http 422 page must be less than or equal to 500
  ) {
    pageIndex = 1;
  }

  return (
    <>
      <h2>Query: {searchParams["query"]}</h2>
      <h2>Page: {searchParams["page"]}</h2>
      <h2>From: {params.from}</h2>
    </>
  );
}
