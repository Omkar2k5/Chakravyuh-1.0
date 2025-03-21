import Link from "next/link"
import { Brain, DollarSign, HelpCircle, LineChart, MessageSquare, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AiChatbot } from "@/components/ai-chatbot"
import { DashboardNav } from "@/components/dashboard-nav"
import { FinancialHealthScore } from "@/components/financial-health-score"
import { InsightsTrends } from "@/components/insights-trends"
import { SavingsRecommendations } from "@/components/savings-recommendations"

export default function InsightsPage() {
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
              <h1 className="text-2xl font-bold tracking-tight">AI-Powered Insights</h1>
              <p className="text-muted-foreground">Personalized financial analysis and recommendations</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <LineChart className="mr-2 h-4 w-4" />
                View Reports
              </Button>
              <Button size="sm">
                <MessageSquare className="mr-2 h-4 w-4" />
                Ask AI Assistant
              </Button>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="spending">Spending Analysis</TabsTrigger>
              <TabsTrigger value="savings">Savings</TabsTrigger>
              <TabsTrigger value="assistant">AI Assistant</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="col-span-2">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="space-y-1">
                      <CardTitle>Financial Health Score</CardTitle>
                      <CardDescription>Your overall financial wellness</CardDescription>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <FinancialHealthScore />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="space-y-0 pb-2">
                    <CardTitle>Key Insights</CardTitle>
                    <CardDescription>AI-generated observations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-2">
                      <Brain className="mt-0.5 h-4 w-4 text-primary" />
                      <p className="text-sm">Your savings rate has increased by 5% this month.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Brain className="mt-0.5 h-4 w-4 text-primary" />
                      <p className="text-sm">Dining expenses are 15% higher than your monthly average.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Brain className="mt-0.5 h-4 w-4 text-primary" />
                      <p className="text-sm">You've consistently stayed under budget in entertainment.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="lg:col-span-4">
                  <CardHeader>
                    <CardTitle>Spending Trends</CardTitle>
                    <CardDescription>How your spending has changed over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <InsightsTrends />
                  </CardContent>
                </Card>

                <Card className="lg:col-span-3">
                  <CardHeader>
                    <CardTitle>Savings Recommendations</CardTitle>
                    <CardDescription>Personalized ways to save money</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SavingsRecommendations />
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="outline">
                      View All Recommendations
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Financial Goals Progress</CardTitle>
                  <CardDescription>Track your progress towards financial goals</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Emergency Fund</h4>
                        <p className="text-sm text-muted-foreground">$6,000 / $10,000</p>
                      </div>
                      <span className="text-sm font-medium">60%</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Vacation Fund</h4>
                        <p className="text-sm text-muted-foreground">$2,500 / $5,000</p>
                      </div>
                      <span className="text-sm font-medium">50%</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">New Car</h4>
                        <p className="text-sm text-muted-foreground">$8,000 / $20,000</p>
                      </div>
                      <span className="text-sm font-medium">40%</span>
                    </div>
                    <Progress value={40} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Set New Goal</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="assistant" className="space-y-4">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>AI Financial Assistant</CardTitle>
                  <CardDescription>Ask questions about your finances and get personalized advice</CardDescription>
                </CardHeader>
                <CardContent>
                  <AiChatbot />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

