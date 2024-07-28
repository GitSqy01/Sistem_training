import { Sidebar } from "@/Layouts/Sidebar";

export default function Librarypage() {
    return (
        <>
            <div className="grid grid-cols-12">
                <Sidebar />
                <div className="col-span-9">
                    <h1>Library Page</h1>
                </div>
            </div>
        </>
    );
}
