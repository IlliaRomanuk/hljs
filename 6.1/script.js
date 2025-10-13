const usersData = {
    name: 'igor', 
    age: 20, 
    place: 'Odesa',
    getInfo () {
      console.log(`name:${usersData.name}, age: ${usersData.age}, plase: ${usersData.place}`)
    }
  };
  usersData.getInfo();