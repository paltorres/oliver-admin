/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../../../components/Layout';
import Page from '../../../../components/Page';

const title = 'Admin | claims';

async function action({ params, fetch }) {
  const data = {
    title: 'Reclamo n.º 1023241276',
    messages: [
      {
        subject: '',
        message: '5asaqqqqqqqqsas',
      },
      {
        subject: '',
        message: '5asasas',
      },
      {
        subject: '',
        message: 'prueba',
      },
      {
        subject: '',
        message: 'Buenas, como estas?Probaste cargarlo?',
      },
      {
        subject: '',
        message:
          'Buenas noches. El celular que me vendiste no enciende. Necesito cambiarlo.',
      },
    ],
    milestone: 'Reclamo cerrado',
    actions: ['send_message', 'opend_dispute'],
  };

  return {
    title,
    chunks: ['admin-claims'],
    component: (
      <Layout>
        <Page title={data.title}>
          <h2>{data.milestone}</h2>
        </Page>
      </Layout>
    ),
  };
}

export default action;
