class BankAccount {
  constructor(balence) {
    this.balence = balence;
  }
  getBalance() {
    console.log(this.balence);
  }
  deposit(sum) {
    return (this.balence += sum);
  }
  withdraw(sum) {
    return (this.balence -= sum);
  }
}
const account1 = new BankAccount(1000);
account1.getBalance();
account1.deposit(500);
account1.getBalance();
account1.withdraw(200);
account1.getBalance();
