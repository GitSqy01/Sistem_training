import { Sidebar } from "@/Layouts/Sidebar";

export default function Settingpage() {
    return (
        <>
            <div className="grid grid-cols-12">
                <Sidebar />
                <div className="col-span-9 bg-blue-500">
                    <h1 className="text-4xl font-bold md:text-5xl">Setting apasih ini</h1>
                </div>
            </div>
        </>
    );
}
