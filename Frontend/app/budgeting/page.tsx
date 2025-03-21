import Link from "next/link"
import { AlertCircle, ArrowRight, Brain, DollarSign, HelpCircle, Plus, Settings } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BudgetForm } from "@/components/budget-form"
import { DashboardNav } from "@/components/dashboard-nav"

export default function BudgetingPage() {
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
              <h1 className="text-2xl font-bold tracking-tight">Smart Budgeting</h1>
              <p className="text-muted-foreground">Set spending limits and get AI-powered savings tips</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                Budget Settings
              </Button>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                New Budget
              </Button>
            </div>
          </div>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Budget Alert</AlertTitle>
            <AlertDescription>
              You're approaching your dining budget limit. You've spent 80% of your monthly allocation.
            </AlertDescription>
          </Alert>

          <Tabs defaultValue="active" className="space-y-4">
            <TabsList>
              <TabsTrigger value="active">Active Budgets</TabsTrigger>
              <TabsTrigger value="create">Create Budget</TabsTrigger>
              <TabsTrigger value="history">Budget History</TabsTrigger>
            </TabsList>
            <TabsContent value="active" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Dining</span>
                      <span className="text-sm font-normal">$320/$400</span>
                    </CardTitle>
                    <CardDescription>Monthly budget for restaurants and takeout</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <Progress value={80} className="h-2" />
                    <p className="mt-2 text-xs text-muted-foreground">80% of budget used</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      Adjust
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Shopping</span>
                      <span className="text-sm font-normal">$450/$500</span>
                    </CardTitle>
                    <CardDescription>Monthly budget for retail purchases</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <Progress value={90} className="h-2" />
                    <p className="mt-2 text-xs text-muted-foreground">90% of budget used</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      Adjust
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Entertainment</span>
                      <span className="text-sm font-normal">$150/$300</span>
                    </CardTitle>
                    <CardDescription>Monthly budget for movies, events, etc.</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <Progress value={50} className="h-2" />
                    <p className="mt-2 text-xs text-muted-foreground">50% of budget used</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      Adjust
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-l-4 border-l-amber-500">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Transportation</span>
                      <span className="text-sm font-normal">$200/$250</span>
                    </CardTitle>
                    <CardDescription>Monthly budget for gas, public transit, etc.</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <Progress value={80} className="h-2" />
                    <p className="mt-2 text-xs text-muted-foreground">80% of budget used</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      Adjust
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>AI-Powered Savings Tips</CardTitle>
                  <CardDescription>Personalized recommendations based on your spending habits</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4 rounded-lg border p-4">
                    <Brain className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Dining Budget Optimization</h4>
                      <p className="text-sm text-muted-foreground">
                        You've spent $120 on coffee shops this month. Consider brewing at home to save approximately $80
                        monthly.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-lg border p-4">
                    <Brain className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Subscription Audit</h4>
                      <p className="text-sm text-muted-foreground">
                        We've identified 3 overlapping streaming subscriptions. Consolidating could save you $25
                        monthly.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-lg border p-4">
                    <Brain className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Smart Shopping Strategy</h4>
                      <p className="text-sm text-muted-foreground">
                        Your shopping expenses peak at month-end. Planning purchases earlier could help you stay within
                        budget.
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Get More Personalized Tips
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="create">
              <Card>
                <CardHeader>
                  <CardTitle>Create a New Budget</CardTitle>
                  <CardDescription>Set up spending limits for different categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <BudgetForm />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

