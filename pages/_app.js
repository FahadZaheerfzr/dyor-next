import '@/styles/globals.css'
import { Nunito_Sans, Nunito } from '@next/font/google'
import { ThemeProvider } from 'next-themes'


const nunito_sans = Nunito_Sans({
  variable: '--nunito-sans-font',
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '800', '900']
})

const nunito = Nunito({
  variable: '--nunito-font',
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '800', '900']
})


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      <style jsx global>
        {`
          :root {
            --nunito-font: ${nunito.style.fontFamily};
            --nunito-sans-font: ${nunito_sans.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
