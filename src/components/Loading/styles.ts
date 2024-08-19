import styled from "styled-components/native";
import { LoadingProps } from ".";

export const Container = styled.View<LoadingProps>`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme, background }) => background ? background : theme.COLORS.PRIMARY};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs<LoadingProps>(({theme, loadColor})=>({
    color: loadColor ? loadColor : theme.COLORS.LIGHT,
    size: 'large'
}))<LoadingProps>``;