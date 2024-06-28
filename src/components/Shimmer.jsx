const Shimmer = () => {
    return Array(15)
        .fill(0)
        .map((n, i) => (
            <div
                key={i}
                className="meme-card p-5 m-5 border border-black rounded-lg shadow-lg w-72 h-84 flex flex-col bg-white animate-pulse"
            >
                <div className="meme-image w-full h-48 bg-gray-300 rounded-md mb-4"></div>
                <div className="meme-title h-6 bg-gray-300 rounded mb-2"></div>
                <div className="meme-author h-4 bg-gray-300 rounded"></div>
            </div>
        ));
};
export default Shimmer;
