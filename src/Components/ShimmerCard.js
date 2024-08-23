

const ShimmerCard = ()=>{
    return <div className="my-4 mx-4 bg-gray-100 flex flex-col  rounded-lg justify-between">
    <div className="bg-slate-300 rounded-xl overflow-hidden animate-pulse w-64 h-48 mx-6 my-3"></div>
    <div className="bg-slate-300 w-32 h-4 myt-3 rounded-lg ml-28 animate-pulse"></div>
    <div className="bg-slate-300 w-40 h-4 mt-1 rounded-lg ml-20 animate-pulse"></div>
    <div className="flex justify-center mt-auto">
        <div className="w-28 h-10 bg-slate-300 animate-pulse rounded-xl my-6"></div>
    </div>
</div>
}
export default ShimmerCard;