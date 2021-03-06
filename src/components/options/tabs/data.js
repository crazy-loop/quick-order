import React from 'react';
import { connect } from 'react-redux';

import * as actionsOptionsFirebase from './../../../actions/options-firebase';
import Subheader            from 'material-ui/Subheader';
import Checkbox             from 'material-ui/Checkbox';
import Visibility           from 'material-ui/svg-icons/action/visibility';
import VisibilityOff        from 'material-ui/svg-icons/action/visibility';
import Search               from 'material-ui/svg-icons/action/search';
import SearchOff            from 'material-ui/svg-icons/action/search';
import Sort                 from 'material-ui/svg-icons/action/swap-vert';
import SortOff              from 'material-ui/svg-icons/action/swap-vert';


const OptionsData = props => {

  const {
    options,
    items,
    // goodsGroups, 
    //actions
    setCommonOptionCatalogListColumnsFirebase,
  } = props;

  // const goodsGroupsLength = Object.keys(goodsGroups);

  const getItemJsx = (item) => {
    const itemKeys = Object.keys(item);
    let i;
    i = itemKeys.indexOf('code');
    if (i > -1) {
      itemKeys.splice(i, 1);
    }
    i = itemKeys.indexOf('description');
    if (i > -1) {
      itemKeys.splice(i, 1);
    }
    i = itemKeys.indexOf('groupRef');
    if (i > -1) {
      itemKeys.splice(i, 1);
    }
    return itemKeys.map(key => {
      return (
        <div key={key} style={{display: 'flex'}}>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Checkbox
              style={{width: '60px', padding: '6px', border: '1px solid #eee', textAlign: 'center'}}
              checkedIcon={<Visibility />}
              uncheckedIcon={<VisibilityOff />}
              checked={options.catalogListColumns[key] ? options.catalogListColumns[key][0] : false }
              onCheck={
                (e, isInputChecked) => {
                  setCommonOptionCatalogListColumnsFirebase(key, 0, isInputChecked);
                }
              }
            />
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Checkbox
              style={{width: '60px', padding: '6px', border: '1px solid #eee', textAlign: 'center'}}
              checkedIcon={<Search />}
              uncheckedIcon={<SearchOff />}
              checked={options.catalogListColumns[key] ? options.catalogListColumns[key][1] : false }
              onCheck={
                (e, isInputChecked) => {
                  setCommonOptionCatalogListColumnsFirebase(key, 1, isInputChecked);
                }
              }
            />
          </div>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Checkbox
              style={{width: '60px', padding: '6px', border: '1px solid #eee', textAlign: 'center'}}
              checkedIcon={<Sort />}
              uncheckedIcon={<SortOff />}
              checked={options.catalogListColumns[key] ? options.catalogListColumns[key][2] : false }
              onCheck={
                (e, isInputChecked) => {
                  setCommonOptionCatalogListColumnsFirebase(key, 2, isInputChecked);
                }
              }
            />
          </div>
          <div style={{width: '150px', padding: '6px', border: '1px solid #eee'}}>{key}</div>
          <div style={{width: '350px', padding: '6px', border: '1px solid #eee', overflow: 'hidden', height: '38px'}}>{item[key]}</div>
          <div style={{width: '250px', padding: '6px', border: '1px solid #eee', overflow: 'hidden', height: '38px'}}>Ок</div>
        </div>
      );
    });
  };

  const getRequiredPropJsx = (item, propKey) => {
    let visible, search, sort;
    if (propKey === 'code') {
      visible = true;
      search = true;
      sort = true;
    }
    if (propKey === 'description') {
      visible = true;
      search = true;
      sort = true;
    }
    if (propKey === 'groupRef') {
      visible = false;
      search = false;
      sort = false;
    }
    return (
    <div key={propKey} style={{display: 'flex'}}>
        <div style={{display: 'flex', justifyContent: 'center', backgroundColor: '#eee'}}>
          <Checkbox
            style={{width: '60px', padding: '6px', border: '1px solid #eee', textAlign: 'center'}}
            checkedIcon={<Visibility />}
            uncheckedIcon={<VisibilityOff />}
            checked={visible}
            onCheck={
              (e) => {
                alert('Запрещено менять настройки стандартных колонок');
                e.preventDefault();
              }
            }
          />
        </div>
        <div style={{display: 'flex', justifyContent: 'center', backgroundColor: '#eee'}}>
          <Checkbox
            style={{width: '60px', padding: '6px', border: '1px solid #eee', textAlign: 'center'}}
            checkedIcon={<Search />}
            uncheckedIcon={<SearchOff />}
            checked={search}
            onCheck={
              (e) => {
                alert('Запрещено менять настройки стандартных колонок');
                e.preventDefault();
              }
            }
          />
        </div>
        <div style={{display: 'flex', justifyContent: 'center', backgroundColor: '#eee'}}>
          <Checkbox
            style={{width: '60px', padding: '6px', border: '1px solid #eee', textAlign: 'center'}}
            checkedIcon={<Sort />}
            uncheckedIcon={<SortOff />}
            checked={sort}
            onCheck={
              (e) => {
                alert('Запрещено менять настройки стандартных колонок');
                e.preventDefault();
              }
            }
          />
        </div>
        <div style={{width: '150px', padding: '6px', border: '1px solid #eee', backgroundColor: '#eee'}}>{propKey}</div>
        <div style={{width: '350px', padding: '6px', border: '1px solid #eee', overflow: 'hidden', height: '38px', backgroundColor: '#eee'}}>{item[propKey]}</div>
        <div style={{width: '250px', padding: '6px', border: '1px solid #eee', overflow: 'hidden', height: '38px', backgroundColor: '#eee'}}>{item[propKey] ? 'Ок' : 'Отсутствуют необходимые данные'}</div>
      </div>
    );
  };

  const getItemsJsx = () => {
    const itemsKeys = Object.keys(items);
    return itemsKeys.length > 0 &&
      <div style={{display: 'flex', flexDirection: 'column'}}>{getItemJsx(items[itemsKeys[0]])}</div>;
  };

  const getRequiredPropsJsx = () => {
    const requiredProps = ['code', 'description', 'groupRef'];
    const itemsKeys = Object.keys(items);
    return itemsKeys.length > 0 && (
      <div
        style={{display: 'flex', flexDirection: 'column'}}
        className='requredProps'
      >
        {
          requiredProps.map(
            key => {
              return getRequiredPropJsx(items[itemsKeys[0]], key);
            }
          )
        }
      </div>
    );
  };

  const getCategoryJsx = () => {

  }

  return (

    <div>

      <Subheader>
        Товары
      </Subheader>

      <div style={{marginTop: '10px'}}>
        {getRequiredPropsJsx()}
        {getItemsJsx()}
      </div>

      <Subheader>
        Категории
      </Subheader>

      <div style={{marginTop: '10px'}}>
        {getCategoryJsx()}
      </div>

      <Subheader>
        Цены
      </Subheader>

      <Subheader>
        Контрагенты
      </Subheader>

    </div>

  );
}

export default connect(
  state => ({ options: state.options, items: state.goods.itemsInitial, goodsGroups: state.goodsGroups }),
  actionsOptionsFirebase
)(OptionsData);
