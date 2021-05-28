import { connect } from 'react-redux';
import { compose } from 'redux';
import { Menu } from '../../components/Menu';
import { injectReducer } from '../../utils/injectReducer';
import { menuReducer } from './reducer';
import * as menuSelectors from './selectors';

const mapStateToProps = state => ({
  menu: menuSelectors.menuSelector(state)
});

const withConnect = connect(mapStateToProps);

const withReducer = injectReducer({ key: 'menu', reducer: menuReducer });

export const MenuContainer = compose(
  withReducer,
  withConnect
)(Menu);