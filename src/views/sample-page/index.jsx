// src/pages/SamplePage.js
import React from 'react';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

// project imports
import MainCard from 'ui-component/cards/MainCard';

const SamplePage = () => (
    <MainCardContainer>
        <MainCard title="Your path to success in the Grade 5 scholarship exam starts here!">
            <Typography variant="body2" component="div">
                <Section>
                    <Title>Interactive Lessons</Title>
                    <Description>
                        Engage with interactive lessons covering all major subjects. Our lessons are designed to make learning fun and effective.
                    </Description>
                </Section>
                <Section>
                    <Title>Practice Quizzes</Title>
                    <Description>
                        Test your knowledge with quizzes and track your progress. Our quizzes help you identify your strengths and areas for improvement.
                    </Description>
                </Section>
                <Section>
                    <Title>Discussion Forum</Title>
                    <Description>
                        Connect with other students and teachers to discuss topics and share resources. Our forum is a supportive community for all learners.
                    </Description>
                </Section>
                <Section>
                    <Title>Expert Guidance</Title>
                    <Description>
                        Get guidance from experienced educators. Our team is here to help you succeed and achieve your goals.
                    </Description>
                </Section>
                <Section>
                    <Title>Comprehensive Resources</Title>
                    <Description>
                        Access a wide range of study materials and resources. From sample papers to study guides, we have everything you need.
                    </Description>
                </Section>
            </Typography>
        </MainCard>
    </MainCardContainer>
);

const MainCardContainer = styled.div`
    margin: 20px;
`;

const Section = styled.div`
    margin-bottom: 20px;
`;

const Title = styled.h3`
    font-size: 1.5rem;
    color: #6a11cb;
    margin-bottom: 10px;
`;

const Description = styled.p`
    font-size: 1.2rem;
    color: #333;
`;

export default SamplePage;
