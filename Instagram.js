'use strict';


MY_APP.factory('Instagram', ['$http',
	function($http) {
		var base = 'https://api.instagram.com/v1';
		var apiClientId = 'API_CLIENT_ID';
		var token = 'LOGGED_USER_ACCESS_TOKEN';
		
		return {
			'getUser': function() {
				var request = '/users/self?access_token=' + token;
				var url = base + request;
				var config = {
					'params': {
						'client_id': apiClientId,
						'callback': 'JSON_CALLBACK'
					}
				};
				return $http.jsonp(url, config);
			}
		};
	}
]);