import React from 'react';
import { injectIntl } from 'react-intl';
import { Switch, Route } from 'react-router';
import { MenuContainer } from '../../containers/Menu';
import { MatchContainer } from '../../containers/Match';
import { StatisticsContainer } from '../../containers/Statistics';
import { PlayersContainer } from '../../containers/Players';

const ContentIntl = () => (
  <>
    <div className="content">
      <MenuContainer />
      <div className="info">
        <Switch>
          <Route exact path="/" component={MatchContainer} />
          <Route exact path="/estadisticas" component={StatisticsContainer} />
          <Route exact path="/jugadores" component={PlayersContainer} />
        </Switch>
      </div>
    </div>
  </>
);

export default injectIntl(ContentIntl);
