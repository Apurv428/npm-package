import React from 'react';
import helloNpm from 'apurv_component'; // Assuming 'helloNpm' is exported from 'apurv_component'

function MyComponent() {
  return (
    <div>
<h1>Hi</h1>
      <h1>{helloNpm()}</h1>
    </div>
  );
}

export default MyComponent;