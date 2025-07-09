import Logo from '@assets/logo.svg?react';

function App() {
    return (
        <>
            {/* Nav Bar */}
            <div className="flex flex-row justify-between items-center p-2">
                {/* 로고, 홈 버튼, 검색바 영역 */}
                <div>
                    <Logo width={50} height={50} fill="white" />
                </div>
                {/* 서비스 지원 영역 */}
            </div>
        </>
    );
}

export default App;
