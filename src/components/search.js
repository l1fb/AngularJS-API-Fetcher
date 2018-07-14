angular.module('api-fetcher')
  .controller('searchCtrl', function () {

  })
  .component('search', {
    template:
      `
    <div input-field>
      <input type="text" length="100"></input>
      <label>Search Jobs</label>
      
      <div>
        <button>Search</button>
      </div>
    </div>
    
    `
  })