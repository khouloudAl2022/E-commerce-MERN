import Marquee from "react-fast-marquee";
import { styled } from "styled-components";
const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 30px;
  background-color:  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid black;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:1rem0;
  font-size: 14px;
  font-weight: 500;
  z-index: 10;
 

`;
const AnnouncContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
`;
const Span = styled.span`
  margin: 30px;
  color: ${(props) =>
    // @ts-ignore
    props.type === "title1" && "#00ca8d"};
  margin-right:${(props) =>
    // @ts-ignore
    props.type === "title1" && "2rem"}
  margin-right:${(props) =>
    // @ts-ignore
    props.type === "title2" && "2rem"}
  &:not(:last-child) {
    margin-right: 2rem;
  }
  

`;

const Announcement = () => {
  return (
    <Container>
      <Marquee>
        <AnnouncContainer>
          <Span
            // @ts-ignore
            type="title1"
          >
            Super Deal! Free Shipping on Orders Over $50 //
          </Span>
          <Span
            // @ts-ignore
            type="title2"
          >
            20% purchase discount. Shop Now{" "}
          </Span>
        </AnnouncContainer>
        <AnnouncContainer>
          <Span
            // @ts-ignore
            type="title1"
          >
            Super Deal! Free Shipping on Orders Over $50 //{" "}
          </Span>
          <Span
            // @ts-ignore
            type="title2"
          >
            20% purchase discount. Shop Now{" "}
          </Span>
        </AnnouncContainer>
      </Marquee>
    </Container>
  );
};

export default Announcement;
