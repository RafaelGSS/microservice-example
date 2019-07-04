const uuid = require('uuid/v4')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: uuid(), name: 'Calzaroli Edward', email: 'calzaroli.edward@fake.com', admin: true },
        { id: uuid(), name: 'Robert John', email: 'robert.john@fake.com', admin: true },
        { id: uuid(), name: 'Adan Jhonson', email: 'adan.jhonson@fake.com', admin: false },
      ]);
    });
};
