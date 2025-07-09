// Assets
import Logo from '@assets/logo.svg?react';

// Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Archive, CircleArrowDown, Home, Search } from 'lucide-react';

function NavBar() {
    return (
        <>
            {/* Nav Bar */}
            <div className="w-full h-16 flex flex-row justify-between items-center">
                {/* 로고, 홈 버튼, 검색바 영역 */}
                <div className="w-1/2 flex flex-row">
                    {/* 로고 */}
                    <div className="flex flex-row items-center justify-center px-4">
                        <a href="">
                            <Logo width={40} height={40} fill="white" />
                        </a>
                    </div>
                    {/* 홈 버튼 */}
                    <Button className="size-12 rounded-full text-white bg-neutral-800">
                        <Home className="!w-6 !h-6" />
                    </Button>
                    {/* 검색바 */}
                    <div className="w-lg h-12 pl-2 relative">
                        <Search className="absolute left-5 top-6 h-7 w-7 -translate-y-1/2 text-neutral-400" />
                        <Input
                            className="h-full pl-12 border-none rounded-4xl focus-visible:ring-white focus-visible:ring-[2px] bg-neutral-800 text-white font-[600] placeholder:text-neutral-400 placeholder:font-[600]"
                            placeholder="어떤 콘텐츠를 감상하고 싶으세요?"
                        />
                        <div className="absolute right-3 top-6 -translate-y-1/2 pl-3 border-l border-neutral-500">
                            <Archive className="h-7 w-7 text-neutral-400" />
                        </div>
                    </div>
                </div>
                {/* 서비스 지원 영역 */}
                <div className="w-1/2 flex flex-row items-center justify-end gap-2 px-4">
                    <Button
                        variant="link"
                        className="text-base text-neutral-400 hover:text-white hover:no-underline font-semibold px-0 cursor-pointer"
                    >
                        Premium
                    </Button>
                    <Button
                        variant="link"
                        className="text-base text-neutral-400 hover:text-white hover:no-underline font-semibold px-0 cursor-pointer"
                    >
                        지원
                    </Button>
                    <Button
                        variant="link"
                        className="text-base text-neutral-400 hover:text-white hover:no-underline font-semibold px-0 cursor-pointer"
                    >
                        다운로드하기
                    </Button>
                    {/* Vertical Line */}
                    <div className="w-px h-7 mx-4 bg-white"></div>
                    <Button
                        variant="link"
                        className="text-sm text-neutral-400 hover:text-white hover:no-underline font-semibold px-0 cursor-pointer"
                    >
                        <CircleArrowDown /> 앱 설치하기
                    </Button>
                    <Button
                        variant="link"
                        className="mx-4 text-sm text-neutral-400 hover:text-white hover:no-underline font-semibold px-0 cursor-pointer"
                    >
                        가입하기
                    </Button>
                    <Button className="px-8 h-12 bg-white rounded-full text-black font-bold text-base">
                        로그인하기
                    </Button>
                </div>
            </div>
        </>
    );
}

export default NavBar;
