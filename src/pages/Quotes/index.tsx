import { useEffect, useState } from "react";
import Header from "@components/Header";
import List from "@components/List";
import Pagination from "@components/Pagination";
import { useQuoteStore } from "@store/quoteStore/quoteStore";
import { IQuoteDto, QuoteDto } from "../../dtos/quoteDto";

const Quotes = () => {
	const { getQuotes, quotes, nextPage, prevPage, page, quotesIsLoaded } = useQuoteStore((state) => state);
	const [quotesList, setQuotesList] = useState<IQuoteDto[]>([]);

	useEffect(() => {
		getQuotes();
	}, [getQuotes]);
	useEffect(() => {
		if (quotes) setQuotesList(quotes.docs.map((quote) => new QuoteDto(quote)));
	}, [quotes]);

	return (
		<div className='mt-3 px-11'>
			<div className='flex gap-3 items-center mb-3'>
				<h2 className='text-2xl font-medium'>All quotes</h2>
				<p>
					Total: <span className='text-blue-500 font-medium'>{quotes?.totalDocuments}</span> quotes
				</p>
			</div>
			<Header />
			<List items={quotesList} listIsLoaded={quotesIsLoaded} />
			<Pagination isLoading={quotesIsLoaded} currentPage={page} nextPage={nextPage} prevPage={prevPage} totalPages={quotes?.totalPages || 10} />
		</div>
	);
};

export default Quotes;
