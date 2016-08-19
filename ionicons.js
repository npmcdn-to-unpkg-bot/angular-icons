(function () {
  'use strict';

  angular.module('angularIcons.ionicons', [])
    .provider('Ionicons', Ionicons)
    .directive('baIonicon', baIonicon)
  ;

  function Ionicons() {
    // default path
    var assetPath = 'assets/img/ionicons/';

    /**
     * Sets the path used to locate the iconic SVG files
     * @param {string} path - the base path used to locate the iconic SVG files
     */
    this.setAssetPath = function (path) {
      assetPath = angular.isString(path) ? path : assetPath;

      // make sure ends with /
      if (assetPath.charAt(assetPath.length - 1) !== '/') {
        assetPath += '/';
      }
    };

    /**
     * Service implementation
     * @returns {{}}
     */
    this.$get = function () {
      var service = {
        getAssetPath: getAssetPath
      };

      return service;

      /**
       *
       * @returns {string}
       */
      function getAssetPath() {
        return assetPath;
      }
    };
  }

  baIonicon.$inject = ['Ionicons'];

  function baIonicon(Ionicons) {
    var directive = {
      restrict: 'EA',
      replace: true,
      templateUrl: function(element, attrs) {
        return Ionicons.getAssetPath() + attrs.icon + ".svg";
      },
      scope: {
        icon: '@'
      },
      link: link
    };

    return directive;

    function link(scope, element) {
      element.addClass("ionicons");
    }
  }
})();