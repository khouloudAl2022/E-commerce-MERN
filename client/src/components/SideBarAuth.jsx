// import styled from "styled-components";
// import CloseIcon from "@mui/icons-material/Close";

// const SidebarContainer = styled.div`
//   width: 300px;
//   height: 100%;
//   background-color: #fff;
//   position: fixed;
//   top: 0;
//   z-index: 1000;
//   right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
//   transition: right 0.3s ease-in-out;
// `;

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-item: center;
//   width: 250px;
//   height: 100%;
// `;

// const SidebarAuth = ({ sidebar, closeSidebar }) => {
//   return (
//     <SidebarContainer sidebar={sidebar}>
//       <CloseIcon
//         onClick={closeSidebar}
//         style={{
//           display: "flex",
//           justifyContent: "flex-end",
//           marginLeft: "85%",
//           marginTop: "10%",
//         }}
//       >
//         Close Sidebar
//       </CloseIcon>
//       <Container>
//         <p>Log in or create your account</p>
//         <button></button>
//       </Container>
//     </SidebarContainer>
//   );
// };

// export default SidebarAuth;
