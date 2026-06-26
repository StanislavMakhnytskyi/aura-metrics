"use client"

import { CircleHelp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'

type FaqItem = {
  value: string
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    value: 'item-1',
    question: 'How do I connect my database or SaaS apps to AuraMetrics?',
    answer:
      'Connecting is simple! We support direct connections to PostgreSQL, MySQL, MongoDB, Snowflake, BigQuery, and 100+ SaaS apps like Stripe, HubSpot, and Salesforce. Simply input your credentials or use OAuth, select the tables/events you want to track, and our pipeline starts importing automatically.',
  },
  {
    value: 'item-2',
    question: 'How often does dashboard data refresh?',
    answer:
      'Starter plans support hourly updates, while Growth and Enterprise plans sync in near real-time (every 1-5 minutes depending on the connector and source database settings).',
  },
  {
    value: 'item-3',
    question: 'Is my company data secure with AuraMetrics?',
    answer:
      'Yes, data privacy is our top priority. We use bank-grade TLS 1.3 encryption in transit and AES-256 at rest. AuraMetrics is SOC2 Type II, HIPAA, and GDPR compliant. We also support read-only query permissions, SSH tunnels, and private VPC integrations for Enterprise customers.',
  },
  {
    value: 'item-4',
    question: 'Do you offer a free trial?',
    answer:
      'We offer a 14-day fully-featured trial for the Starter and Growth plans. No credit card is required to sign up and explore. You can connect your database and test your dashboards instantly.',
  },
  {
    value: 'item-5',
    question: 'Can I build custom formula metrics and alerts?',
    answer:
      'Absolutely! AuraMetrics has a robust formula builder that lets you combine different data sources (e.g., matching Stripe revenue with Google Ads spend) to calculate custom metrics like CAC or LTV. You can also configure Slack or email alerts when KPIs drop below a target threshold.',
  },
]

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about AuraMetrics integrations, data synchronization, security, and setup. Still have questions? We&apos;re here to help!
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className='bg-transparent'>
            <div className='p-0'>
              <Accordion type='single' collapsible className='space-y-5'>
                {faqItems.map(item => (
                  <AccordionItem key={item.value} value={item.value} className='rounded-md !border bg-transparent'>
                    <AccordionTrigger className='cursor-pointer items-center gap-4 rounded-none bg-transparent py-2 ps-3 pe-4 hover:no-underline data-[state=open]:border-b'>
                      <div className='flex items-center gap-4'>
                        <div className='bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-full'>
                          <CircleHelp className='size-5' />
                        </div>
                        <span className='text-start font-semibold'>{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className='p-4 bg-transparent'>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Contact Support CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We&apos;re here to help.
            </p>
            <Button className='cursor-pointer' asChild>
              <a href="#contact">
                Contact Support
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export { FaqSection }
