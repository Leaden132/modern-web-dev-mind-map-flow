import React from 'react';
import ReactFlow, {
  Controls,
} from 'react-flow-renderer';
import '../styles/App.scss';
import Header from './Header';
import {initialArray} from '../nodedata/nodeData'



const App = () => {

  // const [nodeData, setNodeData] = useState(initialArray);

  const onLoad = (reactFlowInstance:any) => {
    console.log('flow loaded:', reactFlowInstance);
    reactFlowInstance.fitView();
  };


  return (
    <>
    <Header/>
    <div className='screen' style={{ height: 'calc(100vh - 60px)', width:'calc(100vw - 60px)', margin: '0 auto', backgroundColor: 'black', border: '5px solid rgb(136, 8, 241)'}}>
    {/* <ReactFlow elements={elements} /> */}
    <ReactFlow elements={initialArray} minZoom={0.15} nodesDraggable={false} elementsSelectable={false} onLoad={onLoad}>
      <Controls />
    </ReactFlow>

    </div>
    </>
  )
}

export default App;
