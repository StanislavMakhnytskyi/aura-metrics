"use client"

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CardDecorator } from '@/components/ui/card-decorator'
import { BarChart3, LineChart, Cpu, ShieldAlert } from 'lucide-react'

const values = [
  {
    icon: BarChart3,
    title: 'Visual Clarity',
    description: 'Transform complex database queries into interactive, beautiful, and easy-to-understand visual stories.'
  },
  {
    icon: LineChart,
    title: 'Predictive Insights',
    description: 'Leverage historical performance trends to forecast business growth and preempt customer churn.'
  },
  {
    icon: Cpu,
    title: 'Automated Pipelines',
    description: 'Plug in your databases and SaaS platforms for real-time auto-refreshing KPI metrics and reporting.'
  },
  {
    icon: ShieldAlert,
    title: 'Enterprise Security',
    description: 'Bank-grade encryptions and role-based workspace permissions protect your sensitive business intelligence.'
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <Badge variant="outline" className="mb-4">
            About AuraMetrics
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Decisions driven by data, not guesswork
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We are passionate about giving modern business teams clear visual interfaces to see their growth metrics. Our mission is to accelerate decision-making processes through automated analytics.
          </p>
        </div>

        {/* Modern Values Grid with Enhanced Design */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-4 mb-12">
          {values.map((value, index) => (
            <Card key={index} className='group shadow-xs py-2'>
              <CardContent className='p-8'>
                <div className='flex flex-col items-center text-center'>
                  <CardDecorator>
                    <value.icon className='h-6 w-6 text-primary' aria-hidden />
                  </CardDecorator>
                  <h3 className='mt-6 font-medium text-balance'>{value.title}</h3>
                  <p className='text-muted-foreground mt-3 text-sm'>{value.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-muted-foreground">📊 Empowering over 10,000+ data-driven companies</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="cursor-pointer" asChild>
              <a href="#pricing">
                View Pricing Plans
              </a>
            </Button>
            <Button size="lg" variant="outline" className="cursor-pointer" asChild>
              <a href="/dashboard">
                Explore Demo Dashboard
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )

}
