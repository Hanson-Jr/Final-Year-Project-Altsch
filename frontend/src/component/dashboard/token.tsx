import React, { useState } from "react";

const Token = () => {
	const token = false;
	const [visible, setVisibile] = useState<boolean>(true);
	const [tokenVisible, setTokenVisible] = useState<boolean>(false);

	return (
		<div className="m-8">
			<header className="flex flex-col gap-1 mb-12">
				<h3 className="font-semibold text-2xl">
					User Token{" "}
					<i
						onClick={() => setVisibile((prev) => !prev)}
						className="pi pi-question-circle cursor-pointer text-gray-400 text-lg ml-2"></i>
				</h3>
				{visible && (
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Repellat quam eaque libero ad officiis modi saepe
						unde laboriosam odio perspiciatis sapiente at earum
						neque, similique sint magnam, minus ea temporibus.
					</p>
				)}
			</header>

			{!token && (
				<button className="px-4 w-fit bg-violet-600 py-2 text-white rounded-lg">
					Create Token
				</button>
			)}
			{token && (
				<div className="max-w-[600px]">
					<div className="border border-gray-300 focus:outline-none focus:border-violet-600 transition duration-300 w-full focus:drop-shadow-md rounded-md flex flex-row items-center px-2 overflow-hidden">
						<input
							className="py-2 pl-2 outline-none w-full "
							type={tokenVisible === true ? "text" : "password"}
							name="alias"
							id="alias"
							minLength={5}
							maxLength={8}
							value={"secret token"}
							disabled
						/>
						<span
							className="cursor-pointer"
							onClick={() => setTokenVisible((prev) => !prev)}>
							{tokenVisible && (
								<i className="pi pi-eye-slash"></i>
							)}
							{!tokenVisible && <i className="pi pi-eye"></i>}
						</span>
					</div>
					{/* Make it toggleable via an icon:) */}
					<button className="px-4 w-fit bg-red-500 py-2 text-white rounded-lg mt-5">
						Delete Token
					</button>
				</div>
			)}
		</div>
	);
};

export default Token;
