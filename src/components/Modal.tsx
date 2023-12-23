import React, { FC, ReactNode, useEffect, useRef } from "react";
import { cn } from "@utils/cn";
import CloseIcon from "@assets/close.svg";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleOutsideClick);
		} else {
			document.removeEventListener("mousedown", handleOutsideClick);
		}

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [isOpen, onClose]);

	return (
		<div className={cn("fixed inset-0 z-50 overflow-y-auto flex justify-center items-center", isOpen ? "visible" : "hidden")}>
			<div className={cn("absolute inset-0 bg-gray-500 opacity-75 transition-opacity")}></div>
			<div ref={modalRef} className={cn("inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all", "sm:my-8 sm:align-middle sm:max-w-lg sm:w-full")}>
				<div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
					<div className='sm:flex sm:items-start'>
						<div className='w-full'>
							<div className='flex items-center justify-between w-full'>
								<h3 className='text-lg font-medium leading-6 text-gray-900' id='modal-title'>
									{title}
								</h3>
								<span className='cursor-pointer' onClick={onClose}>
									<CloseIcon />
								</span>
							</div>
							<div className='mt-2'>{children}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
