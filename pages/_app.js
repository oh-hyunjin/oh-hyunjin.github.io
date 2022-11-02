import '../styles/globals.css'
import SideLayout from "../components/SideLayout"
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {

  return(
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );

}

export default MyApp
