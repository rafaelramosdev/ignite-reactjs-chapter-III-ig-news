import { ReactElement, cloneElement } from 'react'

import { useRouter } from 'next/router'

import Link, { LinkProps } from 'next/link'

interface ActiveLinkProps extends LinkProps{
  children: ReactElement; // 'ReactElement' means that it will receive only one element and that element is a React element
  activeClassName: string;
}

export function ActiveLink({ children, activeClassName, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter()

  const className = asPath === rest.href ? activeClassName : ''

  return (
    <Link {...rest}>
      {cloneElement(children, { // 'cloneElement' serves to clone the element it receives in the first parameter, but adds properties to that element that are passed as an object in the second parameter
        className
      })}
    </Link>
  )
}