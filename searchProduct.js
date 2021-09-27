import React from 'react'
import { View } from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
export default function searchProduct() {
    return (
        <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    )
}
