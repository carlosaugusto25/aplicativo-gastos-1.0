import styled from "styled-components/native";

export const Container = styled.TextInput`
    width: 100%;
    padding: 16px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.COLORS.LIGHT};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    color: ${({ theme }) => theme.COLORS.DARK_TEXT};
    justify-content: center;
    margin-bottom: 8px;
`;