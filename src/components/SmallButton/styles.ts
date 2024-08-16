import styled, { css } from "styled-components/native";

export type SmallButtonsType = 'up' | 'down'


export interface TypeProps {
    type: SmallButtonsType;
    isSelected: boolean;
}

export const Container = styled.TouchableOpacity<TypeProps>`
    min-width: 98px;
    background-color: ${({ theme, type, isSelected }) => 
    isSelected && type === 'up' ? theme.COLORS.PRIMARY :
    isSelected && type === 'down' ? theme.COLORS.DOWN :
    theme.COLORS.DISABLED
    };
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    padding: 16px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.LIGHT};
    `}
`;