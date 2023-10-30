import {TransactionTable, TableThead, TableBody, TableTr,TableTh} from './transactionHistory.styled'

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableThead>
        <TableTr>
          <TableTh>Type</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Currency</TableTh>
        </TableTr>
      </TableThead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (<TableTr key={id}>
            <TableTh>{type}</TableTh>
            <TableTh>{amount}</TableTh>
            <TableTh>{currency}</TableTh>
          </TableTr>)
        })
        }
      </TableBody>
    </TransactionTable>
  )
}

