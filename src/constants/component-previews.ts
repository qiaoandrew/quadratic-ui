import ButtonDemo from "~/components/demos/button/ButtonDemo";
import SecondaryButtonDemo from "~/components/demos/button/SecondaryButtonDemo";
import OutlineButtonDemo from "~/components/demos/button/OutlineButtonDemo";
import DestructiveButtonDemo from "~/components/demos/button/DestructiveButtonDemo";
import DestructiveOutlineButtonDemo from "~/components/demos/button/DestructiveOutlineButtonDemo";

export const COMPONENT_PREVIEWS = {
  button: {
    PreviewComponent: ButtonDemo,
    path: "src/components/demos/button/ButtonDemo.tsx",
  },
  "secondary-button": {
    PreviewComponent: SecondaryButtonDemo,
    path: "src/components/demos/button/SecondaryButtonDemo.tsx",
  },
  "outline-button": {
    PreviewComponent: OutlineButtonDemo,
    path: "src/components/demos/button/OutlineButtonDemo.tsx",
  },
  "destructive-button": {
    PreviewComponent: DestructiveButtonDemo,
    path: "src/components/demos/button/DestructiveButtonDemo.tsx",
  },
  "destructive-outline-button": {
    PreviewComponent: DestructiveOutlineButtonDemo,
    path: "src/components/demos/button/DestructiveOutlineButtonDemo.tsx",
  },
};
