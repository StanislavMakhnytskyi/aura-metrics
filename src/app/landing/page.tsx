import type { Metadata } from 'next'
import { LandingPageContent } from './landing-page-content'

// Metadata for the landing page
export const metadata: Metadata = {
  title: 'AuraMetrics - Real-Time Business Intelligence & Analytics',
  description: 'A beautiful and comprehensive business intelligence dashboard platform. Connect databases, track custom metrics, and sync team reports in real-time.',
  keywords: ['business intelligence', 'data analytics', 'KPI dashboards', 'real-time metrics', 'react', 'nextjs', 'typescript', 'shadcn/ui', 'tailwind css'],
  openGraph: {
    title: 'AuraMetrics - Real-Time Business Intelligence & Analytics',
    description: 'A beautiful and comprehensive business intelligence dashboard platform. Connect databases, track custom metrics, and sync team reports in real-time.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AuraMetrics - Real-Time Business Intelligence & Analytics',
    description: 'A beautiful and comprehensive business intelligence dashboard platform. Connect databases, track custom metrics, and sync team reports in real-time.',
  },
}

export default function LandingPage() {
  return <LandingPageContent />
}
