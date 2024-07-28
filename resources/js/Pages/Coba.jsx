import Cobaan from "@/Components/Cobaan";
import { Sidebar } from "@/Layouts/Sidebar";

export default function Coba() {
    return (
        <>
            <div className="grid grid-cols-12">
                <Sidebar />
                <Cobaan huruf="Klik" />
            </div>
        </>
    );
}
