"use client";

import { MouseEvent, useCallback, useEffect, useRef } from "react";
import styles from "./overlay.module.css";
import { createPortal } from "react-dom";

export default function Overlay({
  children,
  onHandle,
}: {
  children: React.ReactNode;
  onHandle: (isOppen: boolean) => void;
}) {
  const overlay = useRef<HTMLDivElement | null>(null);
  const wrapper = useRef<HTMLDivElement | null>(null);

  const handleClick = useCallback(
    (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        onHandle(false);
      }
    },
    [overlay, wrapper, onHandle]
  );

  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onHandle(false);
      }
    },
    [onHandle]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [handleKeydown]);

  useEffect(() => {
    document.body.classList.add("has-dialog");

    return () => {
      document.body.classList.remove("has-dialog");
    };
  }, []);

  const ui = (
    <div className={styles.overlay} ref={overlay} onClick={handleClick}>
      <div className={styles.wrapper} ref={wrapper}>
        {children}
      </div>
    </div>
  );

  return createPortal(ui, document.body);
}
