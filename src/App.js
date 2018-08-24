import React, { Component } from 'react';
import Sidebar from '@features/Sidebar';
import Header from '@features/Header';
import ActivityList from '@features/Activity';

import styles from './styles/layout.scss';

import mockData from './mock-data.json';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className={styles.wrapper}>
          <Sidebar />
          <main className={styles.content}>
            <h3>Activity</h3>
            <p className="m-sm-b-40">See a record of everyone you have shared details with.</p>

            <ActivityList receipts={mockData.receipts} />
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
