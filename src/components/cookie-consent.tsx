"use client"

import { useEffect, useState } from "react"
import { CookieIcon } from "lucide-react"
import { GoogleAnalytics } from "@next/third-parties/google"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const STORAGE_KEY = "aura-metrics-cookie-consent"

type ConsentChoice = "accepted" | "declined"

export function CookieConsent({ gaId }: { gaId?: string }) {
  const [open, setOpen] = useState(false)
  const [consent, setConsent] = useState<ConsentChoice | null>(null)

  useEffect(() => {
    const storedConsent = window.localStorage.getItem(STORAGE_KEY)

    if (storedConsent === "accepted" || storedConsent === "declined") {
      setConsent(storedConsent)
      setOpen(false)
      return
    }

    setConsent(null)
    setOpen(true)
  }, [])

  const saveConsent = (choice: ConsentChoice) => {
    window.localStorage.setItem(STORAGE_KEY, choice)
    setConsent(choice)
    setOpen(false)
  }

  return (
    <>
      <Dialog open={open} onOpenChange={() => {}}>
        <DialogContent
          className="border-border/70 bg-background/95 p-0 shadow-2xl sm:max-w-lg"
          showCloseButton={false}
        >
          <div className="rounded-2xl border border-border/70 bg-background p-6 sm:p-8">
            <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CookieIcon className="size-6" />
            </div>
            <DialogHeader className="text-left">
              <DialogTitle className="text-xl font-semibold">
                We use cookies to improve your experience
              </DialogTitle>
              <DialogDescription className="mt-2 text-sm leading-6 text-muted-foreground">
                We use essential cookies for the app to work and optional
                analytics cookies to understand how the product is used. Your
                choice is stored locally on this device.
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <Button
                type="button"
                variant="outline"
                className="sm:min-w-32"
                onClick={() => saveConsent("declined")}
              >
                Decline
              </Button>
              <Button
                type="button"
                className="sm:min-w-32"
                onClick={() => saveConsent("accepted")}
              >
                Accept
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {consent === "accepted" && gaId ? <GoogleAnalytics gaId={gaId} /> : null}
    </>
  )
}
