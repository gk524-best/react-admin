import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Button,
} from '@material-ui/core';
import { Formik } from 'formik';
import styled from 'styled-components';
import PublishIcon from '@material-ui/icons/Publish';
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
    border-right: 1px solid #f0f0f0;
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
    .avatar-title {
      height: 22px;
      margin-bottom: 8px;
      color: rgba(0, 0, 0, 0.85);
      font-size: 14px;
      line-height: 22px;
    }
    .view-avatar {
      width: 144px;
      height: 144px;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 14px;
    }
    .avatar-upload {
      width: 144px;
      display: flex;
      justify-content: center;
      .input {
        display: none;
      }
    }
  }
  .form-root {
  }
`;

const MuiTextField = styled(TextField)`
  margin-bottom: 16px;
  &:last-of-type {
    margin-bottom: 32px;
  }
`;

const BasicSetting = () => {
  return (
    <>
      <Title>基本设置</Title>
      <Container>
        <div className="basic-left">
          <form className="mui-form">
            <MuiTextField style={{ display: 'flex' }} label="姓名" fullWidth />
            <MuiTextField style={{ display: 'flex' }} label="账号" fullWidth />
            <MuiTextField
              type="password"
              style={{ display: 'flex' }}
              label="密码"
              fullWidth
            />
            <Button variant="contained" color="primary">
              更新基本信息
            </Button>
          </form>
        </div>
        <div className="basic-right">
          <div className="avatar-title">头像</div>
          <div className="view-avatar">
            <img src="" alt="avatar" />
          </div>
          <div className="avatar-upload">
            <input
              className="input"
              id="contained-button-file"
              type="file"
              accept="image/*"
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="outlined"
                component="span"
                startIcon={<PublishIcon />}>
                更换头像
              </Button>
            </label>
          </div>
        </div>
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
