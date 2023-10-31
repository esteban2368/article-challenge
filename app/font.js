import localFont from 'next/font/local'

export const manrope = localFont({
    subsets: ['latin'],
    src: [
        {
            path: '../public/fonts/Manrope-Bold.ttf',
            weight: '700',
            style: 'normal'
        },
        {
            path: '../public/fonts/Manrope-Medium.ttf',
            weight: '500',
            style: 'normal'
        }
    ],
    variable: '--font-manrope',
    display: 'swap'
})