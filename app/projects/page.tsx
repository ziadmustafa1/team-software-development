import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "منصة التعلم الإلكتروني",
    description: "منصة تعليمية متكاملة تدعم الدورات التفاعلية والتعلم الذاتي",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    link: "/projects/e-learning-platform"
  },
  {
    title: "تطبيق إدارة المهام",
    description: "تطبيق لإدارة المهام والمشاريع بكفاءة عالية",
    technologies: ["React Native", "Express", "PostgreSQL"],
    link: "/projects/task-management-app"
  },
  {
    title: "موقع التجارة الإلكترونية",
    description: "موقع متكامل للتجارة الإلكترونية مع نظام دفع آمن",
    technologies: ["Next.js", "Stripe", "Firebase"],
    link: "/projects/e-commerce-website"
  },
  {
    title: "لوحة تحكم تحليلات الأعمال",
    description: "لوحة تحكم متقدمة لعرض وتحليل بيانات الأعمال",
    technologies: ["React", "D3.js", "Node.js"],
    link: "/projects/business-analytics-dashboard"
  }
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">مشاريعنا</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <Card key={project.title}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={project.link} className="text-blue-600 hover:text-blue-800">
                      عرض التفاصيل
                    </Link>
                  </CardFooter>
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

