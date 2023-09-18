import './globals.css'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> 
      <div className='px-60 min-h-screen'>
        <NavBar />
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  )
}
