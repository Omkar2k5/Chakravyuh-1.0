import Link from "next/link"
import { IndianRupee, User, Mail, Phone, CreditCard, Bell, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardNav } from "@/components/dashboard-nav"

export default function AccountPage() {
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
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold tracking-tight">Account Settings</h1>
            <p className="text-muted-foreground">Manage your account information and preferences</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-10 w-10 text-primary" />
                  </div>
                  <Button variant="outline">Change Photo</Button>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    className="w-full rounded-md border p-2"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <div className="flex items-center gap-2 rounded-md border p-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <input type="email" className="flex-1" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone</label>
                  <div className="flex items-center gap-2 rounded-md border p-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <input type="tel" className="flex-1" placeholder="+91 98765 43210" />
                  </div>
                </div>
                <Button className="w-full">Save Changes</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security</CardTitle>
                <CardDescription>Manage your account security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Current Password</label>
                  <div className="flex items-center gap-2 rounded-md border p-2">
                    <Lock className="h-4 w-4 text-muted-foreground" />
                    <input type="password" className="flex-1" placeholder="••••••••" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">New Password</label>
                  <div className="flex items-center gap-2 rounded-md border p-2">
                    <Lock className="h-4 w-4 text-muted-foreground" />
                    <input type="password" className="flex-1" placeholder="••••••••" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Confirm New Password</label>
                  <div className="flex items-center gap-2 rounded-md border p-2">
                    <Lock className="h-4 w-4 text-muted-foreground" />
                    <input type="password" className="flex-1" placeholder="••••••••" />
                  </div>
                </div>
                <Button className="w-full">Update Password</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your linked payment methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">•••• •••• •••• 4242</p>
                      <p className="text-sm text-muted-foreground">Expires 12/25</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Remove
                  </Button>
                </div>
                <Button className="w-full">Add New Card</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>Configure your notification preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Budget Alerts</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Transaction Notifications</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Monthly Reports</span>
                  </div>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
} 