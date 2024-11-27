import Link from 'next/link'
import { Metadata } from 'next'
import { TeamMember } from '../components/TeamMember'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import teamData from '../data/team.json'

export const metadata: Metadata = {
  title: 'Z_Gen | فريق التطوير المتميز',
  description: 'Z_Gen هو فريق متخصص في تقديم حلول تقنية متكاملة ومبتكرة. نجمع بين خبرات متنوعة في تطوير الويب والتطبيقات، وتصميم واجهات المستخدم، وتطوير تطبيقات الموبايل، لنقدم لعملائنا تجارب رقمية استثنائية.',
  keywords: 'تطوير الويب, تطوير التطبيقات, برمجة, شركة برمجة, فريق برمجة, Next.js, React, Node.js, Flutter, UI/UX',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-white shadow-md sticky top-0 z-20">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-800">Z_Gen</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/projects" className="text-blue-600 hover:text-blue-800 transition-colors">المشاريع</Link></li>
              <li><Link href="/services" className="text-blue-600 hover:text-blue-800 transition-colors pr-2">خدماتنا</Link></li>
              <li><Link href="/contact" className="text-blue-600 hover:text-blue-800 transition-colors">اتصل بنا</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Card className="mb-12 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-blue-800">مرحباً بكم في Z_Gen</CardTitle>
            <CardDescription className="text-lg text-gray-600">فريق متخصص في تقديم حلول تقنية متكاملة ومبتكرة</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              نحن في Z_Gen نجمع بين خبرات متنوعة في تطوير الويب والتطبيقات، وتصميم واجهات المستخدم، وتطوير تطبيقات الموبايل. 
              نستخدم أحدث التقنيات مثل Next.js, React, Node.js, Express, Flutter وغيرها لتقديم حلول مبتكرة وعالية الجودة. 
              هدفنا هو تحويل أفكاركم إلى واقع رقمي يتجاوز توقعاتكم ويحقق أهدافكم التجارية.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
              <Link href="/contact">تواصل معنا</Link>
            </Button>
          </CardFooter>
        </Card>
        
        <h2 className="text-3xl font-bold text-blue-800 mb-8">أعضاء الفريق</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamData.map((member) => (
            <TeamMember key={member.id} {...member} />
          ))}
        </div>
      </main>
    </div>
  )
}

