exports.up = function(knex, promise) {
  return knex.schema.createTable("users", table => {
    table.increments("id");
    table.string("user_name");
    table.text("email_id");
    table.timestamps();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
