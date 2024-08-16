import styled, { css } from "styled-components/native";
import LogoMyMoney from '../../assets/header-logo.png';

export type HeaderType = {
    type?: 'up' | 'down'
}

export const Container = styled.View<HeaderType>`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 42px 24px 24px;
    background-color: ${({ theme, type }) => type === 'up' ? theme.COLORS.PRIMARY : theme.COLORS.DOWN};
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XXL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.LIGHT};
    `}
    margin-left: 8px;
`

export const TitleNoHome = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.LIGHT};
    `}
`;

export const Logo = styled.Image.attrs(({ theme }) => ({
    resizeMode: 'contain',
    source: LogoMyMoney,
}))`
    width: 55px;
    height: 55px;    
`;