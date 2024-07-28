import { Sidebar } from "@/Layouts/Sidebar";

export default function Licensepage() {
    return (
        <>
            <div className="grid grid-cols-12">
                <Sidebar />
                <div className="col-span-9 bg-gray-100">
                    <h1 className="text-xl font-bold">License</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed vel justo in neque facilisis bibendum. Donec
                        sodales, turpis vel malesuada bibendum, mauris est
                        gravida turpis, vel consectetur enim eros vitae velit.
                        Sed vel justo in neque facilisis bibendum.
                    </p>
                </div>
            </div>
        </>
    );
}
