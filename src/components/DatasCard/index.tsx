import IconCategoryMovie from "../Icons/IconCategoryMovie";
import IconCategoryTv from "../Icons/IconCategoryTv";

interface PropsDatasCard {
  mediaType: string;
  releaseDate: string;
  title: string;
}

export default function DatasCard({
  mediaType,
  releaseDate,
  title,
}: PropsDatasCard) {
  return (
    <div>
      <p>
        <span>
          {mediaType === "movie" ? <IconCategoryMovie /> : <IconCategoryTv />}
          {mediaType}
        </span>
        <span></span>
        <span>{new Date(releaseDate).getFullYear()}</span>
      </p>
      <h3>{title}</h3>
    </div>
  );
}
