'use strict';

import { hash } from 'bcryptjs';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface) {
  return queryInterface.bulkInsert(
    'users',
    [
      {
        nome: 'marcelo cardoso teste1',
        email: 'marcelo2@gmail.com',
        password_hash: await hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'marcelo cardoso teste2',
        email: 'marcelo3@gmail.com',
        password_hash: await hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'marcelo cardoso teste3',
        email: 'marcelo4@gmail.com',
        password_hash: await hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {});
}
export function down() { }
