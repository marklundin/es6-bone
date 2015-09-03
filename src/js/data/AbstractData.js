import _ from 'underscore';
import Backbone from 'backbone';

class AbstractData {

	constructor() {

		_.extend(this, Backbone.Events);

	}

	__NAMESPACE__() {

		return window.__NAMESPACE__;

	}

}

export default AbstractData;
