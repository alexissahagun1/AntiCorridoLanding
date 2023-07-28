import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image
        src="/images/hechomexicologo.png"
        width={100}
        height={100}
        alt='logo'
      />
    </Link>
  )
}
