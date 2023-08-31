import { styled } from "styled-components";
import { mobile } from "../responsive";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  margin-top: 2%;
  padding: 0px;
  justify-content: space-between;
  ${mobile({
    marginTop:"8%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width:"100%",
    
  })}
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
