import { useEffect, useState } from "react";
import Header from "@components/Header";
import List from "@components/List";
import Pagination from "@components/Pagination";
import { useQuoteStore } from "@store/quoteStore/quoteStore";
import { IQuoteDto, QuoteDto } from "../../dtos/quoteDto";
import Modal from "@components/Modal";
import CreateQuoteForm from "./components/CreateQuoteForm";
import { IQuoteForm } from "@models/quotes";

const Quotes = () => {
	const [quotesList, setQuotesList] = useState<IQuoteDto[]>([]);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { getQuotes, quotes, nextPage, prevPage, page, quotesIsLoaded, addNewQuote } = useQuoteStore((state) => state);

	const handleSubmit = (formData: IQuoteForm) => {
		addNewQuote(formData);
		setIsModalOpen(false);
	};

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
			<Header addButtonHandler={() => setIsModalOpen(true)} />
			<List items={quotesList} listIsLoaded={quotesIsLoaded} />
			<Pagination isLoading={quotesIsLoaded} currentPage={page} nextPage={nextPage} prevPage={prevPage} totalPages={quotes?.totalPages || 10} />
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title='Create new quote'>
				<CreateQuoteForm onSubmit={handleSubmit} />
			</Modal>
		</div>
	);
};

export default Quotes;
