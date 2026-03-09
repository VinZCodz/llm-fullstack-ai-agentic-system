export const ChatSkeleton = () => (
    <div className="flex flex-col gap-2 mb-6 animate-pulse">
        <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-zinc-800 rounded-full" />
            <div className="h-4 w-20 bg-zinc-800 rounded" />
        </div>
        <div className="space-y-2 ml-8">
            <div className="h-3 w-full bg-zinc-800 rounded" />
            <div className="h-3 w-3/4 bg-zinc-800 rounded" />
        </div>
    </div>
);