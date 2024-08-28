import React from 'react';
import styled from 'styled-components';
import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaShoppingCart } from 'react-icons/fa';

const SkillsContainer = styled.div`
  padding: 4rem 2rem;
  height: 100%;

`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #ffff;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillCard = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #61dafb; 
`;

const SkillTitle = styled.h3`
  margin-bottom: 1rem;
  color: #333;
`;

const SkillBarContainer = styled.div`
  background: #e0e0e0;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 1rem;

`;

const SkillBar = styled.div`
  background: #61dafb;
  height: 10px;
  width: ${(props) => props.width};
`;

const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  color: #333;
  margin: 2rem 0 1rem;
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: #333;

  li {
    margin-bottom: 0.5rem;
  }
`;

const SkillsSection = () => {
    return (
        <SkillsContainer>
            <SectionTitle>Skills</SectionTitle>
            <SectionTitle>Empowering Digital Experiences with Cutting-Edge Technologies</SectionTitle>

            <GridContainer>
                <SkillCard>
                    <IconWrapper><FaReact /></IconWrapper>
                    <SkillTitle>Frontend Development</SkillTitle>
                    <SkillBarContainer>
                        <SkillBar width="100%" />
                    </SkillBarContainer>
                    <ServiceTitle>Technologies:</ServiceTitle>
                    <ServiceList>
                        <li>React, Next.js, TypeScript, Vue</li>
                        <li>HTML5, CSS3, Sass</li>
                        <li>Tailwind CSS</li>
                        <li>Responsive Design</li>
                    </ServiceList>
                </SkillCard>

                <SkillCard>
                    <IconWrapper><FaNodeJs /></IconWrapper>
                    <SkillTitle>Backend Development</SkillTitle>
                    <SkillBarContainer>
                        <SkillBar width="100%" />
                    </SkillBarContainer>
                    <ServiceTitle>Technologies:</ServiceTitle>
                    <ServiceList>
                        <li>Node.js, Express.js, NestJS</li>
                        <li>MongoDB</li>
                        <li>Postgres</li>
                        <li>Mysql</li>
                        <li>API Design & Integration</li>
                    </ServiceList>
                </SkillCard>
                <SkillCard>
                    <IconWrapper><FaShoppingCart /></IconWrapper>
                    <SkillTitle>E-commerce Development</SkillTitle>
                    <SkillBarContainer>
                        <SkillBar width="100%" />
                    </SkillBarContainer>
                    <ServiceTitle>Specializations:</ServiceTitle>
                    <ServiceList>
                        <li>Custom E-commerce Solutions</li>
                        <li>Payment Gateway Integration</li>
                        <li>Product Management Systems</li>
                        <li>Performance Optimization</li>
                    </ServiceList>
                </SkillCard>

                <SkillCard>
                    <IconWrapper><FaGitAlt /></IconWrapper>
                    <SkillTitle>Tools & Methodologies</SkillTitle>
                    <SkillBarContainer>
                        <SkillBar width="100%" />
                    </SkillBarContainer>
                    <ServiceTitle>Technologies:</ServiceTitle>
                    <ServiceList>
                        <li>Git & GitHub</li>
                        <li>CI/CD with GitHub Actions</li>
                        <li>Payload CMS</li>
                    </ServiceList>
                </SkillCard>

                <SkillCard>
                    <IconWrapper><FaFigma /></IconWrapper>
                    <SkillTitle>Design Tools</SkillTitle>
                    <SkillBarContainer>
                        <SkillBar width="100%" />
                    </SkillBarContainer>
                    <ServiceTitle>Tools:</ServiceTitle>
                    <ServiceList>
                        <li>Figma</li>
                        <li>Basic UX/UI Principles</li>
                    </ServiceList>
                </SkillCard>
            </GridContainer>
        </SkillsContainer>
    );
};

export default SkillsSection;
