/* eslint-disable max-len */
import React, { memo } from 'react';
import PageLayout from 'components/PageLayout';

function Home() {
  return (
    <PageLayout>
      <h1>Welcome to Assessments</h1>

      <h2>Your mission is build a DOTA2 heroes info website</h2>

      <br />
      <br />
      <ul style={{
        textAlign: 'left',
        lineHeight: '40px',
      }}
      >
        <li>Feel free to modify, completed or create new components, logics, packages ...etc</li>
        <li>
          When user click to Heroes page will navigate to
          {' '}
          <b>"/heroes"</b>
          {' '}
          and display heroes list fetched from API
        </li>
        <li>
          When user click to every single hero will navigate to
          {' '}
          <b>"heroes/:hero-name"</b>
          {' '}
          (dynamic url) and display hero detail info
        </li>
        <li>Using Redux to manage state is a advantage</li>
        <li>
          using API endpoint provided in
          {' '}
          <b>.env</b>
          {' '}
          file
        </li>
      </ul>
    </PageLayout>
  );
}

export default memo(Home);
