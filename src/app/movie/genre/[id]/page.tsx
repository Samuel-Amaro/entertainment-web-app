type Props = {
  params: { id: number };
};

export default function PageGenre({ params }: Props) {
  return <h1>Genre id {params.id}</h1>;
}
