import * as _ from 'lodash/string';

export function hello() {
  console.log(_.capitalize('__HELLO__ from a.js'));
}


export function goodbye() {
  console.log('__GOODBYE__ from a.js');
}