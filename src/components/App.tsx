import React, {useState} from 'react';
import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from 'react-flow-renderer';
import '../styles/App.scss';
import Header from './Header';
import initialNodeData from '../nodedata/nodeData'



const App = () => {

  const [nodeData, setNodeData] = useState(initialNodeData);
  const onLoad = (reactFlowInstance:any) => {
    console.log('flow loaded:', reactFlowInstance);
    reactFlowInstance.fitView();
  };


  return (
    <>
    <Header/>
    <div className='screen' style={{ height: 'calc(100vh - 30px)', width:'95vw', margin: '0 auto' }}>
    {/* <ReactFlow elements={elements} /> */}
    <ReactFlow elements={nodeData} minZoom={0.15} nodesDraggable={false} elementsSelectable={false} onLoad={onLoad}>
      <Controls />
    </ReactFlow>

    </div>
    </>
  )
}

export default App;
