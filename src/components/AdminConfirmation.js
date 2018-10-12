/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

class AdminConfirm extends React.Component {
  state = {
    isAdmin: false,
  };

  adminChecker = e => {
    const isAdmin = e.target.checked;

    this.setState({
      isAdmin,
    });
  };

  render() {
    return (
      <form>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="admin-check"
            onChange={this.adminChecker}
          />
          <label className="form-check-label" htmlFor="admin-check">
            Eres admin?
          </label>
        </div>
        {this.state.isAdmin && <a href="/admin/sales">Admin de ventas</a>}
      </form>
    );
  }
}

export default AdminConfirm;
