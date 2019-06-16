
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, name: 'Calzaroli Edward', email: 'calzaroli.edward@fake.com', admin: true },
        { id: 2, name: 'Robert John', email: 'robert.john@fake.com', admin: true },
        { id: 3, name: 'Adan Jhonson', email: 'adan.jhonson@fake.com', admin: false },
      ]);
    });
};
