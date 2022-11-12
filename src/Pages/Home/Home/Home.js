import React from 'react';
import AppointSection from '../AppointmentsSection/AppointSection';
import Banner from '../Banner/Banner';
import ContactUsSection from '../ContactUsSection/ContactUsSection';
import DentalCareCard from '../DentalCareCard/DentalCareCard';
import InfoCards from '../InfoCards/InfoCards';
import ReviewsSection from '../ReviewsSection/ReviewsSection';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DentalCareCard></DentalCareCard>
            <AppointSection></AppointSection>
            <ReviewsSection></ReviewsSection>
            <ContactUsSection></ContactUsSection>
        </div>
    );
};

export default Home;