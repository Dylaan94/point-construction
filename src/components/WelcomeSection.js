import React from "react";
import styled from "styled-components";

export default function WelcomeSection() {
  return (
    <Root>
      <Container>
        <Tagline>Construction with a purpose</Tagline>
        <Header> Welcome to Point Construction</Header>
        <Text>
          <p>
            <b>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              luctus quam eu, senectus id. Tempus mauris mi vel adipiscing
              tempus. Malesuada est convallis purus ut. Dignissim curabitur eget
              dignissim tellus ut amet. Eleifend duis vestibulum maecenas ac
              aliquam nunc. Magna aliquet auctor luctus risus pellentesque
              blandit tincidunt auctor.
            </b>
          </p>
          <p>
            Augue mattis posuere dolor in blandit egestas. Nunc, neque ornare
            feugiat arcu at. At ac erat pretium aliquet et id ultrices semper
            vel. Nunc accumsan amet justo, praesent sed. Sit adipiscing morbi
            adipiscing tempor, orci, facilisis. Leo, lorem a leo ultrices
            pellentesque malesuada sed mauris, nullam. Congue viverra vulputate
            non aliquam, vestibulum vitae mattis velit et. {"\n"}
          </p>
          <p>
            Scelerisque ipsum non ultricies commodo amet adipiscing et.
            Pellentesque hac proin et, duis nam facilisis ut porta turpis.
            Molestie egestas praesent tempor enim aliquam. Porta facilisis sed
            enim nec. Volutpat sollicitudin porta mauris sit egestas. Egestas
            tortor, ornare nibh ridiculus facilisis eget.
          </p>
        </Text>
      </Container>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 600px;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 550px) {
    height: auto;
  }
`;

const Container = styled.div`
  width: 50%;

  @media screen and (max-width: 920px) {
    width: 80%;
  }
`;

const Header = styled.h2`
  font-size: 40px;
  font-weight: 600;
  margin-top: 0;

  @media screen and (max-width: 920px) {
    font-size: 32px;
    text-align: center;
  }

  @media screen and (max-width: 550px) {
    font-size: 24px;
  }
`;

const Tagline = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #c0b900;

  @media screen and (max-width: 920px) {
    text-align: center;
  }
`;

const Text = styled.div`
  font-size: 16px;

  p {
    margin-top: 10px;
  }

  @media screen and (max-width: 920px) {
    text-align: center;
  }

  @media screen and (max-width: 550px) {
    font-size: 12px;
  }
`;
