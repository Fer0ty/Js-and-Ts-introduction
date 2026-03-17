function BaseComponent(tagName) {
  this.element = document.createElement(tagName || 'div');
}

BaseComponent.prototype.mount = function(parent) {
  parent.appendChild(this.element);
};

BaseComponent.prototype.unmount = function() {
  if (this.element.parentNode) {
    this.element.parentNode.removeChild(this.element);
  }
};

BaseComponent.prototype.update = function() {
};

export default BaseComponent;
