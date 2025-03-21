import Link from "next/link"
import { IndianRupee, Download, Filter, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardNav } from "@/components/dashboard-nav"
import { DashboardChart } from "@/components/dashboard-chart"
import { ExpensePieChart } from "@/components/expense-pie-chart"

export default function ReportsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <Link href="/" className="flex items-center gap-2">
            <IndianRupee className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">FinanceBuddy</span>
          </Link>
          <div className="ml-auto flex items-center gap-4">
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
              <h1 className="text-2xl font-bold tracking-tight">Financial Reports</h1>
              <p className="text-muted-foreground">View and analyze your financial data</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                Date Range
              </Button>
              <Button size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Overview</CardTitle>
                <CardDescription>Your financial activity for the past 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <DashboardChart />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Expense Breakdown</CardTitle>
                <CardDescription>Your spending by category</CardDescription>
              </CardHeader>
              <CardContent>
                <ExpensePieChart />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Income Analysis</CardTitle>
                <CardDescription>Your income sources and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Total Income</p>
                      <p className="text-2xl font-bold">₹49,350.00</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-emerald-600">+4.1%</p>
                      <p className="text-sm text-muted-foreground">vs last month</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Salary</span>
                      <span className="text-sm font-medium">₹40,000.00</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Freelance</span>
                      <span className="text-sm font-medium">₹5,350.00</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Investments</span>
                      <span className="text-sm font-medium">₹4,000.00</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Savings Analysis</CardTitle>
                <CardDescription>Your savings and investment performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Total Savings</p>
                      <p className="text-2xl font-bold">₹22,950.00</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-emerald-600">+10.1%</p>
                      <p className="text-sm text-muted-foreground">vs last month</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Emergency Fund</span>
                      <span className="text-sm font-medium">₹10,000.00</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Investment Portfolio</span>
                      <span className="text-sm font-medium">₹8,950.00</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Fixed Deposits</span>
                      <span className="text-sm font-medium">₹4,000.00</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
} 