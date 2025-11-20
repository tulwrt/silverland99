import { z } from 'zod'

export const inquirySchema = z.object({
  property_id: z.string().optional(),
  name: z.string().min(1, 'กรุณากรอกชื่อ'),
  email: z.string().email('รูปแบบอีเมลไม่ถูกต้อง'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, 'กรุณากรอกข้อความอย่างน้อย 10 ตัวอักษร'),
  budget_range: z.string().optional(),
  timeline: z.string().optional(),
})

export type InquiryFormData = z.infer<typeof inquirySchema>
