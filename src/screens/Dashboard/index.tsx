import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

import {
  Container,
  Header,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "19/06/2022",
    },
    {
      id: "2",
      type: "negative",
      title: "Compras no mercado",
      amount: "R$ 500,00",
      category: {
        name: "Compras",
        icon: "shopping-bag",
      },
      date: "19/06/2022",
    },
    {
      id: "3",
      type: "negative",
      title: "Habugueria",
      amount: "R$ 59,99",
      category: {
        name: "Alimentação",
        icon: "coffee",
      },
      date: "19/06/2022",
    },
  ];
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: "https://github.com/KauaLibrelato.png" }} />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Kauã</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction=" Última modificação 21 de janeiro"
        />

        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 7.400,00"
          lastTransaction=" Última modificação 30 de janeiro"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 10.000,00"
          lastTransaction=" Última modificação 30 de janeiro"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
