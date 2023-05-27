

export default function Page({
  params,
}: {
  params: {
    id: number;
  };
}) {
  return <h1>Movie id {params.id}</h1>;
}
