const users = {
  contacts: [
    {
      name: "Max",
      phone: "+354543636",
      email: "maxqwwr@gmail.com",
    },
    {
      name: "Dima",
      phone: "+24346",
      email: "moifxhdg@gmaiil.com",
    },
  ],

  addContact() {
    const significance = prompt("what do you want to add");
    this.contacts.push(significance);
  },
  findContact() {
    const find = prompt("write the name you are looking for");
    const cont = this.contacts.filter(contact => contact.name === find);
    console.log(cont);
  },

};

