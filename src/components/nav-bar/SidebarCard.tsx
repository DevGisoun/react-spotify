import { Button } from '../ui/button';

interface SidebarCardProps {
    first: string;
    second: string;
    btnText: string;
}

function SidebarCard({
    first = '',
    second = '',
    btnText = '',
}: SidebarCardProps) {
    return (
        <>
            <div className="flex flex-col py-3 px-4 rounded-md bg-pink-200">
                <div className="flex flex-col gap-2 justify-start text-white">
                    <span className="font-black">{first}</span>
                    <span className="text-sm">{second}</span>
                </div>
                <div className="pt-4">
                    <Button className="w-fit bg-white rounded-full text-black font-bold text-sm">
                        {btnText}
                    </Button>
                </div>
            </div>
        </>
    );
}

export default SidebarCard;
