'use server'
import type { FormSchema } from '@/components/ContactPage/FormSchema'
import * as nodemailer from 'nodemailer'

const MAIL_CONFIG = {
  clientId: process.env.GMAIL_CLIENT_ID,
  clientSecret: process.env.GMAIL_CLIENT_SECRET,
  refreshToken: process.env.GMAIL_CLIENT_REFRESH,
  gmail: process.env.ADMIN_GMAIL,
  toMail: process.env.TO_MAIL,
}

export const sendMail = async (values: FormSchema) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: MAIL_CONFIG.gmail,
      clientId: MAIL_CONFIG.clientId,
      clientSecret: MAIL_CONFIG.clientSecret,
      refreshToken: MAIL_CONFIG.refreshToken,
    },
  })

  const { name, email, company, content } = values
  const message = [
    `お名前:${name}`,
    `メールアドレス:${email}`,
    `会社名:${company}`,
    `内容:${content}`,
  ].join('\n')

  const mail = {
    from: MAIL_CONFIG.gmail,
    to: MAIL_CONFIG.toMail,
    subject: '【ホームページよりお問合せがありました】',
    text: message,
  }

  await transporter.sendMail(mail)
  return {
    message: 'send mail!!',
  }
}
