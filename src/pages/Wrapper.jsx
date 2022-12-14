import Particles from '../components/Particles';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function Wrapper() {
    return (
        <>
            <Particles color='#7fffd4'/>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Wrapper;