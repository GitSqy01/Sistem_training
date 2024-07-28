export default function Cobaan({ huruf }) {
    return (
        <>
            <div className="col-span-9 bg-yellow-500">
                <h1 className="text-[10px] font-bold md:text-5xl">
                    Silahkan klik
                </h1>
                <button className="px-4 py-1 bg-indigo-500 border rounded-lg">
                    {huruf}
                </button>
            </div>
        </>
    );
}
