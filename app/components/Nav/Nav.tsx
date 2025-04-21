import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { navData } from '@/app/api/data'

const Nav = () => {
  const pathname = usePathname()

  return (
    <nav>
      <ul className='flex gap-8'>
        {navData.map((link, index) =>
          <li className='py-6' key={index}>
            <Link
              className={`link ${pathname === link.path ? 'text-primary' : 'text-[#7e889b]'} text-[16px] leading-none font-medium uppercase hover:text-primary transition-colors`}
              href={link.path}>
              {link.name}
            </Link>
          </li>
        )}        
      </ul>
    </nav>
  )
}

export default Nav