"use client";

import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { useRef, useState } from "react";
import styles from "./styles.module.css";

type MenuItem = {
  label: string;
  url: Url;
};

type PropsMenuButton = {
  labelButton: string;
  children: React.ReactNode;
  menuItems: MenuItem[];
  classNameMenuButton?: string;
};

export default function MenuButton({
  labelButton,
  children,
  menuItems,
  classNameMenuButton,
}: PropsMenuButton) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLAnchorElement[] | null>(null);

  function getItemsRef() {
    if (!itemsRef.current) {
      itemsRef.current = [];
    }
    return itemsRef.current;
  }

  /*function handleButtonClick() {
    setIsOpen(!isOpen);
  }*/

  function setFocusToMenuItem(newMenuItem: HTMLAnchorElement) {
    const items = getItemsRef();
    items.map((item) => {
      if (item === newMenuItem) {
        item.tabIndex = 0;
        newMenuItem.focus();
      } else {
        item.tabIndex = -1;
      }
      return item;
    });
  }

  function handleKeydownButton(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Tab") {
      return;
    }
    event.preventDefault();
    switch (event.key) {
      case " ":
      case "Enter":
      case "ArrowDown":
      case "Down": {
        setIsOpen(true);
        const items = getItemsRef();
        console.log(items[0]);
        setFocusToMenuItem(items[0]);
        break;
      }
      case "Esc":
      case "Escape":
        setIsOpen(false);
        buttonRef.current?.focus();
        break;
      case "Up":
      case "ArrowUp": {
        setIsOpen(true);
        const items = getItemsRef();
        setFocusToMenuItem(items[items.length - 1]);
        break;
      }
      default:
        break;
    }
  }

  function handleBlur() {
    if (!containerRef.current?.contains(document.activeElement)) {
      setIsOpen(false);
    }
  }

  return (
    <div onBlur={handleBlur} className={styles.container} ref={containerRef}>
      <button
        ref={buttonRef}
        type="button"
        id="menubutton"
        aria-haspopup="true"
        aria-controls="menu2"
        aria-label={labelButton}
        title={labelButton}
        aria-expanded={isOpen}
        /*onClick={handleButtonClick}*/
        onKeyDown={handleKeydownButton}
        className={
          classNameMenuButton
            ? `${styles.menuButton} ${classNameMenuButton}`
            : styles.menuButton
        }
      >
        {children}
      </button>
      <ul
        id="menu2"
        role="menu"
        aria-labelledby="menubutton"
        className={isOpen ? `${styles.menu} ${styles.menuOpen}` : styles.menu}
      >
        {menuItems.map((item, index) => (
          <li key={index} role="none" className={styles.item}>
            <Link
              href={item.url}
              rel="next"
              role="menuitem"
              title={item.label}
              ref={(node) => {
                const items = getItemsRef();
                if (node) {
                  items[index] = node;
                } else {
                  items.splice(index, 1);
                }
              }}
              className={styles.link}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
