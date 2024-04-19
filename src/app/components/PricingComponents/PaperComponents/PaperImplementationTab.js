import React from 'react'
import PaperImplementation from './PaperImplementation';
import PaperStatistical from './PaperStatistical';
import PaperMapping from './PaperMapping';

const PaperImplementationTab = () => {
	return (
		<div>
			<div className='w-full py-2 '>

			<div className="mb-4 ">
                    <ul className="whitespace-nowrap overflow-x-auto flex 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] sm:text-[12px] text-[12px] font-bold text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">

                        <li className="me-2" role="presentation">
                            <button className="inline-block p-2 border-b-2 border-[#D9D9D9] rounded-t-lg text-sky-950 hover:text-[#064454] uppercase focus:text-[#064454] focus:border-[#064454]" id="implementation-tab" data-tabs-target="#implementation" type="button" role="tab" aria-controls="implementation" aria-selected="false"> Implementation/Coding Tool</button>
                        </li>
                        <li className="me-2" role="presentation">
                            <button className="inline-block p-2 border-b-2 border-[#D9D9D9] rounded-t-lg text-sky-950 hover:text-[#064454] uppercase focus:text-[#064454] focus:border-[#064454]" id="statistical-tab" data-tabs-target="#statistical" type="button" role="tab" aria-controls="statistical" aria-selected="false">Statistical Analysis Tool</button>
                        </li>
                        <li className="me-2" role="presentation">
                            <button className="inline-block p-2 border-b-2 border-[#D9D9D9] rounded-t-lg text-[#00000080] hover:text-[#064454] uppercase focus:text-[#064454] focus:border-[#064454]" id="mapping-tab" data-tabs-target="#mapping" type="button" role="tab" aria-controls="mapping" aria-selected="false">Mapping and Designing Tool</button>
                        </li>
                    </ul>
                </div>  
				<div id="default-tab-content">

					{/* implementation section */}
					<div className="rounded-lg" id="implementation" role="tabpanel" aria-labelledby="implementation-tab">

						<PaperImplementation />

					</div>

					{/* statistical section */}
					<div className="rounded-lg" id="statistical" role="tabpanel" aria-labelledby="statistical-tab">

						<PaperStatistical />

					</div>

					{/* mapping section */}
					<div className="rounded-lg" id="mapping" role="tabpanel" aria-labelledby="mapping-tab">

						<PaperMapping />

					</div>

				</div>
			</div>
		</div>
	)
}

export default PaperImplementationTab
