const button = $('.dropdown-button');
class Dropdown {
  constructor($element) {
    this.$element = $element;
    // Select button and content from the element
    this.button = $element.button;
    this.content = $element.html();
    // Add a click handler to the button
    this.dropdown = this.$element.find('.dropdown-button')
    this.$element.click(() => {
      this.toggleContent()
    });
  };

  toggleContent() {
    // Add/remove class to/from content
    this.$element.toggleClass('dropdown');
    console.log("kjskdvns");
  }
}

let $dropdown = $('.dropdown');
$dropdown = new Dropdown($dropdown);