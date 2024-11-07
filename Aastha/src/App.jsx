// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Layout from './Layout'
// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vitejs.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App

// // export default function App() {
// //   return (
// //     <h1 className="text-3xl font-bold underline">
// //       Hello world!
// //     </h1>
// //   )
// // }
// // import React from 'react';
// // // Import the Layout component
// // import Layout from './Layout'; // Make sure the path is correct

// function App() {
//   return (
//     <div className="App">
//       {/* Render the layout */}
//       <Layout />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Layout from './Layout';
import { ThemeProvider } from './Components/Content/Context/Theme';

function App() {
  return (
    <ThemeProvider> {/* Wrap the app with ThemeProvider */}
      <div className="App">
        <Layout />
      </div>
    </ThemeProvider>
  );
}

export default App;
