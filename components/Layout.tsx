import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title }: Props) => (
  <div className="h-full bg-black">
    <h1 className="p-4 text-2xl font-extrabold text-white">{title}</h1>
    {children}
  </div>
)

export default Layout
