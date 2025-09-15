import '@/index.css';
import NavBar from './components/nav-bar/NavBar';
import { SidebarInset, SidebarProvider } from './components/ui/sidebar';
import React, { useEffect } from 'react';
import { ScrollArea } from './components/ui/scroll-area';
import NavSideBar from './components/nav-bar/NavSideBar';

const HEADER_HEIGHT = '4rem';

function App() {
    useEffect(() => {
        // 앱이 마운트될 때 document의 최상위 요소(<html>)에 CSS 변수를 설정.
        document.documentElement.style.setProperty(
            '--header-height',
            HEADER_HEIGHT
        );
    }, []); // 빈 배열을 전달하여 한 번만 실행되도록 설정.

    return (
        <>
            <div className="w-screen h-screen flex flex-col m-0 p-0 bg-black antialiased overflow-hidden">
                <header style={{ height: 'var(--header-height)' }}>
                    <NavBar />
                </header>
                <SidebarProvider
                    className="flex flex-row gap-2"
                    style={
                        {
                            '--sidebar': 'black',
                            '--sidebar-foreground': 'white',
                            '--sidebar-width': '30rem',
                            '--sidebar-width-mobile': '30rem',
                        } as React.CSSProperties
                    }
                >
                    <NavSideBar />
                    <SidebarInset className="h-full peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4)-var(--header-height))]">
                        <ScrollArea className="h-[calc(100svh-theme(spacing.4)-(var(--header-height)))] w-[350px] p-4">
                            Jokester began sneaking into the castle in the
                            middle of the night and leaving jokes all over the
                            place: under the king's pillow, in his soup, even in
                            the royal toilet. The king was furious, but he
                            couldn't seem to stop Jokester. And then, one day,
                            the people of the kingdom discovered that the jokes
                            left by Jokester were so funny that they couldn't
                            help but laugh. And once they started laughing, they
                            couldn't stop.
                        </ScrollArea>
                    </SidebarInset>
                </SidebarProvider>
            </div>
        </>
    );
}

export default App;
