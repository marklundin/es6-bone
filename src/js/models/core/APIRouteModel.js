import Backbone from 'backbone';

const modelDefaults = {

    start         : "", // Eg: "{{ BASE_PATH }}/api/start"

    locale        : "", // Eg: "{{ BASE_PATH }}/api/l10n/{{ code }}"

    user          : {
        login      : "{{ BASE_PATH }}/api/user/login",
        register   : "{{ BASE_PATH }}/api/user/register",
        password   : "{{ BASE_PATH }}/api/user/password",
        update     : "{{ BASE_PATH }}/api/user/update",
        logout     : "{{ BASE_PATH }}/api/user/logout",
        remove     : "{{ BASE_PATH }}/api/user/remove"
    }
};

class APIRouteModel extends Backbone.Model {

    constructor() {
        super(modelDefaults);
    }

}

export default APIRouteModel;
