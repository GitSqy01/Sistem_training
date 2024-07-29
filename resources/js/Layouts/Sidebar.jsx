import Logo from "../../assets/LogoPT.png";
import Profile from "../../assets/Profile.png";

import { Link, usePage } from "@inertiajs/react";

export function Sidebar() {
    return (
        <>
            <section className="col-span-2">
                <div className="fixed left-0 flex flex-col w-[202px] items-center h-screen gap-6 bg-red-500">
                    <img src={Logo} alt="" className="w-[120px] h-[120px]" />
                    <img src={Profile} alt="" className="w-[80px] h-[80px]" />
                    <div className="flex flex-col justify-center gap-4 items center">
                        <Link
                            href="/"
                            className="px-8 border"
                            as="button"
                            type="button"
                        >
                            Dashboard
                        </Link>
                        <Link
                            href="/"
                            className="px-8 border"
                            as="button"
                            type="button"
                        >
                            Kurikulum
                        </Link>
                        <Link
                            href="/"
                            className="px-8 border"
                            as="button"
                            type="button"
                        >
                            Library
                        </Link>
                        <Link
                            href="/"
                            className="px-8 border"
                            as="button"
                            type="button"
                        >
                            Training
                        </Link>
                        <Link
                            href="/"
                            className="px-8 border"
                            as="button"
                            type="button"
                        >
                            Matrix Skill
                        </Link>
                        <Link
                            href="/"
                            className="px-8 border"
                            as="button"
                            type="button"
                        >
                            License
                        </Link>
                        <Link
                            href="/"
                            className="px-8 border"
                            as="button"
                            type="button"
                        >
                            Setting
                        </Link>
                    </div>
                    <button className="px-2 border rounded-full">Exit</button>
                </div>
            </section>
        </>
    );
}
