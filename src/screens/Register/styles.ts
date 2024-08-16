import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Content = styled.View`
    flex: 1;
    justify-content: space-between;
    padding: 24px 24px 0;
`;

export const FormContainer = styled.View`

`;

export const ContainerButtons = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 24px;
    gap: 8px;
`;

export const ContentButtons = styled.View`
    justify-content: space-between;
    align-items: center;
    padding-bottom: 24px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.DARK_TEXT};
    `}
    margin-bottom: 16px;
`;



export const Button = styled.TouchableOpacity`
    width: 100%;
    padding: 16px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const ButtonTitle = styled.Text`
     ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.LIGHT};
    `}
`;


