import { TouchableOpacityProps } from "react-native";
import { 
    Container, 
    CardTypes,
    ContentTop,
    Name,
    Tag,
    TagTitle,
    Value,
    ContentBottom,
    CategoryTitle,
    Date
 } from "./styles";

export interface TransactionCardProps extends TouchableOpacityProps {
    name: string;
    type: CardTypes;
    value: string;
    category?: string;
    date: string;
}

export function TransactionCard({name, type, value, category, date, ...rest}: TransactionCardProps) {
    
    const typeName = type === 'up' ? 'Entrada' : 'Saída';
    
    return (
        <Container {...rest}>
            <ContentTop>
                <Name>{name}</Name>
                <Tag type={type}>
                    <TagTitle>{typeName}</TagTitle>
                </Tag>
            </ContentTop>
            <Value type={type}>{value}</Value>
            <ContentBottom>
                <CategoryTitle>{category}</CategoryTitle>
                <Date>{date}</Date>
            </ContentBottom>
        </Container>
    )
}