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
import type { FC } from 'react'
import { useForm } from 'react-hook-form'
import { sendMail } from '@/actions/contact/SendMail'

const ContactPage: FC = () => {
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
    console.log('values1', values)
    const res = await sendMail(values)
    console.log('res', res)
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
                <Button
                  type="submit"
                  className="w-60 bg-blue-500 hover:bg-blue-900"
                >
                  送信
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </MotionWrapper>
    </div>
  )
}

export default ContactPage
