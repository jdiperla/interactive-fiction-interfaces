
exports.up = function(knex, Promise) {
  return knex.schema.createTable('scenes', (table) =>{
  table.increments('id')
  table.string('name')
  table.string('description')
  table.integer('north')
  table.integer('northeast')
  table.integer('northwest')
  table.integer('east')
  table.integer('west')
  table.integer('south')
  table.integer('southeast')
  table.integer('southwest')
  table.string('condition')
  table.string('detail')
  table.string('path')
  table.string('c_description')
  table.string('condition2')
  table.string('path2')
  table.string('detail2')
  table.string('c_description2')
  table.integer('itemName')
  table.integer('itemName2')
  table.string('first_visit_description')
  table.string('north_message')
  table.string('northeast_message')
  table.string('northwest_message')
  table.string('east_message')
  table.string('west_message')
  table.string('south_message')
  table.string('southeast_message')
  table.string('southwest_message')
})
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('scenes')
};
