import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>leticia, etc: vitrine</title>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FLSQ0ZN7JK"></script>
        <script 
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
                     function gtag(){dataLayer.push(arguments);}
                     gtag('js', new Date());
                     gtag('config', 'G-FLSQ0ZN7JK');`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}