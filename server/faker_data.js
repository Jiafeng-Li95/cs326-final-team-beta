let faker = require("faker");

//fake vendor data
let vendors = new Array(15).fill(null).map((vendor, index) => {
  return (vendor = {
    username: faker.name.firstName(),
    password: faker.datatype.number(),
    name: faker.company.companyName(),
    description: faker.lorem.paragraphs(),
    location: faker.address.cityName(),
    phoneNumber: faker.phone.phoneNumber(),
    userId: index,
  });
});

vendors.push(
  {
    username: "jimmy",
    password: "123",
    name: faker.company.companyName(),
    description: faker.lorem.paragraphs(),
    location: faker.address.cityName(),
    phoneNumber: faker.phone.phoneNumber(),
    userId: 999,
  },
  {
    username: "jeff",
    password: "123",
    name: faker.company.companyName(),
    description: faker.lorem.paragraphs(),
    location: faker.address.cityName(),
    phoneNumber: faker.phone.phoneNumber(),
    userId: 9999,
  },
  {
    username: "yongchang",
    password: "123",
    name: faker.company.companyName(),
    description: faker.lorem.paragraphs(),
    location: faker.address.cityName(),
    phoneNumber: faker.phone.phoneNumber(),
    userId: 99999,
  }
);

module.exports = vendors;
