import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

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
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">خدماتنا</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card key={service.title}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
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

