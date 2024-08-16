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

interface TransactionCardProps {
    name: string;
    type: CardTypes;
    value: string;
    category?: string;
    date: string;
}

export function TransactionCard({name, type, value, category, date}: TransactionCardProps) {
    
    const typeName = type === 'up' ? 'Entrada' : 'Saída';
    
    return (
        <Container>
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