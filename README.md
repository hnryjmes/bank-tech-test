# Bank tech test

Simple command-line application to model a bank account. Handles deposits, withdrawals, and prints bank statements.

## Design

My approach was to write this tech test in JavaScript using Node.js, test-driving with Jasmine, and focusing on object-oriented design.

## Usage

To use the app, clone this repository to your local machine, then start a Node REPL by running `node`, then require the classes as needed. For example:

```shell
$ git clone https://github.com/hnryjmes/bank-tech-test.git
$ cd bank-tech-test
$ node
> const Transaction = require('./lib/Transaction')
undefined
> const TransactionList = require('./lib/TransactionList')
undefined
> const Account = require('./lib/Account')
undefined
> let first = new Transaction('deposit', 1000)
undefined
> let account = new Account(new TransactionList())
undefined
> account.update(first)
undefined
> account.transactionList.getStatement()
'date || credit || debit || balance\n4/12/2018 || 1000.00 || || 1000.00'
>
```

## Tests

To see all Jasmine specs, just run `jasmine`.

## User Stories

```
As a client
So I can use the bank
I want to create an account

As a client
So I can keep my money
I want to make a deposit

As a client
So I can use my money
I want to make a withdrawal

As a client
So I can manage my money
I want to print my bank statement, and see a credit, debit, and balance column
```
