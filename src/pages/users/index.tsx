import React from 'react';
import { TextField, Button } from '@material-ui/core';
import PageWrapper from 'components/PageWrapper';
import styled from 'styled-components';
import { useFormik } from 'formik';

const FormContiner = styled.div`
  padding: 24px 24px 0;
  margin-bottom: 16px;
  background: #fff;
  & .form {
    width: 100%;
    display: flex;
  }
`;

const MuiButton = styled(Button)`
  margin-right: 13px;
`;

const FormItem = styled.div`
  padding: 0 12px;
  margin-bottom: 24px;
`;

type IProps = {
  search: () => void;
};

const TableForm: React.FC<IProps> = (props) => {
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <FormContiner>
      <form className="form" onSubmit={formik.handleSubmit}>
        <FormItem>
          <TextField name="name" label="姓名" />
        </FormItem>
        <FormItem>
          <MuiButton type="submit" color="primary" variant="contained">
            搜索
          </MuiButton>
          <MuiButton color="primary" variant="contained">
            新增
          </MuiButton>
        </FormItem>
      </form>
    </FormContiner>
  );
};

const User: React.FC<{}> = () => {
  const onClick = () => {};
  return (
    <PageWrapper title="账号列表" breadcrumb>
      <TableForm search={onClick} />
    </PageWrapper>
  );
};

export default User;
