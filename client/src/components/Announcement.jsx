import Marquee from "react-fast-marquee";
import { mobile } from "responsive";
import { styled } from "styled-components";

const Container = styled.div`
  margin-top: 640px;
  position: absolute;
  width: 100%;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.5);
  border-top: 1px solid black;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  font-size: 14px;
  font-weight: 500;
  z-index: 12;
 ${mobile({marginTop:"809px",display:"flex" })}

`;

const AnnouncContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
`;

const Span = styled.span`
  margin: 30px;
  color: ${(props) => (props.type === "title1" ? "#00ca8d" : "inherit")};
  color: ${(props) => (props.type === "title1" ? "bolder" : "inherit")};

  margin-right: ${(props) => (props.type === "title1" ? "2rem" : "inherit")};
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

const AnnouncementItem = ({ type, children }) => (
  <Span type={type}>{children}</Span>
);

const Announcement = () => {
  return (
    <Container>
      <Marquee speed={15}>
        <AnnouncContainer>
          <AnnouncementItem type="title1">
            Super Deal ! Free Shipping on Orders Over $50
          </AnnouncementItem>
          <AnnouncementItem type="title2">
            20% purchase discount. Shop Now //
          </AnnouncementItem>
        </AnnouncContainer>
        <AnnouncContainer>
          <AnnouncementItem type="title1">
            Super Deal! Free Shipping on Orders Over $50 //
          </AnnouncementItem>
          <AnnouncementItem type="title2">
            20% purchase discount. Shop Now
          </AnnouncementItem>
        </AnnouncContainer>
      </Marquee>
    </Container>
  );
};

export default Announcement;
