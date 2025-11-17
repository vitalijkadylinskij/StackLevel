export function NetworkNode() {
    return (
        <div className="flex justify-center mt-3">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-transparent border-2 border-purple-500 transform rotate-45" />
                </div>

                {/* Top node */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />
                </div>

                {/* Right node */}
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />
                </div>

                {/* Bottom node */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />
                </div>

                {/* Left node */}
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50" />
                </div>
            </div>
        </div>
    );
}