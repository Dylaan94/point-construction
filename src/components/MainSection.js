import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export default function MainSection() {
  return (
    <Container>
      <TagLine>creating genuineley affordable housing</TagLine>
      <SubTagLine>making a difference to communities</SubTagLine>
      <SectionFooter>
        <StyledLink to="/projects">SEE OUR PROJECTS</StyledLink>
      </SectionFooter>
    </Container>
  );
}

const Container = styled.div``;

const TagLine = styled.p``;

const SubTagLine = styled.p``;

const SectionFooter = styled.div``;

const StyledLink = styled(Link)``;
