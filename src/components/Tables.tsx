import React, { useState, useContext } from 'react';
import {
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
  TablePagination,
} from '@material-ui/core';
import { createStyles, makeStyles, lighten } from '@material-ui/core/styles';
import Theme from '@/theme';
import styled, { ThemeContext } from 'styled-components';

export interface Column {
  id: string;
  label: string;
  align?: 'right' | 'left' | 'center';
  padding?: 'none' | 'default';
  render?: (text: any, record: Record<string, any>) => any;
}

export interface EnhancedTableProps {
  total: number;
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  columns: Array<Column>;
}

export interface EnhancedTableToolbarProps {
  title: string;
  numSelected: number;
  options?: Array<React.ReactNode>;
  selectedOptions?: Array<React.ReactNode>;
}

const useToolbarStyles = makeStyles(() => {
  const theme = useContext(ThemeContext);

  return createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.primary.dark, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: '1 1 100%',
    },
  });
});

// tool bar
const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { title, options, numSelected, selectedOptions } = props;
  const styles = useToolbarStyles();
  return (
    <Toolbar>
      {numSelected > 0 ? (
        <Typography
          className={styles.title}
          color="inherit"
          variant="subtitle1"
          component="div">
          {numSelected} 选中
        </Typography>
      ) : (
        <Typography
          className={styles.title}
          id="tableTile"
          variant="h6"
          component="div">
          {title}
        </Typography>
      )}
      {numSelected > 0
        ? selectedOptions && selectedOptions.map((R) => R)
        : options && options.map((R) => R)}
    </Toolbar>
  );
};

// table head
function EnhancedTableHead(props: EnhancedTableProps) {
  const { total, numSelected, onSelectAllClick, columns } = props;
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < total}
            checked={total > 0 && numSelected === total}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': '全选' }}
          />
        </TableCell>
        {columns.map((item: Column) => (
          <TableCell
            key={item.id}
            align={item.align ?? 'left'}
            padding={item.padding ?? 'default'}>
            {item.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

/**
 * list                     列表数据
 * pageOptions              分页配置
 * total                    总数
 * page                     当前页
 * rowsPerPage              每页多少条
 * handleChangePage         当前页change方法
 * handleChangeRowsPerPage  当前每页多少行change方法
 */
interface IProps<T> extends EnhancedTableToolbarProps, EnhancedTableProps {
  data: Array<Partial<T>>;
  columns: Array<Column>;
  total: number;
  page: number;
  pageOptions?: Array<number>;
  rowsPerPage?: number;
  handleChangePage?: () => {};
  handleChangeRowsPerPage?: () => {};
}

type IPropsOmit<T> = Omit<IProps<T>, 'numSelected'>;

const useStyles = makeStyles(() => {
  const theme = useContext(ThemeContext);
  return createStyles({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  });
});

const Tables: React.FC<IPropsOmit<any>> = ({
  title,
  total,
  data = [],
  columns,
  page,
  onSelectAllClick,
  options = [],
  selectedOptions = [],
  rowsPerPage = 15,
  pageOptions = [15, 25, 50],
  handleChangePage = () => {},
  handleChangeRowsPerPage = () => {},
}) => {
  const styles = useStyles();
  const [numSelected, setNumSelected] = useState(0);
  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    // if (event.target.checked) {
    //   const newSelecteds = rows.map((n) => n.name);
    //   setSelected(newSelecteds);
    //   return;
    // }
    // setSelected([]);
  };

  const generateTableCell = (row: any) => {
    return columns.map((item) => {
      const hasId = row.hasOwnProperty(item.id);
      return (
        <TableCell>
          {hasId ? (item.render ? item.render(row.id, row) : row.id) : ''}
        </TableCell>
      );
    });
  };

  return (
    <div className={styles.root}>
      <EnhancedTableToolbar
        title={title}
        options={options}
        numSelected={numSelected}
        selectedOptions={selectedOptions}
      />
      <TableContainer>
        <Table
          className={styles.table}
          aria-labelledby="tableTitle"
          size="medium"
          aria-label="enhanced table">
          <EnhancedTableHead
            numSelected={numSelected}
            total={total}
            onSelectAllClick={handleSelectAllClick}
            columns={columns}
          />
          <TableBody>
            {data.map((row: any) => {
              return <TableRow>{generateTableCell(row)}</TableRow>;
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={pageOptions}
        component="div"
        count={total}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Tables;
