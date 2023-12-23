import React, { FC } from "react";
import Modal from "../../../components/Modal"; // Путь к вашему компоненту Modal

interface ConfirmModalProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	title: string;
	message: string;
}

const ConfirmModal: FC<ConfirmModalProps> = ({ isOpen, onClose, onConfirm, title, message }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} title={title}>
			<div>
				<p>{message}</p>
				<div className='flex justify-end mt-4'>
					<button className='px-4 py-2 bg-red-500 text-white rounded-lg mr-2' onClick={onConfirm}>
						Delete
					</button>
					<button className='px-4 py-2 bg-gray-300 text-gray-700 rounded-lg' onClick={onClose}>
						Cancel
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default ConfirmModal;
