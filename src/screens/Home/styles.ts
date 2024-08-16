import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    align-items: center;
    justify-content: center;
`

export const Content = styled.View`
    flex:1;
    width: 100%;
    padding: 24px;
`;

export const ContainerList = styled.View`
    flex: 1;
    width: 100%;
    padding: 24px 0;
`;

export const ContentBanners = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 24px;
`;

