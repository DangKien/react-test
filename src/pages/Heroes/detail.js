import React, {memo, useEffect, useState} from 'react';
import PageLayout from 'components/PageLayout';
import {Card, Col, Container, Image, Row,} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {baseImage, getHeroes, setHeroesDf} from '../../constants/url';
import {fetchHeroes} from './control';

const style = {
  card: {
    alignItems: 'center',
    display: 'flex',
    padding: '56px',
    position: 'relative',
  },
  image: {
    borderRadius: '16px',
    border: '1px solid rgba(0, 0, 0, 0.3)',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 12px 32px',
    display: 'block',
    flexShrink: '0',
    height: '128px',
    objectFit: 'cover',
    width: '180px',
  },
  info: {
    flex: '1 1 100%',
    margin: '0px 24px',
  },
  name: {
    fontSize: '19px',
    fontWeight: 500,
    lineHeight: '40px',
    textAlign: 'left',
  },
  description: {
    fontSize: '12px',
    letterSpacing: '1px',
    margin: '8px 0px',
    textTransform: 'uppercase',
    textAlign: 'left',
  },
  detail: {
    display: 'flex',
    marginTop: '15px',
  },
  collum: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 0px',
    marginTop: '10px',
    padding: '8px',
  },
  params: {
    background: 'rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'row',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    padding: '8px',
    textAlign: 'left',
  },
  title: {
    flexGrow: '1',
    fontSize: '12px',
    marginRight: '5px',
    textTransform: 'uppercase',
  },
};

function Hero() {
  // eslint-disable-next-line no-unused-vars
  const [hero, setHero] = useState([]);
  const { name = '' } = useParams();
  useEffect(() => {
    let heroes = getHeroes();
    // eslint-disable-next-line no-shadow
    let hero = {};
    if (heroes.length <= 0) {
      heroes = fetchHeroes().then((result) => {
        setHeroesDf(result);
        hero = result.find((item) => item.name === name);
        setHero(hero);
      });
    } else {
      hero = heroes.find((item) => item.name === name);
      setHero(hero);
    }
  }, []);
  const params = [
    {
      base_attack: {
        title: 'BASE ATTACK',
        value: [
          'base_attack_max', 'base_attack_min',
        ],
      },
      attack_range: {
        title: 'BASE Ranger',
        value: [
          'attack_range',
        ],
      },
      attack_speed: {
        title: 'attack speed',
        value: [
          'attack_speed',
        ],
      },
      projectile_speed: {
        title: 'projectile speed',
        value: [
          'projectile_speed',
        ],
      },
    },
    {
      base_health: {
        title: 'base health',
        value: [
          'base_health',
        ],
      },
      base_health_regen: {
        title: 'base health regen',
        value: [
          'base_health_regen',
        ],
      },
      base_mana: {
        title: 'base mana',
        value: [
          'base_mana',
        ],
      },
      base_mana_regen: {
        title: 'base mana regen',
        value: [
          'base_mana_regen',
        ],
      },
    },
    {
      base_armor: {
        title: 'base armor',
        value: [
          'base_armor',
        ],
      },
      magic_resistance: {
        title: 'magic resistance',
        value: [
          'magic_resistance',
        ],
      },
      move_speed: {
        title: 'move speed',
        value: [
          'move_speed',
        ],
      },
      turn_speed: {
        title: 'turn speed',
        value: [
          'turn_speed',
        ],
      },
    },
    {
      legs: {
        title: 'number of legs',
        value: [
          'legs',
        ],
      },
      cm_enabled: {
        title: 'cm enabled',
        value: [
          'cm_enabled',
        ],
      },
    },
  ];
  return (
    <PageLayout>
      <div className="mt-2">
        <Container>
          <Card>
            <Card.Body style={style.card}>
              <Image
                src={baseImage + hero.img}
                style={style.image}
              />
              <div style={style.info}>
                <div style={style.name}>
                  {hero.localized_name}
                </div>
                <div style={style.description}>
                  { hero.attack_type }
                  {' '}
                  -
                  {hero.roles && hero.roles.join(', ')}
                </div>
              </div>
            </Card.Body>
          </Card>
          <Row style={style.detail}>
            {
              params.map((item, key) => (
                // eslint-disable-next-line react/no-array-index-key
                <Col key={key}>
                  {
                    Object.values(item).map((i, k) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <div key={k} style={style.params}>
                        <span style={style.title}>
                          { i.title }
                        </span>
                        {/* eslint-disable-next-line no-mixed-operators */}
                        {
                          // eslint-disable-next-line no-mixed-operators
                          i.value.map((val) => {
                            if (val && hero[val]) {
                              return `${hero[val]}${i.value.length > 1 ? ' - ' : ''}`;
                            }
                            return '';
                          })
                        }
                      </div>
                    ))
                  }
                </Col>
              ))
            }
          </Row>
        </Container>
      </div>
    </PageLayout>
  );
}

export default memo(Hero);
