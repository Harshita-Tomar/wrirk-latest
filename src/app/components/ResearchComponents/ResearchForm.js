import React from "react";

import GeneralForm from '@/app/utils/Researchutils/GeneralForm';
import SearchTopic from '@/app/utils/Researchutils/SearchTopic';


const ResearchForm = () => {
  return (
    <div className="mt-[44px]" >
      <div className="grid lg:grid-cols-2 gap-4 sm:grid-cols-1 gap-4 md:grid-cols-2 gap-4">


        <div>
          <SearchTopic />
        </div>

        <div >
          <GeneralForm />
        </div>

      </div>
    </div>
  );
};

export default ResearchForm;
