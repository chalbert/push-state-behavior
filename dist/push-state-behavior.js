(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['register-behavior'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('register-behavior'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.registerBehavior);
    global.pushStateBehavior = mod.exports;
  }
})(this, function (_registerBehavior) {
  'use strict';

  var _registerBehavior2 = _interopRequireDefault(_registerBehavior);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  (0, _registerBehavior2.default)('push-state', {
    prototype: {
      attachedCallback: function attachedCallback() {
        if (this.target.tagName.toLocaleLowerCase() !== 'a' && !this.target.hasAttribute('role')) {
          this.roleOverridden = true;
          this.target.setAttribute('role', 'link');
        }

        this.handleClick = this.handleClick.bind(this);
        this.target.addEventListener('click', this.handleClick);
      },
      detachedCallback: function detachedCallback() {
        this.target.removeEventListener('click', this.handleClick);

        // Remove the role as well, if it hasn't been changed afterwards.
        if (this.roleOverridden && this.target.getAttribute('role') === 'link') {
          this.target.removeAttribute('role');
        }
      },
      handleClick: function handleClick(event) {
        event.preventDefault();
        var state = null;
        var title = null;
        var url = this.target.getAttribute('href');
        history.pushState(state, title, url);
        window.dispatchEvent(new CustomEvent('pushstate'));
      }
    }
  });
});
