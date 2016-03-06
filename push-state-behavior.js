import registerBehavior from 'register-behavior';

registerBehavior('push-state', {
  prototype: {
    attachedCallback() {
      if (this.target.tagName.toLocaleLowerCase() !== 'a' && !this.target.hasAttribute('role')) {
        this.roleOverridden = true;
        this.target.setAttribute('role', 'link');
      }

      this.handleClick = this.handleClick.bind(this);
      this.target.addEventListener('click', this.handleClick);
    },

    detachedCallback() {
      this.target.removeEventListener('click', this.handleClick);

      // Remove the role as well, if it hasn't been changed afterwards.
      if (this.roleOverridden && this.target.getAttribute('role') === 'link') {
        this.target.removeAttribute('role');
      }
    },

    handleClick(event) {
      event.preventDefault();
      const state = null;
      const title = null;
      const url = this.target.getAttribute('href');
      history.pushState(state, title, url);
      window.dispatchEvent(new CustomEvent('pushstate'));
    }
  }
});
