import Link from "next/link"
import { CalendarIcon, DollarSign, Filter, HelpCircle, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardNav } from "@/components/dashboard-nav"
import { ExpenseCategories } from "@/components/expense-categories"
import { ExpenseList } from "@/components/expense-list"

export default function ExpensesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <Link href="/" className="flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">FinanceBuddy</span>
          </Link>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <HelpCircle className="h-5 w-5" />
              <span className="sr-only">Help</span>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <img
                src="/placeholder.svg?height=32&width=32"
                width={32}
                height={32}
                alt="Avatar"
                className="rounded-full"
              />
              <span>John Doe</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="grid flex-1 md:grid-cols-[240px_1fr]">
        <DashboardNav className="hidden border-r md:block" />
        <main className="flex flex-col gap-6 p-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Expense Tracking</h1>
              <p className="text-muted-foreground">Track, categorize, and analyze your expenses</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Expense
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search transactions..." className="w-full pl-8" />
                </div>
                <Button variant="outline" size="icon" className="shrink-0">
                  <CalendarIcon className="h-4 w-4" />
                  <span className="sr-only">Pick a date</span>
                </Button>
              </div>

              <Tabs defaultValue="all" className="w-full">
                <TabsList className="w-full">
                  <TabsTrigger value="all" className="flex-1">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="income" className="flex-1">
                    Income
                  </TabsTrigger>
                  <TabsTrigger value="expenses" className="flex-1">
                    Expenses
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Recent Transactions</CardTitle>
                      <CardDescription>Your latest financial activity</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ExpenseList />
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="income" className="mt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Income</CardTitle>
                      <CardDescription>Your income transactions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ExpenseList type="income" />
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="expenses" className="mt-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Expenses</CardTitle>
                      <CardDescription>Your expense transactions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ExpenseList type="expense" />
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-4">
              <Card className="bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <CardTitle>Sync Your Accounts</CardTitle>
                  <CardDescription>Connect your bank accounts for automatic tracking</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Link your accounts to automatically import transactions and keep your finances up to date.
                    </p>
                    <Button className="w-full">
                      <Plus className="mr-2 h-4 w-4" />
                      Connect Account
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Expense Categories</CardTitle>
                  <CardDescription>Your spending by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <ExpenseCategories />
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

