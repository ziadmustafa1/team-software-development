import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log('Request received:', req.method, req.body) // هذه السطر للإضافة

    if (req.method === 'POST') {
        const { name, email, message } = req.body

        // التحقق من صحة البيانات
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'جميع الحقول مطلوبة' })
        }

        // إعداد Nodemailer
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        })

        try {
            // إرسال البريد الإلكتروني
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: '123ziadmstfy@gmail.com',
                subject: 'رسالة جديدة من نموذج الاتصال',
                text: `
              الاسم: ${name}
              البريد الإلكتروني: ${email}
              الرسالة: ${message}
            `,
            })

            res.status(200).json({ message: 'تم إرسال الرسالة بنجاح' })
        } catch (error) {
            console.error('Error sending email:', error)
            res.status(500).json({ error: 'حدث خطأ أثناء إرسال الرسالة' })
        }
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
