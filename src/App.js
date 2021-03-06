import './App.css';
import Customer from './components/Customer';
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width : '100%',
    marginTop : theme.spacing.unit * 3,
    overflowX : "auto"
  },
  table: {
    minWidth : 1080
  }
})

const customer = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : 'cccc',
    'birthday' : '99 99 99',
    'gender' : '男',
    'job' : 'programer'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : 'dddd',
    'birthday' : '88 88 99',
    'gender' : '女',
    'job' : 'programer'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : 'aaaa',
    'birthday' : '77 99 99',
    'gender' : '男',
    'job' : 'programer'
  }
]

class App extends Component {
  render(){
    const { classes } = this.props;
    return(
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>番号</TableCell>
                <TableCell>イメージ</TableCell>
                <TableCell>名前</TableCell>
                <TableCell>生年月日</TableCell>
                <TableCell>性別</TableCell>
                <TableCell>職業</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                customer.map(c => {
                  return (
                    <Customer
                      key = {c.id}
                      id = {c.id}
                      image = {c.image}
                      name = {c.name}
                      birthday = {c.birthday}
                      gender = {c.gender}
                      job = {c.job}
                    />
                  )
                })
              }
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(App);
