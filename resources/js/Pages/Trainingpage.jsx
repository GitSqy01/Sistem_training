import { Sidebar } from "@/Layouts/Sidebar";

export default function Trainingpage() {
    return (
        <>
            <div className="grid grid-cols-12">
                <Sidebar />
                <div>
                    <h1>Training Page</h1>
                    <p>This is the training page.</p>
                </div>
            </div>
        </>
    );
}
