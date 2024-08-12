import { Sidebar } from "@/Layouts/Sidebar";
import { Link, usePage } from "@inertiajs/react";

import Profile from "../../assets/Profile.png";
import editIcon from "../../assets/icons/pen-to-square-solid.svg";
import plusIcon from "../../assets/icons/plus-solid.svg";
import { useState } from "react";

export default function Profilepage() {
    const { props } = usePage();
    const { namakaryawan } = props;

    const [showmodal, setModal] = useState(false);
    const [license, setLicense] = useState(false);
    const [values, setValues] = useState({
        NRP: 0,
        Nama: "",
        Gender: "",
        TTL: "",
        Pendidikan: "",
        Departemen: "",
        SubDepartemen: "",
        Jabatan: "",
        Status: "",
    });

    const modalEdit = () => {
        setModal(!showmodal);
        console.log(showmodal);
    };

    const modalLicense = () => {
        setLicense(!license);
        console.log(license);
    };

    return (
        <>
            <div className="grid grid-cols-12 overflow-hidden">
                <Sidebar />
                <div className="relative col-span-10 p-2 bg-red-500">
                    <div className="w-full p-2">
                        <h1>Profile</h1>
                        <div className="flex relative items-center flex-wrap gap-4 w-[60%] p-2 border rounded-lg">
                            <div>
                                <div>
                                    <span className="inline-block w-40 mr-2 border">
                                        NRP
                                    </span>
                                    <span>:</span>
                                    <span className="inline-block mx-2 border w-60">
                                        123456
                                    </span>
                                </div>
                                <div className="my-2">
                                    <span className="inline-block w-40 mr-2 border">
                                        Nama
                                    </span>
                                    <span>:</span>
                                    <span className="inline-block mx-2 border w-60">
                                        Aripin Firmansyah
                                    </span>
                                </div>
                                <div>
                                    <span className="inline-block w-40 mr-2 border">
                                        Gender
                                    </span>
                                    <span>:</span>
                                    <span className="inline-block mx-2 border w-60">
                                        Laki-Laki
                                    </span>
                                </div>
                                <div className="my-2">
                                    <span className="inline-block w-40 mr-2 border">
                                        Tempat tgl lahir
                                    </span>
                                    <span>:</span>
                                    <span className="inline-block mx-2 border w-60">
                                        Konoha, 20 Agustus 1999
                                    </span>
                                </div>
                                <div>
                                    <span className="inline-block w-40 mr-2 border">
                                        Pendidikan
                                    </span>
                                    <span>:</span>
                                    <span className="inline-block mx-2 border w-60">
                                        S1 Sistem Informasi
                                    </span>
                                </div>
                                <div className="my-2">
                                    <span className="inline-block w-40 mr-2 border">
                                        Departemen
                                    </span>
                                    <span>:</span>
                                    <span className="inline-block mx-2 border w-60">
                                        IT
                                    </span>
                                </div>
                                <div>
                                    <span className="inline-block w-40 mr-2 border">
                                        Sub Departemen
                                    </span>
                                    <span>:</span>
                                    <span className="inline-block mx-2 border w-60">
                                        Cyber Security
                                    </span>
                                </div>
                                <div className="my-2">
                                    <span className="inline-block w-40 mr-2 border">
                                        Jabatan
                                    </span>
                                    <span>:</span>
                                    <span className="inline-block mx-2 border w-60">
                                        Staff
                                    </span>
                                </div>
                                <div>
                                    <span className="inline-block w-40 mr-2 border">
                                        Status
                                    </span>
                                    <span>:</span>
                                    <span className="inline-block mx-2 border w-60">
                                        Karyawan Tetap
                                    </span>
                                </div>
                            </div>
                            <div className="px-1 pt-4 overflow-hidden border rounded-full">
                                <img
                                    src={Profile}
                                    alt=""
                                    className="w-[95px] h-[100px] object-fill"
                                />
                            </div>
                            <button
                                className="absolute top-2 right-2"
                                onClick={modalEdit}
                            >
                                <img
                                    src={editIcon}
                                    alt=""
                                    className="w-6 h-6"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="w-full p-2">
                        <div className="relative p-2 border">
                            <h1 className="text-center">My License</h1>
                            <div className="absolute top-2 right-8">
                                <img
                                    src={editIcon}
                                    alt=""
                                    className="inline-block w-6 h-6 mx-2"
                                />
                                <button onClick={modalLicense}>
                                    <img
                                        src={plusIcon}
                                        alt=""
                                        className="inline-block w-6 h-6 mx-2"
                                    />
                                </button>
                            </div>
                            <div className="flex flex-wrap p-2 ">
                                <div className="border w-[280px] m-auto py-2">
                                    <div className="text-center">
                                        <h3 className="font-bold">
                                            PT. Bansu Electric Indonesia
                                        </h3>
                                        <div className="w-full bg-yellow-500 border">
                                            <h1 className="font-semibold">
                                                LICENSE CARD
                                            </h1>
                                        </div>
                                        <h2 className="font-semibold">
                                            QUALITY ASSURANCE
                                        </h2>
                                        <h2 className="font-semibold">
                                            INSPECTOR
                                        </h2>
                                    </div>
                                    <img
                                        src={Profile}
                                        alt=""
                                        className="m-auto w-14 h-14"
                                    />
                                    <div className="mx-2">
                                        <p>nama</p>
                                        <p>nik</p>
                                    </div>
                                    <p className="mx-2">subang</p>
                                    <div className="text-center">
                                        <p> Asst Manager HRD</p>
                                        <p>Hakim Hasin</p>
                                    </div>
                                </div>
                                <div className="border w-[280px] m-auto py-2">
                                    <div className="text-center">
                                        <h3 className="font-bold">
                                            PT. Bansu Electric Indonesia
                                        </h3>
                                        <div className="w-full bg-yellow-500 border">
                                            <h1 className="font-semibold">
                                                LICENSE CARD
                                            </h1>
                                        </div>
                                        <h2 className="font-semibold">
                                            QUALITY ASSURANCE
                                        </h2>
                                        <h2 className="font-semibold">
                                            INSPECTOR
                                        </h2>
                                    </div>
                                    <img
                                        src={Profile}
                                        alt=""
                                        className="m-auto w-14 h-14"
                                    />
                                    <div className="mx-2">
                                        <p>nama</p>
                                        <p>nik</p>
                                    </div>
                                    <p className="mx-2">subang</p>
                                    <div className="text-center">
                                        <p> Asst Manager HRD</p>
                                        <p>Hakim Hasin</p>
                                    </div>
                                </div>
                                <div className="border w-[280px] m-auto py-2">
                                    <div className="text-center">
                                        <h3 className="font-bold">
                                            PT. Bansu Electric Indonesia
                                        </h3>
                                        <div className="w-full bg-yellow-500 border">
                                            <h1 className="font-semibold">
                                                LICENSE CARD
                                            </h1>
                                        </div>
                                        <h2 className="font-semibold">
                                            QUALITY ASSURANCE
                                        </h2>
                                        <h2 className="font-semibold">
                                            INSPECTOR
                                        </h2>
                                    </div>
                                    <img
                                        src={Profile}
                                        alt=""
                                        className="m-auto w-14 h-14"
                                    />
                                    <div className="mx-2">
                                        <p>nama</p>
                                        <p>nik</p>
                                    </div>
                                    <p className="mx-2">subang</p>
                                    <div className="text-center">
                                        <p> Asst Manager HRD</p>
                                        <p>Hakim Hasin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-2">
                        <h1 className="text-center">Daftar Riwayat Traingin</h1>
                        <div className="p-1 border">
                            <div className="p-4 border">
                                <h1 className="text-center">
                                    Riwayat Training
                                </h1>
                                <div>
                                    <div>
                                        <div>
                                            <p>No</p>
                                            <p>Nama</p>
                                            <p>Jabatan</p>
                                            <p>Departemen</p>
                                            <p>Bagian</p>
                                        </div>
                                        <div>
                                            <table className="w-full text-center border">
                                                <thead className="">
                                                    <tr className="">
                                                        <th className="border">
                                                            No
                                                        </th>
                                                        <th className="border">
                                                            Materi Training
                                                        </th>
                                                        <th className="border">
                                                            Trainer
                                                        </th>
                                                        <th className="border">
                                                            Tanggal Pelaksanaan
                                                        </th>
                                                        <th className="border">
                                                            Temapt
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="">
                                                    <tr className="">
                                                        <td className="border">
                                                            1
                                                        </td>
                                                        <td className="border"></td>
                                                        <td className="border"></td>
                                                        <td className="border"></td>
                                                        <td className="border"></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border">
                                                            2
                                                        </td>
                                                        <td className="border"></td>
                                                        <td className="border"></td>
                                                        <td className="border"></td>
                                                        <td className="border"></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-2">
                        <div className="p-1 border">
                            <div className="p-2 border">
                                <h1 className="text-center">Matrix Skill</h1>
                                <div>
                                    <p>Proses</p>
                                    <p>Proses</p>
                                    <p>Proses</p>
                                    <p>Proses</p>
                                    <p>Proses</p>
                                    <p>Proses</p>
                                </div>
                                <div>
                                    <table className="w-full text-center border">
                                        <thead>
                                            <tr>
                                                <th
                                                    className="p-2 border border-gray-400"
                                                    rowSpan={4}
                                                >
                                                    NO
                                                </th>
                                                <th
                                                    className="p-2 border border-gray-400"
                                                    rowSpan={4}
                                                >
                                                    NAMA NIK
                                                </th>
                                                <th
                                                    className="p-2 border border-gray-400"
                                                    colSpan={17}
                                                >
                                                    POINT CHECK
                                                </th>
                                                <th
                                                    className="p-2 border border-gray-400"
                                                    rowSpan={4}
                                                >
                                                    SCORE
                                                </th>
                                            </tr>
                                            <tr>
                                                <th
                                                    className="p-2 border border-gray-400"
                                                    colSpan={17}
                                                >
                                                    PENILAIAN
                                                </th>
                                            </tr>
                                            <tr>
                                                <th
                                                    className="p-2 border border-gray-400"
                                                    colSpan={17}
                                                >
                                                    TARGET MINIMAL
                                                </th>
                                            </tr>
                                            <tr>
                                                <th className="border">1</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>6</td>
                                                <td>1</td>
                                                <td>1</td>
                                                <td>1</td>
                                                <td>1</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* modal edit profile */}
                    <div
                        onClick={modalEdit}
                        className={`${
                            showmodal ? "absolute " : "hidden"
                        } top-0 overflow-hidden max-h-full h-screen w-full grid backdrop-blur`}
                    >
                        <div
                            className="m-auto border w-[550px] bg-gray-500"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h1 className="mb-2 text-2xl text-center">
                                Edit Identitas Karyawan
                            </h1>
                            <div className="p-2">
                                <form action="" className="flex flex-col gap-2">
                                    <label htmlFor="nrp">
                                        <span className="inline-block pl-2 w-[230px] pr-10 py-1 border ">
                                            NRP
                                        </span>
                                        <span className="inline-block px-4">
                                            :
                                        </span>
                                        <input
                                            type="number"
                                            name="nrp"
                                            id="nrp"
                                            placeholder="masukan nrp"
                                            className="py-1"
                                        />
                                    </label>
                                    <label htmlFor="nrp">
                                        <span className="inline-block pl-2 w-[230px] pr-10 py-1 border">
                                            Nama
                                        </span>
                                        <span className="inline-block px-4">
                                            :
                                        </span>
                                        <input
                                            type="text"
                                            name="nama"
                                            id="nama"
                                            placeholder="masukan nama"
                                            className="py-1"
                                        />
                                    </label>
                                    <label htmlFor="nrp">
                                        <span className="inline-block pl-2 w-[230px] pr-10 py-1 border">
                                            Gender
                                        </span>
                                        <span className="inline-block px-4">
                                            :
                                        </span>
                                        <select
                                            name="gender"
                                            id="gender"
                                            className="py-1"
                                        >
                                            <option value="laki-laki">
                                                Laki-Laki
                                            </option>
                                            <option value="perempuan">
                                                Perempuan
                                            </option>
                                        </select>
                                    </label>
                                    <label htmlFor="nrp">
                                        <span className="inline-block pl-2 w-[230px] pr-10 py-1 border">
                                            Tempat Tanggal Lahir
                                        </span>
                                        <span className="inline-block px-4">
                                            :
                                        </span>
                                        <select
                                            name="tempat"
                                            id="tempat"
                                            className="py-1"
                                        >
                                            <option value="konoha">
                                                Konoha
                                            </option>
                                            <option value="ciamis">
                                                Ciamis
                                            </option>
                                        </select>
                                    </label>
                                    <label htmlFor="nrp">
                                        <span className="inline-block pl-2 w-[230px] pr-10 py-1 border">
                                            Pendidikan
                                        </span>
                                        <span className="inline-block px-4">
                                            :
                                        </span>
                                        <select
                                            name="pendidikan"
                                            id="pendidikan"
                                            className="py-1 mr-2"
                                        >
                                            <option value="sma">SMA</option>
                                            <option value="smk">SMK</option>
                                            <option value="d3">D3</option>
                                            <option value="s1">S1</option>
                                            <option value="s2">S2</option>
                                            <option value="s3">S3</option>
                                        </select>
                                        <select
                                            name="jurusan"
                                            id="jurusan"
                                            className="py-1"
                                        >
                                            <option value="imk">
                                                Ilmu Komputer
                                            </option>
                                            <option value="tki">
                                                Teknik Industri
                                            </option>
                                        </select>
                                    </label>
                                    <label htmlFor="nrp">
                                        <span className="inline-block pl-2 w-[230px] pr-10 py-1 border">
                                            Departemen
                                        </span>
                                        <span className="inline-block px-4">
                                            :
                                        </span>
                                        <select
                                            name="departemen"
                                            id="departemen"
                                            className="py-1"
                                        >
                                            <option value="hrga">HRGA</option>
                                            <option value="it">IT</option>
                                            <option value="basic">Basic</option>
                                            <option value="produksi">
                                                Produksi
                                            </option>
                                            <option value="enginering">
                                                Enginering
                                            </option>
                                            <option value="maintenance">
                                                Maintenance
                                            </option>
                                            <option value="ppic">PPIC</option>
                                            <option value="mcl">MCl</option>
                                            <option value="warehouse">
                                                Warehouse
                                            </option>
                                            <option value="hrd">HRD</option>
                                        </select>
                                    </label>
                                    <label htmlFor="nrp">
                                        <span className="inline-block pl-2 w-[230px] pr-10 py-1 border">
                                            Sub Departemen
                                        </span>
                                        <span className="inline-block px-4">
                                            :
                                        </span>
                                        <select
                                            name="subdepartemen"
                                            id="subdepartemen"
                                            className="py-1"
                                        >
                                            <option value="cyber">
                                                Cyber Scurity
                                            </option>
                                            <option value="operator">
                                                Operator
                                            </option>
                                        </select>
                                    </label>
                                    <label htmlFor="nrp">
                                        <span className="inline-block pl-2 w-[230px] pr-10 py-1 border">
                                            Jabatan
                                        </span>
                                        <span className="inline-block px-4">
                                            :
                                        </span>
                                        <select
                                            name="jabatan"
                                            id="jabatan"
                                            className="py-1"
                                        >
                                            <option value="jrstaff">
                                                Jr.Staff
                                            </option>
                                            <option value="srstaff">
                                                Sr.Staff
                                            </option>
                                            <option value="leader">
                                                Leader
                                            </option>
                                            <option value="supervisor">
                                                Supervisor
                                            </option>
                                            <option value="asstmanager">
                                                Asst. Manager
                                            </option>
                                            <option value="manager">
                                                Manager
                                            </option>
                                        </select>
                                    </label>
                                    <label htmlFor="status">
                                        <span className="inline-block pl-2 w-[230px] pr-10 py-1 border">
                                            Status
                                        </span>
                                        <span className="inline-block px-4">
                                            :
                                        </span>
                                        <select
                                            name="status"
                                            id="status"
                                            className="py-1"
                                        >
                                            <option value="karyawan">
                                                Karyawan Tetap
                                            </option>
                                            <option value="tidak_aktif">
                                                Tidak Aktif
                                            </option>
                                        </select>
                                    </label>
                                    <label htmlFor="">
                                        <input type="checkbox" name="" id="" />
                                        <span className="inline-block ml-2 text-sm">
                                            Kirimkan hasil perubahan data ke
                                            Section Head HRD
                                        </span>
                                    </label>
                                    <label htmlFor="">
                                        <input type="checkbox" name="" id="" />
                                        <span className="inline-block ml-2 text-sm">
                                            Data yang sudah diubah tidak dapat
                                            diubah kembali selama 14 hari
                                        </span>
                                    </label>
                                    <div className="mx-auto">
                                        <button className="px-4 py-1 mx-2 border">
                                            Batal
                                        </button>
                                        <button className="px-4 py-1 mx-2 border">
                                            Simpan
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* modal tambah license */}
                    <div
                        onClick={modalLicense}
                        className={`${
                            license ? "absolute " : "hidden"
                        } top-0  max-h-full h-screen w-full grid backdrop-blur`}
                    >
                        <div
                            className="m-auto border w-[550px] bg-gray-500"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h1 className="mb-4 text-2xl text-center">
                                Tambah License
                            </h1>
                            <div className="p-2">
                                <form action="" className="flex flex-col gap-2">
                                    <label htmlFor="">
                                        <span className="inline-block pl-2 w-[230px] pr-10 py-1 border ">
                                            NRP
                                        </span>
                                        <span className="inline-block px-4">
                                            :
                                        </span>
                                        <input
                                            type="number"
                                            name="nrp"
                                            id="nrp"
                                            placeholder="masukan nrp"
                                        />
                                    </label>
                                    <label htmlFor="">
                                        <span className="inline-block pl-2 w-[230px] pr-10 py-1 border ">
                                            Nama
                                        </span>
                                        <span className="inline-block px-4">
                                            :
                                        </span>
                                        <input
                                            type="text"
                                            name="nama"
                                            id="nama"
                                            placeholder="Masukan nama"
                                        />
                                    </label>
                                    <label htmlFor="">
                                        <span className="inline-block pl-2 w-[230px] pr-10 py-1 border ">
                                            Gender
                                        </span>
                                        <span className="inline-block px-4">
                                            :
                                        </span>
                                        <select name="gender" id="gender">
                                            <option value="laki">
                                                Laki-Laki
                                            </option>
                                            <option value="perempuan">
                                                Perempupan
                                            </option>
                                        </select>
                                    </label>
                                    <label htmlFor="">
                                        <span className="inline-block pl-2 w-[230px] pr-10 py-1 border ">
                                            Scan License
                                        </span>
                                        <span className="inline-block px-4">
                                            :
                                        </span>
                                    </label>
                                    <label htmlFor="">
                                        <input type="checkbox" name="" id="" />
                                        <span className="inline-block ml-2 text-sm">
                                            Kirimkan hasil perubahan data ke
                                            Section Head HRD
                                        </span>
                                    </label>
                                    <label htmlFor="">
                                        <input type="checkbox" name="" id="" />
                                        <span className="inline-block ml-2 text-sm">
                                            Data yang sudah diubah tidak dapat
                                            diubah kembali selama 14 hari
                                        </span>
                                    </label>
                                    <div className="mx-auto mt-4">
                                        <button className="px-4 py-1 mx-2 border">
                                            Batal
                                        </button>
                                        <button className="px-4 py-1 mx-2 border">
                                            Simpan
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
