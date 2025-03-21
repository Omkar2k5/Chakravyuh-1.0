import { ArrowDown, ArrowUp, CreditCard, DollarSign, ShoppingBag } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface ExpenseListProps {
  type?: "all" | "income" | "expense"
}

const allTransactions = [
  {
    id: "t1",
    description: "Grocery Store",
    amount: -120.5,
    date: "Today",
    category: "Food",
    icon: ShoppingBag,
    type: "expense",
  },
  {
    id: "t2",
    description: "Salary Deposit",
    amount: 2400.0,
    date: "Yesterday",
    category: "Income",
    icon: DollarSign,
    type: "income",
  },
  {
    id: "t3",
    description: "Restaurant",
    amount: -65.3,
    date: "Yesterday",
    category: "Dining",
    icon: CreditCard,
    type: "expense",
  },
  {
    id: "t4",
    description: "Online Shopping",
    amount: -89.99,
    date: "Mar 20, 2025",
    category: "Shopping",
    icon: ShoppingBag,
    type: "expense",
  },
  {
    id: "t5",
    description: "Freelance Payment",
    amount: 350.0,
    date: "Mar 19, 2025",
    category: "Income",
    icon: DollarSign,
    type: "income",
  },
  {
    id: "t6",
    description: "Gas Station",
    amount: -45.0,
    date: "Mar 18, 2025",
    category: "Transportation",
    icon: CreditCard,
    type: "expense",
  },
  {
    id: "t7",
    description: "Movie Tickets",
    amount: -32.5,
    date: "Mar 17, 2025",
    category: "Entertainment",
    icon: CreditCard,
    type: "expense",
  },
  {
    id: "t8",
    description: "Dividend Payment",
    amount: 120.0,
    date: "Mar 15, 2025",
    category: "Income",
    icon: DollarSign,
    type: "income",
  },
]

export function ExpenseList({ type = "all" }: ExpenseListProps) {
  const transactions = type === "all" ? allTransactions : allTransactions.filter((t) => t.type === type)

  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center justify-between rounded-lg border p-3 hover:bg-muted/50">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <transaction.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">{transaction.description}</p>
              <p className="text-xs text-muted-foreground">{transaction.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className={cn(
                "rounded-sm px-1 py-0 text-xs",
                transaction.amount > 0
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                  : "border-rose-200 bg-rose-50 text-rose-700",
              )}
            >
              {transaction.category}
            </Badge>
            <p
              className={cn("font-medium tabular-nums", transaction.amount > 0 ? "text-emerald-600" : "text-rose-600")}
            >
              {transaction.amount > 0 ? (
                <span className="flex items-center">
                  <ArrowUp className="mr-1 h-3 w-3" />${transaction.amount.toFixed(2)}
                </span>
              ) : (
                <span className="flex items-center">
                  <ArrowDown className="mr-1 h-3 w-3" />${Math.abs(transaction.amount).toFixed(2)}
                </span>
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

