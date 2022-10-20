import Footer from '../components/footer';
import Header from '../components/header';

export default function Layout({ children }) {
    return (
        <div className="bg-primary">
            <Header/>
            <div>{children}</div>  
            <Footer/>
        </div>
    );
}