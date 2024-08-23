import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Content = styled.ScrollView`
    flex: 1;
    padding: 0 24px;
`;

export const ChartContainer = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const MouthSelect = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
`;

export const MouthButton = styled.TouchableOpacity`

`;

export const Mouth = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        /* color: ${theme.COLORS.DARK_TEXT}; */
    `}
`;

export const MouthIcon = styled(Feather)`
    font-size: 20px;
`;
