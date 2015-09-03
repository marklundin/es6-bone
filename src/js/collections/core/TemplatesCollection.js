import Backbone from 'backbone'

import TemplateModel from '../../models/core/TemplateModel';

class TemplatesCollection extends Backbone.Collection {

	model = TemplateModel

}

export default TemplatesCollection;
