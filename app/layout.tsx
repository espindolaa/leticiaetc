import './globals.css'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>leticia, etc: vitrine</title>
      <body>{children}</body>
    </html>
  )
}