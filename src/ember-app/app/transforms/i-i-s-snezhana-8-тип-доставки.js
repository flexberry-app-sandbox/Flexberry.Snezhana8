import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипДоставкиEnum from '../enums/i-i-s-snezhana-8-тип-доставки';

export default FlexberryEnum.extend({
  enum: ТипДоставкиEnum,
  sourceType: 'IIS.Snezhana_8.ТипДоставки'
});
