type Props = {
  params: { id: number };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default function Page({ searchParams }: Props) {
  return <h1>Page trending movies page {searchParams["page"]}</h1>;
}
