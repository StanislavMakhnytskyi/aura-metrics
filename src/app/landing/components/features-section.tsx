"use client"

import {
  BarChart3,
  Zap,
  Users,
  ArrowRight,
  Database,
  Package,
  Crown,
  Layout,
  Palette
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Image3D } from '@/components/image-3d'

const mainFeatures = [
  {
    icon: Package,
    title: 'Pre-built KPI Dashboards',
    description: 'Instantly launch dashboards tracking MRR, customer churn, CAC, and LTV.'
  },
  {
    icon: Crown,
    title: 'Custom Metric formulas',
    description: 'Combine data across platforms using simple spreadsheet-style math formulas.'
  },
  {
    icon: Layout,
    title: 'Interactive visualizer',
    description: 'Filter, sort, and slice your metrics by regions, user demographics, or time range.'
  },
  {
    icon: Zap,
    title: 'Live SQL Query runner',
    description: 'Run queries directly on your data warehouse and build custom tables on the fly.'
  }
]

const secondaryFeatures = [
  {
    icon: BarChart3,
    title: 'Cross-Database Syncing',
    description: 'Link Postgres, MySQL, and Snowflake together in a single workspace dashboard.'
  },
  {
    icon: Palette,
    title: 'Brandable Dashboards',
    description: 'Customize layout, colors, and logos to match your corporate identity system.'
  },
  {
    icon: Users,
    title: 'Team Permissions',
    description: 'Define who can view, edit, or configure database integrations and reports.'
  },
  {
    icon: Database,
    title: 'Automated Reports',
    description: 'Schedule daily Slack summaries or PDF exports to keep stakeholders aligned.'
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Platform Features</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Everything you need to monitor business growth
          </h2>
          <p className="text-lg text-muted-foreground">
            AuraMetrics provides a complete pipeline from raw databases to beautiful visual intelligence. Connect, compile, and visualize your key metrics.
          </p>
        </div>

        {/* First Feature Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16 mb-24">
          {/* Left Image */}
          <Image3D
            lightSrc="/feature-1-light.png"
            darkSrc="/feature-1-dark.png"
            alt="Analytics dashboard"
            direction="left"
          />
          {/* Right Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                Dashboards that drive alignment
              </h3>
              <p className="text-muted-foreground text-base text-pretty">
                Empower your product, marketing, and sales teams with clear visualizations of user behavior, active customer acquisition, and cash flow pipelines.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {mainFeatures.map((feature, index) => (
                <li key={index} className="group hover:bg-accent/5 flex items-start gap-3 p-2 rounded-lg transition-colors">
                  <div className="mt-0.5 flex shrink-0 items-center justify-center">
                    <feature.icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium">{feature.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pe-4 pt-2">
              <Button size="lg" className="cursor-pointer" asChild>
                <a href="#pricing" className='flex items-center'>
                  View Pricing Plans
                  <ArrowRight className="ms-2 size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer" asChild>
                <a href="/dashboard">
                  Explore Metrics Dashboard
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Second Feature Section - Flipped Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/* Left Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                Built for secure data operations
              </h3>
              <p className="text-muted-foreground text-base text-pretty">
                Data pipeline configurations follow strict SOC2 audit standards, supporting secure database tunneling and fine-grained read-only client queries.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {secondaryFeatures.map((feature, index) => (
                <li key={index} className="group hover:bg-accent/5 flex items-start gap-3 p-2 rounded-lg transition-colors">
                  <div className="mt-0.5 flex shrink-0 items-center justify-center">
                    <feature.icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium">{feature.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pe-4 pt-2">
              <Button size="lg" className="cursor-pointer" asChild>
                <a href="#contact" className='flex items-center'>
                  Request VPC Custom Tunneling
                  <ArrowRight className="ms-2 size-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <Image3D
            lightSrc="/feature-2-light.png"
            darkSrc="/feature-2-dark.png"
            alt="Performance dashboard"
            direction="right"
            className="order-1 lg:order-2"
          />
        </div>
      </div>
    </section>
  )
}
