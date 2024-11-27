import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: 'خدماتنا | فريق التطوير المتميز',
  description: 'نقدم مجموعة واسعة من خدمات تطوير الويب والتطبيقات، بما في ذلك تطوير تطبيقات الويب والموبايل، وتصميم واجهات المستخدم، وتطوير الواجهات الخلفية.',
  keywords: 'خدمات برمجية, تطوير الويب, تطبيقات الموبايل, تصميم UI/UX, Next.js, React Native, Node.js, Flutter',
}

const services = [
  {
    title: "تطوير تطبيقات الويب",
    description: "نقوم بتطوير تطبيقات ويب حديثة وسريعة باستخدام Next.js و React",
    icon: "🌐"
  },
  {
    title: "تطوير تطبيقات الموبايل",
    description: "نطور تطبيقات موبايل عبر المنصات باستخدام React Native و Flutter",
    icon: "📱"
  },
  {
    title: "تصميم واجهات المستخدم",
    description: "نصمم واجهات مستخدم جذابة وسهلة الاستخدام باستخدام Figma",
    icon: "🎨"
  },
  {
    title: "تطوير الواجهات الخلفية",
    description: "نطور خدمات الواجهة الخلفية القوية والقابلة للتوسع باستخدام Node.js و Express و Nest.js",
    icon: "⚙️"
  },
  {
    title: "استشارات تقنية",
    description: "نقدم استشارات تقنية لمساعدتك في اختيار الحلول المناسبة لمشروعك",
    icon: "💡"
  },
  {
    title: "صيانة وتحسين المواقع",
    description: "نقدم خدمات صيانة وتحسين للمواقع والتطبيقات القائمة",
    icon: "🔧"
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-white shadow-md sticky top-0 z-20">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-blue-800">خدماتنا</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-bold text-blue-800">
                  <span className="text-2xl mr-2">{service.icon}</span>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <footer className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
          العودة إلى الصفحة الرئيسية
        </Link>
      </footer>
    </div>
  )
}

