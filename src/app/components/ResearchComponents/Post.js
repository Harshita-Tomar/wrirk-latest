import React from "react";
import GeneralForm from '@/app/utils/Researchutils/GeneralForm';

const ResearchForm = () => {
    return (
        <div className="p-4 mt-[44px]" >
            <div className="grid lg:grid-cols-2 gap-4 sm:grid-cols-1 gap-4 md:grid-cols-2 gap-4">
                <div>
                    <GeneralForm />
                </div>
            </div>
        </div>
    );
};

export default ResearchForm;
