import { Progress } from "@/components/ui/progress"

const categories = [
  {
    name: "Food & Dining",
    amount: 850,
    percentage: 32,
    color: "bg-blue-500",
  },
  {
    name: "Shopping",
    amount: 650,
    percentage: 25,
    color: "bg-green-500",
  },
  {
    name: "Transportation",
    amount: 450,
    percentage: 17,
    color: "bg-amber-500",
  },
  {
    name: "Entertainment",
    amount: 350,
    percentage: 13,
    color: "bg-purple-500",
  },
  {
    name: "Utilities",
    amount: 200,
    percentage: 8,
    color: "bg-rose-500",
  },
  {
    name: "Other",
    amount: 140,
    percentage: 5,
    color: "bg-gray-500",
  },
]

export function ExpenseCategories() {
  return (
    <div className="space-y-4">
      {categories.map((category) => (
        <div key={category.name} className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{category.name}</span>
            <span className="text-sm font-medium">${category.amount}</span>
          </div>
          <Progress value={category.percentage} className={`h-2 ${category.color}`} />
          <p className="text-xs text-muted-foreground">{category.percentage}% of total expenses</p>
        </div>
      ))}
    </div>
  )
}

