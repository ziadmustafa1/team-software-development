import Link from 'next/link'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: 'مشاريعنا | فريق التطوير المتميز',
  description: 'استعرض أحدث مشاريعنا في مجال تطوير الويب والتطبيقات. من منصات التعلم الإلكتروني إلى تطبيقات إدارة المهام ومواقع التجارة الإلكترونية.',
  keywords: 'مشاريع برمجية, تطوير الويب, تطبيقات الموبايل, Next.js, React Native, Express, Flutter',
}

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
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-white shadow-md sticky top-0 z-20">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-blue-800">مشاريعنا</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-blue-800">{project.title}</CardTitle>
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
                <Link href={project.link} className="text-blue-600 hover:text-blue-800 transition-colors">
                  عرض التفاصيل
                </Link>
              </CardFooter>
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

