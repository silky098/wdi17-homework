// Global variables ////////////////////
bankAccounts = {
  checkingBalance: 0,
  savingsBalance: 0,
};

$(document).ready(function() { // BEGIN DOCUMENT READY/////

// Put DOM from here down /////////////////////
// Checking UI/DOM ////////////////////////

// Checking Deposit UI/DOM ///
  $('#checking-deposit').on('click', function(){
    var getCheckingInput = parseFloat($('#checking-amount').val());
    checkDepositMoney(getCheckingInput);
    $('#checking-balance').text('$' + bankAccounts.checkingBalance);
    console.log('Current Checking Balance: ' + bankAccounts.checkingBalance);
  });

// Checking Withdraw UI/DOM ///
  $('#checking-withdraw').on('click', function() {
    var getCheckingInput = parseFloat($('#checking-amount').val());
    checkWithdrawMoney(getCheckingInput)
    $('#checking-balance').text('$' + bankAccounts.checkingBalance);
    $('#savings-balance').text('$'+ bankAccounts.savingsBalance);
    console.log('Current Checking Balance: ' + bankAccounts.checkingBalance);
  });


// Checking internal functions //////////////////////

// Checking Deposit Function ///
  var checkDepositMoney = function(amount) {
    bankAccounts.checkingBalance = bankAccounts.checkingBalance + amount;
    return bankAccounts.checkingBalance;
  };

// Checking Withdraw function ///
  var checkWithdrawMoney = function(amount) {
    if (amount > (bankAccounts.checkingBalance + bankAccounts.savingsBalance)) {
      alert("No. We're a bank, not a charity")
      console.log("No. We're a bank, not a charity")
    } else if (amount > bankAccounts.checkingBalance && amount <= (bankAccounts.savingsBalance + bankAccounts.checkingBalance)) {
      amount = amount - bankAccounts.checkingBalance;
      console.log(amount)
      var savingsBal = savingsWithdrawMoney(amount);
      bankAccounts.checkingBalance = 0;
      return bankAccounts = {
        savingsBalance: savingsBal,
        checkingBalance: 0
      };
    } else {
      bankAccounts.checkingBalance = bankAccounts.checkingBalance - amount;
    return bankAccounts.checkingBalance;
    }
  };

// Savings UI/DOM ////////////////////////////////

// Savings Deposit UI/DOM ///
  $('#savings-deposit').on('click', function(){
    var getSavingsInput = parseFloat($('#savings-amount').val());
    savingsDepositMoney(getSavingsInput);
    $('#savings-balance').text('$' + bankAccounts.savingsBalance);
    console.log("current Savings Balance: " + bankAccounts.savingsBalance);
  });

// Savings Withdraw UI/DOM ///
  $('#savings-withdraw').on('click', function(){
    var getSavingsInput = parseFloat($('#savings-amount').val());
    savingsWithdrawMoney(getSavingsInput);
    $('#savings-balance').text('$'+ bankAccounts.savingsBalance);
    $('#checking-balance').text('$' + bankAccounts.checkingBalance);
    console.log("current Savings Balance: " + bankAccounts.savingsBalance)
  });


// Savings internal functions /////////////////////

// Savings Deposit Function ///
  var savingsDepositMoney = function(amount) {
    bankAccounts.savingsBalance = bankAccounts.savingsBalance + amount;
    return bankAccounts.savingsBalance;
  };

// Savings Withdraw Function ///
  var savingsWithdrawMoney = function(amount) {
    if (amount > (bankAccounts.savingsBalance + bankAccounts.checkingBalance)) {
      // This part should just close the function and stop the math. (OR REDUCE balance to $0)
      alert("No. We're a bank, not a charity")
      console.log("No. We're a bank, not a charity")
    } else if (amount > bankAccounts.savingsBalance && amount <= (bankAccounts.savingsBalance + bankAccounts.checkingBalance)){
      amount = amount - bankAccounts.savingsBalance;
      var checkBal = checkWithdrawMoney(amount);
      bankAccounts.savingsBalance = 0;
      console.log(bankAccounts.checkingBalance)
      return bankAccounts = {
        savingsBalance: 0,
        checkingBalance: checkBal
      };
    } else {
      bankAccounts.savingsBalance = bankAccounts.savingsBalance - amount;
    return bankAccounts.savingsBalance;
    }
  };

}); // END OF (DOCUMENT) READ ////////////////
