import '@/index.css';
import NavBar from './components/nav-bar/NavBar';

function App() {
    return (
        <>
            <div className="w-screen h-screen flex flex-col m-0 p-0 bg-black">
                <NavBar />
                {/* 바디 */}
                <div></div>
            </div>
        </>
    );
}

export default App;
