import React from "react";
import Scenes from "./CreateScene/Scenes";
import Graph from "./Map/Graph";
import { connect } from "react-redux";
import SceneDisplayBar from "./Navigation/SceneDisplayBar";

const App = props => {
  return (
    <div className="container">
      <h1 className="title is-1 main-title">Text adventure game maker</h1>
      <nav className="top-nav">
        <SceneDisplayBar />
      </nav>
      <div className="graph-container">
        {props.graph.ready && <Graph />}
      </div>
      <Scenes />
    </div>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);
