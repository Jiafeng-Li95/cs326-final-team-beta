let faker = require("faker");

//fake vendor data
let vendors = new Array(15).fill(null).map((vendor, index) => {
  return (vendor = {
    username: faker.name.firstName(),
    password: faker.datatype.number(),
    name: faker.company.companyName(),
    description: faker.lorem.words(),
    location: faker.address.cityName(),
    phoneNumber: faker.phone.phoneNumber(),
    userId: index,
  });
});

module.exports = vendors;
