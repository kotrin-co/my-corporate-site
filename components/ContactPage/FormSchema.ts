import { z } from 'zod'

export const formSchema = z.object({
  name: z.string().min(1, 'お名前の入力は必須です'),
  email: z
    .string()
    .min(1, 'メールアドレスの入力は必須です')
    .email('メールアドレスの形式が正しくありません　'),
  company: z.string(),
  content: z.string().min(1, 'お問合せ内容の入力は必須です'),
})

export type FormSchema = z.infer<typeof formSchema>
