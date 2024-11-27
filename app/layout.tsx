import './globals.css'
import { Cairo } from 'next/font/google'

const cairo = Cairo({ subsets: ['arabic'] })

export const metadata = {
  title: 'فريق التطوير المتميز',
  description: 'بورتفوليو فريق التطوير المتخصص في تطوير الويب والتطبيقات',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} bg-gray-50`}>{children}</body>
    </html>
  )
}

