import { Plus } from 'lucide-react';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
} from '../ui/sidebar';
import SidebarCard from './SidebarCard';

function NavSideBar() {
    return (
        <>
            <Sidebar
                variant="inset"
                style={{
                    top: 'var(--header-height)',
                    height: 'calc(100% - var(--header-height))',
                }}
            >
                <SidebarContent className="rounded-md bg-green-700">
                    <SidebarGroup>
                        <SidebarGroupLabel>
                            <div className="w-full flex flex-row justify-between pt-3 pb-2 px-2">
                                <h1 className="text-white font-semibold text-base">
                                    내 라이브러리
                                </h1>
                                <Plus className="text-neutral-400" />
                            </div>
                        </SidebarGroupLabel>
                        <SidebarGroupContent>
                            <div className="flex flex-col gap-6 my-8">
                                <SidebarCard
                                    first="첫 번째 플레이리스트를 만드세요."
                                    second="어렵지 않아요. 저희가 도와드릴게요."
                                    btnText="플레이리스트 만들기"
                                />
                                <SidebarCard
                                    first="팔로우할 팟캐스트를 찾아보세요"
                                    second="새로운 에피소드에 대한 소식을 알려드릴게요."
                                    btnText="팟캐스트 둘러보기"
                                />
                            </div>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
        </>
    );
}

export default NavSideBar;
