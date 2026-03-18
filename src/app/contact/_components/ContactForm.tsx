'use client'

import { useForm } from 'react-hook-form'
import { useState, useRef } from 'react'
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type FormData = {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [token, setToken] = useState<string | null>(null)
  const turnstileRef = useRef<TurnstileInstance>(null)

  const onSubmit = async (data: FormData) => {
    if (!token) {
      setErrorMessage('Please complete the security verification.')
      setStatus('error')
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, token }),
      })

      const result = await response.json()

      if (!response.ok) {
        setErrorMessage(result.error || 'Something went wrong.')
        setStatus('error')
        turnstileRef.current?.reset()
        setToken(null)
        return
      }

      setStatus('success')
      reset()
      turnstileRef.current?.reset()
      setToken(null)
    } catch {
      setErrorMessage('Failed to send message. Please try again.')
      setStatus('error')
      turnstileRef.current?.reset()
      setToken(null)
    }
  }

  return (
    <Card className='shadow-2xl h-full lg:min-h-[640px] border-border'>
      <CardHeader>
        <CardTitle className='font-serif text-4xl font-light tracking-tight text-foreground'>
          Send Us a Message
        </CardTitle>
      </CardHeader>
      <CardContent className='h-full'>
        {status === 'success' ? (
          <div className='flex h-full flex-col items-center justify-center gap-4 text-center'>
            <p className='font-serif text-2xl font-light text-foreground'>
              Thank you for your message.
            </p>
            <p className='text-muted-foreground text-lg'>
              We&apos;ll get back to you as soon as possible.
            </p>
            <Button
              onClick={() => setStatus('idle')}
              className='mt-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none tracking-wide'
            >
              Send Another Message
            </Button>
          </div>
        ) : (
          <form onSubmit={(e) => handleSubmit(onSubmit)(e)} className='flex h-full flex-col gap-6'>
            <div>
              <Label htmlFor='name'>Name</Label>
              <Input
                id='name'
                placeholder='Your Name'
                className='mt-2'
                {...register('name', { required: 'Name is required.' })}
              />
              {errors.name && (
                <p className='text-sm text-red-600 mt-1'>{errors.name.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                placeholder='Your Email'
                className='mt-2'
                {...register('email', {
                  required: 'Email is required.',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email address.',
                  },
                })}
              />
              {errors.email && (
                <p className='text-sm text-red-600 mt-1'>{errors.email.message}</p>
              )}
            </div>
            <div className='flex flex-1 flex-col'>
              <Label htmlFor='message'>Message</Label>
              <Textarea
                id='message'
                placeholder='Your Message'
                className='mt-2 flex-1 resize-none'
                {...register('message', { required: 'Message is required.' })}
              />
              {errors.message && (
                <p className='text-sm text-red-600 mt-1'>{errors.message.message}</p>
              )}
            </div>

            <Turnstile
              ref={turnstileRef}
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
              onSuccess={setToken}
              onError={() => setToken(null)}
              onExpire={() => setToken(null)}
            />

            {status === 'error' && (
              <p className='text-sm text-red-600'>{errorMessage}</p>
            )}

            <Button
              type='submit'
              size='lg'
              disabled={status === 'loading'}
              className='mt-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 rounded-none tracking-wide'
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
