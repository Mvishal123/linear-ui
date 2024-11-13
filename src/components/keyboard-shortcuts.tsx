"use client";

import { act, useEffect, useRef, useState } from "react";
import Button, { Hightlight } from "./button";
import Keyboard from "./illustrations/keyboard";

const shortcuts = [
  { text: "Opens command line", keys: "⌘k" },
  { text: "Assign issue to me", keys: "i" },
  { text: "Assign issue to", keys: "a" },
  { text: "Change issue status", keys: "s" },
  { text: "Set issue priority", keys: "p" },
  { text: "Add issue labels", keys: "l" },
  { text: "Set due date", keys: "⇧d" },
  { text: "Set parent issue", keys: "⇧⌘p" },
  { text: "Add sub-issue", keys: "⇧⌘o" },
  { text: "Create new issue", keys: "c" },
  { text: "Create new issue from template", keys: "⌥c" },
  { text: "Move to project", keys: "⇧p" },
];

const KeyboardShortcuts = () => {
  const activeKeyIndex = useRef<number>(0);
  const shortcutRef = useRef<HTMLDivElement>(null);
  const keyboardWrapperRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    nextShortcutKey();
    scheduleTimeout();

    return () => {
      if (timeoutRef.current)
        clearTimeout(timeoutRef.current as NodeJS.Timeout);
    };
  }, []);

  const scheduleTimeout = () => {
    timeoutRef.current = setTimeout(() => {
      nextShortcutKey();
    }, 2500);
  };

  const removeActiveKeys = () => {
    keyboardWrapperRef?.current
      ?.querySelectorAll(".key-active")
      .forEach((key) => key.classList.remove("key-active"));
  };

  const nextShortcutKey = () => {
    setActiveKey((activeKeyIndex.current + 1) % shortcuts.length);
  };

  const setActiveKey = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (keyboardWrapperRef.current === null || !shortcutRef.current) return;

    removeActiveKeys();
    activeKeyIndex.current = index;

    const shortcut = shortcutRef.current?.querySelector<HTMLButtonElement>(
      `button:nth-child(${index + 1})`,
    );

    if (!shortcut) return;

    shortcutRef.current?.scrollTo({
      left: shortcut?.offsetLeft - keyboardWrapperRef?.current?.clientWidth / 2,
      behavior: "smooth",
    });

    const activeKeys = shortcuts[activeKeyIndex.current].keys.split("");
    activeKeys.forEach((key) => {
      keyboardWrapperRef?.current
        ?.querySelector(`g[data-key=${key}] rect`)
        ?.classList.add("key-active");
    });

    scheduleTimeout();
  };

  const buttonClickHanlder = (index: number) => {
    setActiveKey(index);
  };

  return (
    <div className="relative">
      <div
        className="keyboard-mask absolute max-h-[30rem] w-[200%] md:relative md:top-auto md:flex md:w-full md:justify-center"
        ref={keyboardWrapperRef}
      >
        <Keyboard />
      </div>
      <div className="keyboard-shortcuts-mask my-7 hidden h-[4rem] overflow-hidden md:block">
        <div
          className="flex h-[6rem] snap-x snap-mandatory gap-x-4 overflow-x-auto first:pl-[25vw] last:pr-[25vw]"
          ref={shortcutRef}
        >
          {shortcuts.map((shortcut, index) => (
            <Button
              onClick={() => buttonClickHanlder(index)}
              key={index}
              variant="secondary"
              size="small"
              data-key={shortcut.keys}
              className="shrink-0 snap-center"
            >
              <Hightlight>{shortcut.keys}</Hightlight>
              <span>{shortcut.text}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyboardShortcuts;
