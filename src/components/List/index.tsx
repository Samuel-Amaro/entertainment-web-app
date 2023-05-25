import { Movie, TV } from "@/types";
import { Fragment } from "react";
import styles from "./List.module.css";

interface ListProps<T> {
  items: T[];
  limitRenderingItems: number;
  type: "trending" | "common";
  renderItem: (item: T, typeCard: "trending" | "common") => React.ReactNode;
}

export default function List<T extends Movie | TV>({
  items,
  limitRenderingItems,
  type,
  renderItem,
}: ListProps<T>) {
  const itemsLimited = items.filter(
    (item, index) => index < limitRenderingItems
  );
  return (
    <div
      className={type === "trending" ? styles.listTrending : styles.listCommon}
    >
      {itemsLimited.map((item, index) => (
        <Fragment key={index}>{renderItem(item, type)}</Fragment>
      ))}
    </div>
  );
}

