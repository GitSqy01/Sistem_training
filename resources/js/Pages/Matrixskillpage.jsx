import { Sidebar } from "@/Layouts/Sidebar";

export default function Matrixskillpage() {
    return (
        <>
            <div className="grid grid-cols-12">
                <Sidebar />
                <div className="col-span-9 bg-blue-500">
                    <h1 className="text-[10px] font-bold md:text-5xl">
                        Matrix Skill
                    </h1>
                </div>
            </div>
        </>
    );
}
