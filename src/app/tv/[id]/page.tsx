type Props = {
  params: { id: number };
};

export default function Page({ params }: Props) {
  return <h1>Page TV id {params.id}</h1>;
}
