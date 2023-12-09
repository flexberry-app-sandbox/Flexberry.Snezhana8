import {
  defineNamespace,
  defineProjections,
  Model as МенеджерMixin
} from '../mixins/regenerated/models/i-i-s-snezhana-8-менеджер';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(МенеджерMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
