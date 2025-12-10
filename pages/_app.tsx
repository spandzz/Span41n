import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from "next/script";
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import posthog from "posthog-js"
import { PostHogProvider } from 'posthog-js/react'
import { ThemeProvider } from 'next-themes'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
    person_profiles: 'identified_only',
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug()
    },
  })
}

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <DefaultSeo {...SEO} />
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-MWCFC4M33J"/>
        <Script
            id='google-analytics'
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-MWCFC4M33J', {
                  page_path: window.location.pathname,
                });
              `,
            }}
        />
        <PostHogProvider client={posthog}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Component {...pageProps} />
          </ThemeProvider>
        </PostHogProvider>
      </>
  )
}