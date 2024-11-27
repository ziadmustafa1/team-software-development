import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import teamData from '../../../data/team.json'

interface TeamMemberPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: TeamMemberPageProps): Promise<Metadata> {
  const { id } = await params;
  const member = teamData.find(m => m.id === id)
  
  if (!member) {
    return {
      title: 'عضو الفريق غير موجود',
    }
  }

  return {
    title: `${member.name} | ${member.role} | فريق التطوير المتميز`,
    description: `تعرف على ${member.name}، ${member.role} في فريقنا. ${member.bio.slice(0, 150)}...`,
    keywords: `${member.name}, ${member.role}, ${member.specialties.join(', ')}, تطوير الويب, برمجة`,
  }
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { id } = await params;
  const member = teamData.find(m => m.id === id)

  if (!member) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-white shadow-md sticky top-0 z-20">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-blue-800">{member.name}</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex items-center space-x-4">
            <Image
              src={member.image}
              alt={member.name}
              width={200}
              height={200}
              className="rounded-full"
            />
            <div>
              <CardTitle className="text-2xl font-bold text-blue-800">{member.name}</CardTitle>
              <p className="text-gray-600">{member.role}</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-blue-800 mb-2">التخصصات</h2>
              <div className="flex flex-wrap gap-2">
                {member.specialties.map((specialty) => (
                  <Badge key={specialty} className="bg-blue-100 text-blue-800">{specialty}</Badge>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-blue-800 mb-2">نبذة</h2>
              <p className="text-gray-700">{member.bio}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-blue-800 mb-2">المشاريع البارزة</h2>
              <ul className="space-y-2">
                {member.projects.map((project) => (
                  <li key={project.name}>
                    <Link href={project.link} className="text-blue-600 hover:text-blue-800 transition-colors">
                      {project.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </main>
      <footer className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
          العودة إلى الصفحة الرئيسية
        </Link>
      </footer>
    </div>
  )
}
