import React, { useState } from "react";
import { cn } from "@utils/cn";

interface Tab {
	title: string;
	content: React.ReactNode | string;
}

const Tabs: React.FC<{ tabs: Tab[] }> = ({ tabs }) => {
	const [activeTab, setActiveTab] = useState<number>(0);

	const changeTab = (index: number) => {
		setActiveTab(index);
	};

	return (
		<div className={cn("w-full")}>
			{/* Заголовки вкладок */}
			<div className={cn("flex w-full justify-between")}>
				{tabs.map((tab, index) => (
					<div
						key={index}
						className={cn("cursor-pointer px-4 py-2 border-b-2 border-transparent w-full text-center", activeTab === index ? "border-blue-500 text-blue-500" : "text-gray-500")}
						onClick={() => changeTab(index)}
					>
						{tab.title}
					</div>
				))}
			</div>

			<div className={cn("mt-4")}>
				{tabs.map((tab, index) => (
					<div key={index} className={cn({ hidden: activeTab !== index })}>
						<div className={cn("py-4")}>{tab.content}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Tabs;
