/* eslint-disable react/prop-types */
export const MemeCard = ({ data }) => {
    const { url, title, author } = data;

    return (
        <div className="meme-card p-5 m-5 border border-black rounded-lg shadow-lg w-72 h-84 flex flex-col  bg-white">
            <img
                className="meme-image w-full h-48 object-cover rounded-md mb-4"
                alt="meme"
                src={url}
            />
            <p className="meme-title font-bold text-lg">{title}</p>
            <p className="meme-author text-gray-600">{author}</p>
        </div>
    );
};
