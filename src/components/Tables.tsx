import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import styled from 'styled-components';

/**
 * list               列表数据
 * pageOptions        分页配置
 * total              总数
 * page               当前页
 * rowsPerPage        每页多少条
 * handleChangePage   当前页change方法
 * handleChangeRowsPerPage  当前每页多少行change方法
 */
interface IProps<T> {
  list: Array<Partial<T>>;
  pageOptions: Array<number>;
  total: number;
  page: number;
  rowsPerPage: number;
  handleChangePage: () => {};
}

// const Tables: React.FC<{}> = (props) => {

// }
