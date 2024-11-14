"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  AddLabels,
  AssignToIcon,
  BacklogIcon,
  ChangePriorityIcon,
  ChangeStatusIcon,
  DoneIcon,
  HighIcon,
  InProgressIcon,
  LabelIcon,
  LowIcon,
  MediumIcon,
  NoPriorityIcon,
  PersonIcon,
  TodoIcon,
  UrgentIcon,
} from "./icons/command-menu";
import clsx from "clsx";

const commandOptions = [
  {
    label: "Assign to...",
    icon: AssignToIcon,
    subOptions: [
      { label: "Jori", icon: PersonIcon },
      { label: "Karri", icon: PersonIcon },
      { label: "Tuomas", icon: PersonIcon },
    ],
  },
  {
    label: "Change status...",
    icon: ChangeStatusIcon,
    subOptions: [
      { label: "Backlog", icon: BacklogIcon },
      { label: "Todo", icon: TodoIcon },
      { label: "In Progress", icon: InProgressIcon },
      { label: "Done", icon: DoneIcon },
    ],
  },
  {
    label: "Change priority...",
    icon: ChangePriorityIcon,
    subOptions: [
      { label: "No priority", icon: NoPriorityIcon },
      { label: "Urgent", icon: UrgentIcon },
      { label: "High", icon: HighIcon },
      { label: "Medium", icon: MediumIcon },
      { label: "Low", icon: LowIcon },
    ],
  },
  {
    label: "Add labels...",
    icon: AddLabels,
    subOptions: [
      { label: "Bug", icon: () => <LabelIcon type="bug" /> },
      { label: "Feature", icon: () => <LabelIcon type="feature" /> },
      { label: "Improvement", icon: () => <LabelIcon type="improvement" /> },
    ],
  },
];

const CommandMenu = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [opened, setOpened] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const isMenuButton =
        e.target instanceof HTMLButtonElement &&
        e.target.classList.contains("command-button");
      const clickedInside =
        isMenuButton || containerRef?.current?.contains(e.target as Node);

      setOpened(clickedInside ? true : false);
    };
    window.addEventListener("click", clickHandler);

    return () => {
      window.removeEventListener("click", clickHandler);
    };
  }, []);

  const currentOptions = useMemo(() => {
    if (selectedOption == null) {
      return commandOptions.filter((options) => {
        return options.label
          .toLowerCase()
          .startsWith(searchValue.toLowerCase());
      });
    }
    return commandOptions[selectedOption].subOptions.filter((option) => {
      return option.label.toLowerCase().startsWith(searchValue.toLowerCase());
    });
  }, [selectedOption, searchValue]);

  return (
    <div className={clsx(opened && "opened")} ref={containerRef}>
      <div
        className={clsx(
          "absolute left-1/2 top-1/2 flex w-full max-w-[90vw] -translate-x-1/3 flex-col items-start rounded-xl border border-transparent-white bg-transparent-white transition-[opacity,transform] md:w-[44rem] md:-translate-x-1/2 lg:w-[64rem]",
          opened
            ? "-translate-y-[20%] opacity-100 md:-translate-y-1/2"
            : "-translate-y-[20%] opacity-60 md:-translate-y-[20%]",
        )}
      >
        <span className="ml-4 mt-2 w-fit bg-white/[0.05] px-2 text-xs leading-10 text-white/[0.5]">
          LIN-111 Walkway lightning
        </span>
        <input
          type="text"
          className="w-full bg-transparent p-5 text-lg outline-none"
          placeholder="Type a command to search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <div className="flex w-full flex-col">
          {currentOptions.map(({ icon: Icon, label, ...items }, index) => {
            return (
              <button
                onClick={(e) => {
                  setSearchValue("");
                  const isRootItem = "subOptions" in items;
                  isRootItem
                    ? setSelectedOption(index)
                    : setSelectedOption(null);
                  if (!isRootItem) {
                    e.stopPropagation();
                    setOpened(false);
                  }
                }}
                className={clsx(
                  "command-button flex h-[4.6rem] items-center gap-3 px-5 text-sm first:bg-white/5 hover:bg-white/[0.01] hover:first:bg-white/5",
                )}
                key={label}
              >
                <Icon />
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CommandMenu;
