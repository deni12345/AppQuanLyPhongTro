/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Container,
  Card,
  CardItem,
  Button,
  Segment,
  Content,
  Text,
  Label,
} from 'native-base';

import ListPayment from './ListPayment';
import ListReceipt from './ListReceipt';

export default function SegmentOutsideHeaderExample(props) {
  const {actions, tabs, isLogin, navigation} = props;
  if (isLogin) {
    return (
      <Container>
        <Segment>
          <Button
            first
            active={tabs === 'Payments'}
            onPress={() => actions.onChangeTab({value: 'Payments'})}>
            <Text>Phiếu chi</Text>
          </Button>
          <Button
            active={tabs === 'contacts'}
            onPress={() => actions.onChangeTab({value: 'contacts'})}>
            <Text>Phiếu Thu</Text>
          </Button>
        </Segment>
        {tabs === 'Payments' ? (
          <Content padder>
            <ListPayment {...props} />
          </Content>
        ) : (
          <Content padder>
            <ListReceipt {...props} />
            </Content>
        )}
      </Container>
    );
  } else {
    return (
      <Container>
        <Card>
          <CardItem>
            <Label>Vui lòng đăng nhập để có thể thực hiện chức năng này</Label>
          </CardItem>
          <CardItem style={{justifyContent: 'center'}}>
            <Button onPress={() => navigation.navigate('Login')}>
              <Text>Đăng nhập</Text>
            </Button>
          </CardItem>
        </Card>
      </Container>
    );
  }
}
