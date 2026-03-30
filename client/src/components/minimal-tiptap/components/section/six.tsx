import * as React from "react"
import type { Editor } from "@tiptap/react"
import { 
  TextAlignLeftIcon, 
  TextAlignCenterIcon, 
  TextAlignRightIcon, 
  TextAlignJustifyIcon 
} from "@radix-ui/react-icons"
import { ToolbarButton } from "../toolbar-button"

interface SectionSixProps {
  editor: Editor
}

export const SectionSix: React.FC<SectionSixProps> = ({ editor }) => {
  return (
    <div className="flex items-center gap-px">
      <ToolbarButton
        isActive={editor.isActive({ textAlign: "left" })}
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        tooltip="Align Left"
        aria-label="Align Left"
      >
        <TextAlignLeftIcon className="size-5" />
      </ToolbarButton>

      <ToolbarButton
        isActive={editor.isActive({ textAlign: "center" })}
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        tooltip="Align Center"
        aria-label="Align Center"
      >
        <TextAlignCenterIcon className="size-5" />
      </ToolbarButton>

      <ToolbarButton
        isActive={editor.isActive({ textAlign: "right" })}
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        tooltip="Align Right"
        aria-label="Align Right"
      >
        <TextAlignRightIcon className="size-5" />
      </ToolbarButton>

      <ToolbarButton
        isActive={editor.isActive({ textAlign: "justify" })}
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        tooltip="Justify"
        aria-label="Justify"
      >
        <TextAlignJustifyIcon className="size-5" />
      </ToolbarButton>
    </div>
  )
}

SectionSix.displayName = "SectionSix"

export default SectionSix
