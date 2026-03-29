import { useState } from "react";
import { Check, ChevronsUpDown, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// mock lecturer list
const lecturers = [
  { name: "Dr. Fauzan", code: "FR" },
  { name: "Prof. Rhamzy", code: "DR" },
  { name: "Budi M.T.", code: "BD" },
  { name: "Siti Ph.D", code: "ST" },
];

export function ReviewerSelect({
  placeholder,
  onSelect,
}: {
  placeholder: string;
  onSelect: (val: any) => void;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-between h-9 text-xs font-semibold px-3 hover:bg-slate-50"
        >
          {selected ? (
            <span className="flex items-center gap-2 truncate">
              <User className="h-3 w-3 text-blue-600 shrink-0" />
              {selected.name}
            </span>
          ) : (
            <span className="text-slate-400">{placeholder}</span>
          )}
          <ChevronsUpDown className="ml-2 h-3 w-3 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 z-[100]" align="center">
        <Command>
          <CommandInput placeholder="Cari dosen..." className="h-8 text-xs" />
          <CommandList>
            <CommandEmpty className="text-[10px] p-2 text-center">
              Tidak ada hasil.
            </CommandEmpty>
            <CommandGroup>
              {lecturers.map((lecturer) => (
                <CommandItem
                  key={lecturer.code}
                  value={lecturer.name}
                  onSelect={() => {
                    setSelected(lecturer);
                    onSelect(lecturer);
                    setOpen(false);
                  }}
                  className="text-xs cursor-pointer"
                >
                  <Check
                    className={cn(
                      "mr-2 h-3 w-3",
                      selected?.code === lecturer.code
                        ? "opacity-100"
                        : "opacity-0",
                    )}
                  />
                  {lecturer.name} ({lecturer.code})
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
export default ReviewerSelect;
