
  import React from 'react';
  import Card from '@material-ui/core/Card';
  import CardContent from '@material-ui/core/CardContent';
  import { Typography } from '@material-ui/core';
  import List from '@material-ui/core/List';
  import ListItemText from '@material-ui/core/ListItemText';
  import LoadingIndicator from './LoadingIndicator';
  
  export default function TransactionList({
      transactions
  }) {

    if (transactions) {
      return (
          <Card>
            <CardContent>
              <Typography variant="h6" component="h1" gutterBottom>
              TX HISTORY
              <List disablePadding>
              {transactions.map((tx) => (
                <ListItemText
                  primary={tx.meta.fee}
                  secondary={tx.signature}
                />
              ))}
            </List>
              </Typography>
            </CardContent>
          </Card>
      )
    } else {
      return (<LoadingIndicator />)
    };


  }
