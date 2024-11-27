import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from 'next/link'

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">اتصل بنا</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <Card>
                            <CardHeader>
                                <CardTitle>نحن هنا لمساعدتك</CardTitle>
                                <CardDescription>املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="grid w-full items-center gap-4">
                                        <div className="flex flex-col space-y-1.5">
                                            <Input id="name" placeholder="الاسم" />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Input id="email" placeholder="البريد الإلكتروني" />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Textarea id="message" placeholder="رسالتك" />
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter>
                                <Button>إرسال</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                    العودة إلى الصفحة الرئيسية
                </Link>
            </div>
        </div>
    )
}

