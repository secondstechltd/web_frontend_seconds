// import logo from './logo.svg';
// import './App.css';
import Footer from '../../components/Footer';
import { bodaImageString } from '../../helperModules/index.js'

function Home() {
	return (
		<div className="relative">
			<img
				className=" inset-0 object-cover w-full h-[700px]"
				// src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
				src='./images/cover.jpg'
				alt=""
			/>

			<div className="absolute top-0 mt-32 items-center justify-between text-white flex sm:flex">
				<div className="items-center ml-20 ">
					<h1
					data-aos="fade-up"
				
					data-aos-duration="1000"
					className="font-sans font-bold text-7xl">Anywhere you</h1>
					<h1
						data-aos="fade-up"
				
					data-aos-duration="2000"
					className="font-sans font-bold text-6xl mt-5">want to go</h1>
					<h2
						data-aos="fade-up"
				
					data-aos-duration="3000"
					className="font-sans font-semibold text-4xl mt-5">Only Seconds Away</h2>
					<div
						data-aos="fade-up"
				
						data-aos-duration="3000"
					 className="flex pt-6  items-center">
						<img src="./Badge.png" alt="" />
						<img className="pl-3" src="./Badge2.png" alt="" />
					</div>
				</div>

				<div className="w-full max-w-xl xl:px-8 xl:w-5/12 opacity-90 ">
					<div className="bg-black rounded shadow-x p-7 sm:p-10">
						<h3
							data-aos="fade-up"
				
							data-aos-duration="1000"
						className="mb-4  text-white font-bold sm:text-center sm:mb-6 sm:text-2xl">
							Where would you like to go?
						</h3>
						<form
							data-aos="fade-up"
				
							data-aos-duration="1000"
						>
							
							<div className="mb-1 sm:mb-2">
								<label className="inline-block mb-1 text-xl font-medium pb-2">Enter Destination</label>
								<input
									placeholder="Enter Destination"
									required
									type="text"
									className="flex-grow w-full h-12 px-4 text-black font-medium  mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
								/>
							</div>

							<h1 className="pt-4 text-xl">Select Vechile:</h1>
							<div className="flex pt-2 ">
								<div className="flex items-center justify-center flex-col border-2 border-black bg-white">
									<div className="mx-10 my-10">
										<svg
											width="48"
											height="40"
											viewBox="0 0 48 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
											className=" mb-4"
										>
											<path
												d="M47.8711 14.7239L46.6036 12.5097C46.5466 12.4121 46.4533 12.341 46.3441 12.3119C46.2348 12.2829 46.1186 12.2982 46.0206 12.3546L43.309 13.9377L39.1213 2.37465C38.9002 1.68469 38.4655 1.08284 37.8801 0.656013C37.2946 0.229183 36.5887 -0.00054376 35.8642 9.66503e-07H12.69C10.8341 9.66503e-07 9.18681 1.19802 8.61454 2.96831L4.62471 13.943L1.90777 12.3599C1.80981 12.3036 1.69353 12.2882 1.5843 12.3173C1.47508 12.3463 1.38178 12.4174 1.3248 12.515L0.0572529 14.7239C-0.0604098 14.9271 0.00911825 15.1838 0.212354 15.3015L3.44273 17.1841L2.66723 19.3234C2.60305 19.4946 2.57096 19.6764 2.57096 19.8583V38.4811C2.57096 39.3208 3.20206 40 3.97756 40H7.59302C8.25086 40 8.82313 39.5026 8.96218 38.8073L9.374 36.791H38.5544L38.9662 38.8073C39.1106 39.5026 39.6775 40 40.3354 40H43.9508C44.7263 40 45.3574 39.3208 45.3574 38.4811V19.8583C45.3574 19.6764 45.3253 19.4946 45.2611 19.3234L44.4856 17.1841L47.7107 15.3015C47.8078 15.2455 47.879 15.1535 47.909 15.0455C47.939 14.9375 47.9254 14.822 47.8711 14.7239V14.7239ZM10.7004 25.827C9.51841 25.827 8.56106 24.8696 8.56106 23.6877C8.56106 22.5057 9.51841 21.5483 10.7004 21.5483C11.8824 21.5483 12.8397 22.5057 12.8397 23.6877C12.8397 24.8696 11.8824 25.827 10.7004 25.827ZM31.4518 29.8382C31.4518 30.0735 31.2593 30.2661 31.024 30.2661H16.9044C16.6691 30.2661 16.4766 30.0735 16.4766 29.8382V25.3456C16.4766 25.1103 16.6691 24.9178 16.9044 24.9178H19.0437C19.2791 24.9178 19.4716 25.1103 19.4716 25.3456V27.271H28.4568V25.3456C28.4568 25.1103 28.6493 24.9178 28.8846 24.9178H31.024C31.2593 24.9178 31.4518 25.1103 31.4518 25.3456V29.8382ZM37.228 25.827C36.046 25.827 35.0887 24.8696 35.0887 23.6877C35.0887 22.5057 36.046 21.5483 37.228 21.5483C38.41 21.5483 39.3673 22.5057 39.3673 23.6877C39.3673 24.8696 38.41 25.827 37.228 25.827ZM8.34713 14.9699L12.2353 4.27865L12.2621 4.20912L12.2835 4.13959C12.3423 3.9631 12.5028 3.84543 12.69 3.84543H35.5593L39.5919 14.9699H8.34713Z"
												fill="black"
											/>
										</svg>
										<h3 className="text-black items-center font-semibold text-xl text-center ">
											Ride
										</h3>
									</div>
								</div>
								<div className="flex items-center justify-center flex-col border-2 border-black bg-white  w-36 h-36">
									<svg
										width="26"
										height="40"
										viewBox="0 0 26 40"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d={bodaImageString.bodaImageString}
											fill="black"
										/>
									</svg>
									<h3 className="text-black items-center font-semibold text-xl text-center pt-3">
										Boda
									</h3>
								</div>
								<div className="flex items-center justify-center flex-col border-2 border-black bg-white  w-36 h-36">
									<svg
										width="61"
										height="40"
										viewBox="0 0 61 40"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M49.8747 32.3614C47.5903 32.3614 45.306 33.1229 43.5927 34.6458C41.3084 36.7397 37.8819 36.7397 35.7879 34.6458C32.1711 31.6 27.0313 31.6 23.4144 34.6458C21.1301 36.7397 17.894 36.7397 15.6096 34.6458C13.8964 33.1229 11.8024 32.3614 9.51807 32.3614C7.23373 32.3614 5.13976 33.1229 3.4265 34.6458C2.66506 35.5976 1.33253 36.1686 0 36.1686V39.9759C2.09397 39.7855 4.18795 39.0241 5.9012 37.6915C6.85301 36.7397 8.18554 36.1686 9.51807 36.1686C10.8506 36.1686 12.3735 36.7397 13.3253 37.6915C16.9422 40.7373 22.2723 40.7373 25.8891 37.6915C27.0313 36.7397 28.3638 36.1686 29.8867 36.1686C31.4096 36.1686 32.7421 36.7397 33.8843 37.6915C37.5012 40.7373 42.8313 40.7373 46.2578 37.6915C47.4 36.7397 48.7325 36.1686 50.2554 36.1686C51.7783 36.1686 53.3012 36.7397 54.253 37.6915C55.9662 39.2144 58.4409 40.1662 60.7253 39.9759V36.1686C59.2024 36.1686 57.6795 35.5976 56.5373 34.6458C54.6337 33.1229 52.3494 32.3614 49.8747 32.3614Z"
											fill="black"
										/>
										<path
											d="M7.23369 28.9349V22.653H56.918L50.2553 28.5542H50.6361C52.159 28.5542 53.6819 28.9349 54.824 29.506L59.5831 25.3181L59.7734 24.9373C61.1059 23.2241 60.7252 20.9397 59.012 19.6072C58.4409 19.0361 57.4891 18.8458 56.7276 18.8458H48.9228L38.6433 5.52048H28.1734C24.9373 5.52048 22.4626 7.99517 22.4626 11.2313H18.6554V0H7.61441V11.8024C5.33007 12.5638 3.61682 14.6578 3.61682 17.1325V30.8385H3.80718C4.75899 29.8867 5.90116 29.3156 7.23369 28.9349ZM30.2674 11.4217H38.2626L40.9276 15.2289H30.077V11.4217H30.2674ZM11.2313 3.80723H15.0385V11.4217H11.2313V3.80723Z"
											fill="black"
										/>
									</svg>
									<h3 className="text-black items-center font-semibold text-xl text-center pt-3">
										Ferry
									</h3>
								</div>
							</div>

							<div className="mt-4 mb-2 sm:mb-4 pt-5 ">
								<button
									type="button"
									class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  w-full rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									Confirm
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div className="bg-white h-[100vh] flex-1 flex items-center">
				<div
					data-aos="fade-left"
				
					data-aos-duration="1000"
				className="flex-[0.5px] ml-10">
					<img

						className="insert-0 w-full h-[550px] "
						src="https://images.unsplash.com/photo-1600320254374-ce2d293c324e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
						alt=""
					/>
				</div>
				<div className="flex-[0.5px] text-black pl-10">
					<h1
						data-aos="fade-up"
				
						data-aos-duration="1000"
					className="font-extrabold font-sans text-7xl">For Drivers</h1>
					<h2
						data-aos="fade-up"
				
						data-aos-duration="2000"
					className="font-semibold font-sans text-4xl pt-4">
						Set up your Seconds profile and <br /> hit the road{' '}
					</h2>

					<div className="flex pt-10">
						<div
							data-aos="fade-up"
				
							data-aos-duration="1000"
						className="flex items-center justify-center flex-col border-2 border-black bg-black  w-40 h-40">
							<svg
								data-aos="fade-up"
				
								data-aos-duration="2000"
								width="58"
								height="40"
								viewBox="0 0 58 40"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M47.8571 35.7143C46.531 35.7143 45.2593 35.1875 44.3216 34.2498C43.3839 33.3122 42.8571 32.0404 42.8571 30.7143C42.8571 29.3882 43.3839 28.1165 44.3216 27.1788C45.2593 26.2411 46.531 25.7143 47.8571 25.7143C49.1832 25.7143 50.455 26.2411 51.3927 27.1788C52.3303 28.1165 52.8571 29.3882 52.8571 30.7143C52.8571 32.0404 52.3303 33.3122 51.3927 34.2498C50.455 35.1875 49.1832 35.7143 47.8571 35.7143ZM47.8571 40C45.3944 40 43.0325 39.0217 41.2911 37.2803C39.5497 35.5389 38.5714 33.177 38.5714 30.7143C38.5714 28.2516 39.5497 25.8897 41.2911 24.1483C43.0325 22.4069 45.3944 21.4286 47.8571 21.4286C50.3199 21.4286 52.6817 22.4069 54.4231 24.1483C56.1645 25.8897 57.1428 28.2516 57.1428 30.7143C57.1428 33.177 56.1645 35.5389 54.4231 37.2803C52.6817 39.0217 50.3199 40 47.8571 40V40Z"
									fill="white"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M35.5814 0.828571C35.467 0.581262 35.2842 0.371848 35.0546 0.225037C34.825 0.0782259 34.5582 0.000142841 34.2857 0H27.1429V2.85714H33.3729L46.5614 31.3143C46.7277 31.6462 47.0167 31.9003 47.3672 32.0229C47.7176 32.1454 48.102 32.1266 48.4389 31.9706C48.7758 31.8146 49.0387 31.5336 49.172 31.1871C49.3053 30.8406 49.2984 30.4558 49.1529 30.1143L35.5814 0.828571V0.828571ZM9.28571 35.7143C7.95963 35.7143 6.68786 35.1875 5.75018 34.2498C4.8125 33.3121 4.28571 32.0404 4.28571 30.7143C4.28571 29.3882 4.8125 28.1164 5.75018 27.1788C6.68786 26.2411 7.95963 25.7143 9.28571 25.7143C10.6118 25.7143 11.8836 26.2411 12.8212 27.1788C13.7589 28.1164 14.2857 29.3882 14.2857 30.7143C14.2857 32.0404 13.7589 33.3121 12.8212 34.2498C11.8836 35.1875 10.6118 35.7143 9.28571 35.7143V35.7143ZM9.28571 40C6.82299 40 4.46113 39.0217 2.71972 37.2803C0.978313 35.5389 0 33.177 0 30.7143C0 28.2516 0.978313 25.8897 2.71972 24.1483C4.46113 22.4069 6.82299 21.4286 9.28571 21.4286C11.7484 21.4286 14.1103 22.4069 15.8517 24.1483C17.5931 25.8897 18.5714 28.2516 18.5714 30.7143C18.5714 33.177 17.5931 35.5389 15.8517 37.2803C14.1103 39.0217 11.7484 40 9.28571 40V40Z"
									fill="white"
								/>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M25 30.7143C25 31.0932 24.8495 31.4566 24.5816 31.7245C24.3137 31.9924 23.9503 32.1429 23.5715 32.1429H9.28575C8.90687 32.1429 8.54351 31.9924 8.2756 31.7245C8.00769 31.4566 7.85718 31.0932 7.85718 30.7143C7.85718 30.3355 8.00769 29.9721 8.2756 29.7042C8.54351 29.4363 8.90687 29.2858 9.28575 29.2858H23.5715C23.9503 29.2858 24.3137 29.4363 24.5816 29.7042C24.8495 29.9721 25 30.3355 25 30.7143Z"
									fill="white"
								/>
								<path
									d="M34.3614 19.8485L35.79 16.9914C35.9882 16.5948 36.0913 16.1576 36.0913 15.7143C36.0913 15.2709 35.9882 14.8337 35.79 14.4371L34.3614 11.58C34.1241 11.105 33.7591 10.7056 33.3074 10.4265C32.8557 10.1474 32.3352 9.99972 31.8043 9.99997H27.1186C25.8734 10.0001 24.6366 10.2038 23.4571 10.6028L18.9643 12.1214C18.7531 12.1928 18.5615 12.3126 18.4049 12.4713C18.2482 12.63 18.131 12.8232 18.0624 13.0353C17.9938 13.2475 17.9758 13.4727 18.0099 13.6931C18.0439 13.9134 18.1291 14.1227 18.2586 14.3043L22.9057 20.8285C23.0379 21.0141 23.2125 21.1655 23.415 21.2698C23.6176 21.3742 23.8422 21.4286 24.07 21.4285H31.8057C32.3364 21.4285 32.8566 21.2807 33.308 21.0016C33.7594 20.7225 34.1242 20.3233 34.3614 19.8485V19.8485ZM1.42857 12.8571H12.9943C13.2111 12.8569 13.4252 12.906 13.6203 13.0008C13.8153 13.0956 13.9862 13.2336 14.12 13.4043L18.2371 18.6614C18.3242 18.7721 18.3767 18.9061 18.3878 19.0466C18.3989 19.187 18.3683 19.3276 18.2998 19.4506C18.2312 19.5737 18.1278 19.6738 18.0025 19.7382C17.8772 19.8026 17.7357 19.8286 17.5957 19.8128L1.27143 17.9985C0.921874 17.9599 0.598874 17.7936 0.364277 17.5316C0.129681 17.2696 -2.40566e-05 16.9302 3.34669e-09 16.5785V14.2857C3.34669e-09 13.9068 0.15051 13.5434 0.418419 13.2755C0.686328 13.0076 1.04969 12.8571 1.42857 12.8571ZM34.2857 24.2857H25.7143C24.9565 24.2857 24.2298 24.5867 23.694 25.1225C23.1582 25.6583 22.8571 26.3851 22.8571 27.1428V30C22.8571 30.7577 23.1582 31.4845 23.694 32.0203C24.2298 32.5561 24.9565 32.8571 25.7143 32.8571H31.4286C32.1863 32.8571 32.9131 32.5561 33.4489 32.0203C33.9847 31.4845 34.2857 30.7577 34.2857 30V24.2857ZM41.87 7.14282H47.4843C47.5992 7.14269 47.7124 7.17028 47.8144 7.22326C47.9164 7.27623 48.004 7.35302 48.07 7.44711L52.07 13.1614C52.1451 13.2685 52.1893 13.3941 52.1979 13.5246C52.2064 13.6551 52.179 13.7854 52.1186 13.9014C52.0582 14.0174 51.9671 14.1146 51.8552 14.1823C51.7434 14.2501 51.6151 14.2858 51.4843 14.2857H44.7271C44.5946 14.2857 44.4647 14.2488 44.3519 14.1792C44.2391 14.1095 44.1479 14.0099 44.0886 13.8914L41.2314 8.17711C41.1769 8.06821 41.151 7.94717 41.1564 7.82548C41.1618 7.70379 41.1983 7.58551 41.2622 7.48186C41.3262 7.37822 41.4157 7.29266 41.522 7.23332C41.6284 7.17398 41.7482 7.14283 41.87 7.14282Z"
									fill="white"
								/>
							</svg>

							<h3
								data-aos="fade-up"
				
								data-aos-duration="3000"
							className="text-white items-center font-semibold text-xl text-center pt-3">
								Sign Up to <br /> Ride
							</h3>
						</div>
						<div 
							data-aos="fade-up"
				
							data-aos-duration="1000"
						className="flex items-center justify-center flex-col  border-2 border-black bg-black ml-6 w-40 h-40">
							<svg
								data-aos="fade-up"
				
								data-aos-duration="2000"
								width="74"
								height="40"
								viewBox="0 0 74 40"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M50 0L60 13.3333H66.6667C70.3667 13.3333 73.3333 16.3 73.3333 20V30H66.6667C66.6667 32.6522 65.6131 35.1957 63.7377 37.0711C61.8624 38.9464 59.3188 40 56.6667 40C54.0145 40 51.471 38.9464 49.5956 37.0711C47.7202 35.1957 46.6667 32.6522 46.6667 30H26.6667C26.6667 32.6522 25.6131 35.1957 23.7377 37.0711C21.8624 38.9464 19.3188 40 16.6667 40C14.0145 40 11.471 38.9464 9.5956 37.0711C7.72024 35.1957 6.66667 32.6522 6.66667 30H0V20C0 16.3 2.96667 13.3333 6.66667 13.3333L16.6667 0H50ZM31.6667 5H19.1667L12.8667 13.3333H31.6667V5ZM36.6667 5V13.3333H53.8L47.5 5H36.6667ZM16.6667 25C15.3406 25 14.0688 25.5268 13.1311 26.4645C12.1935 27.4021 11.6667 28.6739 11.6667 30C11.6667 31.3261 12.1935 32.5978 13.1311 33.5355C14.0688 34.4732 15.3406 35 16.6667 35C17.9927 35 19.2645 34.4732 20.2022 33.5355C21.1399 32.5978 21.6667 31.3261 21.6667 30C21.6667 28.6739 21.1399 27.4021 20.2022 26.4645C19.2645 25.5268 17.9927 25 16.6667 25ZM56.6667 25C55.3406 25 54.0688 25.5268 53.1311 26.4645C52.1935 27.4021 51.6667 28.6739 51.6667 30C51.6667 31.3261 52.1935 32.5978 53.1311 33.5355C54.0688 34.4732 55.3406 35 56.6667 35C57.9928 35 59.2645 34.4732 60.2022 33.5355C61.1399 32.5978 61.6667 31.3261 61.6667 30C61.6667 28.6739 61.1399 27.4021 60.2022 26.4645C59.2645 25.5268 57.9928 25 56.6667 25Z"
									fill="white"
								/>
							</svg>
							<h3
								data-aos="fade-up"
				
								data-aos-duration="3000"
							className="text-white items-center font-semibold text-xl text-center pt-3">
								Sign Up to <br /> Drive
							</h3>
						</div>
						<div 
							data-aos="fade-up"
				
							data-aos-duration="1000"
						className="flex items-center justify-center flex-col border-2 border-black bg-white ml-6 w-40 h-40 ">
							<h3 
								data-aos="fade-up"
				
								data-aos-duration="2000"
							className="text-black items-center font-bold text-xl text-center pt-3">
								Learn <br /> More
							</h3>
						</div>
					</div>
				</div>
			</div>

			<div className="relative h-[100vh] bg-black opacity-90 flex items-center justify-center text-center">
				<img
					className=" inset-0 object-cover w-full h-[100vh]"
					src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
					alt=""
				/>

				<div className="absolute top-22 flex items-center justify-center  flex-col">
					<h1
						data-aos="fade-up"
				
						data-aos-duration="1000"
					className="text-white items-center text-center text-8xl font-sans font-bold">
						Business looking to <br /> Expand?{' '}
					</h1>
					<h2
						data-aos="fade-up"
				
						data-aos-duration="2000"
					className="text-white font-sans font-semibold text-5xl pt-6">We got you covered.</h2>
					<button
						data-aos="fade-up"
				
						data-aos-duration="3000"
						type="button"
						class="text-white text-xl mt-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Find out more
					</button>
				</div>
			</div>

			<div className="h-[100vh] relative flex-1 top-0 flex items-center ">
				<div className="items-center ml-20 flex-[0.5px] ">
					<h1
						data-aos="fade-right"
				
						data-aos-duration="1000"
					className="font-sans font-bold text-7xl">Join Now.</h1>
					<h1
						data-aos="fade-right"
				
						data-aos-duration="2000"
					className="font-sans font-bold text-6xl mt-5">Seconds is all it takes</h1>

					<div className="flex pt-10  ">
						<div
							data-aos="fade-up"
				
							data-aos-duration="1000"
						className="flex items-center justify-center flex-col border-2 border-black  w-40 h-40">
							<svg
								data-aos="fade-up"
				
								data-aos-duration="2000"
								width="40"
								height="48"
								viewBox="0 0 40 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12.3045 41.8477H27.07V46.7695H12.3045C5.51243 46.7695 0 41.2571 0 34.465V12.3168H4.92181V34.465C4.92181 38.5501 8.21943 41.8477 12.3045 41.8477ZM15.799 8.404C17.7185 6.48449 17.7185 3.35914 15.799 1.43963C13.8795 -0.479877 10.7542 -0.479877 8.83466 1.43963C6.91515 3.35914 6.91515 6.48449 8.83466 8.404C10.7542 10.3481 13.8549 10.3481 15.799 8.404ZM18.4568 17.2387C18.4568 14.5317 16.242 12.3168 13.535 12.3168H12.3045C9.59754 12.3168 7.38272 14.5317 7.38272 17.2387V32.0041C7.38272 36.0892 10.6803 39.3868 14.7654 39.3868H27.2422L35.8554 48L39.3745 44.4809L26.8977 32.0041H18.4568V17.2387Z"
									fill="black"
								/>
							</svg>
							<h3 
								data-aos="fade-up"
				
								data-aos-duration="3000"
							className="text-black items-center font-semibold text-xl text-center pt-3">
								Sign up as <br /> Ride
							</h3>
						</div>
						<div 
							data-aos="fade-up"
				
							data-aos-duration="1000"
						className="flex items-center justify-center flex-col border-2 border-black  w-40 h-40 ml-5">
							<svg
								data-aos="fade-up"
				
								data-aos-duration="2000"
								width="42"
								height="48"
								viewBox="0 0 42 48"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M8.96169 4.66602C8.96169 4.0821 14.9822 0 20.96 0C26.9379 0 32.9584 4.08343 32.9584 4.66602C32.9584 6.74573 32.7371 7.97756 32.5504 8.64813C32.4264 9.08807 32.0145 9.33203 31.5572 9.33203H10.3628C9.90556 9.33203 9.49362 9.08807 9.36964 8.64813C9.183 7.97756 8.96169 6.74573 8.96169 4.66602ZM18.9603 3.99944C18.6067 3.99944 18.2676 4.1399 18.0176 4.38991C17.7676 4.63993 17.6272 4.97902 17.6272 5.33259C17.6272 5.68616 17.7676 6.02525 18.0176 6.27527C18.2676 6.52528 18.6067 6.66574 18.9603 6.66574H22.9597C23.3133 6.66574 23.6524 6.52528 23.9024 6.27527C24.1524 6.02525 24.2929 5.68616 24.2929 5.33259C24.2929 4.97902 24.1524 4.63993 23.9024 4.38991C23.6524 4.1399 23.3133 3.99944 22.9597 3.99944H18.9603ZM10.3455 17.6215C5.90612 16.2484 7.02596 13.7954 8.71906 11.9983H33.5716C34.9261 13.7288 35.6526 16.0631 31.5585 17.4602C31.7259 18.9454 31.5792 20.4491 31.128 21.874C30.6769 23.2988 29.9313 24.6129 28.9396 25.731C27.9479 26.8492 26.7323 27.7464 25.3716 28.3646C24.0108 28.9827 22.5354 29.308 21.0409 29.3192C19.5463 29.3305 18.0661 29.0275 16.6963 28.43C15.3264 27.8324 14.0973 26.9536 13.0889 25.8506C12.0805 24.7475 11.3151 23.4448 10.8425 22.0269C10.3699 20.6091 10.2006 19.1077 10.3455 17.6202V17.6215ZM20.5974 18.6641C24.1196 18.6641 26.8499 18.4774 28.9429 18.1521C29.0117 19.2391 28.8578 20.3286 28.4907 21.354C28.1235 22.3793 27.5508 23.3189 26.8077 24.1151C26.0646 24.9113 25.1667 25.5474 24.1691 25.9844C23.1715 26.4213 22.0952 26.6499 21.0061 26.6562C19.917 26.6625 18.8381 26.4463 17.8355 26.0208C16.8329 25.5954 15.9278 24.9697 15.1755 24.1821C14.4233 23.3945 13.8398 22.4616 13.4609 21.4405C13.082 20.4195 12.9155 19.3318 12.9718 18.2441C14.9222 18.5134 17.4218 18.6641 20.5974 18.6641V18.6641ZM32.1811 38.128C30.9752 36.2467 29.3155 34.6989 27.3546 33.6273C25.3936 32.5556 23.1947 31.9945 20.96 31.9955C18.7245 31.9941 16.5245 32.5553 14.5628 33.6275C12.6011 34.6997 10.9408 36.2483 9.73492 38.1307C9.28735 37.4414 8.59999 36.9426 7.80585 36.7309L5.23021 36.0416C4.37651 35.8128 3.46686 35.9324 2.70134 36.3741C1.93581 36.8159 1.37711 37.5437 1.14811 38.3973L0.11359 42.2608C0.000288526 42.6836 -0.0286201 43.1246 0.0285151 43.5585C0.0856504 43.9925 0.227711 44.411 0.446583 44.79C0.665456 45.1691 0.956853 45.5013 1.30414 45.7678C1.65142 46.0342 2.04778 46.2296 2.4706 46.3429L5.0449 47.0335C5.47792 47.1501 5.93006 47.1779 6.37409 47.1151C6.81812 47.0523 7.24484 46.9003 7.62855 46.6682C7.62961 47.0217 7.77108 47.3604 8.02184 47.6097C8.27261 47.8589 8.61212 47.9984 8.96569 47.9973C9.31927 47.9963 9.65794 47.8548 9.9072 47.604C10.1565 47.3533 10.2959 47.0137 10.2948 46.6602V45.327C10.2948 44.8191 10.3308 44.3192 10.3988 43.8299L17.3365 45.6896C17.6586 46.3789 18.1705 46.9621 18.8124 47.3706C19.4542 47.7792 20.1992 47.9962 20.96 47.9962C21.7208 47.9962 22.4659 47.7792 23.1077 47.3706C23.7495 46.9621 24.2615 46.3789 24.5835 45.6896L31.5212 43.8299C31.5892 44.3192 31.6252 44.8191 31.6252 45.327V46.6602C31.6234 47.0137 31.7622 47.3535 32.011 47.6048C32.2597 47.8561 32.5981 47.9982 32.9517 48C33.3053 48.0018 33.6451 47.863 33.8963 47.6142C34.1476 47.3655 34.2897 47.0271 34.2915 46.6735C35.0381 47.1214 35.9606 47.2774 36.8685 47.0335L39.4441 46.3442C39.8669 46.231 40.2633 46.0355 40.6106 45.7691C40.9579 45.5027 41.2493 45.1704 41.4681 44.7914C41.687 44.4123 41.8291 43.9938 41.8862 43.5599C41.9433 43.1259 41.9144 42.6849 41.8011 42.2621L40.7653 38.3987C40.5363 37.545 39.9776 36.8172 39.212 36.3755C38.4465 35.9337 37.5369 35.8141 36.6832 36.043L34.1075 36.7322C33.3152 36.9432 32.629 37.4399 32.1811 38.1267V38.128ZM11.0987 41.2569C11.8189 39.5152 12.9873 37.9953 14.4851 36.8514C15.983 35.7076 17.757 34.9806 19.6269 34.7445V40.2224C19.0294 40.4343 18.4907 40.7849 18.0551 41.2454C17.6194 41.7059 17.2991 42.2631 17.1206 42.8714L11.0987 41.2583V41.2569ZM30.8213 41.2569C30.1011 39.5153 28.9326 37.9954 27.4348 36.8516C25.9369 35.7077 24.163 34.9808 22.2932 34.7445V40.2224C23.4983 40.649 24.4395 41.6355 24.7995 42.8714L30.8213 41.2583V41.2569ZM20.96 45.327C21.3136 45.327 21.6527 45.1866 21.9027 44.9366C22.1527 44.6865 22.2932 44.3474 22.2932 43.9939C22.2932 43.6403 22.1527 43.3012 21.9027 43.0512C21.6527 42.8012 21.3136 42.6607 20.96 42.6607C20.6065 42.6607 20.2674 42.8012 20.0173 43.0512C19.7673 43.3012 19.6269 43.6403 19.6269 43.9939C19.6269 44.3474 19.7673 44.6865 20.0173 44.9366C20.2674 45.1866 20.6065 45.327 20.96 45.327Z"
									fill="black"
								/>
							</svg>
							<h3
								data-aos="fade-up"
				
								data-aos-duration="3000"
							className="text-black items-center font-semibold text-xl text-center pt-3">
								Sign up as <br /> Driver
							</h3>
						</div>
						<div 	data-aos="fade-up"
				
				data-aos-duration="1000" className="flex items-center justify-center flex-col border-2 border-black  w-40 h-40 ml-5">
							<svg
								data-aos="fade-up"
				
								data-aos-duration="2000"
								width="38"
								height="40"
								viewBox="0 0 38 40"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M24 13.3333V0H0V40H10.6667V32H13.3333V40H37.3333V13.3333H24ZM6.66667 34.6667H4V32H6.66667V34.6667ZM6.66667 28H4V25.3333H6.66667V28ZM6.66667 21.3333H4V18.6667H6.66667V21.3333ZM6.66667 14.6667H4V12H6.66667V14.6667ZM6.66667 8H4V5.33333H6.66667V8ZM17.3333 5.33333H20V8H17.3333V5.33333ZM13.3333 28H10.6667V25.3333H13.3333V28ZM13.3333 21.3333H10.6667V18.6667H13.3333V21.3333ZM13.3333 14.6667H10.6667V12H13.3333V14.6667ZM13.3333 8H10.6667V5.33333H13.3333V8ZM20 34.6667H17.3333V32H20V34.6667ZM20 28H17.3333V25.3333H20V28ZM20 21.3333H17.3333V18.6667H20V21.3333ZM20 14.6667H17.3333V12H20V14.6667ZM34.6667 37.3333H24V34.6667H26.6667V32H24V28H26.6667V25.3333H24V21.3333H26.6667V18.6667H24V16H34.6667V37.3333Z"
									fill="black"
								/>
								<path
									d="M29.3334 32H32V34.6667H29.3334V32ZM29.3334 25.3333H32V28H29.3334V25.3333ZM29.3334 18.6667H32V21.3333H29.3334V18.6667Z"
									fill="black"
								/>
							</svg>
							<h3 	data-aos="fade-up"
				
				data-aos-duration="3000" className="text-black items-center font-semibold text-xl text-center pt-3">
								Sign up as <br /> Business
							</h3>
						</div>
					</div>
				</div>

				<div
					data-aos="fade-left"
				
					data-aos-duration="2000"
				className="flex-[0.5px] mr-10">
					<img

						className="inset-0 object-cover w-full h-[550px]"
						src="https://images.unsplash.com/photo-1626565244872-206f4c1f9e57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
						alt=""
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
