import { useEffect, useState } from "react";
import Header from "@components/Header";
import List from "@components/List";
import Pagination from "@components/Pagination";
import { useQuoteStore } from "@store/quoteStore/quoteStore";
import { IQuoteDto, QuoteDto } from "../../dtos/quoteDto";
import Modal from "@components/Modal";
import QuoteForm from "./components/QuoteForm";
import { IQuoteForm } from "@models/quotes";
import ConfirmModal from "@components/ConfirmModal";

const Quotes = () => {
	const [quotesList, setQuotesList] = useState<IQuoteDto[]>([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalText, setModalText] = useState<string[]>([]);
	const [updatedQuoteId, setUpdatedQuoteId] = useState<string | null>(null);
	const [deletedQuoteId, setDeletedQuoteId] = useState<string | null>(null);
	const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
	const [quoteFormData, setQuoteFormData] = useState<IQuoteForm>({
		quote: "",
		character: "",
		anime: "",
		animePhotoURL: "",
	});

	const { getQuotes, quotes, nextPage, prevPage, page, quotesIsLoaded, addNewQuote, updateQuote, deleteQuote } = useQuoteStore((state) => state);

	const handleSubmit = (formData: IQuoteForm) => {
		if (updatedQuoteId) {
			updateQuote(formData, updatedQuoteId);
			setUpdatedQuoteId(null);
		} else {
			addNewQuote(formData);
		}
		setIsModalOpen(false);
	};
	const handleEdit = (id: string) => {
		const editedItem = quotes?.docs.find((item) => item._id === id);
		setModalText(["Edit quote", "Edit this quote?"]);
		setUpdatedQuoteId(id);
		if (editedItem) {
			setIsModalOpen(true);
			const formatedItem: IQuoteForm = {
				anime: editedItem.anime,
				animePhotoURL: "",
				character: editedItem.character,
				quote: editedItem.quote,
			};
			setQuoteFormData(formatedItem);
		}
	};
	const handleDelete = (id: string) => {
		setDeletedQuoteId(id);
		setIsConfirmModalOpen(true);
	};
	const handleConfirm = () => {
		if (deletedQuoteId) {
			deleteQuote(deletedQuoteId);
			setIsConfirmModalOpen(false);
			setDeletedQuoteId(null);
		}
	};
	const handleAaddNewQuote = () => {
		setIsModalOpen(true);
		setModalText(["Create new quote", "Create Quote"]);
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
			<Header addButtonHandler={handleAaddNewQuote} />
			<List onDelete={handleDelete} onEdit={handleEdit} items={quotesList} listIsLoaded={quotesIsLoaded} />
			<Pagination isLoading={quotesIsLoaded} currentPage={page} nextPage={nextPage} prevPage={prevPage} totalPages={quotes?.totalPages || 10} />
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={modalText[0]}>
				<QuoteForm submitButtonText={modalText[1]} formData={quoteFormData} setFormData={setQuoteFormData} onSubmit={handleSubmit} />
			</Modal>
			<ConfirmModal isOpen={isConfirmModalOpen} onClose={() => setIsConfirmModalOpen(false)} message='Are you sure want delete this quote?' title='Delete quote' onConfirm={handleConfirm} />
		</div>
	);
};

export default Quotes;
