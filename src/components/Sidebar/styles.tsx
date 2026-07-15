import styled from "styled-components";

export const Aside = styled.aside`
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  padding: clamp(16px, 4vw, 32px);
  box-sizing: border-box;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: clamp(10px, 3vw, 16px);
`;

interface ListItemProps {
  $active?: boolean;
}

export const ListItem = styled.li<ListItemProps>`
  text-align: center;
  border-bottom: 1px solid;
  border-color: ${(props) => (props.$active ? "#47A138" : "#000")};
  color: ${(props) => (props.$active ? "#47A138" : "#000")};
  font-weight: ${(props) => (props.$active ? "700" : "400")};
  font-size: clamp(14px, 3.8vw, 16px);
  line-height: 1.3;
  padding-bottom: clamp(10px, 3vw, 16px);
`;

export const Link = styled.a`
  display: block;
  width: 100%;
  padding: clamp(4px, 1.8vw, 8px) 0;
  color: inherit;
  text-decoration: none;
  overflow-wrap: anywhere;
`;
