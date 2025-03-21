import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart3, Brain, CreditCard, DollarSign, LineChart, PiggyBank } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Image 
              src="/images/finance-logo.png" 
              alt="FinanceBuddy Logo" 
              width={32} 
              height={32} 
              className="object-contain"
            />
            <span className="text-xl font-bold">FinanceBuddy</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Smart Budgeting Powered by AI
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Take control of your finances with our AI-powered budgeting tools. Track expenses, set goals, and get
                  personalized insights.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="gap-1.5">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button size="lg" variant="outline">
                    View Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative">
              <div className="relative rounded-lg border bg-background p-2 shadow-lg">
                <div className="rounded-md bg-white shadow-sm">
                  <img
                    src="/placeholder.svg?height=500&width=700"
                    alt="Dashboard Preview"
                    className="rounded-md"
                    width={700}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to manage your finances effectively
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <Card className="border-0 shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Track Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Easily track and categorize your expenses. Connect your bank accounts for automatic updates.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <PiggyBank className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Smart Budgeting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Set personalized budgets and receive alerts when you're approaching your limits.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AI Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Get personalized financial insights and recommendations based on your spending habits.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trusted by Thousands</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See what our users have to say about FinanceBuddy
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-gray-100 p-1">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      width={40}
                      height={40}
                      alt="User"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                    <CardDescription>Financial Analyst</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  "FinanceBuddy has completely transformed how I manage my personal finances. The AI insights are
                  incredibly accurate and helpful."
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-gray-100 p-1">
                    <img
                      src="/placeholder.svg?height=40&width=40"
                      width={40}
                      height={40}
                      alt="User"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Michael Chen</CardTitle>
                    <CardDescription>Small Business Owner</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  "As a business owner, keeping track of expenses is crucial. FinanceBuddy makes it simple and provides
                  valuable insights for growth."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple Pricing</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that works best for you
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Free</CardTitle>
                <div className="text-3xl font-bold">$0</div>
                <CardDescription>Perfect for getting started</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <LineChart className="h-4 w-4 text-primary" />
                    <span>Basic expense tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-primary" />
                    <span>Monthly reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Brain className="h-4 w-4 text-primary" />
                    <span>Limited AI insights</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Get Started
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-0 shadow-md relative">
              <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Popular
              </div>
              <CardHeader>
                <CardTitle>Premium</CardTitle>
                <div className="text-3xl font-bold">$9.99</div>
                <CardDescription>Billed monthly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <LineChart className="h-4 w-4 text-primary" />
                    <span>Advanced expense tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-primary" />
                    <span>Detailed reports and analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Brain className="h-4 w-4 text-primary" />
                    <span>Full AI insights and recommendations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-primary" />
                    <span>Unlimited bank connections</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Subscribe Now</Button>
              </CardFooter>
            </Card>
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Business</CardTitle>
                <div className="text-3xl font-bold">$29.99</div>
                <CardDescription>Billed monthly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <LineChart className="h-4 w-4 text-primary" />
                    <span>Business expense tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-primary" />
                    <span>Advanced business analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Brain className="h-4 w-4 text-primary" />
                    <span>Business-focused AI insights</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-primary" />
                    <span>Multiple user accounts</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">
                  Contact Sales
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Take Control of Your Finances?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of users who have transformed their financial lives with FinanceBuddy.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup">
                <Button size="lg" variant="secondary" className="gap-1.5">
                  Sign Up Now <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <Image 
                src="/images/finance-logo.png" 
                alt="FinanceBuddy Logo" 
                width={32} 
                height={32} 
                className="object-contain"
              />
              <span className="text-xl font-bold">FinanceBuddy</span>
            </div>
            <nav className="flex gap-4 md:gap-6 flex-wrap">
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                About
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Features
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Pricing
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Blog
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-sm text-gray-500">© 2025 FinanceBuddy. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm font-medium text-gray-500 hover:underline underline-offset-4">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-500 hover:underline underline-offset-4">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

