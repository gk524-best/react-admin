import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  OutlinedInput,
} from '@material-ui/core';
import styled from 'styled-components';

import PageWrapper from 'components/PageWrapper';

const Wrapper = styled(Paper)`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 16px 0;
  box-shadow: none;
  ${(props) => props.theme.breakpoints.down('md')} {
    flex-direction: column;
  }
`;

const Left = styled.div`
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 224px;
  }
  ${(props) => props.theme.breakpoints.down('md')} {
    width: 100%;
  }
`;

const MuiListItem = styled(ListItem)`
  &:not(:first-of-type) {
    margin-top: 10px;
  }
  &.Mui-selected {
    background-color: ${(props) => props.theme.palette.primary.main};
    .MuiListItemText-root {
      color: #fff;
    }
  }
  &:hover {
    background-color: #fff;
    .MuiListItemText-root {
      color: ${(props) => props.theme.palette.primary.main};
    }
  }
  &.Mui-selected:hover {
    background-color: ${(props) => props.theme.palette.primary.main};
    .MuiListItemText-root {
      color: ${(props) => props.theme.palette.primary.contrastText};
    }
  }
`;

const MuiListItemText = styled(ListItemText)`
  color: rgba(0, 0, 0, 0.85);
`;

const Right = styled.div`
  flex: 1 1;
  padding: 8px 40px;
`;

const Title = styled.div`
  margin-bottom: 12px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;

const Container = styled.div`
  display: flex;
  padding-top: 12px;
  .basic-left {
    min-width: 310px;
    max-width: 448px;
  }
  .basic-right {
    flex: 1 1;
    padding-left: 104px;
  }
  .form-root {
  }
`;

const BasicSetting = () => {
  return (
    <>
      <Title>基本设置</Title>
      <Container>
        <div className="basic-left">
          <form className="mui-form">
            <TextField style={{ display: 'flex' }} label="姓名" fullWidth />
            <TextField style={{ display: 'flex' }} label="账号" fullWidth />
            <TextField
              type="password"
              style={{ display: 'flex' }}
              label="密码"
              fullWidth
            />
          </form>
        </div>
        <div className="basic-right"></div>
      </Container>
    </>
  );
};

const MyPage = () => {
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <PageWrapper>
      <Wrapper>
        <Left>
          <List>
            <MuiListItem button selected={selectIndex === 0}>
              <MuiListItemText primary="基本设置" />
            </MuiListItem>
          </List>
        </Left>
        <Right>
          <BasicSetting />
        </Right>
      </Wrapper>
    </PageWrapper>
  );
};

export default MyPage;
