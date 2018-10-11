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
import SaleList from './SaleList';

const title = 'Admin | sells';

async function action({ params, fetch }) {
    // const resp = await fetch(`/api/posts/${params.id}`, { method: 'GET' });
    // const data = await resp.json();
    const data = {
        "orders": [
          {
            "claims_list": [
              "1023241276"
            ],
            "items_list": [
              {
                "link": "http://mla-s2-p.mlstatic.com/935609-MLA27944465519_082018-I.jpg",
                "title": "Item De Testeo, Por Favor No Ofertar --kc:off"
              }
            ]
          },
          {
            "claims_list": [
              "1023553186"
            ],
            "items_list": [
              {
                "link": "http://mla-s1-p.mlstatic.com/935609-MLA27944465519_082018-I.jpg",
                "title": "Item De Testeo, Por Favor No Ofertar --kc:off"
              }
            ]
          }
        ]
      };
    return {
        title: data.title,
        chunks: ['admin-sales'],
        component: (
            <Layout>
              <Page title={title}>
                <SaleList {...data}/>
              </Page>
            </Layout>
        ),
    };
}

export default action;
