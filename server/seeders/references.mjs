export function getReferences(
  table,
  fieldwanted,
  fieldToSearch,
  valueToSearch,
) {
  console.log(
    queryInterface.sequelize.query(
      `SELECT ${fieldwanted} FROM ${table} WHERE ${fieldToSearch} = ${valueToSearch} `,
    ),
  );
  return queryInterface.sequelize.query(
    `SELECT ${fieldwanted} FROM ${table} WHERE ${fieldToSearch} = ${valueToSearch} `,
  );
}
