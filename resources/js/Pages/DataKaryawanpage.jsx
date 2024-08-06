import { Sidebar } from "@/Layouts/Sidebar";
import infoIcon from "../../assets/icons/circle-info-solid.svg";
import editIcon from "../../assets/icons/pen-to-square-solid.svg";
import deleteIcon from "../../assets/icons/trash-solid.svg";
import { Link } from "@inertiajs/react";

export default function DataKaryawanPage() {
    return (
        <>
            <div className="grid grid-cols-12">
                <Sidebar />
                <div className="col-span-10 p-2 bg-tranparant">
                    <div className="w-full p-2 ">
                        <h1 className="mb-4 text-3xl font-bold">
                            Data Karyawan
                        </h1>
                        <div className="w-full text-center border">
                            <div class="relative overflow-x-auto">
                                <table class="w-full text-sm text-center rtl:text-center text-black dark:text-black">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-white dark:text-black border-b-2 border-black">
                                        <tr>
                                            <th scope="col" class="px-6 py-3">
                                                NRP
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Nama
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Departemen
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Jabatan
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white border-b dark:bg-white dark:border-black">
                                            <th
                                                scope="row"
                                                class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-black"
                                            >
                                                12345678
                                            </th>
                                            <td class="px-6 py-4">Aripin</td>
                                            <td class="px-6 py-4">IT</td>
                                            <td class="px-6 py-4">Staff</td>
                                            <td>
                                                <Link
                                                    href={`/dashboardpage/datakaryawan/edit/${encodeURIComponent(
                                                        "Aripin"
                                                    )}`}
                                                    as="button"
                                                    className="px-1 py-1 mx-1 bg-blue-700 border rounded-full "
                                                >
                                                    <img
                                                        src={infoIcon}
                                                        alt=""
                                                        className="w-6 h-6"
                                                    />
                                                </Link>
                                                <button className="px-1 py-1 mx-1 bg-green-700 border rounded-full ">
                                                    <img
                                                        src={editIcon}
                                                        alt=""
                                                        className="w-6 h-6"
                                                    />
                                                </button>
                                                <button className="px-1 py-1 mx-1 bg-red-900 border rounded-full ">
                                                    <img
                                                        src={deleteIcon}
                                                        alt=""
                                                        className="w-6 h-6"
                                                    />
                                                </button>
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-white dark:border-black">
                                            <th
                                                scope="row"
                                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                                            >
                                                12345678
                                            </th>
                                            <td class="px-6 py-4">Aripin</td>
                                            <td class="px-6 py-4">IT</td>
                                            <td class="px-6 py-4">Staff</td>
                                            <td>
                                                <button className="px-4 py-1 mx-1 border rounded-md">
                                                    info
                                                </button>
                                                <button className="px-4 py-1 mx-1 border rounded-md">
                                                    edit
                                                </button>
                                                <button className="px-4 py-1 mx-1 border rounded-md">
                                                    delete
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
