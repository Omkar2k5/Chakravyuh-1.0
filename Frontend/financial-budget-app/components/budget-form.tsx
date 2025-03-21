"use client"

import { useState } from "react"
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const categories = [
  { label: "Housing", value: "housing" },
  { label: "Transportation", value: "transportation" },
  { label: "Food", value: "food" },
  { label: "Utilities", value: "utilities" },
  { label: "Insurance", value: "insurance" },
  { label: "Healthcare", value: "healthcare" },
  { label: "Savings", value: "savings" },
  { label: "Personal", value: "personal" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Miscellaneous", value: "miscellaneous" },
]

export function BudgetForm() {
  const [category, setCategory] = useState("")
  const [date, setDate] = useState<Date>()

  return (
    <form className="space-y-6">
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="category">Category</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" role="combobox" className="justify-between">
                {category ? categories.find((c) => c.value === category)?.label : "Select category"}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <Command>
                <CommandInput placeholder="Search category..." />
                <CommandList>
                  <CommandEmpty>No category found.</CommandEmpty>
                  <CommandGroup>
                    {categories.map((c) => (
                      <CommandItem
                        key={c.value}
                        value={c.value}
                        onSelect={(currentValue) => {
                          setCategory(currentValue === category ? "" : currentValue)
                        }}
                      >
                        <Check className={cn("mr-2 h-4 w-4", category === c.value ? "opacity-100" : "opacity-0")} />
                        {c.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="amount">Budget Amount</Label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground">$</span>
            <Input id="amount" type="number" placeholder="0.00" className="pl-8" />
          </div>
        </div>

        <div className="grid gap-2">
          <Label>Start Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn("justify-start text-left font-normal", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="description">Description (Optional)</Label>
          <Input id="description" placeholder="Add notes about this budget" />
        </div>
      </div>

      <Button type="submit" className="w-full">
        Create Budget
      </Button>
    </form>
  )
}

