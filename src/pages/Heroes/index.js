import React, { useState, useEffect, memo } from 'react';
import PageLayout from 'components/PageLayout';
import { NavLink } from 'react-router-dom';
import { Table, Container } from 'react-bootstrap';
import { fetchHeroes } from './control';
import { baseImage, setHeroesDf } from '../../constants/url';

function Heroes() {
  // eslint-disable-next-line no-unused-vars
  const [heroes, setHeroes] = useState([]);
  useEffect(() => {
    fetchHeroes().then((result) => {
      setHeroes(result);
      setHeroesDf(result);
    });
  }, []);
  const renderHero = heroes.map((i, k) => (
    <tr key={i.id}>
      {/* eslint-disable-next-line no-param-reassign,no-plusplus */}
      <th scope="row">{ ++k }</th>
      <td>
        <NavLink to={`/heroes/${i.name}`}>
          <img src={baseImage + i.icon} alt="" title="" />
          {i.localized_name}
        </NavLink>
      </td>
      <td>{`${i.pro_pick} - ${i.pro_ban}`}</td>
      <td>{i.pro_win}</td>
    </tr>
  ));
  return (
    <PageLayout>
      <div />
      <span>HEROES</span>
      <div>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Container>
          <Table striped>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Hero</th>
                <th scope="col">Pick/Bans</th>
                <th scope="col">Win</th>
              </tr>
            </thead>
            <tbody>
              {
                renderHero
              }
            </tbody>
          </Table>
        </Container>
      </div>
    </PageLayout>
  );
}

export default memo(Heroes);
