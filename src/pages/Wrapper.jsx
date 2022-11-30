import Particles from '../components/Particles';
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function Wrapper() {
    return (
        <>
            <Particles />
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Wrapper;