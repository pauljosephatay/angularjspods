(function() {
  'use strict';

  angular
    .module('dynamicLayout')
    .directive('dynamicLayoutItem', dynamicLayoutItem);

  /* @ngInject */
  function dynamicLayoutItem($window, $animate) {
    return {
      restrict: 'A',
      require: '^dynamicLayout',
      link: link
    };

    function link(scope, element, attrs, ctrl) {

      var animation;

      scope.dimensions = {
        columnSpan: 0,
        width: 0,
        height: 0
      };
      scope.pos = {
        x: element[0].offsetLeft,
        y: element[0].offsetTop
      };
      scope.calculateDimensions = calculateDimensions;

      ctrl.subscribe(scope);

      scope.$watch('$index', function(newVal, oldVal) {
        if (newVal !== oldVal) {
          ctrl.layout();
        }
      });
      scope.$watchCollection('pos', function(newPos, oldPos) {
        position(newPos, oldPos);
      });

      // Cleanup
      scope.$on('$destroy', function() {
        ctrl.unsubscribe(scope);
      });

      function calculateDimensions() {
        var rect = element[0].getBoundingClientRect();
        var style = $window.getComputedStyle(element[0]);
        var width;
        var height;

        if (rect.width) {
          width = rect.width;
          height = rect.height;
        } else {
          width = rect.right - rect.left;
          height = rect.top - rect.bottom;
        }

        scope.dimensions.width = width + parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        scope.dimensions.height = height + parseFloat(style.marginTop) + parseFloat(style.marginBottom);
      }

      function position(newPos, oldPos) {
        if (animation) {
          $animate.cancel(animation);
        }
        animation = $animate.addClass(element, 'move-items-animation', {
          from: {
            position: 'absolute',
            left: oldPos.x + 'px',
            top: oldPos.y + 'px'
          },
          to: {
            left: newPos.x + 'px',
            top: newPos.y + 'px'
          }
        }).then(function() {
          element.removeClass('move-items-animation');
        });
      }

    }
  }

})();