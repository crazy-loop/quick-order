import { combineReducers } from 'redux';

import auth from './reducers/auth';
import goods from './reducers/goods';
import customer from './reducers/customer';
import goodsGroups from './reducers/goods-groups';
import orders from './reducers/orders';
import currentContent from './reducers/current-content';
import cart from './reducers/cart';
import checkout from './reducers/checkout';
import prices from './reducers/prices';
import quickList from './reducers/quick-list';
import catalogQty from './reducers/catalog-qty';
import options from './reducers/options';
import users from './reducers/users';
import customers from './reducers/customers';
import firebaseConfig from './reducers/firebase-config';
import sortDirection from './reducers/sort-direction';
import filtersApplied from './reducers/filters-applied';
import current from './reducers/current';
import preventCleanGoodsRow from './reducers/prevent-clean-goods-row';
import ui from './reducers/ui';
import modal from './../lib/modal/reducers/modal';

export default function createReducer(indexes) {
  return combineReducers({
    firebaseConfig,
  	auth,
  	options,
  	goods,
  	customer,
  	goodsGroups,
  	orders,
  	modal,
  	currentContent,
  	cart,
  	checkout,
  	prices,
  	quickList,
  	catalogQty,
  	users,
  	customers,
  	sortDirection,
    filtersApplied,
    current,
    preventCleanGoodsRow,
    ui,
    ...indexes
  });
}
