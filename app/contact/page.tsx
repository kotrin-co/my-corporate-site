'use client'

import {
  formSchema,
  type FormSchema,
} from '@/components/ContactPage/FormSchema'
import { MotionWrapper } from '@/components/Motion'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { type FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { sendMail } from '@/actions/contact/SendMail'
import { LoadingSpinner } from '@/components/LoadingSpinner'

const ContactPage: FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [accepted, setAccepted] = useState(false)

  const defaultValues = {
    name: '',
    email: '',
    company: '',
    content: '',
  }
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  const onSubmit = async (values: FormSchema) => {
    try {
      setIsLoading(true)
      await sendMail(values)
    } catch (err) {
      alert('送信に失敗しました')
    }
    setIsLoading(false)
    setAccepted(true)
  }

  return (
    <div className="md:px-[600px]">
      <MotionWrapper>
        <div className="text-3xl font-black md:text-6xl">Contact</div>
        <div className="mt-4">
          <Form {...form}>
            {/* <form action={sendMail}> */}
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        お名前 <span className="text-xl text-red-500"> *</span>
                      </FormLabel>
                      <FormControl>
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="mt-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        メールアドレス{' '}
                        <span className="text-xl text-red-500"> *</span>
                      </FormLabel>
                      <FormControl>
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="mt-4">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>貴社名</FormLabel>
                      <FormControl>
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="mt-4">
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        お問合せ内容{' '}
                        <span className="text-xl text-red-500"> *</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea {...field} rows={5} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="mt-8 text-center">
                {!accepted && (
                  <Button
                    type="submit"
                    className="w-60 bg-blue-500 hover:bg-blue-900"
                    disabled={isLoading}
                  >
                    {isLoading ? <LoadingSpinner /> : '送信'}
                  </Button>
                )}
                {accepted && (
                  <div className="text-xl">
                    お問合せありがとうございます！
                    <br />
                    内容を確認の上、ご返信差し上げます。
                  </div>
                )}
              </div>
            </form>
          </Form>
        </div>
      </MotionWrapper>
    </div>
  )
}

export default ContactPage
