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
  return (
    <div className="relative">
      <div className="keyboard-mask absolute w-[200%] md:relative md:top-auto md:flex md:w-full md:justify-center">
        <Keyboard />
      </div>
      <div className="my-7 hidden h-[4rem] overflow-hidden md:block">
        <div className="flex h-[6rem] snap-x snap-mandatory gap-x-4 overflow-x-auto first:pl-[25vw] last:pr-[25vw]">
          {shortcuts.map((shortcut, index) => (
            <Button
              key={index}
              variant="secondary"
              size="small"
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
