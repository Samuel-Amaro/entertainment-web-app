interface PropsCardCommon {
  mediaType: string;
  date: string;
  titleOrName: string;
  posterPath: string;
}

export default function CardCommon({
  mediaType,
  date,
  titleOrName,
  posterPath,
}: PropsCardCommon) {
  return <div></div>;
}
