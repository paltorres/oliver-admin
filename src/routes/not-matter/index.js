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
import notMatter from './not-matter.md';

function action() {
  return {
    chunks: ['not-matter'],
    title: notMatter.title,
    component: (
      <Layout>
        <Page {...notMatter} />
      </Layout>
    ),
  };
}

export default action;
