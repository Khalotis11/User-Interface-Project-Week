// Step 3: Create TabLink class definition and pass in the link reference to the DOM element
class TabsLinks {
    constructor(tabItems){
        // console.log(tab)
        this.tabItems = tabItems;
         // Step 4: Match the data-set values between our link and the content data attribute from link.
        this.tabContent = document.querySelector(`.tabs-item[data-tab='${tabItems.dataset.tab}']`);
         // Step 5: Create a new content object from our matched data-set content tab
        this.tabContent = new Content(this.tabContent);
        // Step 8: Add event Listener for our link and pass in the implicit binding of the 'this' keyword using an arrow function
        tabItems.addEventListener('click', () => this.linkClick() );
    } 
    // methods
    // Step 10: Have the tabContent toggle off and on based on our Content class's method 
    linkClick() {
        this.tabContent.toggleContent();
      }    
 }
 // Step 6: Create Content class definition and pass in the tabContent reference to the DOM element
 class Content {
    constructor(tabElement) {
      console.log(tabElement);
      // Step 7: Properly set up the 'this' keyword for the Content class using our tabElement
      this.tabElement = tabElement;
    }
    // methods
    // Step 9: Create a method that can be called to toggle our tabElement off and on
    toggleContent() {
      this.tabElement.classList.toggle('col-12');
    }
  }
  
// Step 1: Get all the elements from the DOM into a NodeList
const tabs = document.querySelectorAll('.tabs-link');
// console.log(tabs);
// Step 2: Iterate over each element from our NodeList and create a new class called TabLink. 
tabs.forEach(tabItems => new TabsLinks(tabItems));
  