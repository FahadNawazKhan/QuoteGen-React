import React, { useEffect, useState } from "react";
import { getQuote } from "../services/quotesService";
import ActionButtons from "./ActionButtons";

const QuoteCard = () => {

    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const fetchData = async () => {

        const data = await getQuote();

        setQuote(data.quote);
        setAuthor(data.author);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="w-[600px] rounded-3xl border mt-5 border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-10 text-white text-center">

            <h1 className="text-2xl font-serif leading-relaxed">
                {quote}
            </h1>

            <p className="mt-6 text-pink-300 text-lg">
                {author}
            </p>

            <ActionButtons getQuote={fetchData} />

        </div>
    );
};

export default QuoteCard;