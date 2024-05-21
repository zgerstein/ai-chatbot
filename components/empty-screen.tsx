import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to the Pandion AI Chatbot!
        </h1>
        <p className="leading-normal text-muted-foreground">
          This is a chatbot app for Pandion.{' '}
        </p>
        <p className="leading-normal text-muted-foreground">
          It uses{' '}
          <ExternalLink href="https://openai.com/">
            a custom-trained ChatGPT model
          </ExternalLink>{' '}
          to combine text with generative UI as output of the LLM. The model is aware of your interactions
          as they happen, and can respond in context.
        </p>
      </div>
    </div>
  )
}
