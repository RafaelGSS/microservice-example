
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        { id: 1, id_user: 1, description: '', approved: true },
        { id: 2, id_user: 1, description: '', approved: true },
        { id: 3, id_user: 1, description: '', approved: false },
      ]);
    });
};
