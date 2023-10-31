import './globals.css'
import {manrope} from "./font"

export const metadata = {
  title: 'App article component',
  description: 'App where apply knowledge on NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <main className='grid h-screen place-content-center'>{children}</main>
      </body>
    </html>
  )
}
