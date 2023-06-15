import fs from 'fs';
import util from 'node:util';
import areaData from './source.js';
import HKMOTW from './HK-MO-TW.js';

function transformer(item) {
  const { code, name, children } = item;
  const fillLength = 6 - code.length;
  const value = (code + new Array(fillLength < 0 ? 0 : fillLength).fill('0').join('')) * 1;
  return children
    ? {
        label: name,
        value,
        children: children.map(transformer),
      }
    : {
        label: name,
        value,
      };
}

const data = areaData.map(transformer).concat(HKMOTW);

fs.writeFileSync(
  process.cwd() + '/packages/area-data/index.js',
  'export default ' + util.inspect(data, { depth: null })
);

const province_list = {};
const city_list = {};
const county_list = {};

data.forEach((item) => {
  province_list[item.value] = item.label;
  item.children.map((item) => {
    city_list[item.value] = item.label;
    item.children.map((item) => {
      county_list[item.value] = item.label;
    });
  });
});

const vantData = { province_list, city_list, county_list };

fs.writeFileSync(
  process.cwd() + '/packages/vant/index.js',
  'export default ' + util.inspect(vantData, { depth: null, maxArrayLength: null, showHidden: null })
);
