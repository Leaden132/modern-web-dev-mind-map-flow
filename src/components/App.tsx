import React, {useState} from 'react';
import ReactFlow from 'react-flow-renderer';
import '../styles/App.scss';
import Header from './Header';
import initialNodeData from '../nodedata/nodeData'



const App = () => {

  const [nodeData, setNodeData] = useState(initialNodeData);


  return (
    <>
    <Header/>
    <div className='screen' style={{ height: 'calc(100vh - 30px)', width:'95vw', margin: '0 auto' }}>
    {/* <ReactFlow elements={elements} /> */}
    <ReactFlow elements={nodeData} />
    </div>
    </>
  )
}

export default App;
