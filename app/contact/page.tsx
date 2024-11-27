'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function ContactPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { toast } = useToast()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            })

            if (response.ok) {
                toast({
                    title: "تم إرسال الرسالة بنجاح",
                    description: "شكرًا لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.",
                })
                setName('')
                setEmail('')
                setMessage('')
            } else {
                throw new Error('فشل في إرسال الرسالة')
            }
        } catch (error) {
            console.error('Error:', error); // تم إضافة هذا السطر لاستخدام المتغير error
            toast({
                title: "خطأ",
                description: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.",
                variant: "destructive",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
            <header className="bg-white shadow-md sticky top-0 z-20">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-blue-800">اتصل بنا</h1>
                </div>
            </header>
            <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <Card className="w-full max-w-2xl mx-auto">
                    <CardHeader>
                        <CardTitle>نحن هنا لمساعدتك</CardTitle>
                        <CardDescription>املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Input
                                        id="name"
                                        placeholder="الاسم"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="البريد الإلكتروني"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Textarea
                                        id="message"
                                        placeholder="رسالتك"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <Button type="submit" className="w-full" disabled={isSubmitting}>
                                    {isSubmitting ? 'جاري الإرسال...' : 'إرسال'}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                            العودة إلى الصفحة الرئيسية
                        </Link>
                        <a
                            href="https://wa.me/201154790469"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-green-600 hover:text-green-800 transition-colors duration-300"
                        >
                            <Phone className="mr-2" size={20} />
                            تواصل عبر واتساب
                        </a>
                    </CardFooter>
                </Card>
            </main>
        </div>
    )
}
