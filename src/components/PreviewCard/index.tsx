import Link from "next/link";
import IconEye from "../Icons/IconEye";

interface PropsPreviewCard {
  className?: string;
}

export default function PreviewCard({ className }: PropsPreviewCard) {
  return (
    <div>
      <IconEye />
      <span>View</span>
    </div>
  );
}
