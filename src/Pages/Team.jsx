import React from 'react';


import Element7 from '../components/Elements/Element7';
import CElement1 from '../components/Elements/CElement1';
import Element11 from '../components/Elements/Element11';
import Element8 from '../components/Elements/Element8';
import ContactForm from '../components/Elements/ContactForm';
import Element9 from '../components/Elements/Element9';
import TeamMembers from '../components/Elements/TeamMembers';
import TrainedDatasets from '../components/Elements/TrainedDatasets';
 


const Team= () => {
  return (
    <div>
     <TeamMembers/>

      <Element7/> 
      <Element8/>
      <CElement1/> 
      <ContactForm/>
      <TrainedDatasets/>
      <Element9/>
      <Element11/>

    </div>
  );
};

export default Team;
