import './globals.css'
import TagManager from 'react-gtm-module'
 
const tagManagerArgs = {
    gtmId: 'G-FLSQ0ZN7JK'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  if (process.browser) {
    TagManager.initialize(tagManagerArgs);
  }

  return (
    <html lang="en">
      <title>leticia, etc: vitrine</title>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  )
}