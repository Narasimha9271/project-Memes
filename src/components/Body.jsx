/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { MemeCard } from "./MemeCard";
import Shimmer from "./Shimmer";
import axios from "axios";

const Body = () => {
    const [memes, setMemes] = useState([]);
    const [showShimmer, setShowShimmer] = useState(false);

    useEffect(() => {
        fetchMemes();

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScroll = () => {
        //scrollY - how much I have scrolled
        // innerHeight - heigh of the window(visible setion)
        // document.body.scrollHeight - total height of the web page
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
            fetchMemes();
        }
    };

    const fetchMemes = async () => {
        setShowShimmer(true);
        try {
            const response = await axios.get("https://meme-api.com/gimme/20");
            if (!response.data) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = response.data;
            setMemes((memes) => [...memes, ...json.memes]);
        } catch (error) {
            console.error("Failed to fetch memes:", error);
        } finally {
            setShowShimmer(false);
        }
    };

    return (
        <div className="flex flex-wrap">
            {memes.map((meme, i) => (
                <MemeCard key={i} data={meme} />
            ))}

            {showShimmer && <Shimmer />}
        </div>
    );
};
export default Body;
