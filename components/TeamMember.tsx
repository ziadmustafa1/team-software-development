import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TeamMemberProps {
  id: string
  name: string
  role: string
  role2?: string
  image: string
}

export function TeamMember({ id, name, role, role2, image }: TeamMemberProps) {
  return (
    <Link href={`/team/${id}`} className="block transform hover:scale-105 transition-transform duration-300">
      <Card className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="w-full object-cover"
        />
        <CardHeader>
          <CardTitle className="text-xl font-bold text-blue-800">{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">{role}</p>
          {role2 && <p className="text-sm text-gray-600">{role2}</p>}
        </CardContent>
      </Card>
    </Link>
  )
}

