/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import alsoNotMatterToo from './also-not-matter-too.md';

function action() {
  return {
    chunks: ['also-not-matter-too'],
    title: alsoNotMatterToo.title,
    component: (
      <Layout>
        <Page {...alsoNotMatterToo}>
          <img src="https://cdn.memegenerator.es/imagenes/memes/full/28/20/28204977.jpg" />
        </Page>
      </Layout>
    ),
  };
}

export default action;
